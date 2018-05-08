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

### With Browserify or Webpack

One can use *ample-alerts* with [Browserify](http://browserify.org) or [Webpack](https://webpack.js.org).

Install *ample-alerts* from Npm

    npm install ample-alerts --save-dev

#### With Browserify

    var AmpleAlerts = require('ample-alerts');

The above will let you use the scripts but you will have to attach the stylesheet separately.

#### With Webpack

    import AmpleAlerts from 'ample-alerts';
    import from '../styles/ample-alerts.css';

You may have to use [Babel](https://babeljs.io) for ES6 transpilation.

### On the server

*ample-alerts* can also be used at the server as a regular CommonJS module.

Install *ample-alerts* from Npm

    npm install ample-alerts --save-dev

Then `require` it as a regular CommonJS module

    var ampleAlerts = require('ample-alerts');

How you consume it depends upon your implementation.

### Support alert types

#### Alert

Shows a simple alert with provided text.

    ampleAlerts.alert('An update is available!');

Optionally, you can also provide a heading for the alert by sending two strings in an array.

    ampleAlerts.alert(['Update Available', 'A new software update is available!']);

You can also make the alert go away after a specified number of milliseconds.

    ampleAlerts.alert(['Update Available', 'A new software update is available!'], { autoClose: 5000 });

#### Confirm

Shows a confirmation message for user.

    ampleAlerts.confirm('An update is available! Do you want to load the latest version?', onAction);

You can also provide a heading for the confirmation message.

    ampleAlerts.confirm(['Update Available', 'Do you want to load the latest version?'], onAction);

You can also specify labels for buttons.

    ampleAlerts.confirm(['Update Available', 'Do you want to load the latest version?'], onAction, ['Sure', 'Not now']);

#### Prompt (Still to be implemented)

Shows a prompt to ask a value from the user.

    ampleAlerts.prompt('What do you want to name the file as?', onAction);

As usual, you can also add a heading.

    ampleAlerts.prompt(['Saving File', 'What do you want to name the file as?'], onAction);

## Demo

You can view a demo [here](https://myterminal.github.io/ample-alerts/examples).

## To-do

* Implement `prompt`
* Unit tests
