import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import App from "Containers/core/App";
import { I18nextProvider } from "react-i18next";
import I18n from "Src/i18n";
import 'Src/main.scss'


const hydrate = (
    <I18nextProvider i18n={I18n}
                     initialI18nStore={window.initialI18nStore}
                     initialLanguage={window.initialLanguage}>
        <BrowserRouter>
            <App/>
        </BrowserRouter>
    </I18nextProvider>

);

ReactDOM.hydrate(hydrate, document.getElementById('root'));

if(process.env.NODE_ENV === 'development') {
    require('node-style-loader/clientCleanup')();
}
