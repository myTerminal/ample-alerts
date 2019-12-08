import {
    alert as alert_,
    confirm as confirm_,
    prompt as prompt_,
    switchToDarkTheme,
    switchToLightTheme
} from './core.js';

export const alert = (...args) => {
    alert_(null, null, ...args);
};

export const confirm = (...args) => {
    confirm_(null, null, ...args);
};

export const prompt = (...args) => {
    prompt_(null, null, ...args);
};

export {
    switchToDarkTheme,
    switchToLightTheme
};

export default {
    alert,
    confirm,
    prompt,
    switchToDarkTheme,
    switchToLightTheme
};
