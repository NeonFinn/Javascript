 fetch(url)
    .then(response => response.json())
    .then(json => displayResults(json));