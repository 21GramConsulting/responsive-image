import { Config } from '@stencil/core';

export const config: Config = {
  namespace    : 'self-responsive-container',
  testing      : {
    allowableMismatchedPixels: 0,
    allowableMismatchedRatio : 0,
    collectCoverage          : true,
    coverageDirectory        : 'test-coverage',
    // TODO: No time to test for now.
    // coverageThreshold        : {
    //   global: {
    //     branches  : 100,
    //     functions : 100,
    //     statements: 100,
    //   },
    // },
  },
  outputTargets: [
    {
      type         : 'dist',
      esmLoaderPath: '../loader',
    },
    {
      type: 'dist-custom-elements-bundle',
    },
    {
      type: 'docs-readme',
    },
    {
      type         : 'www',
      dir          : 'sandbox',
      serviceWorker: null,
      copy         : [
        {
          src: 'sandbox-assets',
          keepDirStructure: true
        },
      ],
    },
  ],
};
