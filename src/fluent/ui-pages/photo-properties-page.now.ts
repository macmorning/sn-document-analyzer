import '@servicenow/sdk/global'
import { UiPage } from '@servicenow/sdk/core'
import propertiesPage from '../../client/properties.html'

export const photoPropertiesPage = UiPage({
    $id: Now.ID['photo_properties_page'],
    endpoint: 'x_12167_analyzer_photo_properties.do',
    description: 'System Properties configuration page for Photo Analysis application',
    category: 'general',
    html: propertiesPage,
    direct: true
})