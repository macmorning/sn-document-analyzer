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
        (function() {
            var logLevel = gs.getProperty('x_12167_analyzer.photo_analysis.log_level', 'info');
            var LOG_LEVELS = { debug: 0, info: 1, warn: 2, error: 3 };
            var currentLevel = LOG_LEVELS[logLevel] || LOG_LEVELS.info;
            
            function log(level, message) {
                var msgLevel = LOG_LEVELS[level] || LOG_LEVELS.info;
                if (msgLevel >= currentLevel) {
                    var prefix = '[PhotoAnalysisTest][' + level.toUpperCase() + '] ';
                    switch(level) {
                        case 'error': gs.error(prefix + message); break;
                        case 'warn': gs.warn(prefix + message); break;
                        default: gs.info(prefix + message); break;
                    }
                }
            }
            
            // Get the current record
            var testCaseSysId = current.getValue('sys_id');
            var testName = current.getValue('test_name');
            
            log('info', 'Starting analysis for test case: ' + testName);
            
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
            
            log('debug', 'Querying attachments for test case: ' + testCaseSysId);
            
            // Process each attachment
            while (attachmentGR.next()) {
                attachmentCount++;
                var attachmentSysId = attachmentGR.getValue('sys_id');
                var fileName = attachmentGR.getValue('file_name');
                
                try {
                    log('info', 'Analyzing attachment: ' + fileName + ' (ID: ' + attachmentSysId + ')');
                    
                    // Create and use the photo analysis engine
                    var PhotoAnalysisEngine = sn_scoped_cache.ScopedCacheManager.get('x_12167_analyzer.PhotoAnalysisEngine');
                    if (!PhotoAnalysisEngine) {
                        PhotoAnalysisEngine = new global.x_12167_analyzer.PhotoAnalysisEngine();
                    }
                    
                    log('debug', 'Calling analyzePhoto for: ' + fileName);
                    var result = PhotoAnalysisEngine.analyzePhoto(attachmentSysId);
                    
                    if (result && result.success) {
                        successCount++;
                        var riskLevel = result.results ? result.results.riskLevel : 'analyzed';
                        analysisResults.push('✓ ' + fileName + ' - Risk: ' + riskLevel);
                        log('info', 'Analysis successful for ' + fileName + ' - Risk: ' + riskLevel);
                    } else {
                        errorCount++;
                        var errorMsg = result && result.error ? result.error : 'Analysis failed';
                        analysisResults.push('✗ ' + fileName + ' - ' + errorMsg);
                        log('error', 'Analysis failed for ' + fileName + ': ' + errorMsg);
                    }
                } catch (error) {
                    errorCount++;
                    var errMsg = error.message || error.toString();
                    analysisResults.push('✗ ' + fileName + ' - Error: ' + errMsg);
                    log('error', 'Exception analyzing ' + fileName + ': ' + errMsg);
                }
            }
            
            log('info', 'Analysis complete. Total: ' + attachmentCount + ', Success: ' + successCount + ', Errors: ' + errorCount);
            
            // Update test case with results
            var testGR = new GlideRecord('x_12167_analyzer_photo_test_cases');
            if (testGR.get(testCaseSysId)) {
                testGR.setValue('attachments_processed', attachmentCount);
                testGR.setValue('analysis_completed', attachmentCount > 0 && errorCount < attachmentCount);
                
                if (attachmentCount == 0) {
                    testGR.setValue('test_status', 'failed');
                    testGR.setValue('analysis_findings', 'No attachments found to analyze');
                    testGR.setValue('test_result', 'fail');
                    log('warn', 'No attachments found for test case');
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
        })();
    `
})