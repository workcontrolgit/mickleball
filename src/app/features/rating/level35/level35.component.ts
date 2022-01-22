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
  entryForm: any;
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
      name: ['', Validators.required],
      email: ['', Validators.required],
      cellPhone: ['', Validators.required],
      selfRating: ['', Validators.required],
      assessmentDate: ['', Validators.required],
      gamesObserved: ['', Validators.required],
      weatherConditions: ['', Validators.required],
      skill1: ['', Validators.required],
      skill2: ['', Validators.required],
      positionDescription: ['', Validators.required],
      positionSalary: ['', RxwebValidators.numeric({ allowDecimal: true, isFormat: false })],
    });
  }

}
