import { ResponsiveImageVariation } from '../responsive-image-variation';


describe('ResponsiveImageVariation', () => {
  const unitUnderTest = new ResponsiveImageVariation();
  type Dimension = {
    width: number,
    height: number,
    expectedRatio: number
  };
  const dimensions = Array(10)
    .fill(100)
    .map((v, i) => v * ++i)
    .reduce(
      (l, w, _i, ol) => l.concat(ol.map(h => ({ width: w, height: h, expectedRatio: w / h }))),
      [] as Array<Dimension>,
    );

  describe('#onSizeChange()', () => {
    dimensions
      .forEach(
        d => it(`should set expectedRatio=${d.expectedRatio} when width=${d.width} and height=${d.height}`, () => {
          unitUnderTest.width = d.width;
          unitUnderTest.height = d.height;
          unitUnderTest.onSizeChange();
          expect(unitUnderTest.aspectRatio).toEqual(d.expectedRatio);
        }),
      );
  });

  dimensions.forEach(d => describe(`#onAspectRatioEdit(${d.expectedRatio})`, () => {
    it(`should execute without an error if width=${d.width} and height=${d.height}`, () => {
      unitUnderTest.width = d.width;
      unitUnderTest.height = d.height;
      expect(() => unitUnderTest.onAspectRatioEdit(d.expectedRatio)).not.toThrow();
    });
    const mismatchingWidth = d.width + 50;
    const mismatchingHeight = d.height - 50;
    const expectedErrorMessage = `Invalid value assignment attempt to aspect ratio ${d.expectedRatio} for ${mismatchingWidth}x${mismatchingHeight}. Expected ${mismatchingWidth / mismatchingHeight}`;
    it(`should throw an error if width=${mismatchingWidth} and height=${mismatchingHeight}`, () => {
      unitUnderTest.width = mismatchingWidth;
      unitUnderTest.height = mismatchingHeight;
      expect(() => unitUnderTest.onAspectRatioEdit(d.expectedRatio)).toThrow(new Error(expectedErrorMessage));
    });
  }));

});
