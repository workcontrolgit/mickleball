import { Component, OnInit } from '@angular/core';
import { FormGroup, UntypedFormBuilder, Validators } from '@angular/forms';
import { RxwebValidators } from '@rxweb/reactive-form-validators';

@Component({
  selector: 'app-level35',
  templateUrl: 'level35.component.html',
  styleUrls: ['level35.component.scss'],
})
export class Level35Component implements OnInit {
  formMode = 'New';
  sub: any;
  id: any;
  entryForm: any;
  error: string | undefined;
  //position: Position;
  isAddNew: boolean = false;
  constructor(private formBuilder: UntypedFormBuilder) {
    this.createForm();
  }

  ngOnInit(): void {}

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
      skill3: ['', Validators.required],
      skill4: ['', Validators.required],
      skill5: ['', Validators.required],
      skill6: ['', Validators.required],
      skill7: ['', Validators.required],
      skill8: ['', Validators.required],
      skill9: ['', Validators.required],
      skill10: ['', Validators.required],
      skill11: ['', Validators.required],
      skill12: ['', Validators.required],
      skill13: ['', Validators.required],
      skill14: ['', Validators.required],
      skill15: ['', Validators.required],
      skill16: ['', Validators.required],
      skill17: ['', Validators.required],
      skill18: ['', Validators.required],
      positionDescription: ['', Validators.required],
      positionSalary: ['', RxwebValidators.numeric({ allowDecimal: true, isFormat: false })],
    });
  }
}
