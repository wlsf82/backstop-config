const basicConfig = require("./basicConfig");
const scenarios = [];
const viewports = [];

basicConfig.relativeUrls.map(relativeUrl => {
  scenarios.push({
    label: relativeUrl,
    url: `${basicConfig.baseUrl}${relativeUrl}`,
    delay: 3000,
    requireSameDimensions: false,
  });
});

basicConfig.viewports.map(viewport => {
  if (viewport === "phone") {
    viewports.push({
      name: viewport,
      width: 320,
      height: 480,
    });
  }
  if (viewport === "tablet") {
    viewports.push({
      name: viewport,
      width: 1024,
      height: 768,
    });
  }
  if (viewport === "desktop") {
    viewports.push({
      name: viewport,
      width: 1280,
      height: 1024,
    });
  }
});

module.exports = {
  id: basicConfig.projectId,
  viewports,
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
  asyncCompareLimit: 50,
};
