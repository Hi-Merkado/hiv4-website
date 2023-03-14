const baseUrl = 'http://api.housinginteractive.com.ph/api/'
const headers = {
    Accept: 'application/json',
    'Content-Type': 'application/json',
    Authorization: 'Bearer 2|higter1Njiay60kVW5OcZBI1sGAR0a4AZomSHZik'
}

export default {
    _getListing(id){
        return useFetch( baseUrl + 'website/' + `${id}`, {
            method: 'GET',
            headers: headers
        } )
    },

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

    _getListingImages(id){
        return useFetch( baseUrl + 'website/' + `${id}` + '/images', {
            method: 'GET',
            headers: headers
        } )
    },

    _getSitemap(){
        return useFetch( baseUrl + 'sitemap/', {
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
