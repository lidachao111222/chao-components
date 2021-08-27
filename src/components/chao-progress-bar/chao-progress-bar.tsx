import { Component, Host, h, Element, ComponentInterface, Prop, Watch } from '@stencil/core';

@Component({
  tag: 'chao-progress-bar',
  styleUrl: 'chao-progress-bar.css',
  shadow: true,
})
export class ChaoProgressBar implements ComponentInterface {
  
  @Element() hostElement: HTMLChaoProgressBarElement;

  @Prop({ mutable: true }) progress: number = 0;

  @Watch('progress')
  progressWatcher(newValue: number) {
    this.setProperty('--progress', `${newValue}%`);
  }

  componentWillLoad() {
    this.initCSSProp();
  }

  render() {
    return (
      <Host>
        <div id="progress-bar">
          <div id="progress"></div>
        </div>
      </Host>
    );
  }

  private setProperty(propertyName: string, value: string) {
    this.hostElement?.style.setProperty(propertyName, value);
  }

  private initCSSProp() {
    this.progressWatcher(this.progress);
  }
}
