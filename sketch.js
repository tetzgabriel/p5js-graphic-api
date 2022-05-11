function setup() {
  // Cria canvas
  createCanvas(400, 400);
}

function draw() {
  // Seta cor do backgorund
  background(220);

  // Cria linha
  let cgLine = new CGLine(10, 10, 100, 100, 'red')

  // Desenha linha através do método dda
  cgLine.dda()
}
