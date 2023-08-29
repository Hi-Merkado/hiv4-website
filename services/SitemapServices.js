// const baseUrl = 'http://api.laravel.test/api/'
// const headers = {
//     Accept: 'application/json',
//     'Content-Type': 'application/json',
//     Authorization: 'Bearer 7|dyKUPz6VsxRUAz6hOOYtKAnbh0tEolcl9fXotr9k'
// }

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
