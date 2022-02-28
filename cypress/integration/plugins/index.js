module.exports = (on, config) => {
on("before:browser:launch", (browser = {}, args) => {
    // console.log(browser, args); // see what all is in here!

    // browser will look something like this
    // {
    //   name: 'chrome',
    //   displayName: 'Chrome',
    //   version: '63.0.3239.108',
    //   path: '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome',
    //   majorVersion: '63'
    // }

    // args are different based on the browser
    // sometimes an array, sometimes an object

    if (browser.name === "chrome") {
      args.push("--disable-site-isolation-trials");
      // whatever you return here becomes the new args
    }
    if (browser.name === 'chrome' && browser.isHeadless) {
      args.push(
        '--disable-gpu'
      );
    }
     return args;
  });
}
