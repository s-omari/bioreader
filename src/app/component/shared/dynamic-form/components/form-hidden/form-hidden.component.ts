import { Component, ViewContainerRef } from '@angular/core';
import { FormGroup } from '@angular/forms';

import { Field } from '../../models/field.interface';
import { FieldConfig } from '../../models/field-config.interface';

@Component({
  selector: 'form-hidden',
 // styleUrls: ['form-input.component.scss'],
  template: `
    <div 
      class="dynamic-field form-input input-group" 
      [formGroup]="group">
      <input
        type="hidden" 
        [attr.value]="config.value"
        [attr.placeholder]="config.placeholder"
        [formControlName]="config.name">
    </div>
  `
})
export class FormHiddenComponent implements Field {
  config: FieldConfig;
  group: FormGroup;
}
