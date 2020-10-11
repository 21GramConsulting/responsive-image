# g21-responsive-image-variation

This component is responsible for encapsulating variations in sue for responsive 
images.

<!-- Auto Generated Below -->


## Usage

### Html

```html
<g21-responsive-image-variation uri="https://static.mywebsite.tld/img_300_300x3.png"
                                width="300"
                                height="300"
                                device-pixel-ratio="3"
></g21-responsive-image-variation>
<g21-responsive-image-variation uri="https://static.mywebsite.tld/img_300_300x2.png"
                                width="300"
                                height="300"
                                device-pixel-ratio="2"
></g21-responsive-image-variation>
<g21-responsive-image-variation uri="https://static.mywebsite.tld/img_300_300x1.png"
                                width="300"
                                height="300"
></g21-responsive-image-variation>
```



## Properties

| Property              | Attribute            | Description                                                                | Type     | Default     |
| --------------------- | -------------------- | -------------------------------------------------------------------------- | -------- | ----------- |
| `aspectRatio`         | `aspect-ratio`       | Read only property expressing the aspect ratio of the photo encapsulation. | `number` | `0`         |
| `devicePixelRatio`    | `device-pixel-ratio` | The device pixel ratio for which to apply the provided photo.              | `number` | `1`         |
| `height` _(required)_ | `height`             | The height for which to apply the provided photo.                          | `number` | `undefined` |
| `uri` _(required)_    | `uri`                | The URI of the photo encapsulated.                                         | `string` | `undefined` |
| `width` _(required)_  | `width`              | The width for which to apply the provided photo.                           | `number` | `undefined` |


----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
