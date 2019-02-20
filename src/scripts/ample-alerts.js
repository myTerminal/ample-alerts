/* global document setTimeout */

import '../styles/ample-alerts.less';

(function () {
    document.body.innerHTML += '<div id="ample-alerts-backdrop"></div><div id="ample-alerts-container"></div>';
})();

const defaults = {
    container: document.querySelector('#ample-alerts-container')
};

let modalCount = 0;

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

function createAlertInputControls(defaultResponse) {
    return `<div class="ample-alert-input">
        <input class="ample-alert-input-value" value="${defaultResponse || ''}" />
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

    if (alertDom.className.indexOf('ample-alert-modal') > -1) {
        modalCount -= 1;

        if (!modalCount) {
            document.body.className = document.body.className.replace(/\sample-alerts-modal-mode/g, '');
        }
    }

    setTimeout(() => { alertDom.remove(); }, 1000);
}

export function alert(...args) {
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

export function confirm(...args) {
    const text = getText(args[0]),
        options = args[1] || {},
        onAction = options.onAction,
        controlLabels = options.labels,
        currentAlert = document.createElement('div');

    currentAlert.className = 'ample-alert confirm' + (options.isModal ? ' ample-alert-modal' : '');
    currentAlert.innerHTML = createAlertHeader(text[0], true)
        + createAlertBody(text[1])
        + createAlertControls(controlLabels || ['Yes', 'No'])
        + '<div class="clear-fix"></div>';

    defaults.container.appendChild(currentAlert);

    const controls = currentAlert.querySelectorAll('.ample-alert-control');

    currentAlert.querySelector('.ample-alert-close').onclick = generateResponseHandler(onAction, false, currentAlert);
    controls[0].onclick = generateResponseHandler(onAction, { value: true }, currentAlert);
    controls[1].onclick = generateResponseHandler(onAction, { value: false }, currentAlert);

    if (options.isModal) {
        modalCount += 1;
        document.body.className += ' ample-alerts-modal-mode';
    }

    setTimeout(() => { currentAlert.className += ' visible'; }, 50);
}

export function prompt(...args) {
    const text = getText(args[0]),
        options = args[1] || {},
        defaultResponse = options.defaultResponse,
        onAction = options.onAction,
        controlLabels = options.labels,
        currentAlert = document.createElement('div');

    currentAlert.className = 'ample-alert prompt' + (options.isModal ? ' ample-alert-modal' : '');
    currentAlert.innerHTML = createAlertHeader(text[0], true)
        + createAlertBody(text[1])
        + createAlertInputControls(defaultResponse)
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

    if (options.isModal) {
        modalCount += 1;
        document.body.className += ' ample-alerts-modal-mode';
    }

    setTimeout(() => { currentAlert.className += ' visible'; }, 50);
    setTimeout(() => currentAlert.querySelector('.ample-alert-input-value').focus(), 1000);
}

export default {
    alert,
    confirm,
    prompt
};
