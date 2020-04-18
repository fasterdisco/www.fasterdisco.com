import { isPlatformLittleEndian } from './platform-endianness';

/*! https://www.bidouille.org/prog/plasma */
/*! https://hacks.mozilla.org/2011/12/faster-canvas-pixel-manipulation-with-typed-arrays/ */

// 32-bit color byte order cheat sheet:
// - Little endian platform: alpha blue green red
// - Big endian platform: red green blue alpha

const canvas32BitBackgroundColor = isPlatformLittleEndian
  ? 0xff691083
  : 0x831069ff;

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

function apply32BitColors(pixelData, offset, plasmaValue) {
  // Apply a 32-bit color with features:
  // - Always opaque (alpha: 0xff)
  // - Oscillating between #000000 (black) and #a000c0 (purple)
  const purpleShade = 0.5 - 0.5 * Math.sin(Math.PI * plasmaValue);
  pixelData[offset] = isPlatformLittleEndian
    ? 0xff000000 | ((0xc0 * purpleShade) << 16) | (0xa0 * purpleShade)
    : ((0xa0 * purpleShade) << 24) | ((0xc0 * purpleShade) << 8) | 0xff;
}

function drawPlasmaFrame(context) {
  const time = new Date().getTime() * 0.0025;

  const w = context.canvas.width;
  const h = context.canvas.height;
  const kx = w / h;

  const imageData = context.getImageData(0, 0, w, h);

  const buf = new ArrayBuffer(imageData.data.length);
  const data = new Uint32Array(buf);
  data.fill(canvas32BitBackgroundColor);

  for (let y = 0; y < h; y += 2) {
    const yy = y / h - 0.5;
    for (let x = 0; x < w; x++) {
      const xx = (kx * x) / w - kx / 2;
      const plasmaValue = calculatePlasmaValue(xx, yy, time);
      apply32BitColors(data, y * w + x, plasmaValue);
    }
  }

  imageData.data.set(new Uint8ClampedArray(buf));
  context.putImageData(imageData, 0, 0);
}

function initializeContext(canvasId) {
  const canvas = document.getElementById(canvasId);
  // Setting the `alpha` 2d context attribute to false was an attempt to
  // achieve faster performance. Besides slightly different behavior on
  // various browsers (white background in Chrome, black background in
  // Firefox / Safari), there is no evidence that it actually provides
  // any benefit as we’re bulk writing binary data.
  // It is mostly kept as a placebo.
  return canvas.getContext('2d', { alpha: false });
}

export function drawStillPlasma(canvasId) {
  const context = initializeContext(canvasId);

  drawPlasmaFrame(context);
}

export function drawAnimatedPlasma(canvasId) {
  const context = initializeContext(canvasId);

  function animatePlasma() {
    drawPlasmaFrame(context);
    window.requestAnimationFrame(animatePlasma);
  }
  animatePlasma();
}
