// Perform the GET request
response = fetch(
  "https://data.heroku.com/dataclips/pvssylymoaydldxcrfgkvwfmtzzl.json"
).then((response) => response.json());

document.addEventListener("DOMContentLoaded", function () {
  response.then((data) => {
    // Assuming the server returns a JSON object like { id: '123', someAttribute: 'someValue' }
    document
      .getElementById("total-active-users")
      .setAttribute("data-purecounter-end", data.values[0][0]);
    document
      .getElementById("daily-active-users")
      .setAttribute("data-purecounter-end", data.values[0][1]);
    document
      .getElementById("total-messages")
      .setAttribute("data-purecounter-end", data.values[0][2]);
    document
      .getElementById("total-payments")
      .setAttribute("data-purecounter-end", data.values[0][3]);
  });
});
