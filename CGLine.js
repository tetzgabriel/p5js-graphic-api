class CGLine {
  // Construtor com dados necessários para construir linha
  constructor(x1, y1, x2, y2, color) {
    this.x1 = x1;
    this.y1 = y1;
    this.x2 = x2;
    this.y2 = y2;
    this.color = color;
  }

  dda() {
    // Cor passada como SVG/CSS Color String
    // É possível utilizar RGB e outros padrões
    stroke(this.color);

    let dx = this.x2 - this.x1;
    let dy = this.y2 - this.y1;

    let iter = 0;

    if(Math.abs(dx) > Math.abs(dy)) {
      iter = Math.abs(dx);
    } else {
      iter = Math.abs(dy);
    }

    let x_inc = dx/iter;
    let y_inc = dy/iter;

    let x = this.x1;
    let y = this.y1;

    // Desenha ponto inicial
    point(Math.round(x), Math.round(y));

    // Desenha pontos através de iteração
    for (let k = 0; k <= iter; k++) {
      x = x + x_inc;
      y = y + y_inc

      point(Math.round(x), Math.round(y))
    }
  }
}
