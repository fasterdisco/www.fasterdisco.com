/*! Credits: https://www.bidouille.org/prog/plasma */
function drawFrame(context, plasmaMap, colorMap) {
  const time = new Date().getTime() * 0.0025;

  const w = context.canvas.width;
  const h = context.canvas.height;
  const imageData = context.getImageData(0, 0, w, h);
  const px = imageData.data;

  const kx = w / h;
  for (let y = 0; y < h; y++) {
     const yy = y / h - .5;
     for (let x = 0; x < w; x++) {
        const xx = kx * x / w - kx / 2;
        const v = plasmaMap(xx, yy, time);
        colorMap(px, (y * w + x) * 8, v);
     }
  }
  context.putImageData(imageData, 0, 0);
}

export function drawStill(canvasId, plasmaMap, colorMap) {
  const canvas = document.getElementById(canvasId);
  const context = canvas.getContext('2d', { alpha: false });
  drawFrame(context, plasmaMap, colorMap);
}

export function drawAnimated(canvasId, plasmaMap, colorMap) {
  const canvas = document.getElementById(canvasId);
  const context = canvas.getContext('2d', { alpha: false });

  function animate() {
    drawFrame(context, plasmaMap, colorMap);
    window.requestAnimationFrame(animate);
  }
  animate();
}

export function plasmaMap(x, y, time) {
  let v = 0;
  v += Math.sin((x * 10 + time));
  v += Math.sin((y * 10 + time) / 2.0);
  v += Math.sin((x * 10 + y * 10 + time) / 2.0);
  const cx = x + .5 * Math.sin(time / 5.0);
  const cy = y + .5 * Math.cos(time / 3.0);
  v += Math.sin(Math.sqrt(100 * (cx * cx + cy * cy) + 1) + time);
  v = v / 2.0;
  return v;
}

export function colorMap(px, offset, v) {
  px[offset] = 255;
  px[offset + 1] = 255 * (.5 + .25 * Math.sin(Math.PI * v + 2 * Math.PI / 3));
  px[offset + 2] = 255 * (.5 + .5 * Math.sin(Math.PI * v));
  px[offset + 3] = 128;
  px[offset + 4] = 192 * (.5 + .5 * Math.cos(Math.PI * v));
  px[offset + 5] = 192 * (.5 + .33 * Math.sin(Math.PI * v + 2 * Math.PI / 3));
  px[offset + 6] = 255 * (.5 - .5 * Math.sin(Math.PI * v));
  px[offset + 7] = 92;
}
