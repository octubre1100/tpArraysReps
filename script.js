let frutas = ["manzana", "tomate", "durazno"]
frutas.push ("pera")
frutas.unshift ("mango")
frutas.pop 
frutas.shift
console.log (frutas)
let nombres = ["Mangel", "Salvador", "Fernando"]
console.log (nombres.length)
nombres.push ( "Robert")
nombres.push ("Nick")
console.log (nombres.length)
let numeros = [5, 6, 2, 4, 9, 0]
for (let n= 0; n<numeros.length; n++) {
   console.log (numeros[n]) 

}
let nsumar = [1, 2, 3, 4, 5, 5]
let resultado = 0
for (let n= 0; n<nsumar.length; n++) {
    console.log (resultado += nsumar[n])  
    }      
let cosas = []
cosas.push (prompt("Escriba 1 palabras"), prompt("Escriba otra palabra"), prompt("Escriba otra palabra"), prompt("Escriba otra palabra"), prompt("Escriba la ultima palabra"))
console.log(cosas)    
