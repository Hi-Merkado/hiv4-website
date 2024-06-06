const baseUrl = 'https://api.housinginteractive.com.ph/api/'
const headers = {
    Accept: 'application/json',
    'Content-Type': 'application/json',
    Authorization: 'Bearer 8|6ohfzWsOAXFbS6VFMfagZWb1OA1CiJg42ciDKVaX'
}

export default {
    _getListing(id){
        
        return useFetch( baseUrl + 'properties/properties/' + `${id}`, {
            method: 'GET',
            headers: headers
        } )
    },

    async _getListings(params = ''){
            // console.log("check getListings new", params);
            // const testp = "?division=1&category=rent&priceMin=0&priceParam=pps&bedrooms=1&city_name=manila&area_name=las-piñas&building_name=amaia-steps-alabang&page=1&order=desc&orderBy=updated_at&featured=0";
            // try {
            //     const data = await useFetch(baseUrl + 'public/properties' + `${testp}`, {
            //         method: 'GET',
            //         headers: headers
            //     });
                
            //     // const data = await response.json();  // Assuming the response needs to be converted to JSON
            //     console.log("Fetched data:", data);
            //     return data;
                
            // } catch (error) {
            //     console.error("Error fetching listings:", error);
            // }

            console.log("check urll", baseUrl + 'public/properties' + `${params}`)
        return useFetch( baseUrl + 'public/properties' + `${params}`, {
                method: 'GET',
                headers: headers
            } )

    },

    _getSuggestions(params = ''){
        return useFetch( baseUrl + 'public/websiteSuggestions' + `${params}`, {
            method: 'GET',
            headers: headers
        } )
    },

    _getListingImages(id){
        return useFetch( baseUrl + 'public/properties/' + `${id}` + '/images', {
            method: 'GET',
            headers: headers
        } )
    },

    _getSitemap(){
        console.log("calling actual")
        return useFetch( baseUrl + 'sitemap/', {
            method: 'GET',
            headers: headers
        } )
    },
    _testRoute(){
        console.log("calling _testRoute")
        return useFetch( baseUrl + 'sitemap/', {
            method: 'GET',
            headers: headers
        } )
    },

    _getDivisionTypes(id){
        return useFetch( baseUrl + 'divisions/'+`${id}`+ '/types', {
            method: 'GET',
            headers: headers
        })
    },

    _recordVisit(id){
        return useFetch( baseUrl + 'properties/properties/'+`${id}`+'/visits',{
            method: 'POST',
            headers: headers
        })
    },

    buildQueryParams(parameters) {
        let params = [];
        for (const [key, value] of Object.entries(parameters)) {
            if (value !== null && key !== 'triggered') {
                params.push(`${key}=${value}`);
            }
        }
        return '?' + params.join('&');
    }
}
