import { newSpecPage } from '@stencil/core/testing';
import { G21ResponsiveImage } from '../g21-responsive-image';

describe('g21-responsive-image', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [G21ResponsiveImage],
      html      : '<g21-responsive-image></g21-responsive-image>',
    });
    expect(page.root).toEqualHtml(`
      <g21-responsive-image>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </g21-responsive-image>
    `);
  });
});
