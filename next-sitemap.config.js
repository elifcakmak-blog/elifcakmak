/** @type {import('next-sitemap').IConfig} */
module.exports = {
    siteUrl: "https://elifcakmak.blog", // Replace with your website URL
    generateRobotsTxt: true, // (Optional) Generate a `robots.txt` file
    sitemapSize: 5000, // Split sitemap into multiple files if there are more than 5000 URLs
    changefreq: "daily", // Update frequency for pages
    priority: 0.7, // Default priority for pages
  };
  