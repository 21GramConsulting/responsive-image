import { Component, ComponentInterface, Prop, Watch } from '@stencil/core';

@Component({
  tag   : 'g21-responsive-image-variation',
  shadow: true,
})
export class ResponsiveImageVariation implements ComponentInterface {

  /**
   * The URI of the photo encapsulated.
   * @type {string}
   */
  @Prop({ reflect: true, mutable: true }) public uri!: string;

  /**
   * The device pixel ratio for which to apply the provided photo.
   * @type {number}
   */
  @Prop({ reflect: true, mutable: true }) public devicePixelRatio = 1;


  /**
   * The height for which to apply the provided photo.
   * @type {number}
   */
  @Prop({ reflect: true, mutable: true }) public height!: number;

  /**
   * The width for which to apply the provided photo.
   * @type {string}
   */
  @Prop({ reflect: true, mutable: true }) public width!: number;

  /**
   * Read only property expressing the aspect ratio of the photo encapsulation.
   * @return {number}
   */
  @Prop({ reflect: false, mutable: false })
  public aspectRatio = 0;

  public static isComponent(e: Element): e is HTMLG21ResponsiveImageVariationElement {
    return e.tagName.toLowerCase() === 'g21-responsive-image-variation';
  }

  @Watch('width')
  @Watch('height')
  public onSizeChange() {
    this.aspectRatio = this.width / this.height;
  }

  @Watch('aspectRatio')
  public onAspectRatioEdit(newValue: number) {
    const expectedRatio = this.width / this.height;
    if (newValue !== expectedRatio) {
      throw new Error(`Invalid value assignment attempt to aspect ratio ${newValue} for ${this.width}x${this.height}. Expected ${expectedRatio}`);
    }
  }

}
