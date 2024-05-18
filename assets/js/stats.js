// Perform the GET request
response = fetch(
  "https://yordamchi.icysky-10e92f2c.westeurope.azurecontainerapps.io/stats"
).then((response) => response.json());

document.addEventListener("DOMContentLoaded", function () {
  response.then((data) => {
    // Assuming the server returns a JSON object like { id: '123', someAttribute: 'someValue' }
    document
      .getElementById("total-active-users")
      .setAttribute("data-purecounter-end", data.total_active_users);
    document
      .getElementById("daily-active-users")
      .setAttribute("data-purecounter-end", data.daily_active_users);
    document
      .getElementById("total-messages")
      .setAttribute("data-purecounter-end", data.total_messages);
    document
      .getElementById("total-payments")
      .setAttribute("data-purecounter-end", data.total_payments);
  });
});
