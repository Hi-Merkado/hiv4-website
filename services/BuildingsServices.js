// const baseUrl = 'http://api.housinginteractive.com.ph/api/'
const baseUrl = 'http://api.laravel.test/api/'
const headers = {
    Accept: 'application/json',
    'Content-Type': 'application/json',
    Authorization: 'Bearer 5|ZeLetv0qjQ4S31UxlObPjbkelaQa9VRBisvf0f4U' // Local
    // Authorization: 'Bearer 4|xGskwbaKxUi05a4xr8JAIx6ReP1bHQ3OCGVSw0iG' //website
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