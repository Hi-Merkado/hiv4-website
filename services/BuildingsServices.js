const baseUrl = 'http://api.housinginteractive.local:8000/'
const headers = {
    Accept: 'application/json',
    'Content-Type': 'application/json',
    Authorization: 'Bearer 2|btWgHYc1T9MS9x0o6wYhVSfMljXjWfd4tbiAucfA'
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