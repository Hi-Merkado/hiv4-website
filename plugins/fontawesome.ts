import { library, config } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faUser, faCalendar, faBed, faMagnifyingGlass, faEarthAsia, faArrowRight, faPesoSign, faChevronDown, faHouse, faUserTie, faLocationDot, faPhone, faEnvelope, faChevronRight } from '@fortawesome/free-solid-svg-icons'
import { faFacebookF, faInstagram, faLinkedin, faTiktok, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons'

config.autoAddCss = false
library.add(
    faArrowRight, 
    faCalendar,
    faChevronDown,
    faChevronRight,
    faEarthAsia,
    faBed,
    faEnvelope, 
    faFacebookF,
    faHouse, 
    faInstagram,
    faLinkedin,
    faLocationDot, 
    faMagnifyingGlass, 
    faPesoSign, 
    faPhone,
    faUserTie, 
    faUser, 
    faTiktok,
    faTwitter,
    faYoutube
)

export default defineNuxtPlugin((nuxtApp) => {
    nuxtApp.vueApp.component('font-awesome-icon', FontAwesomeIcon)
})