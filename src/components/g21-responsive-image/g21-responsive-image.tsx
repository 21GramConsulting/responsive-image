import { Component, h, Host } from '@stencil/core';

@Component({
  tag     : 'g21-responsive-image',
  styleUrl: 'g21-responsive-image.css',
  shadow  : true,
})
export class G21ResponsiveImage {

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }

}
