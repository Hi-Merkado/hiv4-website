const baseUrl = 'http://api.housinginteractive.com.ph/api/'
// const baseUrl = 'http://api.laravel.test/api/'
const headers = {
    Accept: 'application/json',
    'Content-Type': 'application/json',
    //Authorization: 'Bearer 4|urISlJJjvgtJ8ovkxQLDUPkujiAOuvDCE3teQJ2u' // Local
    Authorization: 'Bearer 4|xGskwbaKxUi05a4xr8JAIx6ReP1bHQ3OCGVSw0iG' //website
}

export default {
    methods: {

        _store(data) {    
            
            return useFetch( baseUrl + '/api/inquiries', {
                method: 'POST',
                headers: headers,
                body : data
            } )
            
        },

    }
}