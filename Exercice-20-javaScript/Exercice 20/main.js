let image = '';

let nombre = 12;

for (let i = 1; i <= nombre; i++){
    nombre = '<image src ="https://picsum.photos/id/42/350/350'= + nombre + i +'"/ >'
}

document.body.innerHTML = image;