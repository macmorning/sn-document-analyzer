/*import '@servicenow/sdk/global'
import { Acl } from '@servicenow/sdk/core'
import { x_12167_analyzer_photo_analysis_results } from '../tables/photo-analysis-results.now'

// Read access to photo analysis results for analysts
export const readAcl = Acl({
    $id: Now.ID['acl0'],
    name: 'x_12167_analyzer_photo_analysis_results.read',
    type: 'record',
    table: x_12167_analyzer_photo_analysis_results,
    operation: 'read',
    script: Now.include('../../server/acl-scripts/photo-analyst-read.js'),
    active: true
})

// Write access to photo analysis results for investigators 
export const writeAcl = Acl({
    $id: Now.ID['acl1'],
    name: 'x_12167_analyzer_photo_analysis_results.write',
    type: 'record',
    table: x_12167_analyzer_photo_analysis_results,
    operation: 'write',
    script: Now.include('../../server/acl-scripts/photo-investigator-write.js'),
    active: true
})

// Create access to photo analysis results for investigators
export const createAcl = Acl({
    $id: Now.ID['acl2'], 
    name: 'x_12167_analyzer_photo_analysis_results.create',
    type: 'record',
    table: x_12167_analyzer_photo_analysis_results,
    operation: 'create',
    script: Now.include('../../server/acl-scripts/photo-investigator-create.js'),
    active: true
})

// Delete access restricted to administrators only
export const deleteAcl = Acl({
    $id: Now.ID['acl3'],
    name: 'x_12167_analyzer_photo_analysis_results.delete',
    type: 'record',
    table: x_12167_analyzer_photo_analysis_results,
    operation: 'delete',
    script: Now.include('../../server/acl-scripts/photo-admin-delete.js'),
    active: true
})
*/