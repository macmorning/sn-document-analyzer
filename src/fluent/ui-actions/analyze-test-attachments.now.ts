import '@servicenow/sdk/global'
import { UiAction } from '@servicenow/sdk/core'

// UI Action to run photo analysis on attachments for test cases
export const analyzeTestAttachmentsAction = UiAction({
    $id: Now.ID['analyze_test_attachments'],
    table: 'x_12167_analyzer_photo_test_cases',
    name: 'Analyze Attachments',
    actionName: 'analyze_attachments',
    active: true,
    hint: 'Run photo analysis on all attachments for this test case',
    showUpdate: true,
    showInsert: false,
    form: {
        showButton: true,
        style: 'primary'
    },
    condition: `current.test_status != 'completed' && current.test_status != 'running'`,
    roles: ['x_12167_analyzer.photo_investigator'],
    script: `
        // Get the current record
        var testCaseSysId = current.getValue('sys_id');
        var testName = current.getValue('test_name');
        
        // Update status to running
        current.setValue('test_status', 'running');
        current.setValue('test_run_on', new GlideDateTime());
        current.update();
        
        // Find all attachments for this record
        var attachmentGR = new GlideRecord('sys_attachment');
        attachmentGR.addQuery('table_name', 'x_12167_analyzer_photo_test_cases');
        attachmentGR.addQuery('table_sys_id', testCaseSysId);
        attachmentGR.query();
        
        var analysisResults = [];
        var attachmentCount = 0;
        var successCount = 0;
        var errorCount = 0;
        
        // Process each attachment
        while (attachmentGR.next()) {
            attachmentCount++;
            var attachmentSysId = attachmentGR.getValue('sys_id');
            var fileName = attachmentGR.getValue('file_name');
            
            try {
                gs.info('Analyzing attachment: ' + fileName + ' (ID: ' + attachmentSysId + ')');
                
                // Create and use the photo analysis engine
                var engine = new x_12167_analyzer.PhotoAnalysisEngine();
                var result = engine.analyzePhoto(attachmentSysId);
                
                if (result && result.success) {
                    successCount++;
                    var riskLevel = result.results ? result.results.riskLevel : 'analyzed';
                    analysisResults.push('✓ ' + fileName + ' - Risk: ' + riskLevel);
                } else {
                    errorCount++;
                    var errorMsg = result && result.error ? result.error : 'Analysis failed';
                    analysisResults.push('✗ ' + fileName + ' - ' + errorMsg);
                }
            } catch (error) {
                errorCount++;
                analysisResults.push('✗ ' + fileName + ' - Error: ' + error.message);
                gs.error('Error analyzing attachment ' + fileName + ': ' + error.message);
            }
        }
        
        // Update test case with results
        var testGR = new GlideRecord('x_12167_analyzer_photo_test_cases');
        if (testGR.get(testCaseSysId)) {
            testGR.setValue('attachments_processed', attachmentCount);
            testGR.setValue('analysis_completed', attachmentCount > 0 && errorCount < attachmentCount);
            
            if (attachmentCount == 0) {
                testGR.setValue('test_status', 'failed');
                testGR.setValue('analysis_findings', 'No attachments found to analyze');
                testGR.setValue('test_result', 'fail');
            } else if (errorCount > 0 && successCount == 0) {
                testGR.setValue('test_status', 'failed');
                testGR.setValue('test_result', 'fail');
            } else {
                testGR.setValue('test_status', 'completed');
                testGR.setValue('test_result', successCount > 0 ? 'pass' : 'fail');
            }
            
            testGR.setValue('analysis_findings', analysisResults.join('\\n'));
            testGR.update();
        }
        
        // Show results to user
        if (attachmentCount == 0) {
            gs.addErrorMessage('No attachments found. Please attach photos or PDFs to test.');
        } else {
            gs.addInfoMessage('Analysis complete! Processed: ' + attachmentCount + ', Success: ' + successCount + ', Errors: ' + errorCount);
        }
        
        // Refresh the form to show updated results
        action.setRedirectURL(current);
    `
})