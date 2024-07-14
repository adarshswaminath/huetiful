var fs = require("fs");

function page(title, date, lastmod, summary, content) {
  return `---
title: ${title}
date: ${date}
lastmod: ${lastmod}
summary: ${summary}
---
\n
${content}
`;
}
var pathToMD = `./temp`;

for (const doc of fs.readdirSync(pathToMD, "utf-8")) {
  //   for each doc append its data to the template and write to the www/ dir
  // after that delete the temp folder and regenerate  the toc component using data from navigation.json
}