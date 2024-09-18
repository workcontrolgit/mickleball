import { Component, ViewChild, ViewContainerRef } from '@angular/core';
import { FieldWrapper } from '@ngx-formly/core';
import { NgIf } from '@angular/common';

@Component({
  selector: 'formly-wrapper-label',
  templateUrl: './label-wrapper.component.html',
  standalone: true,
  imports: [NgIf],
})
export class LabelWrapper extends FieldWrapper {
  @ViewChild('fieldComponent', { read: ViewContainerRef }) fieldComponent: ViewContainerRef;
}
