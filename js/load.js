var request = new XMLHttpRequest();
request.open('GET', 'header.html', true);
request.onload = function() {
  if (request.status >= 200 && request.status < 400) {
    var resp = request.responseText;

    document.querySelector('header').innerHTML = resp;
  }
};
request.send();


var requestFooter = new XMLHttpRequest();
requestFooter.open('GET', 'footer.html', true);
requestFooter.onload = function() {
  if (requestFooter.status >= 200 && requestFooter.status < 400) {
    var resp = requestFooter.responseText;

    document.querySelector('footer').innerHTML = resp;
  }
};
requestFooter.send();



