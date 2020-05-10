// from data.js
var tableData = data;

// use d3 select tbody to append the rows
var tbody = d3.select("tbody");

// function to take an Input array and read each entry in the array to appends row and data into the tbody
function displaydata(InputArray) {
    InputArray.forEach(record => {
        var row = tbody.append("tr");
        Object.entries(record).forEach(([key, value]) => {
            cell = row.append("td");
            cell.text(value);
        })
    });
}

// To have complete data be displayed when the web page loads
displaydata(tableData);

// using d3 select filter button , used for event handler
var button = d3.select("#filter-btn");

// event handler for button on click
button.on("click", function() {

    // user input value for date
    var DateInput = d3.select("#datetime");
    var dateValue = DateInput.property("value");

    // filter function to return filtered data from the complete table based on user Input, if user does not input a date and clicks on filter button, data for the complete table will be displayed
    var filteredDate = tableData.filter(data => data.datetime === dateValue || dateValue.length == 0);

    console.log(filteredDate)

    // clear table body, to display filtered data
    tbody.html("");

    // display filetered data records else, "No data found"
    if (filteredDate.length > 0) {
        displaydata(filteredDate);
        console.log("Data displayed!!");
    } else {
        var row = tbody.append("tr");
        cell = row.append("td");
        cell.text("No data found for the date selected");
        console.log("No data found for selected criteria");
    }

});