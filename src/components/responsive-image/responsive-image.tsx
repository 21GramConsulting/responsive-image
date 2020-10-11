import {
  Component,
  ComponentInterface,
  Element,
  Event,
  EventEmitter,
  h,
  Host,
  JSX,
  Listen,
  Method,
} from '@stencil/core';
import { ResponsiveImageVariation } from '../responsive-image-variation/responsive-image-variation';

@Component({
  tag     : 'g21-responsive-image',
  styleUrl: 'responsive-image.css',
  shadow  : true,
})
export class ResponsiveImage implements ComponentInterface {

  @Element()
  private host!: HTMLElement;


  /**
   * Event fired when the host element is resized.
   * @type {EventEmitter<ResizeObserverEntry>}
   * @private
   */
  @Event({ bubbles: true, cancelable: false })
  private elementResize!: EventEmitter<ResizeObserverEntry>;

  private resizeObserver?: ResizeObserver;
  private photoVariations: Array<HTMLG21ResponsiveImageVariationElement> = [];

  public connectedCallback(): void {
    this.resizeObserver = new ResizeObserver(
      l => l.forEach(
        e => this.elementResize.emit(e),
      ),
    );
  }

  public componentDidRender(): void {
    this.resizeObserver?.observe(this.host);
  }

  public disconnectedCallback(): void {
    this.resizeObserver?.unobserve(this.host);
  }

  /**
   * Responsible for adapting the host element's background image to the size
   * variation which fits it the best.
   *
   * The selection logic primarily considers the `devicePixelRatio` config, and
   * prioritizes those which are the closest to the runtime's actual `devicePixelRatio`.
   *
   * Secondarily the `width` & `height` configs are used. Their priority weighting
   * order depends on whether the host element is of portrait or landscape, and
   * sorts for whichever image variation is the closest.
   *
   * @return {Promise<void>}
   */
  @Listen('elementResize')
  @Listen('load', { target: 'document', capture: true })
  @Method()
  public async adaptToRenderedSize(): Promise<void> {
    if (this.photoVariations.length === 0) {
      return;
    }
    const prioritySortedPhotoVariations = this
      .photoVariations
      .sort((a, b) => {
        const offsetWidth = this.host.offsetWidth;
        const offsetHeight = this.host.offsetHeight;

        const [widthPriority, heightPriority] = offsetWidth > offsetHeight
          ? [0.1, 0.01]
          : [0.01, 0.1];

        const dprDeltaA = Math.abs(a.devicePixelRatio - window.devicePixelRatio);
        const dprDeltaB = Math.abs(b.devicePixelRatio - window.devicePixelRatio);

        const wDeltaA = Math.abs(a.width - offsetWidth);
        const wDeltaB = Math.abs(b.width - offsetWidth);

        const hDeltaA = Math.abs(a.height - offsetHeight);
        const hDeltaB = Math.abs(b.height - offsetHeight);

        return (dprDeltaA - dprDeltaB)
          + ((wDeltaA - wDeltaB) * widthPriority)
          + ((hDeltaA - hDeltaB) * heightPriority);
      });

    this.host.style.backgroundImage = `url(${prioritySortedPhotoVariations[0].uri})`;
  }

  public render(): JSX.Element {
    return (
      <Host>
        <slot onSlotchange={() => this.onSlotChange()} />
      </Host>
    );
  }

  private onSlotChange(): void {
    this.photoVariations = Array
      .from(this.host.children)
      .filter(ResponsiveImageVariation.isComponent);
    this.adaptToRenderedSize();
  }
}
