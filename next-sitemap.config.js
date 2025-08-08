/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://jfabricatorsmelbourne.com.au', 
  generateRobotsTxt: true,      
  sitemapSize: 5000,              
  changefreq: 'weekly',
  priority: 1,
};



// const glob = require('glob');
// const path = require('path');

// module.exports = {
//   siteUrl: 'https://example.com', // Change to your site
//   generateRobotsTxt: true,
//   changefreq: 'weekly',
//   priority: 0.7,

//   additionalPaths: async (config) => {
//     const pagesDir = path.join(__dirname, 'pages');

//     // Find all JS/TS/MDX files in /pages (excluding _app, _document, API routes)
//     const pageFiles = glob.sync('**/*.{js,jsx,ts,tsx,mdx}', {
//       cwd: pagesDir,
//       ignore: [
//         '**/_*.{js,jsx,ts,tsx,mdx}',
//         '**/api/**',
//       ],
//     });

//     // Convert to route paths
//     const paths = pageFiles.map((file) => {
//       let route = '/' + file.replace(/\.(js|jsx|ts|tsx|mdx)$/, '');
//       route = route.replace(/index$/, ''); // Remove index for cleaner URLs
//       if (route === '') route = '/';
//       return {
//         loc: route,
//         changefreq: 'weekly',
//         priority: route === '/' ? 1.0 : 0.7,
//       };
//     });

//     return paths;
//   },
// };
