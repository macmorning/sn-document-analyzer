import '@servicenow/sdk/global'
import { FormSection } from '@servicenow/sdk/core'

// Form section for Photo Test Cases to display analysis findings
export const photoTestCasesSection = FormSection({
    $id: Now.ID['photo_test_cases_section'],
    table: 'x_12167_analyzer_photo_test_cases',
    caption: 'Analysis Results',
    fields: [
        'test_status',
        'test_result',
        'attachments_processed',
        'analysis_completed',
        'test_run_on',
        'analysis_findings'
    ]
})
