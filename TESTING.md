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
| script.js | ![screenshot of supposed unused variables](/readme%20documentations/screenshots/js%20validator%20screenshots/unused%20variables.png) | These are variables used within my HTML code. | 

## Browser Compatibility

I tested my site with these browsers to check for any compatibility issues.

| Browser | Home Page | Modal | Game Area | Game Over Page | Notes |
| :---: | :---: | :---: | :---: | :---: | :---: |
| Chrome | ![screenshot of home page on chrome](/readme%20documentations/screenshots/browser%20compatibility%20screenshots/chrome/chrome%20home%20page.png) | ![screenshot of modal on chrome](/readme%20documentations/screenshots/browser%20compatibility%20screenshots/chrome/chrome%20modal.png) | ![screenshot of game area on chrome](/readme%20documentations/screenshots/browser%20compatibility%20screenshots/chrome/chrome%20game%20page.png) | ![screenshot of game over page on chrome](/readme%20documentations/screenshots/browser%20compatibility%20screenshots/chrome/chrome%20gameover.png) | All work as intended. |
| Edge | ![screenshot of home page on edge](/readme%20documentations/screenshots/browser%20compatibility%20screenshots/edge/edge%20home%20page.png) | ![screenshot of modal on edge](/readme%20documentations/screenshots/browser%20compatibility%20screenshots/edge/edge%20modal.png) | ![screenshot of game area on edge](/readme%20documentations/screenshots/browser%20compatibility%20screenshots/edge/edge%20game%20area.png) | ![screenshot of game over screen on edge](/readme%20documentations/screenshots/browser%20compatibility%20screenshots/edge/edge%20gameover.png) | Modal close box slightly overlaps footer |
| Firefox | ![screenshot of home page on firefox](/readme%20documentations/screenshots/browser%20compatibility%20screenshots/firefox/firefox%20home%20page.png) | ![screenshot of modal on firefox](/readme%20documentations/screenshots/browser%20compatibility%20screenshots/firefox/firefox%20modal.png) | ![screenshot of gane area on firefox](/readme%20documentations/screenshots/browser%20compatibility%20screenshots/firefox/firefox%20game%20area.png) | ![screenshot of game over on firefox](/readme%20documentations/screenshots/browser%20compatibility%20screenshots/firefox/firefox%20game%20over.png) | All work as intended. |
| Opera | ![screenshot of home page on opera](/readme%20documentations/screenshots/browser%20compatibility%20screenshots/opera/opera%20home%20page.png) | ![screenshot of modal on opera](/readme%20documentations/screenshots/browser%20compatibility%20screenshots/opera/opera%20modal.png) | ![screemshot of game area on opera](/readme%20documentations/screenshots/browser%20compatibility%20screenshots/opera/opera%20game%20area.png) | ![screenshot of game over on opera](/readme%20documentations/screenshots/browser%20compatibility%20screenshots/opera/opera%20game%20over.png) | All work as intended. |

## Responsiveness 

I tested my site on multple devices using either my own devices or chrome dev tools to simulate the device.

| Device | Home Page | Modal | Game Page | Game Over Page | Notes |
| :---: | :---: | :---: | :---: | :---: | :---: |
| Acer Aspire Laptop | ![screenshot of home page on chrome](/readme%20documentations/screenshots/browser%20compatibility%20screenshots/chrome/chrome%20home%20page.png) | ![screenshot of modal on chrome](/readme%20documentations/screenshots/browser%20compatibility%20screenshots/chrome/chrome%20modal.png) | ![screenshot of game area on chrome](/readme%20documentations/screenshots/browser%20compatibility%20screenshots/chrome/chrome%20game%20page.png) | ![screenshot of game over page on chrome](/readme%20documentations/screenshots/browser%20compatibility%20screenshots/chrome/chrome%20gameover.png) | Tested on Chrome. |
| Samsung Galaxy S10 Lite | ![screenshot of home page on galaxy s10](/readme%20documentations/screenshots/responsiveness%20screenshots/galaxy%20home%20page%20kiwi.jpg) | ![screenshot of modal on galaxy s10](/readme%20documentations/screenshots/responsiveness%20screenshots/galaxy%20modal%20kiwi.jpg) | ![screenshot of game area on galaxy s10](/readme%20documentations/screenshots/responsiveness%20screenshots/galaxy%20game%20area%20kiwi.jpg) | ![screenshot of game over on galaxy s10](/readme%20documentations/screenshots/responsiveness%20screenshots/galaxy%20game%20over%20kiwi.jpg) | Tested on Kiwi browser. |
| Tablet (Devtools - iPad Mini) | ![screenshot of home page on ipad mini](/readme%20documentations/screenshots/responsiveness%20screenshots/devtools%20ipad%20mini/ipad%20mini%20home%20page.png) | ![screenshot of modal on ipad mini](/readme%20documentations/screenshots/responsiveness%20screenshots/devtools%20ipad%20mini/ipad%20mini%20modal.png) | ![screenshot of game area on ipad mini](/readme%20documentations/screenshots/responsiveness%20screenshots/devtools%20ipad%20mini/ipad%20mini%20game%20area.png) | ![screenshot of game over page on ipad mini](/readme%20documentations/screenshots/responsiveness%20screenshots/devtools%20ipad%20mini/ipad%20mini%20game%20over.png) | Simulated using Chrome Devtools. |

## Accessibility 

I used the web accessibility evaluation tool [WAVE](https://wave.webaim.org/) to test my project for accessibility issues.

| Page | Summary | Details | Contrast | Notes |
| :---: | :---: | :---: | :---: | :---: |
| Main | ![screenshot of wave summary](/readme%20documentations/screenshots/wave%20accessibility/wave%20summary.png) | ![screenshot of wave details](/readme%20documentations/screenshots/wave%20accessibility/initial%20report.png) | ![screenshot of wave contrast fail](/readme%20documentations/screenshots/wave%20accessibility/wave%20contrast%20fail.png) | Contrast fail on the footer despite it being very easily readable. Potentially caused by the github icon.  

## Lighthouse Audit

| Page | Desktop | Mobile | Notes |
| :---: | :---: | :---: | :---: |
| Main | ![screenshot of desktop lighthouse audit](/readme%20documentations/screenshots/lighthouse/desktop%20lighthouse.png) | ![screenshot of mobile lighthouse audit](/readme%20documentations/screenshots/lighthouse/mobile%20lighthouse.png) | Good result all around. |

## User Story Testing 

| User Story | Screenshot |
| :---: | :---: |

## Defensive Programming 

| Page | Expectation | Test | Result | Fix | Screenshot |
| :---: | :---: | :---: | :---: | :---: | :---: |

## Bugs/Issues

My biggest issue was respoinsiveness during the resizing of the largest screen size. When trying to adjust media queries for the larger screen sizes, I found that I couldn't get it to display well on both my laptop screen and my large screen despite the screen resolution being exactly the same. I chose to focus on my laptop for the large screen size as more people would be using a laptop than a large screen but to this point I have no idea what to do about this issue. 

![screenshot of game area as displayed on my laptop](/readme%20documentations/screenshots/bugs%20and%20issues%20screenshots/laptop%20game%20area%20display.png)

![screenshot of game area as displayed on large screen](/readme%20documentations/screenshots/bugs%20and%20issues%20screenshots/large%20screen%20game%20area%20display.png)

--- 

Return to the [README.md](README.md).