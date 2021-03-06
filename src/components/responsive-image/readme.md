# g21-responsive-image

The component internally selects the best fitting image encapsulated by the 
`devicePixelRatio` tags, and set the match as the host's background image. 

<!-- Auto Generated Below -->


## Usage

### Html

```html
<g21-responsive-image>
  <g21-responsive-image-variation device-pixel-ratio="1"
                                  height="240"
                                  uri="/sandbox-assets/demo/320px.jpeg"
                                  width="320"
  ></g21-responsive-image-variation>
  <g21-responsive-image-variation device-pixel-ratio="2"
                                  height="240"
                                  uri="/sandbox-assets/demo/640px.jpeg"
                                  width="320"
  ></g21-responsive-image-variation>
  <g21-responsive-image-variation device-pixel-ratio="1"
                                  height="281"
                                  uri="/sandbox-assets/demo/375px.jpeg"
                                  width="375"
  ></g21-responsive-image-variation>
  <g21-responsive-image-variation device-pixel-ratio="2"
                                  height="281"
                                  uri="/sandbox-assets/demo/750px.jpeg"
                                  width="375"
  ></g21-responsive-image-variation>
  <g21-responsive-image-variation device-pixel-ratio="1"
                                  height="311"
                                  uri="/sandbox-assets/demo/414px.jpeg"
                                  width="414"
  ></g21-responsive-image-variation>
  <g21-responsive-image-variation device-pixel-ratio="2"
                                  height="311"
                                  uri="/sandbox-assets/demo/828px.jpeg"
                                  width="414"
  ></g21-responsive-image-variation>
  <g21-responsive-image-variation device-pixel-ratio="1"
                                  height="426"
                                  uri="/sandbox-assets/demo/568px.jpeg"
                                  width="568"
  ></g21-responsive-image-variation>
  <g21-responsive-image-variation device-pixel-ratio="2"
                                  height="426"
                                  uri="/sandbox-assets/demo/1136px.jpeg"
                                  width="568"
  ></g21-responsive-image-variation>
  <g21-responsive-image-variation device-pixel-ratio="1"
                                  height="500"
                                  uri="/sandbox-assets/demo/667px.jpeg"
                                  width="667"
  ></g21-responsive-image-variation>
  <g21-responsive-image-variation device-pixel-ratio="2"
                                  height="500"
                                  uri="/sandbox-assets/demo/1334px.jpeg"
                                  width="667"
  ></g21-responsive-image-variation>
  <g21-responsive-image-variation device-pixel-ratio="1"
                                  height="552"
                                  uri="/sandbox-assets/demo/736px.jpeg"
                                  width="736"
  ></g21-responsive-image-variation>
  <g21-responsive-image-variation device-pixel-ratio="2"
                                  height="552"
                                  uri="/sandbox-assets/demo/1472px.jpeg"
                                  width="736"
  ></g21-responsive-image-variation>
  <g21-responsive-image-variation device-pixel-ratio="1"
                                  height="609"
                                  uri="/sandbox-assets/demo/812px.jpeg"
                                  width="812"
  ></g21-responsive-image-variation>
  <g21-responsive-image-variation device-pixel-ratio="2"
                                  height="609"
                                  uri="/sandbox-assets/demo/1624px.jpeg"
                                  width="812"
  ></g21-responsive-image-variation>
  <g21-responsive-image-variation device-pixel-ratio="1"
                                  height="576"
                                  uri="/sandbox-assets/demo/768px.jpeg"
                                  width="768"
  ></g21-responsive-image-variation>
  <g21-responsive-image-variation device-pixel-ratio="2"
                                  height="576"
                                  uri="/sandbox-assets/demo/1536px.jpeg"
                                  width="768"
  ></g21-responsive-image-variation>
  <g21-responsive-image-variation device-pixel-ratio="1"
                                  height="626"
                                  uri="/sandbox-assets/demo/834px.jpeg"
                                  width="834"
  ></g21-responsive-image-variation>
  <g21-responsive-image-variation device-pixel-ratio="2"
                                  height="626"
                                  uri="/sandbox-assets/demo/1668px.jpeg"
                                  width="834"
  ></g21-responsive-image-variation>
  <g21-responsive-image-variation device-pixel-ratio="1"
                                  height="768"
                                  uri="/sandbox-assets/demo/1024px.jpeg"
                                  width="1024"
  ></g21-responsive-image-variation>
  <g21-responsive-image-variation device-pixel-ratio="2"
                                  height="768"
                                  uri="/sandbox-assets/demo/2048px.jpeg"
                                  width="1024"
  ></g21-responsive-image-variation>
  <g21-responsive-image-variation device-pixel-ratio="1"
                                  height="834"
                                  uri="/sandbox-assets/demo/1112px.jpeg"
                                  width="1112"
  ></g21-responsive-image-variation>
  <g21-responsive-image-variation device-pixel-ratio="2"
                                  height="834"
                                  uri="/sandbox-assets/demo/2224px.jpeg"
                                  width="1112"
  ></g21-responsive-image-variation>
  <g21-responsive-image-variation device-pixel-ratio="1"
                                  height="1025"
                                  uri="/sandbox-assets/demo/1366px.jpeg"
                                  width="1366"
  ></g21-responsive-image-variation>
  <g21-responsive-image-variation device-pixel-ratio="2"
                                  height="1025"
                                  uri="/sandbox-assets/demo/2732px.jpeg"
                                  width="1366"
  ></g21-responsive-image-variation>
  <g21-responsive-image-variation device-pixel-ratio="1"
                                  height="1080"
                                  uri="/sandbox-assets/demo/1440px.jpeg"
                                  width="1440"
  ></g21-responsive-image-variation>
  <g21-responsive-image-variation device-pixel-ratio="2"
                                  height="1080"
                                  uri="/sandbox-assets/demo/2880px.jpeg"
                                  width="1440"
  ></g21-responsive-image-variation>
  <g21-responsive-image-variation device-pixel-ratio="1"
                                  height="1260"
                                  uri="/sandbox-assets/demo/1680px.jpeg"
                                  width="1680"
  ></g21-responsive-image-variation>
  <g21-responsive-image-variation device-pixel-ratio="2"
                                  height="1260"
                                  uri="/sandbox-assets/demo/3360px.jpeg"
                                  width="1680"
  ></g21-responsive-image-variation>
  <g21-responsive-image-variation device-pixel-ratio="1"
                                  height="1440"
                                  uri="/sandbox-assets/demo/1920px.jpeg"
                                  width="1920"
  ></g21-responsive-image-variation>
  <g21-responsive-image-variation device-pixel-ratio="2"
                                  height="1440"
                                  uri="/sandbox-assets/demo/3840px.jpeg"
                                  width="1920"
  ></g21-responsive-image-variation>
  <g21-responsive-image-variation device-pixel-ratio="1"
                                  height="1536"
                                  uri="/sandbox-assets/demo/2048px.jpeg"
                                  width="2048"
  ></g21-responsive-image-variation>
  <g21-responsive-image-variation device-pixel-ratio="2"
                                  height="1536"
                                  uri="/sandbox-assets/demo/4096px.jpeg"
                                  width="2048"
  ></g21-responsive-image-variation>
  <g21-responsive-image-variation device-pixel-ratio="1"
                                  height="1920"
                                  uri="/sandbox-assets/demo/2560px.jpeg"
                                  width="2560"
  ></g21-responsive-image-variation>
  <g21-responsive-image-variation device-pixel-ratio="2"
                                  height="1920"
                                  uri="/sandbox-assets/demo/5120px.jpeg"
                                  width="2560"
  ></g21-responsive-image-variation>
  <g21-responsive-image-variation device-pixel-ratio="1"
                                  height="1920"
                                  uri="/sandbox-assets/demo/2560px.jpeg"
                                  width="2560"
  ></g21-responsive-image-variation>
  <g21-responsive-image-variation device-pixel-ratio="2"
                                  height="1920"
                                  uri="/sandbox-assets/demo/5120px.jpeg"
                                  width="2560"
  ></g21-responsive-image-variation>
  <g21-responsive-image-variation device-pixel-ratio="1"
                                  height="2580"
                                  uri="/sandbox-assets/demo/3440px.jpeg"
                                  width="3440"
  ></g21-responsive-image-variation>
  <g21-responsive-image-variation device-pixel-ratio="2"
                                  height="2580"
                                  uri="/sandbox-assets/demo/6880px.jpeg"
                                  width="3440"
  ></g21-responsive-image-variation>
  <g21-responsive-image-variation device-pixel-ratio="1"
                                  height="2880"
                                  uri="/sandbox-assets/demo/3840px.jpeg"
                                  width="3840"
  ></g21-responsive-image-variation>
  <g21-responsive-image-variation device-pixel-ratio="2"
                                  height="2880"
                                  uri="/sandbox-assets/demo/7680px.jpeg"
                                  width="3840"
  ></g21-responsive-image-variation>
</g21-responsive-image>
```


### Javascript

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



## Events

| Event           | Description                                   | Type                               |
| --------------- | --------------------------------------------- | ---------------------------------- |
| `elementResize` | Event fired when the host element is resized. | `CustomEvent<ResizeObserverEntry>` |


## Methods

### `adaptToRenderedSize() => Promise<void>`

Responsible for adapting the host element's background image to the size
variation which fits it the best.

The selection logic primarily considers the `devicePixelRatio` config, and
prioritizes those which are the closest to the runtime's actual `devicePixelRatio`.

Secondarily the `width` & `height` configs are used. Their priority weighting
order depends on whether the host element is of portrait or landscape, and
sorts for whichever image variation is the closest.

#### Returns

Type: `Promise<void>`

[object Object]


----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
