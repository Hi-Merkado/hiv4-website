const baseUrl = 'https://api.housinginteractive.com.ph/api/'
//const baseUrl = 'http://api.laravel.test/api/'
const headers = {
    Accept: 'application/json',
    'Content-Type': 'application/json',
    //Authorization: 'Bearer 6|sOcfGRPy6YPB0wOAlCFYH6F9qAIITpsMVWXtOig3' // Local
    Authorization: 'Bearer 7|xiMlQN3vT9SM1gIK2OAUPPmjcgDLlf35d7bwouol' //website
}

export default {
    _getSitemap(){
        return useFetch( baseUrl + 'sitemap', {
            method: 'GET',
            headers: headers
        } )
    },

}