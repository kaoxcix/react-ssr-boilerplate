const i18n             = require('i18next');
const config           = require('./config.js').default;

const options = {
    load: 'languageOnly',

    fallbackLng: config.DEFAULT_LANGUAGE,
    debug:       false,

    interpolation: {
        escapeValue: false,
    },

    ns:        ['common', 'index'],
    defaultNS: 'common',

    detection: {
        order:               ['path'],
        lookupPath:          'lng',
        lookupFromPathIndex: 0,
    }

};

if (!i18n.isInitialized) {
    i18n.init(options);
}

module.exports = i18n;
