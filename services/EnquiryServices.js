export default {
    _store(data) {   
        const runtimeConfig = useRuntimeConfig(); 
        const baseUrl =  `${runtimeConfig.public.apiBase}/api/`;
        const headers = {
            Accept: 'application/json',
            'Content-Type': 'application/json',
            Authorization: `Bearer ${runtimeConfig.public.bearerToken}` // Local            
        }
        return useFetch( baseUrl + 'inquiries', {
            method: 'POST',
            headers: headers,
            body : data
        } )
        
    }
}