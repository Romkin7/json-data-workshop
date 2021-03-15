/** Data manipulation class v1.0.0 */
/** By Roman Tuomisto, all rights reserved 2021 */
const request = new XMLHttpRequest(),
    method = "GET",
    url = "profiles.json";

request.open(method, url, true);
request.onreadystatechange = function () {
  // In local files, status is 0 upon success in Mozilla Firefox
  if(request.readyState === XMLHttpRequest.DONE) {
    var status = request.status;
    if (status === 0 || (status >= 200 && status < 400)) {
      // The request has been completed successfully
      console.log(JSON.parse(request.responseText));
    } else {
      // Oh no! There has been an error with the request!
    }
  }
};
request.send();
