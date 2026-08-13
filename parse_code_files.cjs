const fs = require('fs');

const jsContent = fs.readFileSync('./scratch_js.js', 'utf-8');

const slnMatches = [];
let idx = 0;
while ((idx = jsContent.indexOf('.sln', idx)) !== -1) {
  const start = Math.max(0, idx - 300);
  const end = Math.min(jsContent.length, idx + 600);
  slnMatches.push(jsContent.slice(start, end));
  idx += 5;
}

const csMatches = [];
idx = 0;
while ((idx = jsContent.indexOf('.cs', idx)) !== -1) {
  const start = Math.max(0, idx - 300);
  const end = Math.min(jsContent.length, idx + 600);
  csMatches.push(jsContent.slice(start, end));
  idx += 5;
}

console.log('=== SLN MATCHES ===');
console.log(slnMatches.join('\n===================\n'));

console.log('=== CS MATCHES ===');
console.log(csMatches.slice(0, 10).join('\n===================\n'));
