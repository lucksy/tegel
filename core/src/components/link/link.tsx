import { Component, h, Prop, Element } from '@stencil/core';

@Component({
  tag: 'sdds-link',
  styleUrl: 'link.scss',
  shadow: false,
})
export class SddsLink {
  @Element() host: HTMLElement;

  /** Disables the Link */
  @Prop() disabled: boolean = false;

  /** Displays the Link with an underline. */
  @Prop() underline: boolean = true;

  connectedCallback() {
    this.host.children[0].classList.add('sdds-link-component');
  }

  render() {
    return (
      <div
        class={`
          ${this.disabled ? 'disabled' : ''}
          ${!this.underline ? 'no-underline' : ''}
          `}
      >
        <slot></slot>
      </div>
    );
  }
}