/* elemento.innerHTML = 'Hola Webpack'
['Hola', 'Webpack', 'Petro', 'Paula']
function saludar(nombre, apellido) {
    console.log('Hola ' + nombre + apellido)
}

" "
"Hola mi nombre es Javier"
saludar("Ana", "Juarez")  */

import _ from 'lodash';
import './style.css';
import Imagen from './calabaza.png';
import Datos from './datos.csv';
import yaml from './datos.yaml';
import json5 from './datos.json5';

function componente () {
    const elemento = document.createElement('div');

    elemento.innerHTML =_.join(['Hola', Datos[0][1]],' ')
    elemento.classList.add('hola');

    const miImagen = new Image();
    miImagen.src = Imagen;
    elemento.appendChild(miImagen);

    console.log(Datos);

    return elemento
}

console.log(yaml.title);
console.log(json5.owner.name);

document.body.appendChild(componente())
