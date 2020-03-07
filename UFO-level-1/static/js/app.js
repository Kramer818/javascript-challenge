// from data.js
var tableData = data;

// YOUR CODE HERE!
var tbody = d3.select("tbody");
data.forEach(function(ufoReport) {
    var row = tbody.append("tr");
    Object.entries(ufoReport).forEach(function([key, value]) {
    var cell = row.append("td");
    cell.text(value);
    });
});

var button = d3.select("#filter-btn");

button.on("click", function() {
    d3.event.preventDefault();
    let newData = tableData;
    var inputField = d3.select("#datetime");
    var inputDate = inputField.property("value");
    newData = newData.filter(row => row.datetime === inputDate);
    var tbody = d3.select("tbody");
    tbody.html("")
    newData.forEach(function(newUFOReport) {
        var row = tbody.append("tr");
        Object.entries(newUFOReport).forEach(function([key, value]) {
        var cell = row.append("td");
        cell.text(value);
    })
})});