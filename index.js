const plugin = require('tailwindcss/plugin');

module.exports = plugin( 
    function({e, addUtilities, theme}) {
    
        const measures = theme('measures', {});
        
        const utilities = Object.entries(measures).map( ([modifier, value]) => {
            
            const selector = ( modifier === 'DEFAULT' ? '.measure' : `.measure-${e(modifier)}` )

            return {
               [`${selector}`]: {
                    'max-width': `${value}`, 
               },
            }
        })

        addUtilities(utilities);
    },
    {
        theme: {
            measures: {
                'xs': '22ch', 
                'sm': '32ch',
                'DEFAULT': '65ch', 
                'lg': '80ch',
            }
        },
        variants: {
            measures: ['responsive']
        }
    }
);
