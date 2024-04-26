let preferidos = [
    {
        nombre: "Metro Boomin",
        Genero: "Hip-hop/rap",
        albumF: "WE DONT TRUST YOU/WE STILL DONT TRUST YOU"
    },
    {
        
        nombre: "Bad Bunny",
        Genero: "rap, trap y reguetón en español.",
        albumF: "Todos"
    },
    {
        
        nombre: "Feid",
        Genero: "Pop",
        albumF: "FERXXOCALIPS"
    },
    {
        
        nombre: "Kanye West (YE)",
        Genero: "Hip-hop/rap",
        albumF: "Todos"
    },
    {
        
        nombre: "Jhayco",
        Genero: "Trap Latino",
        albumF: "TIMELEZZ"
    },
    {
        
        nombre: "Mora",
        Genero: "Trap Latino",
        albumF: "Un poco de todos"
    },
    {
        
        nombre: "Eadio Carrion",
        Genero: "Trap Latino",
        albumF: "Todos"
    },
    {
        
        nombre: "Duki",
        Genero: "Hip-hop/rap",
        albumF: "Antes de Ameri"
    },
    {
        
        nombre: "Kendrick Lamar",
        Genero: "Hip-hop/rap",
        albumF: "Mr Morale and the Big Steppers / Humble"
    },
    {
        
        nombre: "21 Savage",
        Genero: "Hip-hop/rap",
        albumF: "American Dream"
    }
]
const contenedorPreferidos = document.querySelector('#contenedor-preferidos');
        
        // Recorre la lista de preferidos y crea un elemento HTML para cada uno
        preferidos.forEach(preferido => {
            // Crea un div para cada preferido
            const div = document.createElement('div');
            
            // Añade contenido con la información del preferido
            div.innerHTML = `
                <h3>${preferido.nombre}</h3>
                <p><strong>Género:</strong> ${preferido.Genero}</p>
                <p><strong>Álbum favorito:</strong> ${preferido.albumF}</p>
            `;
            
            // Añade el div al contenedor
            contenedorPreferidos.appendChild(div);
        });