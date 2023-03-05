import defaultTheme from 'tailwindcss/defaultTheme'

export default {
    theme: {
        extend: {
            colors: {
                blue: {
                    default: '#2f80ed'
                },
                green: {
                    default: '#6fcf97'
                },
                gray: {
                    default: '#9eabbe',
                    '850': '#F8FAFF'
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
