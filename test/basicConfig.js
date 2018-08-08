const baseUrl = "http://example.com"; // Put the base URL of your website here.
const projectId = "sample project"; // Put the id of your project here. It can be any string.

// Update the values of the below array with the relative URLs of your website. E.g., "/about", "/contact", "/pricing", etc.
// Use "/" to test the homepage of your website.
// Add as many relative URLs as you need.
const relativeUrls =[
  "/",
  "/page1",
  "/page2",
  "/page3",
  "/page4",
];

// Leave the below array as is if you want to test your website using the viewports listed below.
// The suported viewports are: phone, tablet, and desktop.
// No other viewports are supported.
// You can remove the viewports that you don't need, but at least one is required.
const viewports = [
  "phone",
  "tablet",
  "desktop",
];

module.exports = {
  baseUrl,
  projectId,
  relativeUrls,
  viewports,
};
