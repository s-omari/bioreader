import { Component, ViewContainerRef } from '@angular/core';
import { FormGroup } from '@angular/forms';

import { Field } from '../../models/field.interface';
import { FieldConfig } from '../../models/field-config.interface';

@Component({
  selector: 'form-image',
 // styleUrls: ['form-input.component.scss'],
 templateUrl: './form-image.component.html',

})
export class FormImageComponent implements Field {
  config: FieldConfig;
  group: FormGroup;
}
