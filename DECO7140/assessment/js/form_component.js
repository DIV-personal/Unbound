const myHeaders = new Headers();
myHeaders.append("student_number", "s4546701");
myHeaders.append("uqcloud_zone_id", "71e22d87");

const requestOptions = {
  method: "GET",
  headers: myHeaders,
  redirect: "follow",
};

fetch(
  "https://damp-castle-86239-1b70ee448fbd.herokuapp.com/decoapi/genericevent/",
  requestOptions
)
  .then((response) => response.json()) // Parse the JSON response
  .then((data) => {
    // Log the data to the console for debugging
    console.log(data);
    // Example: Dynamically display the event data on a webpage
    let output = ""; // Initialize a variable to store HTML
    // Loop through each event in the response data
    data.forEach((event) => {
      // Use the returned event information to build a webpage element
      output += `
<div class="event-card">
            <div class="date">
              <span class="day">${"id"}1</span>
              <span class="month">October</span>
            </div>
            <div class="event-info">
              <h2>${event.eventtype}</h2>
              <p>Time: All day (1 Oct - 6 Nov)<br />Age: 6 years and above</p>
              <p>
                Fan of a textile artwork? Experience the touch and feel artwork.
              </p>
            </div>
          </div>
`;
    });

    // Display the dynamically created HTML in the specified section of the webpage
    document.getElementById("event-list").innerHTML = output; // Ensure you have an element with ID 'event-list'
  })
  .catch((error) => console.error("Error:", error)); // Handle any errors that occur
