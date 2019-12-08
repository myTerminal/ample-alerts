import Promise from 'bluebird';
import {
    alert as alert_,
    confirm as confirm_,
    prompt as prompt_,
    switchToDarkTheme,
    switchToLightTheme
} from './core.js';

export const alert = (...args) =>
    new Promise(
        (resolve, reject) => {
            alert_(resolve, reject, ...args);
        }
    );

export const confirm = (...args) =>
    new Promise(
        (resolve, reject) => {
            confirm_(resolve, reject, ...args);
        }
    );

export const prompt = (...args) =>
    new Promise(
        (resolve, reject) => {
            prompt_(resolve, reject, ...args);
        }
    );

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
