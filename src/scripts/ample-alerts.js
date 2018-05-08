/* global document */

import '../styles/ample-alerts.less';

(function () {
    document.body.innerHTML += '<div id="ample-alerts-container"></div>';
})();

const defaults = {
    container: document.querySelector('#ample-alerts-container')
};

function createAlertHeader(headerText, shouldHaveClose) {
    return '<div class="ample-alert-header">'
        + (headerText ? '<div class="ample-alert-header-text">' + headerText + '</div>' : '')
        + (shouldHaveClose ? '<div class="ample-alert-close">&#10006;</div>' : '')
        + '</div>';
}

function createAlertBody(bodyText) {
    return `<div class="ample-alert-body">
        ${bodyText}
    </div>`;
}

function createAlertControls(controls) {
    return `<div class="ample-alert-controls">
        <div class="ample-alert-control">Yes</div>
        <div class="ample-alert-control">No</div>
    </div>`;
}

function getText(args) {
    if (typeof args === 'object') {
        return args;
    } else {
        return ['', args];
    }
}

function closeAlert(alertDom) {
    alertDom.className += ' leaving';

    setTimeout(function () {
        alertDom.remove();
    }, 1000);
}

export function alert(...args) {
    var text = getText(args[0]),
        headerText = text[0],
        bodyText = text[1],
        options = args[1] || {},
        currentAlert;

    currentAlert = document.createElement('div');
    currentAlert.className = 'ample-alert alert';
    currentAlert.innerHTML = createAlertHeader(headerText, true)
        + createAlertBody(bodyText)
        + createAlertControls()
        + '<div class="clear-fix"></div>';

    defaults.container.appendChild(currentAlert);

    currentAlert.querySelector('.ample-alert-close').onclick = function () {
        closeAlert(currentAlert);
    };

    if (options.autoClose) {
        setTimeout(function () {
            closeAlert(currentAlert);
        }, options.autoClose);
    }

    setTimeout(function () {
        currentAlert.className += ' visible';
    }, 50);
}

export function confirm() {

}

export function prompt() {

}
