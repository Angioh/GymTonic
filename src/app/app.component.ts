import {Component,inject, Inject,ChangeDetectionStrategy,} from '@angular/core';
import {FormBuilder, Validators, FormsModule, ReactiveFormsModule, FormControl} from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatStepperModule} from '@angular/material/stepper';
import {MatButtonModule} from '@angular/material/button';
import { ValidacionesPropias } from './validaciones-propias';
import {MatSelectModule} from '@angular/material/select';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatRadioModule } from '@angular/material/radio';
import {MatListModule} from '@angular/material/list';

import {
  MAT_DIALOG_DATA,
  MatDialogRef,
  MatDialog,
  MatDialogActions,
  MatDialogClose,
  MatDialogContent,
  MatDialogTitle,
} from '@angular/material/dialog';

@Component({
  selector: 'app-root',
  imports: [
    MatButtonModule,
    MatStepperModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatCheckboxModule,
    MatRadioModule
  ],changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'GymTonicVives';
  isLinear = true;
  private _formBuilder = inject(FormBuilder);


  firstFormGroup = this._formBuilder.group({
    nombre: new FormControl('',[ Validators.required,ValidacionesPropias.esLetra,Validators.minLength(4)]),
    direccion: new FormControl('',[ Validators.required,ValidacionesPropias.esLetra,Validators.minLength(5)]),
    telefono: new FormControl('',[ Validators.required,ValidacionesPropias.esNumero,Validators.minLength(9),Validators.maxLength(9)]),
    email: new FormControl('',[ Validators.required,ValidacionesPropias.esLetra,Validators.minLength(5),Validators.email]),
    passwd: new FormControl('',[ Validators.required,Validators.minLength(5)]),
    passwd2: new FormControl('',[ Validators.required,Validators.minLength(5)]),
  },{validators: ValidacionesPropias.mismaPasswd});
  secondFormGroup = this._formBuilder.group({
    clases: new FormControl('',[ Validators.required]),
    genero: new FormControl('',[ Validators.required]),
    condiciones: new FormControl('',[ Validators.required]),
  });
  readonly dialog = inject(MatDialog);



  openDialog() {
    const dataDialog = {
      firstFormGroup: this.firstFormGroup.value,
      secondFormGroup: this.secondFormGroup.value
    }
    this.dialog.open(DialogDatos,{
      data: dataDialog
    });
  }

}
@Component({
  selector: 'dialogDatos',
  templateUrl: 'dialogDatos.html',
  imports: [MatDialogTitle, MatDialogContent, MatDialogActions, MatDialogClose, MatButtonModule,MatListModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DialogDatos {
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any, // Recibe los datos del diálogo
    public dialogRef: MatDialogRef<DialogDatos>, // Referencia al diálogo
  ) {}
}
