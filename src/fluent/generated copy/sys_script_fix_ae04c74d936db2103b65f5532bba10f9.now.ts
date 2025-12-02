import { Record } from '@servicenow/sdk/core'

Record({
    $id: Now.ID['ae04c74d936db2103b65f5532bba10f9'],
    table: 'sys_script_fix',
    data: {
        before: 'false',
        name: 'Test Photo',
        record_for_rollback: 'true',
        script: `// Call from any server-side script:
var engine = new PhotoAnalysisEngine();
var result = engine.analyzePhoto('03e1edf5432e021039cc824d2ab8f284');`,
        unloadable: 'false',
    },
})
