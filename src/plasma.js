/*! Credits: https://www.bidouille.org/prog/plasma */

function calculatePlasmaValue(x, y, time) {
  const cx = x + 0.5 * Math.sin(time / 5.0);
  const cy = y + 0.5 * Math.cos(time / 3.0);

  return (
    (Math.sin(x * 10 + time) +
      Math.sin((y * 10 + time) / 2.0) +
      Math.sin((x * 10 + y * 10 + time) / 2.0) +
      Math.sin(Math.sqrt(100 * (cx ** 2 + cy ** 2) + 1) + time)) /
    2
  );
}

const twoThirdsOfPi = (2 * Math.PI) / 3;

function applyColors(pixelData, offset, plasmaValue) {
  pixelData[offset] = 255;
  pixelData[offset + 1] =
    255 * (0.5 + 0.25 * Math.sin(Math.PI * plasmaValue + twoThirdsOfPi));
  pixelData[offset + 2] = 255 * (0.5 + 0.5 * Math.sin(Math.PI * plasmaValue));
  pixelData[offset + 3] = 128;
  pixelData[offset + 4] = 192 * (0.5 + 0.5 * Math.cos(Math.PI * plasmaValue));
  pixelData[offset + 5] =
    192 * (0.5 + 0.33 * Math.sin(Math.PI * plasmaValue + twoThirdsOfPi));
  pixelData[offset + 6] = 255 * (0.5 - 0.5 * Math.sin(Math.PI * plasmaValue));
  pixelData[offset + 7] = 92;
}

function drawFrame(context) {
  const time = new Date().getTime() * 0.0025;

  const w = context.canvas.width;
  const h = context.canvas.height;

  const imageData = context.getImageData(0, 0, w, h);

  const kx = w / h;
  for (let y = 0; y < h; y++) {
    const yy = y / h - 0.5;
    for (let x = 0; x < w; x++) {
      const xx = (kx * x) / w - kx / 2;
      const plasmaValue = calculatePlasmaValue(xx, yy, time);
      applyColors(imageData.data, (y * w + x) * 8, plasmaValue);
    }
  }

  context.putImageData(imageData, 0, 0);
}

export function drawStillPlasma(canvasId) {
  const canvas = document.getElementById(canvasId);
  const context = canvas.getContext('2d', { alpha: false });
  drawFrame(context);
}

export function drawAnimatedPlasma(canvasId) {
  const canvas = document.getElementById(canvasId);
  const context = canvas.getContext('2d', { alpha: false });

  function animate() {
    drawFrame(context);
    window.requestAnimationFrame(animate);
  }
  animate();
}
