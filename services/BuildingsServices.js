const baseUrl = 'http://api.housinginteractive.com.ph/api/'
//const baseUrl = 'http://api.laravel.test/api/'
const headers = {
    Accept: 'application/json',
    'Content-Type': 'application/json',
    //Authorization: 'Bearer 4|urISlJJjvgtJ8ovkxQLDUPkujiAOuvDCE3teQJ2u' // Local
    Authorization: 'Bearer 6|pGpJOLEugVA24Bw2YAlg7mhz2jxCWZipDkxErDkp' //website
}

export default {
    _getBuilding(id){
        console.log(baseUrl + 'website/buildings/' + `${id}`)
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
