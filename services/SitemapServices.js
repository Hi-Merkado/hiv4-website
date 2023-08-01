const baseUrl = 'http://api.housinginteractive.com.ph/api/'
//const baseUrl = 'http://api.laravel.test/api/'
const headers = {
    Accept: 'application/json',
    'Content-Type': 'application/json',
    //Authorization: 'Bearer 5|ZeLetv0qjQ4S31UxlObPjbkelaQa9VRBisvf0f4U' // Local
    Authorization: 'Bearer 6|pGpJOLEugVA24Bw2YAlg7mhz2jxCWZipDkxErDkp' //website
}

export default {
    _getSitemap(){
        return useFetch( baseUrl + 'sitemap', {
            method: 'GET',
            headers: headers
        } )
    },

}
