const baseUrl = 'https://api.housinginteractive.com.ph/api/'
//const baseUrl = 'http://api.laravel.test/api/'
const headers = {
    Accept: 'application/json',
    'Content-Type': 'application/json',
    //Authorization: 'Bearer 5|ZeLetv0qjQ4S31UxlObPjbkelaQa9VRBisvf0f4U' // Local
    Authorization: 'Bearer 7|xiMlQN3vT9SM1gIK2OAUPPmjcgDLlf35d7bwouol' //website
}

export default {
    _getListing(id){
        console.log(baseUrl + 'website/properties/' + `${id}`)
        return useFetch( baseUrl + 'website/properties/' + `${id}`, {
            method: 'GET',
            headers: headers
        } )
    },

    _getListings(params = ''){
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

    _recordVisit(id){
        return useFetch( baseUrl + 'website/properties/'+`${id}`+'/visits',{
            method: 'POST',
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
