#Tailwind Measure
A small TailwindCSS plugin to add character-based max-width utilities for
limiting line-length.

## Installation
`npm install --save-dev cwsdigital/tailwind-measure`

## Getting Started
Require the plugin in your `tailwind.config.js` in the plugins section.
```
module.exports = {
  theme: {
  ...
  },
  plugins: [
    require('tailwind-measure')
  ]
}
```

Out of the box the plugin will generate the following utility classes.
```
.measure-xs {
    max-width: 22ch;
}
.measure-sm {
    max-width: 32ch;
}
.measure {
    max-width: 65ch;
}
.measure-lg {
    max-width: 80ch;
}
```

The responsive variant is also enabled by default for these utilities too.  


## Configuration
The class modifiers and values can be configured in the standard tailwind way,
uner the `measures` key in either the `theme` or `extend` keys within your
tailwind config file:

The below config would add a `.measure-xl` utility to the default utilities.

```
theme: {
    ...
    extend: {
        measures: {
            xl: '100ch'
        },
        ...
    },
}
```

And the below snippet would replace the default utilities entrirely:
```
theme: {
    measures: {
        'short': '25ch',
        'medium': '50ch',
        'long': '75ch', 
    }
}
```
You can use a key name of `DEFAULT` to generate a bare utility of `.measure`
with no modifier.

## License
Distributed under the MIT License. See `LICENSE` for more information.





