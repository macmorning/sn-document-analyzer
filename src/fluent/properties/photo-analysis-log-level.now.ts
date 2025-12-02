import '@servicenow/sdk/global'
import { Property } from '@servicenow/sdk/core'

// System property to control log level for photo analysis
export const photoAnalysisLogLevel = Property({
    $id: Now.ID['photo_analysis_log_level'],
    name: 'x_12167_analyzer.photo_analysis.log_level',
    type: 'choicelist',
    value: 'info',
    description: 'Log level for photo analysis engine (debug, info, warn, error)',
    choices: ['debug', 'info', 'warn', 'error']
})
