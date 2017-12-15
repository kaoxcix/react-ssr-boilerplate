import Config from 'Src/config';
import Path from 'path';

export function getLanguageUrl(path, language) {
    const availableLanguages = Config.AVAILABLE_LANGUAGES;

    let paths        = path.split('/') || [];
    let spliceValue  = (availableLanguages.includes(paths[1]) ? 2 : 1);
    let appendedLang = (language === Config.DEFAULT_LANGUAGE ? `/` : `/${language}/`);

    return appendedLang
        + paths
            .splice(spliceValue)
            .reduce((accumulator, currentValue) => `${accumulator}/${currentValue}`)
        ;
}

export function joinUrl(...url) {
    return Path.join(...url)
}