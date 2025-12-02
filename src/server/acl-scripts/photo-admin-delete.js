import { gs } from '@servicenow/glide'

export default function() {
    return gs.hasRole('x_12167_analyzer.photo_admin')
}