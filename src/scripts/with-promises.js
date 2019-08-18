import Promise from 'bluebird';
import {
    alert as alert_,
    confirm as confirm_,
    prompt as prompt_
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

export default {
    alert,
    confirm,
    prompt
};
