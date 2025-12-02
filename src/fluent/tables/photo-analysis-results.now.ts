import '@servicenow/sdk/global'
import { 
    BooleanColumn, 
    DateTimeColumn, 
    IntegerColumn, 
    ReferenceColumn, 
    StringColumn, 
    Table
} from '@servicenow/sdk/core'

// Table to store photo analysis results from HR case attachments
export const x_12167_analyzer_photo_analysis_results = Table({
    name: 'x_12167_analyzer_photo_analysis_results',
    label: 'Photo Analysis Results',
    schema: {
        // Reference to the original attachment
        attachment: ReferenceColumn({
            label: 'Attachment',
            reference: 'sys_attachment',
            mandatory: true
        }),
        
        // Reference to the HR case
        hr_case: ReferenceColumn({
            label: 'HR Case',
            reference: 'sn_hr_core_case'
        }),
        
        // Analysis status
        analysis_status: StringColumn({
            label: 'Analysis Status',
            choices: {
                pending: { label: 'Pending Analysis', sequence: 0 },
                in_progress: { label: 'Analysis In Progress', sequence: 1 },
                completed: { label: 'Analysis Completed', sequence: 2 },
                failed: { label: 'Analysis Failed', sequence: 3 },
                error: { label: 'Analysis Error', sequence: 4 }
            },
            defaultValue: 'pending'
        }),
        
        // Overall fraud risk assessment
        fraud_risk_level: StringColumn({
            label: 'Fraud Risk Level',
            choices: {
                low: { label: 'Low Risk', sequence: 0 },
                medium: { label: 'Medium Risk', sequence: 1 },
                high: { label: 'High Risk', sequence: 2 },
                critical: { label: 'Critical Risk', sequence: 3 }
            }
        }),
        
        // Confidence score (0-100)
        confidence_score: IntegerColumn({
            label: 'Confidence Score',
            minValue: 0,
            maxValue: 100
        }),
        
        // Analysis findings
        metadata_anomalies_found: BooleanColumn({
            label: 'Metadata Anomalies Found',
            defaultValue: false
        }),
        
        pixelation_anomalies_found: BooleanColumn({
            label: 'Pixelation Anomalies Found',
            defaultValue: false
        }),
        
        compression_artifacts_found: BooleanColumn({
            label: 'Compression Artifacts Found',
            defaultValue: false
        }),
        
        timestamp_inconsistencies: BooleanColumn({
            label: 'Timestamp Inconsistencies',
            defaultValue: false
        }),
        
        // Detailed findings - using StringColumn with larger maxLength
        metadata_analysis_details: StringColumn({
            label: 'Metadata Analysis Details',
            maxLength: 4000
        }),
        
        pixelation_analysis_details: StringColumn({
            label: 'Pixelation Analysis Details',
            maxLength: 4000
        }),
        
        technical_findings: StringColumn({
            label: 'Technical Findings',
            maxLength: 4000
        }),
        
        recommended_action: StringColumn({
            label: 'Recommended Action',
            choices: {
                no_action: { label: 'No Action Required', sequence: 0 },
                review: { label: 'Manual Review Recommended', sequence: 1 },
                investigate: { label: 'Further Investigation Required', sequence: 2 },
                escalate: { label: 'Escalate to Security Team', sequence: 3 }
            }
        }),
        
        // Processing timestamps
        analysis_started: DateTimeColumn({
            label: 'Analysis Started'
        }),
        
        analysis_completed: DateTimeColumn({
            label: 'Analysis Completed'
        }),
        
        // File information
        file_name: StringColumn({
            label: 'File Name',
            maxLength: 255
        }),
        
        file_size_bytes: IntegerColumn({
            label: 'File Size (Bytes)'
        }),
        
        image_dimensions: StringColumn({
            label: 'Image Dimensions',
            maxLength: 50
        }),
        
        // Error handling
        error_message: StringColumn({
            label: 'Error Message',
            maxLength: 4000
        })
    }
})