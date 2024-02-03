var searchText = "Jump To Recipe";
var found;

var aTags = document.getElementsByTagName("a");
for (var i = 0; i < aTags.length; i++) {
  if (aTags[i].textContent.toLowerCase().includes(searchText.toLowerCase())) {
    found = aTags[i];
    break;
  }
}

if (!found) {
  var buttonTags = document.getElementsByTagName("button");
  for (var i = 0; i < buttonTags.length; i++) {
    if (buttonTags[i].textContent.toLowerCase().includes(searchText.toLowerCase())) {
      found = buttonTags[i];
      break;
    }
  }
}

if (found) found.click();
