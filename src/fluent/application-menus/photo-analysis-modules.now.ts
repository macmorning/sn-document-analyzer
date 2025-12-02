import '@servicenow/sdk/global'
import { Record } from '@servicenow/sdk/core'
import { photoAnalysisMenu } from './photo-analysis-menu.now.ts'

// Analysis Results List Module
export const analysisResultsModule = Record({
    $id: Now.ID['analysis_results_module'],
    table: 'sys_app_module',
    data: {
        title: 'Analysis Results',
        application: photoAnalysisMenu.$id,
        link_type: 'LIST',
        name: 'x_12167_analyzer_photo_analysis_results',
        hint: 'View all photo analysis results from HR cases',
        active: true,
        order: 100
    }
})

// Testing Section Separator
export const testingSeparator = Record({
    $id: Now.ID['testing_separator'],
    table: 'sys_app_module',
    data: {
        title: 'Testing & Configuration',
        application: photoAnalysisMenu.$id,
        link_type: 'SEPARATOR',
        active: true,
        order: 200
    }
})

// Photo Analysis Test Form Module
export const testFormModule = Record({
    $id: Now.ID['test_form_module'],
    table: 'sys_app_module',
    data: {
        title: 'Test Photo Analysis',
        application: photoAnalysisMenu.$id,
        link_type: 'LIST',
        name: 'x_12167_analyzer_photo_test_cases',
        hint: 'Test photo analysis functionality with attachment uploads',
        active: true,
        order: 210
    }
})

// System Properties UI Page Module
export const propertiesModule = Record({
    $id: Now.ID['properties_module'],
    table: 'sys_app_module',
    data: {
        title: 'System Properties',
        application: photoAnalysisMenu.$id,
        link_type: 'DIRECT',
        query: 'x_12167_analyzer_photo_properties.do',
        hint: 'Configure photo analysis system settings',
        active: true,
        order: 220
    }
})

// Administration Section Separator
export const adminSeparator = Record({
    $id: Now.ID['admin_separator'],
    table: 'sys_app_module',
    data: {
        title: 'Administration',
        application: photoAnalysisMenu.$id,
        link_type: 'SEPARATOR',
        active: true,
        order: 300
    }
})

// Roles Management Module
export const rolesModule = Record({
    $id: Now.ID['roles_module'],
    table: 'sys_app_module',
    data: {
        title: 'Photo Analysis Roles',
        application: photoAnalysisMenu.$id,
        link_type: 'LIST',
        name: 'sys_user_role',
        filter: 'nameLIKEx_12167_analyzer.photo',
        hint: 'Manage photo analysis user roles and permissions',
        active: true,
        order: 310
    }
})