// const baseUrl = 'http://api.housinginteractive.com.ph/api/'
const baseUrl = 'http://api.laravel.test/sanctum/csrf-cookie'
// const headers = {
//     Accept: 'application/json',
//     'Content-Type': 'application/json',
//     Authorization: 'Bearer 5|ZeLetv0qjQ4S31UxlObPjbkelaQa9VRBisvf0f4U' // Local
//     // Authorization: 'Bearer 4|xGskwbaKxUi05a4xr8JAIx6ReP1bHQ3OCGVSw0iG' //website
// }

export default {
    _initToken(){
        return useFetch( baseUrl, {
            method: 'GET',
            credeentials: 'include'
        } )
    }
}