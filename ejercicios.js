const cestaCompra = ["Lentejas", "Arroz", "Galletas", "Manzanas", "Yogur"];

for(let i=0; i < cestaCompra.length; i++) {
    console.log(cestaCompra[i]);
}

let rowsNumber = prompt("Indica el número de filas");

for (let i = 1; i <= rowsNumber; i++) { 
    console.log("*".repeat(i))
//  let row = "";
//  for (let j = 1; j <= i; j++) {
//    row += "*";
//  }
//  console.log(row)
};

