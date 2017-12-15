export default ({ markup, helmet, initialI18nStore, initialLanguage, styledComponent}) => {
    const stylesheet = (process.env.NODE_ENV === 'production')
        ? `<link rel='stylesheet' href='/public/bundle.css'>`
        : require('node-style-loader/collect').collectInitial();

    return `
        <!doctype html>
        <html ${helmet.htmlAttributes.toString()}>
        <head>
            ${helmet.title.toString()}
            ${helmet.meta.toString()}
            ${helmet.link.toString()}
            ${stylesheet}
            ${styledComponent}
        </head>
        <body ${helmet.bodyAttributes.toString()}>
            <div id="root">${markup}</div>
            <script>
                window.initialI18nStore = JSON.parse('${JSON.stringify(initialI18nStore)}');
                window.initialLanguage = '${initialLanguage}';
            </script>
            <script src="/public/client.js" async></script>
        </body>
        </html>
    `;
};