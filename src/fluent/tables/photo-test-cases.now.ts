import '@servicenow/sdk/global'
import { 
    BooleanColumn, 
    DateTimeColumn,
    StringColumn, 
    Table,
    IntegerColumn
} from '@servicenow/sdk/core'

// Simplified table for testing photo analysis functionality with direct attachments
export const x_12167_analyzer_photo_test_cases = Table({
    name: 'x_12167_analyzer_photo_test_cases',
    label: 'Photo Analysis Test Cases',
    schema: {
        // Basic test information
        test_name: StringColumn({
            label: 'Test Case Name',
            maxLength: 255,
            mandatory: true
        }),
        
        description: StringColumn({
            label: 'Description',
            maxLength: 1000
        }),
        
        // Test execution status
        test_status: StringColumn({
            label: 'Test Status',
            choices: {
                new: { label: 'New', sequence: 0 },
                ready_to_run: { label: 'Ready to Run', sequence: 1 },
                running: { label: 'Running Analysis', sequence: 2 },
                completed: { label: 'Completed', sequence: 3 },
                failed: { label: 'Failed', sequence: 4 }
            },
            defaultValue: 'new'
        }),
        
        // Expected results for validation
        expected_risk_level: StringColumn({
            label: 'Expected Risk Level',
            choices: {
                low: { label: 'Low Risk', sequence: 0 },
                medium: { label: 'Medium Risk', sequence: 1 },
                high: { label: 'High Risk', sequence: 2 },
                critical: { label: 'Critical Risk', sequence: 3 }
            }
        }),
        
        expected_fraud_indicators: StringColumn({
            label: 'Expected Fraud Indicators',
            maxLength: 500
        }),
        
        // Analysis results (populated after analysis runs)
        analysis_completed: BooleanColumn({
            label: 'Analysis Completed',
            defaultValue: false
        }),
        
        actual_risk_level: StringColumn({
            label: 'Actual Risk Level',
            choices: {
                low: { label: 'Low Risk', sequence: 0 },
                medium: { label: 'Medium Risk', sequence: 1 },
                high: { label: 'High Risk', sequence: 2 },
                critical: { label: 'Critical Risk', sequence: 3 }
            }
        }),
        
        confidence_score: IntegerColumn({
            label: 'Confidence Score',
            minValue: 0,
            maxValue: 100
        }),
        
        // Test validation
        test_result: StringColumn({
            label: 'Test Result',
            choices: {
                pass: { label: 'Pass', sequence: 0 },
                fail: { label: 'Fail', sequence: 1 },
                pending: { label: 'Pending', sequence: 2 }
            },
            defaultValue: 'pending'
        }),
        
        // Timestamps
        test_run_on: DateTimeColumn({
            label: 'Test Run On'
        }),
        
        // Results and notes
        analysis_findings: StringColumn({
            label: 'Analysis Findings',
            maxLength: 4000
        }),
        
        test_notes: StringColumn({
            label: 'Test Notes',
            maxLength: 2000
        }),
        
        // Count of attachments processed
        attachments_processed: IntegerColumn({
            label: 'Attachments Processed',
            defaultValue: 0
        })
    }
})