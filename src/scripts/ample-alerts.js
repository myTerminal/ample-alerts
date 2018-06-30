/* global document setTimeout */

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

function createAlertInputControls() {
    return `<div class="ample-alert-input">
        <input class="ample-alert-input-value" value="" />
    </div>`;
}

function createAlertControls(controlLabels) {
    return `<div class="ample-alert-controls">
        <div class="ample-alert-control">${controlLabels[0]}</div>
        <div class="ample-alert-control">${controlLabels[1]}</div>
    </div>`;
}

function getText(args) {
    if (typeof args === 'object') {
        return args;
    } else {
        return ['', args];
    }
}

function generateResponseHandler(onAction, response, alertInstance) {
    return () => {
        if (onAction) {
            onAction(response.value);
        }

        closeAlert(alertInstance);
    };
}

function closeAlert(alertDom) {
    alertDom.className += ' leaving';
    setTimeout(() => { alertDom.remove(); }, 1000);
}

function alert(...args) {
    const text = getText(args[0]),
        options = args[1] || {},
        currentAlert = document.createElement('div');

    currentAlert.className = 'ample-alert alert';
    currentAlert.innerHTML = createAlertHeader(text[0], true)
        + createAlertBody(text[1])
        + '<div class="clear-fix"></div>';

    defaults.container.appendChild(currentAlert);

    currentAlert.querySelector('.ample-alert-close').onclick = function () {
        closeAlert(currentAlert);
    };

    if (options.autoClose) {
        setTimeout(() => { closeAlert(currentAlert); }, options.autoClose);
    }

    setTimeout(() => { currentAlert.className += ' visible'; }, 50);
}

function confirm(...args) {
    const text = getText(args[0]),
        options = args[1] || {},
        onAction = options.onAction,
        controlLabels = options.labels,
        currentAlert = document.createElement('div');

    currentAlert.className = 'ample-alert confirm';
    currentAlert.innerHTML = createAlertHeader(text[0], true)
        + createAlertBody(text[1])
        + createAlertControls(controlLabels || ['Yes', 'No'])
        + '<div class="clear-fix"></div>';

    defaults.container.appendChild(currentAlert);

    const controls = currentAlert.querySelectorAll('.ample-alert-control');

    currentAlert.querySelector('.ample-alert-close').onclick = generateResponseHandler(onAction, false, currentAlert);
    controls[0].onclick = generateResponseHandler(onAction, { value: true }, currentAlert);
    controls[1].onclick = generateResponseHandler(onAction, { value: false }, currentAlert);

    setTimeout(() => { currentAlert.className += ' visible'; }, 50);
}

function prompt(...args) {
    const text = getText(args[0]),
        options = args[1] || {},
        onAction = options.onAction,
        controlLabels = options.labels,
        currentAlert = document.createElement('div');

    currentAlert.className = 'ample-alert prompt';
    currentAlert.innerHTML = createAlertHeader(text[0], true)
        + createAlertBody(text[1])
        + createAlertInputControls()
        + createAlertControls(controlLabels || ['Ok', 'Cancel'])
        + '<div class="clear-fix"></div>';

    defaults.container.appendChild(currentAlert);

    const controls = currentAlert.querySelectorAll('.ample-alert-control');

    currentAlert.querySelector('.ample-alert-input-value').onkeydown = function (e) {
        if (e.keyCode === 13) {
            generateResponseHandler(onAction, currentAlert.querySelector('.ample-alert-input-value'), currentAlert)();
            return false;
        }

        return true;
    };

    currentAlert.querySelector('.ample-alert-close').onclick = generateResponseHandler(onAction, currentAlert.querySelector('.ample-alert-input-value'), currentAlert);
    controls[0].onclick = generateResponseHandler(onAction, currentAlert.querySelector('.ample-alert-input-value'), currentAlert);
    controls[1].onclick = generateResponseHandler(onAction, { value: null }, currentAlert);

    setTimeout(() => { currentAlert.className += ' visible'; }, 50);
    setTimeout(() => currentAlert.querySelector('.ample-alert-input-value').focus(), 1000);
}

export {
    alert,
    confirm,
    prompt
};
