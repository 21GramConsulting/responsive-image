/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
export namespace Components {
    interface G21ResponsiveImage {
        /**
          * Responsible for adapting the host element's background image to the size variation which fits it the best.  The selection logic primarily considers the `devicePixelRatio` config, and prioritizes those which are the closest to the runtime's actual `devicePixelRatio`.  Secondarily the `width` & `height` configs are used. Their priority weighting order depends on whether the host element is of portrait or landscape, and sorts for whichever image variation is the closest.
          * @return
         */
        "adaptToRenderedSize": () => Promise<void>;
    }
    interface G21ResponsiveImageVariation {
        /**
          * Read only property expressing the aspect ratio of the photo encapsulation.
          * @return
         */
        "aspectRatio": number;
        /**
          * The device pixel ratio for which to apply the provided photo.
          * @type {number}
         */
        "devicePixelRatio": number;
        /**
          * The height for which to apply the provided photo.
          * @type {number}
         */
        "height": number;
        /**
          * The URI of the photo encapsulated.
          * @type {string}
         */
        "uri": string;
        /**
          * The width for which to apply the provided photo.
          * @type {string}
         */
        "width": number;
    }
}
declare global {
    interface HTMLG21ResponsiveImageElement extends Components.G21ResponsiveImage, HTMLStencilElement {
    }
    var HTMLG21ResponsiveImageElement: {
        prototype: HTMLG21ResponsiveImageElement;
        new (): HTMLG21ResponsiveImageElement;
    };
    interface HTMLG21ResponsiveImageVariationElement extends Components.G21ResponsiveImageVariation, HTMLStencilElement {
    }
    var HTMLG21ResponsiveImageVariationElement: {
        prototype: HTMLG21ResponsiveImageVariationElement;
        new (): HTMLG21ResponsiveImageVariationElement;
    };
    interface HTMLElementTagNameMap {
        "g21-responsive-image": HTMLG21ResponsiveImageElement;
        "g21-responsive-image-variation": HTMLG21ResponsiveImageVariationElement;
    }
}
declare namespace LocalJSX {
    interface G21ResponsiveImage {
        /**
          * Event fired when the host element is resized.
          * @type {EventEmitter<ResizeObserverEntry>}
          * @private
         */
        "onElementResize"?: (event: CustomEvent<ResizeObserverEntry>) => void;
    }
    interface G21ResponsiveImageVariation {
        /**
          * Read only property expressing the aspect ratio of the photo encapsulation.
          * @return
         */
        "aspectRatio"?: number;
        /**
          * The device pixel ratio for which to apply the provided photo.
          * @type {number}
         */
        "devicePixelRatio"?: number;
        /**
          * The height for which to apply the provided photo.
          * @type {number}
         */
        "height": number;
        /**
          * The URI of the photo encapsulated.
          * @type {string}
         */
        "uri": string;
        /**
          * The width for which to apply the provided photo.
          * @type {string}
         */
        "width": number;
    }
    interface IntrinsicElements {
        "g21-responsive-image": G21ResponsiveImage;
        "g21-responsive-image-variation": G21ResponsiveImageVariation;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "g21-responsive-image": LocalJSX.G21ResponsiveImage & JSXBase.HTMLAttributes<HTMLG21ResponsiveImageElement>;
            "g21-responsive-image-variation": LocalJSX.G21ResponsiveImageVariation & JSXBase.HTMLAttributes<HTMLG21ResponsiveImageVariationElement>;
        }
    }
}
