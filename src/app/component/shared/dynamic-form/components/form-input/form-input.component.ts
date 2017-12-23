import { Component, ViewContainerRef } from '@angular/core';
import { FormGroup } from '@angular/forms';

import { Field } from '../../models/field.interface';
import { FieldConfig } from '../../models/field-config.interface';

@Component({
  selector: 'form-input',
 // styleUrls: ['form-input.component.scss'],
  template: `
    <div 
      class="dynamic-field  input-group" 
      [formGroup]="group">
      <label>{{ config.label }}</label>
      <input
        type="text" 
        class="form-control"
        [attr.value]="config.value"
        [attr.placeholder]="config.placeholder"
        [formControlName]="config.name">
    </div>
  `
})
export class FormInputComponent implements Field {
  config: FieldConfig;
  group: FormGroup;
}
