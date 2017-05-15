Build with `-target html5`

Fix for menu not displaying contributed by the fantastic [StarfallProjects](https://github.com/StarfallProjects)
NB: Apparently, Flare creates the elements for the Menu Proxy in the DOM so the `if` statement in `custom-mc-hamburger.js` runs, and only loads them _into_ the DOM after 100ms or so.