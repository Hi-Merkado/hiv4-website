import { library, config } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faUser, faCalendar, faBed, faBath, faBuilding, faMagnifyingGlass, faEarthAsia, faArrowRight, faPesoSign, faChevronDown, faHouse, faUserTie, faLocationDot, faPhone, faEnvelope, faChevronRight, faSquareParking, faCheck, faArrowUp, faArrowDown, faStar } from '@fortawesome/free-solid-svg-icons'
import { faFacebookF, faInstagram, faLinkedin, faTiktok, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons'

config.autoAddCss = false
library.add(
    faArrowRight, 
    faCalendar,
    faChevronDown,
    faChevronRight,
    faEarthAsia,
    faBed,
    faBath,
    faBuilding,
    faCheck,
    faArrowUp,
    faArrowDown,
    faEnvelope, 
    faFacebookF,
    faHouse, 
    faInstagram,
    faLinkedin,
    faLocationDot, 
    faMagnifyingGlass, 
    faSquareParking,
    faPesoSign, 
    faPhone,
    faUserTie, 
    faUser, 
    faTiktok,
    faTwitter,
    faYoutube,
    faStar
)

export default defineNuxtPlugin((nuxtApp) => {
    nuxtApp.vueApp.component('font-awesome-icon', FontAwesomeIcon)
})