import '@servicenow/sdk/global'
import { ApplicationMenu, Record } from '@servicenow/sdk/core'

// Create application category for menu styling
export const photoAnalysisCategory = Record({
    $id: Now.ID['photo_analysis_category'],
    table: 'sys_app_category',
    data: {
        name: 'x_12167_analyzer_photo_analysis',
        style: 'border-color: #4CAF50; background-color: #e8f5e8;'
    }
})

// Main application menu
export const photoAnalysisMenu = ApplicationMenu({
    $id: Now.ID['photo_analysis_menu'],
    title: 'Document Analysis & Fraud Detection',
    hint: 'Analyze photos and PDFs for anomalies and fraud detection in HR cases',
    description: 'Document analysis application for detecting fraudulent documents and images',
    category: photoAnalysisCategory,
    roles: ['x_12167_analyzer.photo_analyst'],
    active: true,
    order: 100
})