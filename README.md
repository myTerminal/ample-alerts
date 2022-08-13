# ample-alerts

[![npm version](https://badge.fury.io/js/ample-alerts.svg)](https://badge.fury.io/js/ample-alerts)
[![npm downloads](https://img.shields.io/npm/dt/ample-alerts.svg)](https://www.npmjs.com/package/ample-alerts)
[![License](https://img.shields.io/github/license/myTerminal/ample-alerts.svg)](https://opensource.org/licenses/MIT)  
[![Build Status](https://travis-ci.org/myTerminal/ample-alerts.svg?branch=master)](https://travis-ci.org/myTerminal/ample-alerts)
[![Code Climate](https://codeclimate.com/github/myTerminal/ample-alerts.png)](https://codeclimate.com/github/myTerminal/ample-alerts)
[![js-myterminal-style](https://img.shields.io/badge/code%20style-myterminal-blue.svg)](https://www.npmjs.com/package/eslint-config/myterminal)
[![Coverage Status](https://img.shields.io/coveralls/myTerminal/ample-alerts.svg)](https://coveralls.io/r/myTerminal/ample-alerts?branch=master)  
[![ko-fi](https://ko-fi.com/img/githubbutton_sm.svg)](https://ko-fi.com/Y8Y5E5GL7)  
[![NPM](https://nodei.co/npm/ample-alerts.png?downloads=true&downloadRank=true&stars=true)](https://nodei.co/npm/ample-alerts/)

A simple alert library for web

## Features

* A simple & light-weight alert library
* Mobile-friendly
* Supports all types of browser alerts
* Can be easily themed for any host web application
* Support for promises
* Two color-themes: light and dark

## How to Use

### Directly from a web page

One can use *ample-alerts* directly from a web-page by a attaching script file and a stylesheet to the DOM.

    <!-- Attaching the ample-alerts stylesheet -->
    <link type="text/javascript" rel="stylesheet" href="path/to/library/ample-alerts.css" />
    
    <!-- Attaching the ample-alerts script -->
    <script type="text/javascript" src="path/to/library/ample-alerts.js"></script>
    
    <!-- Usage -->
    <script type="text/javascript">
        ampleAlerts.alert(['Update Available', 'A new update is available'], { autoClose: 3000 });
    </script>

### With [Webpack](https://webpack.js.org), [Browserify](http://browserify.org) or [RequireJS](http://requirejs.org)

Install *ample-alerts* from NPM

    npm install ample-alerts --save-dev

Consume as an ES6 module

    import * as ampleAlerts from 'ample-alerts';

or

    import ampleAlerts from 'ample-alerts';

or

    import { alert, confirm, prompt } from 'ample-alerts';

Consume as a CommonJS module

    var AmpleAlerts = require('ample-alerts');

Consume as an AMD

    require(['ample-alerts'], function (ampleAlerts) {
        // Consume ampleAlerts
    }

In order to use the stylesheet,

Import in your React components as

    import from '[relative/path/to]/ample-alerts.css';

or in your stylesheet as

    @import '[relative/path/to]/ample-alerts.css';

Note: You may have to use [Babel](https://babeljs.io) for ES6 transpilation.

### Supported alert types

#### Alert

Shows a simple alert with provided text.

    ampleAlerts.alert('An update is available!');

Optionally, you can also provide a heading for the alert by sending two strings in an array.

    ampleAlerts.alert(['Update Available', 'A new software update is available!']);

You can also make the alert go away after a specified number of milliseconds.

    ampleAlerts.alert(['Update Available', 'A new software update is available!'], { autoClose: 5000 });

#### Confirm

Shows a confirmation message for user to confirm an action.

    ampleAlerts.confirm('An update is available! Do you want to load the latest version?', { onAction: onAction });

You can also provide a heading for the confirmation message.

    ampleAlerts.confirm(['Update Available', 'Do you want to load the latest version?'], { onAction: onAction });

#### Prompt

Shows a prompt to ask a value from the user.

    ampleAlerts.prompt('What do you want to name the file as?', { onAction: onAction });

As usual, you can also add a heading.

    ampleAlerts.prompt(['Saving File', 'What do you want to name the file as?'], { onAction: onAction });

### Support for promises

A separate version for promises is available.

In order to take advantage of promises, use `ample-alerts.promises.js`.

The import path for ES6, CommonJS and AMD changes to `ample-alerts/build/scripts/ample-alerts.promises`.

For any alert created with this version, all positive actions from the user `resolve` the promise while others end up `rejecting` the promise.

For example: dismissing an `alert`, `confirm` or `prompt` using the close button rejects the promise so does negative response for `confirm`.

*Note: You can still use the `onAction` callback with the promises version.*

    ampleAlerts.confirm('Are you sure?')
        .then(function () {
            // User responded with a 'YES'
        }).catch(function () {
            // User either responded with a 'NO' or dismissed the alert
        });

### Options

While creating an alert, the second argument is an `options` object. It can have the following properties:

1. **autoClose** (number)  
*Default:* 0 (Does not close automatically)  
*Applicable for:* `alert`

2. **onAction** (function)  
*Default:* null  
*Applicable for:* `confirm`, `prompt`  
The method to be called with user response as an argument.  
In case of `confirm`, this method gets called with either `true` or `false`. For `prompt`, it gets called with the response value from the user.

3. **defaultResponse** (string)  
*Default:* null  
*Applicable for:* `prompt`  
The default response from the user.

4. **labels** (array)  
*Default:* ['Yes', 'No'] or ['Ok, 'Cancel']  
*Applicable for:* `confirm`, `prompt`  
Use this option to override button labels shown on alerts.

4. **isModal** (boolean)  
*Default:* false  
*Applicable for:* `confirm`, `prompt`  
Use this option to make the `confirm` or `prompt` a modal.  
Please note that the user will still be able to interact with other pop-ups created with `ample-alerts`.

### Color themes

There are two available color themes: *light* and *dark* and the default is *light*. In order for *ample-alerts* to use the *dark* theme, attach a CSS class named `ample-alerts-dark` to the `body` tag.

    <body class="ample-alerts-dark">
        ...
    </body>

To switch the theme dynamically, call one of the below two functions.

    import { switchToDarkTheme, switchToLightTheme } from 'ample-alerts';

    switchToDarkTheme(); // Switches to dark theme
    switchToLightTheme(); // Switches to light theme

OR

    import ampleAlerts from 'ample-alerts';

    amplerAlerts.switchToDarkTheme(); // Switches to dark theme
    amplerAlerts.switchToLightTheme(); // Switches to light theme

## Demos

Experience `ample-alerts` in action:

1. Simple version [here](https://myterminal.github.io/ample-alerts/examples/simple.html)
2. Version with promises [here](https://myterminal.github.io/ample-alerts/examples/with-promises.html)

## To-do

* Implement showing of alerts at different positions on the screen
* Write unit-tests
