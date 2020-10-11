```javascript
const demo = document.getElementById('responsiveImageDemo');
const aspectRatio = 320 / 240;
const widths = [320, 375, 414, 568, 667, 736, 812, 768, 834, 1024, 1112, 1366, 1440, 1680, 1920, 2048, 2560, 2560, 3440, 3840];
const variations = widths
.map(width => ({
  width,
  height: Math.round(width / aspectRatio),
}))
.map(size => [1, 2].map(devicePixelRatio => ({
  ...size,
  devicePixelRatio,
  uri: `/sandbox-assets/demo/${size.width * devicePixelRatio}px.jpeg`,
})))
.reduce((l, p) => l.concat(p), [])
.map(p => {
  const variation = document.createElement('g21-responsive-image-variation');
  variation.uri = p.uri;
  variation.width = p.width;
  variation.height = p.height;
  variation.devicePixelRatio = p.devicePixelRatio;
  return variation;
});
demo.append.apply(demo, variations);
```