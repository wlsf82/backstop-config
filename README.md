# backstop-config

A sample project with a simple implementation of [BackstopJS](https://github.com/garris/BackstopJS) tests that can be used by anyone who needs to simply run screenshot comparison tests in static web pages that have different URLs. E.g., http://example.com, http://example.com/page1, http://example.com/page2, etc.

## Pre-requirements

- [Node.js](https://nodejs.org/) v8+

> To check your Node.js version run `node -v`. You should see something like this `v8.11.3`. If you don't have Node.js installed, use the above link to download and install it.

## Installation

Run `npm i ajv@6.5.2 backstopjs@3.5.2 react-dom@15.6.2 --no-save` to install the peer dependencies.

> When installing these libraries in your own project it's better to install them as dev dependencies. Run `npm i ajv@6.5.2 backstopjs@3.5.2 react-dom@15.6.2 -D` inside the root directory of your project to do it.

> You may need to run `npm init` first. If you do so, press ENTER for all questions to accept the defaults.

## Tests' setup

Copy of the files [`test/backstopSettings.js`](./test/backstopSettings.js), and [`test/relativePaths.js`](./test/sampleRelativePaths.js) to your compouter (inside the `test` directory of your project, considering the `test` directory is located in the root level of the project), then update their values accordingly (follow the instructions in the comments of each file).

> If the `test` directory doesn't exist, create it before copying the files into it.

Next, copy the npm scripts section from [`package.json`](./package.json) to your own `package.json` file.

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
