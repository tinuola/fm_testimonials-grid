# Frontend Mentor: Testimonials Grid

Solution to the _[Testimonials Grid](https://www.frontendmentor.io/challenges/testimonials-grid-section-Nnw6J7Un7)_ challenge on Frontend Mentor.

### Challenge

- Build out a testimonials grid section using the provided desktop and mobile designs
- Users should be able to:
  - View the optimal layout for the site depending on their device's screen size

### Solution

Live Sites:
- React App: [https://tt-fm-testimonials-grid.netlify.app/](https://tt-fm-testimonials-grid.netlify.app/)
- HTML-CSS: [https://tinuola.github.io/fm_testimonials-grid/](https://tinuola.github.io/fm_testimonials-grid/)

### Retrospective

- Completed the initial challenge with HTML & CSS ( _Branch: 01_html-css_ )
- Realized the card-based/component-like layout could work for a simple React practice (_Branch: 02_react_)
  - Stored the original markup content into a _json_ file to pull as data

- Ran into errors deploying the React version to Github Pages. Discovered that deploy script was looking for a `build` directory that didn't exist since Vite was bundling production files to a `dist` directory. A Dev.to article (linked in _Resources_) helped with a slight update needed in the Vite config file and the deployment commands.

### To deploy to Github Pages

```
$ npm run build
$ git add dist -f
$ git commit -m "Adding dist"
$ git subtree push --prefix dist origin gh-pages
```

### Potential Enhancement(s)

- ~~Card-based layout for a simple React app practice~~
- Option to select and switch color palettes

### Tools & Resources

- HTML, CSS, JavaScript
- CSS Grid
- CSS Resets
- React

- [Deploying Vite App to GitHub Pages](https://dev.to/shashannkbawa/deploying-vite-app-to-github-pages-3ane) (_Dev.to_)

_Visit my [Frontend Mentor profile](https://www.frontendmentor.io/profile/tinuola) to view other challenges I've completed!_
