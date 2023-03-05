const baseUrl = 'http://api.laravel.test/api/'
const headers = {
    Accept: 'application/json',
    'Content-Type': 'application/json',
    Authorization: 'Bearer 4|urISlJJjvgtJ8ovkxQLDUPkujiAOuvDCE3teQJ2u'
}

export default {
    _getListings(params = ''){
        return useFetch( baseUrl + 'website' + `${params}`, {
            method: 'GET',
            headers: headers
        } )
    },

    _getSuggestions(params = ''){
        return useFetch( baseUrl + 'websiteSuggestions' + `${params}`, {
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