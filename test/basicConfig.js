const baseUrl = "http://example.com"; // Replace the value "http://example.com" by the base URL of the website you want to test.
const projectId = "sample project"; // Replace the value "sample project" by the id of your project. It can be any string (e.g., "my-website").

// Replace the values of the below array with the relative URLs of your website. E.g., "/about", "/contact", "/pricing", etc.
// Use just "/" to test the homepage of your website.
// Add as many relative URLs as you need.
const relativeUrls =[
  "/",
  "/page1",
  "/page2",
  "/page3",
  "/page4",
];

// Leave the below array as is if you want to test your website using the viewports listed below.
// The suported viewports are: phone (320px X 480px), tablet (1024px X 768px), and desktop (1280px X 1024px).
// No other viewports are supported.
// You can remove the viewports that you don't need, but at least one of them is required.
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
