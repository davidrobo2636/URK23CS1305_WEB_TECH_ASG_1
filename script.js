// Using let to declare the shift employee array
let shiftEmployees = [];

function addEmployee() {
    let name = prompt("Enter employee name to add:");
    if (name) {
        shiftEmployees.push(name);
        alert(name + " added to the end of the shift.");
        showEmployees();
    }
}

function removeLast() {
    let removed = shiftEmployees.pop();
    if (removed) {
        alert(removed + " removed from the end of the shift.");
    } else {
        alert("No employee to remove.");
    }
    showEmployees();
}

function removeFirst() {
    let removed = shiftEmployees.shift();
    if (removed) {
        alert(removed + " removed from the start of the shift.");
    } else {
        alert("No employee to remove.");
    }
    showEmployees();
}

function addFirst() {
    let name = prompt("Enter employee name to add at start:");
    if (name) {
        shiftEmployees.unshift(name);
        alert(name + " added to the start of the shift.");
        showEmployees();
    }
}

function findEmployee() {
    let name = prompt("Enter employee name to find position:");
    let pos = shiftEmployees.indexOf(name);
    if (pos !== -1) {
        alert(name + " is at position " + pos + " in the shift.");
    } else {
        alert(name + " not found in the shift.");
    }
}

function showEmployees() {
    const output = document.getElementById("output");
    output.innerHTML = "<strong>Current Shift (" + shiftEmployees.length + " employees):</strong><br>" + shiftEmployees.join(" ➡️ ");
}
