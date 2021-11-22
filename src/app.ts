import { Component } from "./component.js";
import { InputDialog } from "./dialog/dialog.js";
import { MediaSectionInput } from "./dialog/input/media-input.js";
import { TextSectionInput } from "./dialog/input/text-input.js";

type InputComponentConstructor<
  T = (MediaSectionInput | TextSectionInput) & Component
> = {
  new (): T;
};

class App {
  constructor(private dialogRoot: HTMLElement) {
    this.bindElementToDialog<MediaSectionInput>(
      "#new-video",
      MediaSectionInput
    );

    this.bindElementToDialog<MediaSectionInput>(
      "#new-image",
      MediaSectionInput
    );

    this.bindElementToDialog<TextSectionInput>("#new-note", TextSectionInput);

    this.bindElementToDialog<TextSectionInput>("#new-todo", TextSectionInput);
  }

  private bindElementToDialog<
    T extends (MediaSectionInput | TextSectionInput) & Component
  >(selector: string, InputComponent: InputComponentConstructor<T>) {
    const element = document.querySelector(selector)! as HTMLButtonElement;
    element.addEventListener("click", () => {
      const dialog = new InputDialog();
      const input = new InputComponent();
      dialog.addChild(input);
      dialog.attachTo(this.dialogRoot);

      dialog.setOnCloseListener(() => {
        dialog.removeFrom(this.dialogRoot);
      });

      dialog.setOnSubmitListener(() => {
        dialog.removeFrom(this.dialogRoot);
      });
    });
  }
}

new App(document.body);
