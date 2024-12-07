'use strict'

var pelicula = {
    titulo : 'La ouija',
    pais : 'Mexico',
    year : 2023,
}
var peliculas = {
    titulo : 'Interestelar',
    pais : 'Massachuset',
    año : 1988,
    //pelicula
}

var caja_peliculas = document.querySelector('#peliculas')
var caja_peliculas2 = document.querySelector('#peliculas2')
var index
for (index in peliculas){
    var p = document.createElement("p")
    var p1 = document.createElement("p")
    
    caja_peliculas2.append(p1)
    caja_peliculas.append(p)
    p1.append(peliculas[index])
    p.append(peliculas[index])
    //p1.append(peliculas[index].titulo)
}

/*var caja_peliculas = document.querySelector('#peliculas3')
var pelis = [
    { titulo:"peliculas1"},
    { titulo:"peliculas1"},
    { titulo:"peliculas1"}
]

for (let pelic of pelis){
     var p= document.createElement("p")
     p.textContent = pelic.titulo
     caja_peliculas(p)
}

*/
var caja_peliculas1 = document.querySelector('#peliculas1')
var index1
for (index1 in pelicula){
    var q = document.createElement("q")
    
    q.append( pelicula[index1])

    q.append( pelicula[index1.titulo])
    caja_peliculas1.append(q)
}


const peliculas3 = [
    { titulo: "El Padrino", genero: "Drama", anio: 1972 },
    { titulo: "Pulp Fiction", genero: "Crimen", anio: 1994 },
    { titulo: "El Señor de los Anillos", genero: "Fantasía", anio: 2001 }
];

// Extraer los títulos en una nueva lista
const titulos = peliculas3.map(peliculas3 => peliculas3.titulo);
//var caja1 = document.querySelector('#peliculas3')
var index3
var caja1 = document.querySelector('#peliculas3')
/*for (index3 in peliculas3){
    var r = document.createElement("p")
    
    .append( peliculas3[index3].titulo)
 
}*/
q.append( peliculas3[index3.titulo])
    caja1.append(q)
console.log("new json"+titulo);
// Salida: ["El Padrino", "Pulp Fiction", "El Señor de los Anillos"]




console.log(pelicula)
console.log(peliculas)
