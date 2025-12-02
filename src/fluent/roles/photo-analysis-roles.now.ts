import '@servicenow/sdk/global'
import { Property } from '@servicenow/sdk/core'

// Maximum file size for analysis (in MB)
export const maxFileSizeProperty = Property({
    $id: Now.ID['max_file_size_prop'],
    name: 'x_12167_analyzer.photo_analysis.max_file_size_mb',
    type: 'integer',
    value: 50,
    description: 'Maximum file size in MB for photo analysis processing'
})

// Auto-analysis enabled flag
export const autoAnalysisProperty = Property({
    $id: Now.ID['auto_analysis_prop'],
    name: 'x_12167_analyzer.photo_analysis.auto_analysis_enabled',
    type: 'boolean',
    value: true,
    description: 'Enable automatic photo analysis when attachments are added to HR cases'
})

// Analysis confidence threshold
export const confidenceThresholdProperty = Property({
    $id: Now.ID['confidence_threshold_prop'],
    name: 'x_12167_analyzer.photo_analysis.confidence_threshold',
    type: 'integer',
    value: 75,
    description: 'Minimum confidence score (0-100) required for high-confidence fraud detection'
})

// Supported image formats
export const supportedFormatsProperty = Property({
    $id: Now.ID['supported_formats_prop'],
    name: 'x_12167_analyzer.photo_analysis.supported_formats',
    type: 'string',
    value: 'jpg,jpeg,png,gif,bmp,tiff,webp,pdf',
    description: 'Comma-separated list of supported file formats for analysis'
})

// Analysis timeout in seconds
export const analysisTimeoutProperty = Property({
    $id: Now.ID['analysis_timeout_prop'],
    name: 'x_12167_analyzer.photo_analysis.timeout_seconds',
    type: 'integer',
    value: 300,
    description: 'Maximum time in seconds allowed for photo analysis processing'
})

// Enable PDF processing
export const pdfProcessingProperty = Property({
    $id: Now.ID['pdf_processing_prop'],
    name: 'x_12167_analyzer.photo_analysis.pdf_processing_enabled',
    type: 'boolean',
    value: true,
    description: 'Enable analysis of embedded images within PDF files'
})

// Risk level escalation threshold
export const riskEscalationProperty = Property({
    $id: Now.ID['risk_escalation_prop'],
    name: 'x_12167_analyzer.photo_analysis.risk_escalation_level',
    type: 'choicelist',
    value: 'high',
    description: 'Risk level that triggers automatic escalation to security team',
    choices: ['medium', 'high', 'critical']
})

// Debug logging level
export const debugLevelProperty = Property({
    $id: Now.ID['debug_level_prop'],
    name: 'x_12167_analyzer.photo_analysis.debug_level',
    type: 'choicelist',
    value: 'info',
    description: 'Logging level for photo analysis debugging',
    choices: ['error', 'warn', 'info', 'debug']
})