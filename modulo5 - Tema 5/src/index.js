import _ from 'lodash';
import './style.css';
import './estilo.scss';

function componente () {
    const elemento = document.createElement('div');

    elemento.innerHTML =_.join(['Hola', 'Webpack'],' ')
    elemento.classList.add('fondo');

    return elemento
}

document.body.appendChild(componente())