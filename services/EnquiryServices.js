const baseUrl = 'http://api.housinginteractive.local:8000/'
const headers = {
    Accept: 'application/json',
    'Content-Type': 'application/json',
    // Authorization: 'Bearer 2|higter1Njiay60kVW5OcZBI1sGAR0a4AZomSHZik'
    Authorization: 'Bearer 2|btWgHYc1T9MS9x0o6wYhVSfMljXjWfd4tbiAucfA'
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