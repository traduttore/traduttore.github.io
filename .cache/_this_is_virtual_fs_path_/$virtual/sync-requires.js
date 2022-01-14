
// prefer default export if available
const preferDefault = m => (m && m.default) || m


exports.components = {
  "component---src-pages-404-js": preferDefault(require("/Users/alexbarkin/Desktop/Waterloo/4B/FYDP/traduttore.github.io/src/pages/404.js")),
  "component---src-pages-index-js": preferDefault(require("/Users/alexbarkin/Desktop/Waterloo/4B/FYDP/traduttore.github.io/src/pages/index.js")),
  "component---src-pages-week-1-js": preferDefault(require("/Users/alexbarkin/Desktop/Waterloo/4B/FYDP/traduttore.github.io/src/pages/week1.js"))
}

