import '@servicenow/sdk/global'
import { ScriptInclude } from '@servicenow/sdk/core'

// Main entry point for photo analysis - takes attachment sys_id
export const PhotoAnalysisEngine = ScriptInclude({
    $id: Now.ID['PhotoAnalysisEngine'],
    name: 'PhotoAnalysisEngine',
    script: Now.include('../../server/photo-analyzer.js'),
    description: 'Photo analysis engine for detecting anomalies and fraud in HR case attachments',
    clientCallable: false,
    active: true
})