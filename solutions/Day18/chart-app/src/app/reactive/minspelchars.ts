import { AbstractControl, ValidationErrors } from '@angular/forms';

export function minSpecialChars(count: number) {
  return (control: AbstractControl): ValidationErrors | null => {
    const value = control.value || '';
    const matches = value.match(/[^a-zA-Z0-9]/g) || [];

    return matches.length >= count ? null : { specialChar: true };
  };
}
