const baseUrl = 'http://api.laravel.test/api/'
const headers = {
    Accept: 'application/json',
    'Content-Type': 'application/json',
    Authorization: 'Bearer 7|dyKUPz6VsxRUAz6hOOYtKAnbh0tEolcl9fXotr9k'
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
