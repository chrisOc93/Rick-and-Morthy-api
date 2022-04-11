const num = Math.floor(Math.random() * 826);
    console.log(num);
fetch("https://rickandmortyapi.com/api/character/"+ num)
  .then(response => response.json())
  .then(data => generateHTML(data))


const generateHTML = (response) => {
    console.log(response);
    const html = `
    <h3 class="name">${response.name}</h3>
        <img style="border-radius:50%" src=${response.image}>
        <div class="details">
            <h3 class="textStyle">Species: ${response.species}</h3>
            <h3>Status: ${response.status}</h3>
        </div>
    `
    const portalDiv = document.querySelector('.data')
    portalDiv.innerHTML = html
}


  
  