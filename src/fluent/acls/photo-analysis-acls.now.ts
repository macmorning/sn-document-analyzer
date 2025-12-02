//import '@servicenow/sdk/global'
//import { Acl } from '@servicenow/sdk/core'
/*
// Read access to photo analysis results for analysts
Acl({
    $id: Now.ID['acl0'],
    name: 'x_12167_analyzer_photo_analysis_results.read',
    table: 'x_12167_analyzer_photo_analysis_results',
    operation: 'read',
    type: 'record',
    script: Now.include('../../server/acl-scripts/photo-analyst-read.js'),
    active: true
})

// Write access to photo analysis results for investigators 
Acl({
    $id: Now.ID['acl1'],
    name: 'x_12167_analyzer_photo_analysis_results.write',
    table: 'x_12167_analyzer_photo_analysis_results',
    operation: 'write',
    type: 'record',
    script: Now.include('../../server/acl-scripts/photo-investigator-write.js'),
    active: true
})

// Create access to photo analysis results for investigators
Acl({
    $id: Now.ID['acl2'], 
    name: 'x_12167_analyzer_photo_analysis_results.create',
    table: 'x_12167_analyzer_photo_analysis_results',
    operation: 'create',
    type: 'record',
    script: Now.include('../../server/acl-scripts/photo-investigator-create.js'),
    active: true
})

// Delete access restricted to administrators only
Acl({
    $id: Now.ID['acl3'],
    name: 'x_12167_analyzer_photo_analysis_results.delete',
    table: 'x_12167_analyzer_photo_analysis_results', 
    operation: 'delete',
    type: 'record',
    script: Now.include('../../server/acl-scripts/photo-admin-delete.js'),
    active: true
})*/