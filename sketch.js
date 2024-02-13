function setup() {
  randomSeed(nfaRandom(0, 9999999));
  noiseSeed(nfaRandom(0, 9999999));
  a = min(400, 650);
  windX = a;
  windY = a;
  var cnv = createCanvas(windowWidth / 2, windowHeight - windowHeight / 4);

  var a = (windowWidth - width) / 2;
  var y = (windowHeight - height) / 2;
  cnv.position(a, y);
  colorMode(HSB, 360, 100, 100);
  noFill();
}

//------------------------------------------------------------------
dddR = nfaRandom(220, 1224);
raioR = nfaRandom(1, 515);
numeroMaximoR = nfaRandom(4, 17);

//quantdequad
noveum = nfaRandom(0.93, 0.99);
vardo91 = nfaRandom(1, 50);
if (vardo91 == 50) {
  noveum = 0.55;
}

//grossuradoquad
str1 = 2;
str1R = nfaRandom(0, 99);
if (str1R == 22) {
  str1 = 11;
}

osIf = nfaRandom(1, 25);
console.log("osIf", osIf);

ifLine = nfaRandom(1, 4);

function draw() {
  let baseHue = random(360);
  let paletaDeCores = [];
  for (let i = 0; i < 15; i++) {
    paletaDeCores.push(color((baseHue + i * 72) % 360, 80, 90));
  }

  translate(windX / 2, windY / 2);

  background("#000000");

  redius = raioR;

  numeroMaximo = numeroMaximoR;
  cabelo = 1.05;

  for (let a = 0; a < TWO_PI; a += TWO_PI / dddR) {
    function calculateVariations(osIf, raioR, a) {
      let funcs = [
        (x) => cos(x) + sin(x),
        (x) => sin(x) * cos(x),
        (x) => tan(x) - cos(x),
        (x) => 1 / (sin(x) + cos(x)),
        (x) => sqrt(abs(sin(x))),
        (x) => -sqrt(abs(cos(x))),
        (x) => tan(x) * sin(x),
        (x) => cos(x) / (1 + abs(sin(x))),
        (x) => sin(x) / (1 + abs(cos(x))),
        (x) => (cos(x) * sin(x)) / tan(x),
        (x) => abs(sin(x) * cos(x)),
        (x) => (sin(x) - cos(x)) * tan(x),
      ];

      let index1 = osIf % funcs.length;
      let index2 = (osIf + 1) % funcs.length;
      let index3 = (osIf + 2) % funcs.length;
      let index4 = (osIf + 3) % funcs.length;

      a1 = raioR * funcs[index1](a) + raioR * funcs[index3](a / 2);
      b1 = raioR * funcs[index2](a) + raioR * funcs[index4](a / 3);
      c1 = raioR * funcs[index3](-a) + raioR * funcs[index1](-a / 2);
      d1 = raioR * funcs[index4](-a) + raioR * funcs[index2](-a / 3);

      return { a1, b1, c1, d1 };
    }
    calculateVariations(osIf, raioR, a);

    if (ifLine == 2) {
      line(a1, b1, c1, d1);
    }

    beginShape();
    for (n = -1; n < numeroMaximo + 2; n++) {
      raional = noise(n, 0, numeroMaximo, 0, 1);
      raionalIvrt = 1 - raional;

      xn = a1 * raional + c1 * raionalIvrt;
      yn = b1 * raional + d1 * raionalIvrt;

      u = dist(xn, yn, 0, 0);
      uMouse = map(u, 0, raioR, 1, 0);
      noi = noise(xn * cabelo, yn * cabelo) * 20 * uMouse;

      if (n > 0 && n < numeroMaximo) {
        strokeWeight(nfaRandom(0, 80));
        if (nfaRandom(0.9)) {
          stroke(paletaDeCores[int(random(1))]);
          strokeWeight(1);
          rect(noise(xn + noi, yn, nfaRandom(0, 11)));
          strokeWeight(13);
        } else {
          stroke(paletaDeCores[int(random(1))]);
        }
        point(noise(xn + noi, yn));

        if (nfaRandom(0, 1) > noveum && a > PI / 5 && a < PI - PI / 5) {
          strokeWeight(str1);

          rect(xn + noi + 10, yn, xn + noi, yn);
        }
      }
      curveVertex(xn + noi, yn);
    }
    stroke(paletaDeCores[int(random(2))]);
    strokeWeight(1);
    endShape();
  }

  granuladeza = 50;

  loadPixels();
  let boatDensidade = pixelDensity();
  let imagenzada = 4 * (width * boatDensidade) * (height * boatDensidade);
  for (let l = 0; l < imagenzada; l += 4) {
    granuladeza = map(noise(l / 1000), 0, 1, -50, 50);
    granuladeza = nfaRandom(-10, 50);
    pixels[l] = pixels[l] + granuladeza;
    pixels[l + 1] = pixels[l + 1] + granuladeza;
    pixels[l + 2] = pixels[l + 2] + granuladeza;
    pixels[l + 3] = pixels[l + 3] + granuladeza;
  }
  updatePixels();

  noLoop();

  nfaFinish([
    {
      trait_type: "Density Division",
      value: dddR.toString(),
    },
    {
      trait_type: "Average Radius",
      value: raioR.toString(),
    },
    {
      trait_type: "Max Elements",
      value: numeroMaximoR.toString(),
    },
    {
      trait_type: "Rarity Factor",
      value: noveum.toFixed(2),
    },
    {
      trait_type: "Special Variation",
      value: vardo91.toString(),
    },
    {
      trait_type: "Line Mode",
      value: ifLine.toString(),
    },
  ]);

  //console.log("Finalizing NFT with Attributes:", JSON.stringify(attributes));
}
