document.getElementById('title').style.display = 'block';

// Get parsed JSON data and then parse it through category function
jsonFromFile().forEach((category) => parseCategory(category));