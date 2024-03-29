
let treinoRaw = 'leg press 45,50 8.65 10.80 7';
/*const mapear = (cualquierArray) => {
  cualquierArray.forEach((elemento) => {
              elemento.split(','));
console.log(elemento[0])}
};*/

//let a = str.forEach((element) => console.log(element));


const getNames = (nameA, nameB) => nameA + ' ' + nameB;
const Result = getNames();
//console.log(Result);

const getNames2 = (nameA, nameB) => { nameA + ' ' + nameB }; //aqui no hay return implicito por el => a + b. entonces retorna undefined si hago eso:

const result2 = getNames2();
//console.log(result2);

const getNames3 = () => 'persona';

const callAndPrint = (nameFunction) => 
  console.log("Hello " + nameFunction())

//callAndPrint(getNames3);

const filterName = (treinoRawString) => console.log(treinoRawString.split(','));

const treinoFiltered = filterName(treinoRaw);
//const sets = treinoFiltered[1].split('.');

const complexObject = {
  name: (nombre) => nombre.toUpperCase(),
  infoEjercicio: {
    isUnilateral: true,
    frecuencia: "semanal"
  }
};

const ejerciciosComplex = {
  name: 'Pull down',
  infoEjercicio: 'unilateral'
};
//Object.freeze(complexObject)
//complexObject.name('leg press');
//complexObject.infoEjercicio.isUnilateral = false;
//complexObject.infoEjercicio

const datosPorDefecto = {
  tipo: 'ejercicio'
};
const complexObject2 = {
  name: 'Ana',
  ...datosPorDefecto,
}
//console.log(complexObject2)

const sayHi = (userData) => {
  console.log('Hi'+ userData.infoEjercicio + ' ' + userData.name);}

sayHi(complexObject);

const sayHello = (userData) => {
  if (!userData.name || !userData.infoEjercicio) {
    console.log('Invalid data!');
    return
  } else { console.log('Hello '+ userData.infoEjercicio + ' ' + userData.name);
}};
array = [1,2,3]
array.pop() //le quita el ultimo elemento del array
array2 = [12,12,14]
combinedArrays = [...array, ...array2];
sayHello(ejerciciosComplex)

