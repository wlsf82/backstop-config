# backstop-config

A sample project with a minimalist implementation of [BackstopJS](https://github.com/garris/BackstopJS) tests that can be used by anyone who needs to simply run screenshot comparison tests in static web pages that have different URLs. E.g., http://example.com, http://example.com/page1, http://example.com/page2, etc.

## Pre-requirements

- [Node.js](https://nodejs.org/) v8+

## Installation

Run `npm i ajv@6.5.2 backstopjs@3.5.2 react-dom@15.6.2 --no-save` to install the peer dependencies.

> When installing these libraries in your own project it may be better to install them as dev dependencies. Use `npm i ajv@6.5.2 backstopjs@3.5.2 react-dom@15.6.2 -D` then.

## Tests' setup

Before running the tests, make a copy of the file [`sampleSetup.sh`](./sampleSetup.sh) and name it as `setup.sh`, and make a copy of the file [`test/sampleRelativePaths.js`](./test/sampleRelativePaths.js) and name it as `test/relativePaths.js`, then update their values accordingly.

### NPM scripts

In case of using this tests in your own project, copy the npm scripts section from [`package.json`](./package.json) to your own `package.json` file.

## Running the tests

Run `npm t` to run the Backstop screenshot comparison tests.

## Approving bitmaps as references

Run `npm run backstop:approve` to approve bitmaps as references to be used during screenshot comparison tests.

## Test report

A test report like this should be available after approving the bitmaps as references and re-running the tests.

![BackstopJS html report](./assets/backstopjs-report.png)

___

Made with 💚 by [Walmyr Filho](http://walmyr-filho.com)
