const baseUrl = 'https://maps.googleapis.com/maps/api/geocode/json?key=AIzaSyAmir0rmN6jiEFgvCKrUGjyvKAWqG-Anhw'

export default {
    _getCoordinates(loc){
        return useFetch( baseUrl + '&address=' + `${loc}`)
    },

    _getNearby(){
        return useFetch( 'https://maps.googleapis.com/maps/api/place/nearbysearch/json&location=14.559473707055538,121.01779302939416&radius=400&type=restaurant')
    }
}