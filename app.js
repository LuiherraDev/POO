let yo = {
  nombre: "yeison",
  edad: 22,
  hablar: function () {
    console.log(this.nombre);
  },
};

yo.hablar();


// Esto es lo mas parecido a una clase (template)
let Coche = function (marca, modelo, antiguedad, color, tipo) {
  this.marca = marca;
  this.modelo = modelo;
  this.antiguedad = antiguedad;
  this.color = color;
  this.tipo = tipo;
};

// Esto es un objeto
const miCoche = new Coche('Mercedes','Volador','2009','Rojo','Automatico');
const miCoche2 = new Coche("BYD","hibrido","2025","gris","automatico")

console.log(miCoche,miCoche2)

console.log(new Date())

// -----------------------------

const coche2 ={
  modelo:'a3',
  marca:'Audi',
  color:'blanco',
  arrancar: function(){
    return this.marca + ' es de color ' + this.color
  }
}
// las funciones dentro de los objetos se suelen llamar metodos
console.log(coche2.arrancar())

// ---------------------

let Coche10 = function (marca, modelo, antiguedad, color, tipo) {
  this.marca = marca;
  this.modelo = modelo;
  this.antiguedad = antiguedad
  this.color = color;
  this.tipo = tipo;
  this.detalles = function(){
    return "Tu coche es un "+this.marca+" "+this.modelo+" con "+this.antiguedad+" años, clase "+this.tipo+" y color "+this.color;
  }
};


let miCoche20 = new Coche10 ("Peugeot", "607", 2002, "rojo", "turismo");

miCoche20.detalles();

// ------------------------

function Libro(titulo, autor, año){
  this.titulo = titulo;
  this.autor = autor;
  this.año = año
}

function Revista(titulo,autor, año,mes){
  Libro.call(this, titulo, autor, año);
  this.mes = mes
}

const mag1 = new Revista('Mag One','John Doe','2018','Enero')


// ------------------

class Cochesito {
  constructor (marca, modelo, antiguedad, color, tipo) {
    this.marca = marca
    this.modelo = modelo
    this.antiguedad = antiguedad
    this.color = color
    this.tipo = tipo
  }
  detalles() {
    console.log(`Tu coche es un ${this.marca} ${this.modelo} con ${this.antiguedad} años, clase ${this.tipo} y color ${this.color}`);
  }
}


let miCochesito = new Cochesito("Peugeot", "607", 2002, "rojo", "turismo");
console.log(miCochesito)
miCochesito.detalles();


// -------------

class Furgon extends Cochesito {
  constructor (marca, modelo, antiguedad, color, tipo,taraMinima, cargaUtil, volumenCarga) {
    super(marca, modelo, antiguedad, color, tipo)
    this.taraMinima = taraMinima;
    this.cargaUtil = cargaUtil;
    this.volumenCarga = volumenCarga;
  }
};

let miFurgon = new Furgon("Peugeot", "607", 2002, "rojo", "turismo",1200, 768, 4.5);


// --------------- tambien hay public y private

class Cochelero{
  static info(edad){
    console.info(`Tienes ${edad} años ${ edad >= 18 ? "y puedes conducir": "y ... ¡Sorry! Sigue esperando para conducir."}`);
  }
  constructor(marca, modelo, antiguedad, color, tipo) {
    this.marca = marca;
    this.modelo = modelo;
    this.antiguedad = antiguedad;
    this.color = color;
    this.tipo = tipo;
  }
  detalles() {
    console.log(`Tu coche es un ${this.marca} ${this.modelo} con ${this.antiguedad} años, clase ${this.tipo} y color ${this.color}`);
  }
}

Cochelero.info(50);

Cochelero.info(8);

let miCoche77 = new Cochelero("Peugeot", "607", 2002, "rojo", "turismo");

console.log(miCoche77)
