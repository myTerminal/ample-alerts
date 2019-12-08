/* global document setTimeout clearTimeout */

import '../styles/ample-alerts.less';

(() => {
    document.body.innerHTML += '<div id="ample-alerts-backdrop"></div><div id="ample-alerts-container"></div>';
})();

const defaults = {
    container: document.querySelector('#ample-alerts-container')
};

let modalCount = 0;

const createAlertHeader = (headerText, shouldHaveClose) =>
    `
<div class="ample-alert-header">
    ${headerText ? `<div class="ample-alert-header-text">${headerText}</div>` : ''}
    ${shouldHaveClose ? '<div class="ample-alert-close">&#10006;</div>' : ''}
</div>
`;

const createAlertBody = bodyText =>
    `
<div class="ample-alert-body">
    ${bodyText}
</div>
`;

const createAlertInputControls = defaultResponse =>
    `
<div class="ample-alert-input">
    <input class="ample-alert-input-value" value="${defaultResponse || ''}" />
</div>
`;

const createOkButton = () =>
    `
<div class="ample-alert-controls">
    <div class="ample-alert-control">Ok</div>
</div>
`;

const createAlertControls = controlLabels =>
    `
<div class="ample-alert-controls">
    <div class="ample-alert-control">${controlLabels[0]}</div>
    <div class="ample-alert-control">${controlLabels[1]}</div>
</div>
`;

const getText = args =>
    (typeof args === 'object'
        ? args
        : ['', args]);

const closeAlert = alertDom => {
    alertDom.className += ' leaving';

    if (alertDom.className.indexOf('ample-alert-modal') > -1) {
        modalCount -= 1;

        if (!modalCount) {
            document.body.className = document.body.className.replace(/\sample-alerts-modal-mode/g, '');
        }
    }

    setTimeout(
        () => { alertDom.remove(); },
        1000
    );
};

const createHandler = (alertInstance, response, outcome, onAction) =>
    () => {
        if (outcome) {
            outcome(response.value);
        }

        if (onAction) {
            onAction(response.value);
        }

        closeAlert(alertInstance);
    };

const makeVisibleWithDelay = currentAlert => {
    setTimeout(
        () => { currentAlert.className += ' visible'; },
        50
    );
};

const focusInputWithDelay = currentAlert => {
    setTimeout(
        () => { currentAlert.querySelector('.ample-alert-input-value').focus(); },
        1000
    );
};

export const switchToDarkTheme = () => {
    const isDarkThemeEnabled = document.body.className.indexOf('ample-alerts-dark') > -1;

    if (!isDarkThemeEnabled) {
        document.body.className += ' ample-alerts-dark';
    }
};

export const switchToLightTheme = () => {
    const isDarkThemeEnabled = document.body.className.indexOf('ample-alerts-dark') > -1;

    if (isDarkThemeEnabled) {
        document.body.className = document.body.className.replace('ample-alerts-dark', '');
    }
};

export const alert = (positiveOutcome, negativeOutcome, ...args) => {
    const [title, text] = getText(args[0]),
        { autoClose } = args[1] || {},
        currentAlert = document.createElement('div');

    currentAlert.className = 'ample-alert alert';
    currentAlert.innerHTML = `${createAlertHeader(title, true)}${createAlertBody(text)}${createOkButton()}<div class="clear-fix"></div>`;

    defaults.container.appendChild(currentAlert);

    const okButton = currentAlert.querySelector('.ample-alert-control');

    let closeTimer;

    currentAlert.querySelector('.ample-alert-close')
        .onclick = () => {
            if (negativeOutcome) {
                negativeOutcome();
            }

            clearTimeout(closeTimer);
            closeAlert(currentAlert);
        };

    okButton.onclick = createHandler(
        currentAlert,
        { value: null },
        positiveOutcome,
        () => { clearTimeout(closeTimer); }
    );

    if (autoClose) {
        closeTimer = setTimeout(
            () => {
                if (positiveOutcome) {
                    positiveOutcome();
                }

                closeAlert(currentAlert);
            },
            autoClose
        );
    }

    makeVisibleWithDelay(currentAlert);
};

export const confirm = (positiveOutcome, negativeOutcome, ...args) => {
    const [title, text] = getText(args[0]),
        { onAction, labels, isModal } = args[1] || {},
        currentAlert = document.createElement('div');

    currentAlert.className = `ample-alert confirm'${(isModal ? ' ample-alert-modal' : '')}`;
    currentAlert.innerHTML = `${createAlertHeader(title, true)}${createAlertBody(text)}${createAlertControls(labels || ['Yes', 'No'])}<div class="clear-fix"></div>`;

    defaults.container.appendChild(currentAlert);

    const controls = currentAlert.querySelectorAll('.ample-alert-control');

    currentAlert.querySelector('.ample-alert-close')
        .onclick = createHandler(currentAlert, { value: false }, negativeOutcome, onAction);

    controls[0].onclick = createHandler(currentAlert, { value: true }, positiveOutcome, onAction);
    controls[1].onclick = createHandler(currentAlert, { value: false }, negativeOutcome, onAction);

    if (isModal) {
        modalCount += 1;
        document.body.className += ' ample-alerts-modal-mode';
    }

    makeVisibleWithDelay(currentAlert);
};

export const prompt = (positiveOutcome, negativeOutcome, ...args) => {
    const [title, text] = getText(args[0]),
        {
            onAction, defaultResponse, labels, isModal
        } = args[1] || {},
        currentAlert = document.createElement('div');

    currentAlert.className = `ample-alert prompt${(isModal ? ' ample-alert-modal' : '')}`;
    currentAlert.innerHTML = `${createAlertHeader(title, true)}${createAlertBody(text)}${createAlertInputControls(defaultResponse)}${createAlertControls(labels || ['Ok', 'Cancel'])}<div class="clear-fix"></div>`;

    defaults.container.appendChild(currentAlert);

    const controls = currentAlert.querySelectorAll('.ample-alert-control');

    currentAlert.querySelector('.ample-alert-input-value')
        .onkeydown = e => {
            if (e.keyCode === 13) {
                createHandler(currentAlert, currentAlert.querySelector('.ample-alert-input-value'), positiveOutcome, onAction)();
                return false;
            }

            return true;
        };

    currentAlert.querySelector('.ample-alert-close')
        .onclick = createHandler(currentAlert, { value: null }, negativeOutcome, onAction);

    controls[0].onclick = createHandler(currentAlert, currentAlert.querySelector('.ample-alert-input-value'), positiveOutcome, onAction);
    controls[1].onclick = createHandler(currentAlert, { value: null }, negativeOutcome, onAction);

    if (isModal) {
        modalCount += 1;
        document.body.className += ' ample-alerts-modal-mode';
    }

    makeVisibleWithDelay(currentAlert);
    focusInputWithDelay(currentAlert);
};
