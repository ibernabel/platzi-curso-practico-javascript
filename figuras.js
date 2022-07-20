// Código del cuadrado
console.group("Cuadrados");

function perimetroCuadrado(lado) {
  return lado * 4;
}

function areaCuadrado(lado) {
  return lado * lado;
}
console.groupEnd();

function calcularPerimetroCuadrado() {
  const input = document.getElementById("InputCuadrado");
  const value = input.value;

  const perimetro = perimetroCuadrado(value);
  alert(perimetro);
}
function calcularAreaCuadrado() {
  const input = document.getElementById("InputCuadrado");
  const value = input.value;

  const area = areaCuadrado(value);
  alert(area);
}

// Código del triángulo
console.group("Triángulos");

function perimetroTriangulo(lado1, lado2, base) {
  return lado1 + lado2 + base;
}

function areaTriangulo(base, altura) {
  return (base * altura) / 2;
}

console.groupEnd();

function calcularPerimetroTriangulo() {
  const inputLado1 = document.getElementById("inputLado1");
  const inputLado2 = document.getElementById("inputLado2");
  const inputBase = document.getElementById("inputBase");
  const valueLado1 =  Number( inputLado1.value );
  const valueLado2 = Number( inputLado2.value );
  const valueBase = Number( inputBase.value );

  const perimetro = perimetroTriangulo(valueLado1, valueLado2, valueBase);
  alert(perimetro);
}
function calcularAreaTriangulo() {
  const inputLado1 = document.getElementById("inputLado1");
  const inputBase = document.getElementById("inputBase");

  const valueLado = inputLado1.value;
  const valueBase = inputBase.value;

  const area = areaTriangulo(valueBase, valueLado);
  alert(area);
}

// Código del triángulo Isosceles
function isIsosceles(lado1, lado2, base) {
  return (lado1 == lado2 && lado1 != base); 
}

function calcAlturaIsosceles(lado, base) {
 return Math.sqrt( 
    (lado * lado) - ( (base * base) / 4)
    );
}

// console.log(isIsosceles(15, 10, 15));
function calcularAlturaTriangulo() {
  const inputLado1 = document.getElementById("inputLado1Isosceles");
  const inputLado2 = document.getElementById("inputLado2Isosceles");
  const inputBase = document.getElementById("inputBaseIsosceles");
  
  const lado1 =  Number( inputLado1.value );
  const lado2 = Number( inputLado2.value );
  const base = Number( inputBase.value );
  const isosceles = isIsosceles(lado1, lado2 , base);

  if ( !isosceles ) {
    ( alert("No es un triangulo Isosceles") );
  } else {
    let altura = calcAlturaIsosceles(lado1, base);

      altura = altura.toFixed(2);

      alert(altura);
    }
}


// Código del círculo
console.group("Círculos");

// Diámetro
function diametroCirculo(radio) {
  return radio * 2;
}

// PI
const PI = Math.PI;
// console.log("PI es: " + PI);

// Circunferencia
function perimetroCirculo(radio) {
  let diametro = diametroCirculo(radio);
  let perimetro = diametro * PI;
  perimetro = perimetro.toFixed(2);
  return perimetro;
}

// Área
function areaCirculo(radio) {
  let area = (radio * radio) * PI;
  console.log(typeof area);
  area = area.toFixed(2);
  return area;
}

console.groupEnd();

function calcularPerimetroCirculo() {
  const input = document.getElementById("InputCirculo");
  const value = input.value;

  const perimetro = perimetroCirculo(value);
  alert(perimetro);
}
function calcularAreaCirculo() {
  const input = document.getElementById("InputCirculo");
  const value = input.value;

  const area = areaCirculo(value);
  alert(area);
}