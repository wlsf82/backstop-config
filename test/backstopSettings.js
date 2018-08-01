const relativePaths = require('./relativePaths.js');
const scenarios = [];

relativePaths.map(relativePath => {
  scenarios.push({
    label: relativePath,
    url: `${process.env.DOMAIN}${relativePath}`,
    delay: 3000,
    requireSameDimensions: false
  });
});

module.exports = {
  id: process.env.PROJECT_ID,
  // Add, remove, or update viewports if needed.
  viewports: [
    {
      name: "desktop",
      width: 1280,
      height: 1024
    },
    {
      name: "tablet",
      width: 1024,
      height: 768
    },
    {
      name: "phone",
      width: 320,
      height: 480
    },
  ],
  scenarios,
  paths: {
    bitmaps_reference: "test/backstop_data/bitmaps_reference",
    bitmaps_test: "test/backstop_data/bitmaps_test",
    html_report: "test/backstop_data/html_report"
  },
  report: ["browser"],
  engine: "puppeteer",
  engineOptions: {
    args: ["--no-sandbox"]
  },
  asyncCaptureLimit: 5,
  asyncCompareLimit: 50
};
