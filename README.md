# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

# Things Learned
1. useCallback hook: I understood it as a blackbox that takes the function to run and the parameters that it depends upon as its arguments and chaches them in order to optimise the use of the fuction during the runtime of the site.
2. useRef hook: Its also has multiple fucntion but the one that we learned was that it stores the refernce to a particular 'thing' from the page which we can use to perform the action on
3. useEffect hook: In this hook we understood that it can be used to re-run a function once at loading of the page and again when some parameter related to the function (that we pass in the useEffect hook) changes.
4. Note: we dont control what gets updated and what dosent in the DOM of the react. That functionallity is controlled by the hooks that are provided
5. Copy to Clipboard: we learned how we can copy some value to the clipboard and also how can we make the copied value appear selected by using the useRef hook
6. tailwind CSS: learned to read the documentation for the utility classes odf tailwind css and how to make components using it
7. useState hook: refined my usderstanding of the useState hooks use-cases

