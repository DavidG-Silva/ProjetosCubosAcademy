
const carro = {
  ligado: false,
  velocidade: 0,
  ligar: function () {
    if (this.ligado) {
      console.log("Este carro ja esta ligado.");
    } else {
      this.ligado = true;
      console.log(`Carro ${this.ligado ? 'ligado' : 'desligado'}. Velocidade: ${this.velocidade}.`);
    }
  },
  desligar: function () {
    if (!this.ligado) {
      console.log("Este carro ja esta desligado.");
    } else {
      this.ligado = false;
      this.velocidade = 0;
      console.log(`Carro ${this.ligado ? 'ligado' : 'desligado'}. Velocidade: ${this.velocidade}.`);
    }
  },
  acelerar: function () {
    if (!this.ligado) {
      console.log("Não é possível acelerar um carro desligado.");
    } else {
      this.velocidade += 10;
      console.log(`Carro ${this.ligado ? 'ligado' : 'desligado'}. Velocidade: ${this.velocidade}.`);
    }
  },
  desacelerar: function () {
    if (!this.ligado) {
        console.log("Não é possível desacelerar um carro desligado.");
      } else {
        this.velocidade -= 10;
        console.log(`Carro ${this.ligado ? 'ligado' : 'desligado'}. Velocidade: ${this.velocidade}.`);
      }
  },
}

carro.desligar();
carro.ligar();
carro.ligar();
carro.acelerar();
carro.acelerar();
carro.desacelerar();
carro.desligar();
carro.acelerar();
carro.desacelerar();
