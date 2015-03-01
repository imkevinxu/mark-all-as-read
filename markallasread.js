var markallasread_visited = false;

function markallasread() {
  var urls = [];
  var links = document.links;
  for (var i = 0; i < links.length; i++) {
    urls.push(links[i].href);
  }
  chrome.runtime.sendMessage({
    urls: urls,
    visited: markallasread_visited
  });
  markallasread_visited = !markallasread_visited;
}
