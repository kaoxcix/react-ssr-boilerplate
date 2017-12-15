import React from "react";
import ReactDOMServer from "react-dom/server";
import { StaticRouter } from "react-router-dom";
import { Helmet } from "react-helmet";
import Template from "Src/template";
import App from "Containers/core/App";
import { I18nextProvider } from "react-i18next";
import { ServerStyleSheet } from 'styled-components'
import 'Src/main.scss'

export default function serverRenderer() {
    return (req, res, next) => {
        const context         = {};
        const sheet           = new ServerStyleSheet()
        const markup          = ReactDOMServer.renderToString(sheet.collectStyles(
            <I18nextProvider i18n={req.i18n}>
                <StaticRouter location={req.url} context={context}>
                    <App/>
                </StaticRouter>
            </I18nextProvider>
        ));
        const helmet          = Helmet.renderStatic();
        const styledComponent = sheet.getStyleTags() // or sheet.getStyleElement()


        if (context.url) {
            res.redirect(context.url);
        } else {
            const initialI18nStore = {};

            req.i18n.languages.forEach((l) => {
                initialI18nStore[l] = req.i18n.services.resourceStore.data[l];
            });

            const initialLanguage = req.i18n.language;

            res.status(200).send(Template({
                markup:           markup,
                helmet:           helmet,
                initialLanguage:  initialLanguage,
                initialI18nStore: initialI18nStore,
                styledComponent:  styledComponent
            }));
        }
    };
}