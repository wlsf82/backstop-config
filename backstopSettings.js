const relativePaths = require('./relativePaths.js');
const scenarios = [];

relativePaths.map(relativePath => {
  scenarios.push({
    label: relativePath,
    url: `http://talkingabouttesting.com/${relativePath}`,
    readySelector: "iframe",
    delay: 3000,
    hideSelectors: [
      "iframe",
      ".widget_eu_cookie_law_widget"
    ],
    removeSelectors: [
      ".widget_recent_entries",
      ".widget_top-posts"
    ],
    misMatchThreshold : 0.1,
    requireSameDimensions: false
  });
});

module.exports = {
  id: "talking-about-testing",
  viewports: [
    {
      name: "desktop",
      width: 1280,
      height: 1024
    }
  ],
  scenarios,
  paths: {
    bitmaps_reference: "backstop_data/bitmaps_reference",
    bitmaps_test: "backstop_data/bitmaps_test",
    html_report: "backstop_data/html_report"
  },
  report: ["browser"],
  engine: "puppeteer",
  engineOptions: {
    waitTimeout: 5000,
    args: ["--no-sandbox"]
  },
  asyncCaptureLimit: 5,
  asyncCompareLimit: 50,
  debug: false,
  debugWindow: false
};
