import { newE2EPage } from '@stencil/core/testing';

describe('g21-responsive-image', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<g21-responsive-image></g21-responsive-image>');

    const element = await page.find('g21-responsive-image');
    expect(element).toHaveClass('hydrated');
  });
});
