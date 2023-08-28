const baseUrl = 'https://api.housinginteractive.com.ph/api/'
const headers = {
    Accept: 'application/json',
    'Content-Type': 'application/json',
    Authorization: 'Bearer 8|6ohfzWsOAXFbS6VFMfagZWb1OA1CiJg42ciDKVaX'
}

export default {
    _getSitemap(){
        return useFetch( baseUrl + 'sitemap', {
            method: 'GET',
            headers: headers
        } )
    },

}
