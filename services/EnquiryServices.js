const baseUrl = 'https://api.housinginteractive.com.ph/'
const headers = {
    Accept: 'application/json',
    'Content-Type': 'application/json',
    Authorization: 'Bearer 8|6ohfzWsOAXFbS6VFMfagZWb1OA1CiJg42ciDKVaX'
}

export default {
    _store(data) {    
        return useFetch( baseUrl + 'inquiries', {
            method: 'POST',
            headers: headers,
            body : data
        } )
        
    }
}
