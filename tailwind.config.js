import defaultTheme from 'tailwindcss/defaultTheme'

export default {
    theme: {
        extend: {
            backgroundImage: {
                'hero-pattern': "url('/assets/images/city.jpg')"
            },
            colors: {
                blue: {
                    default: '#2f80ed',
                    'light': '#eaf2fd'
                },
                green: {
                    default: '#6fcf97',
                    'light': '#DCFCE7'
                },
                gray: {
                    default: '#9eabbe',
                    '75': '#f2f2f2',
                    '650': '#5d627b',
                    '850': '#F8FAFF',
                    '950': '#808080',
                    '1000': '#333333'

                },
            },
            fontFamily: {
                'sans': [
                    'ui-sans-serif', 'system-ui', '-apple-system', 'BlinkMacSystemFont', '"Segoe UI"',
                    '"Helvetica Neue"', 'Arial', 'sans-serif',
                ],
                circularxx: ['"CircularXX TT"']
            }
        }
    }
}
