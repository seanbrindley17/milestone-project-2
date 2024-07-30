# Testing

Return to the [README.md](README.md).

## Code Validation

### HTML

I used the [W3C HTML Validator](https://validator.w3.org/nu/) to validate the my index.html file in this project.

| Page | W3C URL | Screenshot | Notes |
| :---: | :---: | :---: | :---: |
| index.html | [W3C](https://validator.w3.org/nu/?doc=https%3A%2F%2Fseanbrindley17.github.io%2Fmilestone-project-2%2F) | ![screenshot of initial errors](/readme%20documentations/screenshots/html%20validator%20screenshots/initial%20validation%20with%20errors.png) | Intial errors upon first validation. Mainly errors of putting block elements inside spans. |
| index.html | [W3C](https://validator.w3.org/nu/?doc=https%3A%2F%2Fseanbrindley17.github.io%2Fmilestone-project-2%2F#textarea) | ![screenshot of document checked with no errors or warnings](/readme%20documentations/screenshots/html%20validator%20screenshots/fixed%20html%20validation%20errors.png) | Fixed by removing invalid elements within other elements, along with one instance of not closing a button tag correctly. |


### CSS

I used the [W3C CSS Validator]() to validate my CSS style sheet for this project.

| File | Screenshot | Notes |
| :---: | :---: | :---: |
| style.css | ![screenshot of initial validation with errors](/readme%20documentations/screenshots/css%20validator%20screenshots/css%20validation%20with%20intial%20errors.png) | Errors arising from me using background-color: none while tinkering and not removing these before validating. |
| style.css | ![screenshot of css validation success](/readme%20documentations/screenshots/css%20validator%20screenshots/css%20validation%20success.png) | Fixed by going through and removing the offending attributes. |

### Javascript 

I used the [JSHint validator](https://jshint.com/) to validate my Javascript code for this project.

| File | Screenshot | Notes |
| :---: | :---: | :---: |
| script.js | ![screenshot of initial es6 errors](/readme%20documentations/screenshots/js%20validator%20screenshots/first%20validation%20with%20es6%20errors.png) | Warnings for not declaring usage of es6 stuff like const. |
| script.js | ![screenshot of jshint esversion: 6](/readme%20documentations/screenshots/js%20validator%20screenshots/fix%20of%20es6%20error.png) | Fixed by declaring use of es6 syntax to jshint. |
| script.js | ![screenshot of eight warnings](/readme%20documentations/screenshots/js%20validator%20screenshots/unnecessary%20semicolon%20warnings.png) | Warnings mainly for unnecessary semi-colons, but also for a couple of things I don't understand. |
| script.js | ![screenshot of no unecessary semicolon warning](/readme%20documentations/screenshots/js%20validator%20screenshots/no%20unnecessary%20semicolon%20warning.png) | Fixed by going through and removing semi colons where not needed. |
| script.js | ![screenshot showing the remaining non semi colon warnings](/readme%20documentations/screenshots/js%20validator%20screenshots/further%20warnings%20after%20fixing%20semi%20colons.png) | Warnings for some syntax-based stuff. |
| script.js | ![screenshot of setTimeout within playerClick with a paraamter](/readme%20documentations/screenshots/js%20validator%20screenshots/settimeout%20with%20no%20parameters%20fixed.png) | Fixed by firstly adding a 200ms parameter, then removed entirely due to not needing it. |
| script.js | ![screenshot of confusing warning in cardEventListeners](/readme%20documentations/screenshots/js%20validator%20screenshots/cardEventListeners%20warning%20.png) | Warning for some syntax that I really don't understand. The code still works. |
| script.js | ![screenshot of undefined variable](/readme%20documentations/screenshots/js%20validator%20screenshots/undefined%20variable%20jquery.png) | One undefined variable, which is the JQuery selector that was used for one function. |
| script.js | ![screenshot of supposed unused variables](/readme%20documentations/screenshots/js%20validator%20screenshots/unused%20variables.png) | Supposedly unused variables even though they are used and all are important and working. | 
