const baseUrl = 'http://api.housinginteractive.com.ph/api/'
// const baseUrl = 'http://api.laravel.test/api/'
const headers = {
    Accept: 'application/json',
    'Content-Type': 'application/json',
    //Authorization: 'Bearer 4|urISlJJjvgtJ8ovkxQLDUPkujiAOuvDCE3teQJ2u' // Local
    Authorization: 'Bearer 6|pGpJOLEugVA24Bw2YAlg7mhz2jxCWZipDkxErDkp' //website
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
