function handleSubmit(event) {
    event.preventDefault()

    // check what text was put into the form field
    let formText = document.getElementById('name').value

    Client.checkForName(formText)

    console.log("::: Form Submitted :::")
    
    fetch('http://localhost:8081/test')
    .then(res => {
        return res.json()
    })
    .then(function(data) {
        document.getElementById('results').innerHTML = data.message
    })

}

function showCoffeeFlavs() {
    fetch('https://api.sampleapis.com/coffee/hot')
    .then(res => {
        return res.json();
    })
    .then(data => {
        const listContainer = document.getElementById('coffeeList');

        data.forEach(c => {
            const title = c.title;

            const listItem = document.createElement('li');

            listItem.textContent = `${title}`;

            listContainer.appendChild(listItem);
        });
    })
    .catch(error => console.error('Error fetching data:', error))
}

export { handleSubmit, showCoffeeFlavs }
