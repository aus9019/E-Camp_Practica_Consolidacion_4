function agregarPersonaje(row, color, newPersonaje) {
    let url = `http://swapi.dev/api/people/${newPersonaje}`;
    fetch(url, {
        headers: {
            "Content-Type": "application/json",
        },
        method: "GET",
    })
        .then(response => response.json())
        .then(data => {
            const div = document.createElement('div');
            div.classList.add('col-12', 'col-md-6', 'col-lg-4', 'a');
            div.innerHTML = `
                <div class="cuadros d-flex">
                    <div class="circulo" style="background-color:${color}"></div>
                    <div class="info">
                        <h6>${data.name}</h6>
                        <p>Estatura: ${data.height} cm, Peso: ${data.mass} kg</p>
                    </div>
                </div>
            `;
            document.querySelector(row).appendChild(div);
        })
        .catch(error => console.error(error));
}

function* generador(row, color, newPersonaje) {
    for (let i = 0; i < 5; i++) {
        agregarPersonaje(row, color, newPersonaje);
        yield;
    }
}

document.addEventListener('DOMContentLoaded', () => {
    let contador = 1;
    document.querySelector('#rango1_5').addEventListener('mouseenter', () => {
        if (contador <= 5) {
            let generador1 = generador('.row1', 'rgb(240, 131, 116)', contador);
            generador1.next();
            contador++;
        } else {
            console.log('Se han generado los 5 Personajes POPULARES');
        }
    });

    let contador1 = 6;
    document.querySelector('#rango6_11').addEventListener('mouseenter', () => {
        if (contador1 <= 10) {
            let generador2 = generador('.row2', 'rgb(132, 245, 132)', contador1);
            generador2.next();
            contador1++;
        } else {
            console.log('Se han generado los 5 Personajes IMPORTANTES');
        }
    });

    let contador2 = 11;
    document.querySelector('#rango12_17').addEventListener('mouseenter', () => {
        if (contador2 <= 15) {
            let generador3 = generador('.row3', 'rgb(111, 200, 255)', contador2);
            generador3.next();
            contador2++;
        } else {
            console.log('Se han generado los 5 Personajes SIGNIFICATIVOS');
        }
    });
});


