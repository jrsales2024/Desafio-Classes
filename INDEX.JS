class Heroi {
    constructor(nome, idade, tipo) {
      this.nome = nome;
      this.idade = idade;
      this.tipo = tipo;
    }
  
    atacar() {
      let ataque;
      switch (this.tipo) {
        case "mago":
          ataque = "usou magia";
          break;
        case "guerreiro":
          ataque = "usou espada";
          break;
        case "monge":
          ataque = "usou artes marciais";
          break;
        case "ninja":
          ataque = "usou shuriken";
          break;
        default:
          ataque = "usou uma habilidade desconhecida";
      }
  
      console.log(`O ${this.tipo} ${this.nome} atacou usando ${ataque}`);
    }
  }
const heroi1 = new Heroi("Gandalf", 2000, "mago");
const heroi2 = new Heroi("Aragorn", 87, "guerreiro");
const heroi3 = new Heroi("Legolas", 2931, "ninja");
const heroi4 = new Heroi("Nicolas", 955, "monge");

heroi1.atacar(); // Saída: O mago Gandalf atacou usando magia
heroi2.atacar(); // Saída: O guerreiro Aragorn atacou usando espada
heroi3.atacar(); // Saída: O ninja Legolas atacou usando shuriken
heroi4.atacar(); // Saída: O ninja Legolas atacou usando shuriken