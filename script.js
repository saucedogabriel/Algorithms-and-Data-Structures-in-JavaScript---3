// 1. Realizar un algoritmo que intercambie los valores de dos variables numéricas utilizando sólo esas dos variables (si almaceno el primer valor que ingresa el usuario en la variable num1 y el segundo en la variable num2, al final del programa el valor que estaba en num1 debe quedar en num2 y viceversa).

// EJERCICIO 1
const realizarCambioNumeros = () => {
    let num1 = Number(prompt('Ingrese el primer numero'));
    let num2 = Number(prompt('Ingrese el segundo numero'));

    if (num1 != '' && num2 != '') {
        let aux = num1;
        num1 = num2;
        num2 = aux;
    }
    console.log(`Numero 1 : ${num1}`); 
    console.log(`Numero 2 : ${num2}`); 
}

// realizarCambioNumeros();


// 2. Realizar un algoritmo que solicite al usuario ingresar un número y muestre por pantalla la cantidad de números ‘3’ que contiene (cero si no contiene ninguno).

// EJERCICIO 2
const recorrerNumero = () => {
    let num = prompt("ingrese un número");
    let tres = 3;
    let acc = 0;

    for (let index = 0; index < num.length; index++) {
        if(tres == num[index]){
            acc += 1;
        }
    }
    console.log(`La cantidad de veces que se repite el numero 3 en el numero ingresado son : ${acc} veces`);

}

// recorrerNumero();


// 3. Dados dos números enteros calcular el cociente y el resto de su división entera (utilizando solo división).

// EJERCICIO 3
const calcularCocenteResto = () => {
    let numero1  = Number(prompt('Ingresar el primer numero'));
    let numero2  = Number(prompt('Ingresar el segundo numero'));

    division(numero1, numero2);

    function division(dividendo, divisor) {
        let cociente = dividendo / divisor;
        let resto = parseInt(cociente * divisor - dividendo);
        console.log(`El cociente es ${cociente}`);
        console.log(`El resto es ${resto}`);
    }
}

// calcularCocenteResto();

