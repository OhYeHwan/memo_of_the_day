import { BaseComponent } from "../../component.js";

export class ImageComponent extends BaseComponent<HTMLElement> {
  constructor(title: string, url: string) {
    super(`
            <section class="image">
                <h2 class="page-image__title image__title"></h2>
                <div class="image__holder">
                    <img class="image__thumbnail" />
                </div>
            </section>
    `);
    const imageElement = this.element.querySelector(
      ".image__thumbnail"
    )! as HTMLImageElement;
    imageElement.src = url;
    imageElement.alt = title;

    const titleElement = this.element.querySelector(
      ".image__title"
    )! as HTMLHeadElement;
    titleElement.textContent = title;
  }
}