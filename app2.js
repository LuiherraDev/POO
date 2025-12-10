// Ejercicio Mayas

class Warrior{
  constructor(life, power) {
    this.life = life;
    this.power = power;
  }

  attack() {
    return this.power
  }
  
  defend (damage){
    const health = this.life - damage
    console.log(`Tu vida restante es : ${health}`) 
  }
}

class Maya extends Warrior {
  constructor(life,power) {
    super(life,power)
  }

  drinkColaCao(){
    this.power += 10
  }
}

class Azteca extends Warrior {
  constructor(life,power) {
    super(life,power)
  }

  drinkNesquik(){
    this.life += 10
  }
}

// -----Empieza el juego---------
// Realiza la siguiente cadena de intercambio de golpes.
// Azteca bebe nesquik
const miAzteca = new Azteca (50,10)
miAzteca.drinkNesquik()
console.log(miAzteca)

// Maya bebe Cola Cao
const miMaya = new Maya (40,15)
miMaya.drinkColaCao()
console.log(miMaya)


// Maya ataca a azteca. Azteca defiende.
miAzteca.defend(miMaya.attack())


// Azteca ataca a maya. Maya defiende.
miMaya.defend(miAzteca.attack())
