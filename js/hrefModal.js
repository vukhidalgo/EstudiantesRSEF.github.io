function getQueryVariable(variable) {
  var query = window.location.search.substring(1);
  var vars = query.split("&");
  for (let i = 0; i < vars.length; i++) {
    let pair = vars[i].split("=");
    if (pair[0].toUpperCase() == variable.toUpperCase()) {
      return pair[1];
    }
  }
  return null;
}
