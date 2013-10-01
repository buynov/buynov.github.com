var redirectOptions = {
    'BG' : 0,
    'EN' : 1
};
	
function redirectCurrent(option) {
  var newUrl;
  if (option == redirectOptions.BG) {
    var path = document.location.pathname;
    if (path.indexOf("/en") == 0) {
        path = path.substring("/en".length);
    }
    newUrl = 
        document.location.protocol +
        "//" +
        document.location.host + 
        path;
  } else if (option == redirectOptions.EN) {
    var path = document.location.pathname;
    if (path.indexOf("/en") != 0) {
        path = "/en" + path;
    }
    newUrl = 
        document.location.protocol +
        "//" +
        document.location.host + 
        path;
  }

  if (document.location.href != newUrl)
    window.location = newUrl;
}
