
// Datos del cliente 


let nombre = prompt("Ingrese su nombre de usuario");
if (nombre === "") {
    console.log("Necesitas un nombre de usuario ");
} else {
    console.log(nombre);
    alert(`Bienvenido ${nombre} ¿Qué precisas para tu hogar?`);
}


// Productos que van a ir en la página con sus valores

const productos = [
    {nombre: "Dispenser", precio: 1500},
    {nombre: "Picadora manual", precio: 2000},
    {nombre: "Angry mama", precio: 1000},
    {nombre: "Tabla de picar", precio: 1250},   
]
// 
productos.forEach((productos) => {
    console.log (productos.nombre);
    console.log (productos.precio);
})

//Fitrados

const dispenser = productos.filter((productos) => productos.nombre.includes ("Dispenser"));
console.log(dispenser);

const picadora = productos.filter((productos) => productos.nombre.includes ("Picadora manual"));
console.log(picadora);

const limpieza = productos.filter((productos) => productos.nombre.includes ("Angry mama"));
console.log(limpieza);

const tablita = productos.filter((productos) => productos.nombre.includes ("Tabla de picar"));
console.log(tablita);

// Base para crear carrito
let total = productos.reduce((acumulado, p) =>{
    return acumulado + p.precio;
},0);

console.log (total)

// Modificando html de a poco
let brand = document.querySelector(".navbar-brand").textContent ="Munay Cosas Marivillosas";
let shop = document.querySelector("#shop").textContent = "Tus cosas";