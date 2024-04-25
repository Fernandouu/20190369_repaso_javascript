let url ="https://api.kanye.rest/";

const consumirAPIGOAT = async () => {
    const respuesta = await fetch(url);
    const resultado = await respuesta.json();

    let ContenidoQuotes = document.getElementById("ContenidoQuotes");
    let Quote = document.getElementById("Quote");

    Quote.innerText = resultado.quote;
    ContenidoQuotes.innerHTML = `
    <p> 
    ${resultado.quote}
    </p>
    `

} 
consumirAPIGOAT();