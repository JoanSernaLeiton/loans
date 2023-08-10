import {FormControl} from "@angular/forms";

export type FormControls<T,O> = {
  [P in keyof T]: FormControl<T[P]>;
};
