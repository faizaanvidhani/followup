"use strict";
const loadDataButton = document.getElementById("loader");
const tableToggle = document.getElementById("tableToggle");
const table = document.getElementById("table");
const modifyToggle = document.getElementById("modifyToggle");
loadDataButton.addEventListener("click", getAndUpdateDropDown);
tableToggle.addEventListener("change", postAndDisplayTable);
modifyToggle.addEventListener("change", updateTextBoxes);
let checkedRow;
/**
 * Makes a GET request to an endpoint to fetch all the table names and updates the table names dropdown.
 */
function getAndUpdateDropDown() {
    fetch('http://localhost:4567/table-names')
        .then((response) => response.json())
        .then((t) => updateTableNamesDropDown(t.tableNames))
        .catch((error) => console.error("Error: ", error));
}
/**
 * Updates the tables names dropdown.
 *
 * @param tableNames - an array of strings where each element is the name of one table in the database.
 */
function updateTableNamesDropDown(tableNames) {
    tableToggle.innerHTML = ""; // clear table dropdown
    for (const tableName of tableNames) {
        const option = document.createElement("option");
        option.value = tableName;
        option.text = tableName;
        tableToggle.appendChild(option);
    }
    postAndDisplayTable(); // so that the table that the dropdown is automatically set to is displayed
}
/**
 * Makes a POST request to an endpoint to fetch all the table contents for a table and displays the table.
 */
function postAndDisplayTable() {
    const postParameters = {
        // the table selected in the dropdown is the one whose information needs to be loaded
        tableToLoadName: tableToggle.value
    };
    fetch('http://localhost:4567/table-data', {
        method: 'POST',
        headers: {
            "Content-Type": "applications/json",
            "Access-Control-Allow-Origin": "*",
        },
        // Data in JSON format to send in the request
        body: JSON.stringify(postParameters),
    })
        .then((response) => response.json())
        .then((t) => displayTable(t))
        .catch((error) => console.error("Error: ", error));
}
/**
 * Displays the contents of a certain table.
 *
 * @param tableContents - contains the column names and row contents for a table.
 */
function displayTable(tableContents) {
    table.innerHTML = ""; // clears the table contents
    const columnNames = tableContents.columnNames;
    const rowContents = tableContents.rowContents;
    // creates the first row of the table composed of the column names
    const columnNamesRow = document.createElement("tr");
    for (const columnName of columnNames) {
        const column = document.createElement("th");
        column.innerHTML = columnName;
        columnNamesRow.appendChild(column);
    }
    // last column of table are for the select buttons
    const buttonCol = document.createElement("th");
    columnNamesRow.appendChild(buttonCol);
    table.appendChild(columnNamesRow);
    // creates the rest of the rows composed of table values
    const numRows = rowContents.length / columnNames.length;
    for (let i = 0; i < numRows; i++) {
        const row = table.insertRow();
        // build one row at a time, inserting cells horizontally
        for (let j = 0; j < columnNames.length; j++) {
            const index = (i * columnNames.length) + j;
            const cell = row.insertCell();
            cell.innerHTML = rowContents[index];
        }
        // adding the cell with the select button to the end of each row
        const checkboxCell = row.insertCell();
        const checkbox = document.createElement("input");
        checkbox.type = "radio"; // type is radio so that only one button can be selected at a time
        checkbox.name = "checkbox";
        checkbox.addEventListener("click", () => checkedRow = row); // set global field
        checkboxCell.appendChild(checkbox);
    }
}
/**
 * Adds new text boxes based on what is needed from user to modify the table in a specific way.
 */
function updateTextBoxes() {
    const updateInputs = document.getElementById("modifyInputs");
    updateInputs.innerHTML = "<br>";
    // one button for submitting modifications for the table
    const submit = document.createElement("input");
    submit.type = "submit";
    submit.addEventListener("click", modifyTable);
    switch (modifyToggle.value) {
        case "insert":
            updateInputs.innerHTML += "<label>Row contents to insert: </label>";
            updateInputs.innerHTML += "<input type=text size=15 id=insertContents>";
            updateInputs.innerHTML += "<span style='display:inline-block; width:20px;'></span>";
            updateInputs.appendChild(submit);
            break;
        case "delete":
            updateInputs.innerHTML += "<label>Select the row to delete and press submit when done</label>";
            updateInputs.innerHTML += "<span style='display:inline-block; width:20px;'></span>";
            updateInputs.appendChild(submit);
            break;
        case "update":
            updateInputs.innerHTML += "<label>Select the row to update, fill in the boxes, and press submit when done</label>";
            updateInputs.innerHTML += "<br>";
            updateInputs.innerHTML += "<label>Name of column to update: </label>";
            updateInputs.innerHTML += "<input type=text size=24 id=columnName>";
            updateInputs.innerHTML += "<span style='display:inline-block; width:20px;'></span>";
            updateInputs.innerHTML += "<label>New cell value: </label>";
            updateInputs.innerHTML += "<input type=text size=10 id=newValue>";
            updateInputs.innerHTML += "<span style='display:inline-block; width:20px;'></span>";
            updateInputs.appendChild(submit);
            break;
        default:
            break;
    }
}
/**
 * Once a user presses submit, a POST request is sent to update the table
 */
function modifyTable() {
    switch (modifyToggle.value) {
        case "insert":
            const insertContents = document.getElementById("insertContents");
            const insertBody = {
                tableName: tableToggle.value,
                // an array of cell values representing the row to be inserted
                rowValues: insertContents.value
            };
            fetchPost("insert", insertBody);
            break;
        case "delete":
            const deleteBody = {
                tableName: tableToggle.value,
                // an array of cell values to be inserted for a row
                rowValues: getRowValues()
            };
            fetchPost("delete", deleteBody);
            break;
        case "update":
            const columnToDelete = document.getElementById("columnName");
            const newValue = document.getElementById("newValue");
            const updateBody = {
                tableName: tableToggle.value,
                // an array of cell values to be inserted for a row
                rowValues: getRowValues(),
                columnToDelete: columnToDelete.value,
                newValue: newValue.value
            };
            fetchPost("update", updateBody);
            break;
        default:
            break;
    }
}
/**
 * Gets the cell values of the row in the table that is selected
 */
function getRowValues() {
    let values = "";
    for (let i = 0; i < checkedRow.cells.length - 1; i++) {
        values = values + checkedRow.cells[i].innerHTML + ",";
    }
    return values.slice(0, -1);
}
/**
 * Sends a POST request to an endpoint for the purpose of modifying the table.
 *
 * @param endpoint - the endpoint to send the request to
 * @param postParameters - the body of the POST request
 */
function fetchPost(endpoint, postParameters) {
    console.log(postParameters);
    fetch('http://localhost:4567/' + endpoint, {
        method: 'POST',
        headers: {
            "Content-Type": "applications/json",
            "Access-Control-Allow-Origin": "*",
        },
        // Data in JSON format to send in the request
        body: JSON.stringify(postParameters),
    })
        .then((response) => response.json())
        .then((res) => console.log(res))
        .catch((error) => console.error("Error: ", error));
    // reloads and displays the updated table
    postAndDisplayTable();
}
