// Get JSON file and parse
function jsonFromFile() {
     var request = new XMLHttpRequest();
     request.open("GET", `data.json`, false);
     request.send(null)
     return JSON.parse(request.responseText);
}