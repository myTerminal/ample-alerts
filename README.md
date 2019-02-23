# ample-alerts

[![npm version](https://badge.fury.io/js/ample-alerts.svg)](https://badge.fury.io/js/ample-alerts)
[![npm downloads](https://img.shields.io/npm/dt/ample-alerts.svg)](https://www.npmjs.com/package/ample-alerts)  
[![Build Status](https://travis-ci.org/myTerminal/ample-alerts.svg?branch=master)](https://travis-ci.org/myTerminal/ample-alerts)
[![Code Climate](https://codeclimate.com/github/myTerminal/ample-alerts.png)](https://codeclimate.com/github/myTerminal/ample-alerts)
[![Coverage Status](https://img.shields.io/coveralls/myTerminal/ample-alerts.svg)](https://coveralls.io/r/myTerminal/ample-alerts?branch=master)  
[![Dependency Status](https://david-dm.org/myTerminal/ample-alerts.svg)](https://david-dm.org/myTerminal/ample-alerts)
[![devDependency Status](https://david-dm.org/myTerminal/ample-alerts/dev-status.svg)](https://david-dm.org/myTerminal/ample-alerts#info=devDependencies)
[![peer Dependency Status](https://david-dm.org/myTerminal/ample-alerts/peer-status.svg)](https://david-dm.org/myTerminal/ample-alerts#info=peerDependencies)  
[![License](https://img.shields.io/github/license/myTerminal/ample-alerts.svg)](https://opensource.org/licenses/MIT)  
[![NPM](https://nodei.co/npm/ample-alerts.png?downloads=true&downloadRank=true&stars=true)](https://nodei.co/npm/ample-alerts/)

A simple alert library for web

## Features

* A simple & light-weight alert library
* Mobile-friendly
* Supports multiple types of alerts
* Can be easily themed for any host web application

## How to Use

### Directly from a web page

One can use *ample-alerts* directly from a web-page by attaching the *ample-alerts.js* and *ample-alerts.css* to the DOM.

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

## Demo

You can view a demo [here](https://myterminal.github.io/ample-alerts/examples).

## To-do

* Add promises support
* Implement showing of alerts at different positions on the screen
* Write unit-tests
