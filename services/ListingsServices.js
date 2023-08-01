const baseUrl = 'http://api.housinginteractive.com.ph/api/'
//const baseUrl = 'http://api.laravel.test/api/'
const headers = {
    Accept: 'application/json',
    'Content-Type': 'application/json',
    //Authorization: 'Bearer 4|urISlJJjvgtJ8ovkxQLDUPkujiAOuvDCE3teQJ2u' // Local
    Authorization: 'Bearer 6|pGpJOLEugVA24Bw2YAlg7mhz2jxCWZipDkxErDkp' //website
}

export default {
    _getListing(id){
        return useFetch( baseUrl + 'website/properties/' + `${id}`, {
            method: 'GET',
            headers: headers
        } )
    },

    _getListings(params = ''){
        console.log(baseUrl + 'website/properties' + `${params}`)
        return useFetch( baseUrl + 'website/properties' + `${params}`, {
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

    _getListingImages(id){
        return useFetch( baseUrl + 'website/properties/' + `${id}` + '/images', {
            method: 'GET',
            headers: headers
        } )
    },

    _getSitemap(){
        return useFetch( baseUrl + 'website/sitemap/', {
            method: 'GET',
            headers: headers
        } )
    },

    _getDivisionTypes(id){
        return useFetch( baseUrl + 'website/divisions/'+`${id}`+ '/types', {
            method: 'GET',
            headers: headers
        })
    },

    buildQueryParams(parameters) {
        let params = [];
        for (const [key, value] of Object.entries(parameters)) {
            if (value !== null && key !== 'triggered') {
                params.push(`${key}=${value}`);
            }
        }
        return '?' + params.join('&');
    }
}
