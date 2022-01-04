import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { RxwebValidators } from '@rxweb/reactive-form-validators';


@Component({
  selector: 'app-level35',
  templateUrl: 'level35.component.html',
  styleUrls: ['level35.component.scss']
})
export class Level35Component implements OnInit {
  formMode = 'New';
  sub: any;
  id: any;
  entryForm: FormGroup;
  error: string | undefined;
  //position: Position;
  isAddNew: boolean = false;
  constructor(
    private formBuilder: FormBuilder,
  ) {
    this.createForm();
  }

  ngOnInit(): void {
  }

  // reactive form
  private createForm() {
    this.entryForm = this.formBuilder.group({
      id: [''],
      positionNumber: ['', Validators.required],
      positionTitle: ['', Validators.required],
      positionDescription: ['', Validators.required],
      positionSalary: ['', RxwebValidators.numeric({ allowDecimal: true, isFormat: false })],
    });
  }

}
