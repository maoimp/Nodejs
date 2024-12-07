'use strict'
// Parametros rest spread

function listadoFrutas(fruta1,fruta2, ...resto){

    console.log("Fruta 1",fruta1)
    console.log("Fruta 2",fruta2)
    console.log(resto)
    
}
listadoFrutas("pera" , "Manzano", "Sandia","Coco","Uva")