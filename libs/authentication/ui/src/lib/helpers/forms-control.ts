import {FormControl} from "@angular/forms";

export type FormControls<T> = {
  [P in keyof T]: FormControl<T[P]>;
};
