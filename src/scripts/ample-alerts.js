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

function closeAlert(alertDom) {
    alertDom.className += ' leaving';

    setTimeout(function () {
        alertDom.remove();
    }, 1000);
}

function alert(...args) {
    var text = getText(args[0]),
        headerText = text[0],
        bodyText = text[1],
        options = args[1] || {},
        currentAlert;

    currentAlert = document.createElement('div');
    currentAlert.className = 'ample-alert alert';
    currentAlert.innerHTML = createAlertHeader(headerText, true)
        + createAlertBody(bodyText)
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

function confirm(...args) {
    var text = getText(args[0]),
        headerText = text[0],
        bodyText = text[1],
        options = args[1] || {},
        onAction = options.onAction,
        controlLabels = options.labels,
        controls,
        respondWithYes,
        respondWithNo,
        currentAlert;

    currentAlert = document.createElement('div');
    currentAlert.className = 'ample-alert confirm';
    currentAlert.innerHTML = createAlertHeader(headerText, true)
        + createAlertBody(bodyText)
        + createAlertControls(controlLabels || ['Yes', 'No'])
        + '<div class="clear-fix"></div>';

    defaults.container.appendChild(currentAlert);

    respondWithYes = function () {
        if (onAction) {
            onAction(true);
        }

        closeAlert(currentAlert);
    };

    respondWithNo = function () {
        if (onAction) {
            onAction(false);
        }

        closeAlert(currentAlert);
    };

    controls = currentAlert.querySelectorAll('.ample-alert-control');

    currentAlert.querySelector('.ample-alert-close').onclick = respondWithNo;
    controls[0].onclick = respondWithYes;
    controls[1].onclick = respondWithNo;

    setTimeout(function () {
        currentAlert.className += ' visible';
    }, 50);
}

function prompt(...args) {
    var text = getText(args[0]),
        headerText = text[0],
        bodyText = text[1],
        options = args[1] || {},
        onAction = options.onAction,
        controlLabels = options.labels,
        controls,
        respondWithValue,
        dismissPrompt,
        currentAlert;

    currentAlert = document.createElement('div');
    currentAlert.className = 'ample-alert prompt';
    currentAlert.innerHTML = createAlertHeader(headerText, true)
        + createAlertBody(bodyText)
        + createAlertInputControls()
        + createAlertControls(controlLabels || ['Yes', 'No'])
        + '<div class="clear-fix"></div>';

    defaults.container.appendChild(currentAlert);

    respondWithValue = function () {
        if (onAction) {
            onAction(currentAlert.querySelector('.ample-alert-input-value').value);
        }

        closeAlert(currentAlert);
    };

    dismissPrompt = function () {
        if (onAction) {
            onAction(null);
        }

        closeAlert(currentAlert);
    };

    controls = currentAlert.querySelectorAll('.ample-alert-control');

    currentAlert.querySelector('.ample-alert-input-value').onkeydown = function (e) {
        if (e.keyCode === 13) {
            respondWithValue();

            return false;
        }

        return true;
    };

    currentAlert.querySelector('.ample-alert-close').onclick = respondWithValue;
    controls[0].onclick = respondWithValue;
    controls[1].onclick = dismissPrompt;

    setTimeout(function () {
        currentAlert.className += ' visible';
    }, 50);

    setTimeout(function () {
        currentAlert.querySelector('.ample-alert-input-value').focus();
    }, 1000);
}

export {
    alert,
    confirm,
    prompt
};
