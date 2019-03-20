# Update on npm script for Windows operating systems

One of the npm scripts in the [`package.json`](./package.json) file has a command that is specific for Unix based operational systems, such as OS X and Linux, so, when using Windows OS, a change is needed. See below.

In the `clean:bitmaps_test` script, change the command `rm -rf test/backstop_data/bitmaps_test` to be `rmdir /S /Q test\\backstop_data\\bitmaps_test`.

With this change the edited script should work without problems in Windows environments.
