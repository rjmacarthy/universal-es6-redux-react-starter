import { routes } from '../../universal/routes';

export const matchRoute = function (req) {
    return { routes: routes, location: req.originalUrl };
};

export const renderFull = (html, initialState) => {
    return `
        <!doctype html>
        <html>
        <head>
            <title>Universal React Redux ES6 Example</title>
        </head>
        <body>
            <div id="root">${html}</div>
            <script>
            window.__INITIAL_STATE__ = ${JSON.stringify(initialState)}
            </script>
            <script src="/dist/bundle.js"></script>
        </body>
        </html>
        `
};