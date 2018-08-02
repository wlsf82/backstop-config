# backstop-config

A sample project with a simple implementation of [BackstopJS](https://github.com/garris/BackstopJS) tests that can be used by anyone who needs to simply run screenshot comparison tests in static web pages that have different URLs. E.g., http://example.com, http://example.com/page1, http://example.com/page2, etc.

## Pre-requirements

- [Node.js](https://nodejs.org/) v8+

> To check your Node.js version run `node -v`. You should see something like this `v8.11.3`. If you don't have Node.js installed, use the above link to download and install it.

## Installation

Run `npm i ajv@6.5.2 backstopjs@3.5.2 react-dom@15.6.2 --no-save` to install the peer dependencies.

> When installing these libraries in your own project it may be better to install them as dev dependencies. Use `npm i ajv@6.5.2 backstopjs@3.5.2 react-dom@15.6.2 -D` then.

## Tests' setup

Before running the tests, make a copy of the file [`test/backstopSettings.js`](./test/backstopSettings.js) exactly as it is, and make a copy of the file [`test/sampleRelativePaths.js`](./test/sampleRelativePaths.js) and name it as `test/relativePaths.js`, then update their values accordingly (follow the instructions in the comments of each file).

> Note that both files are located inside the `test` directory.

> In case of using these tests in your own project, copy also the npm scripts section from [`package.json`](./package.json) to your own `package.json` file.

> If you use Windows operational system, take a look at the [`NPM_SCRIPT_UPDATE_FOR_WINDOWS.md`](./NPM_SCRIPT_UPDATE_FOR_WINDOWS.md) file.

## Running the tests

Run `npm t` to run the Backstop screenshot comparison tests.

## Approving bitmaps as references

Run `npm run backstop:approve` to approve bitmaps as references to be used during screenshot comparison tests.

## Test report

A test report like this should be available after approving the bitmaps as references and re-running the tests.

![BackstopJS html report](./assets/backstopjs-report.png)

## Feedback

Your feedback is very important for this project. If you have any doubts or suggestions, open an issue, and I'll look into it.

___

Made with 💚 by [Walmyr Filho](http://walmyr-filho.com)
