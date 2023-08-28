const baseUrl = 'https://api.housinginteractive.com.ph/api/'
const headers = {
    Accept: 'application/json',
    'Content-Type': 'application/json',
    Authorization: 'Bearer 8|6ohfzWsOAXFbS6VFMfagZWb1OA1CiJg42ciDKVaX'
}
export default {
    _getBuilding(id){
        return useFetch( baseUrl + 'website/buildings/' + `${id}`, {
            method: 'GET',
            headers: headers
        } )
    },

    _getBuildings(params = ''){
        return useFetch( baseUrl + 'website/buildings' + `${params}`, {
            method: 'GET',
            headers: headers
        } )
    },

    buildQueryParams(parameters) {
        let params = [];
        for (const [key, value] of Object.entries(parameters)) {
            if (value !== null) {
                params.push(`${key}=${value}`);
            }
        }
        return '?' + params.join('&');
    }
}
