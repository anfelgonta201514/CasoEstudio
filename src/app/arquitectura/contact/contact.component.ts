import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormArray } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  constructor(private formBuilder: FormBuilder) { }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  get username() {
    return this.registerForm.get('username');
  }

  get password() {
    return this.registerForm.get('password');
  }

  get telefonos(){
    return this.registerForm.get('telefonos') as FormArray;
  }

  registerForm = this.formBuilder.group({
    username: ['', {
      validators: [Validators.required],
      updateOn: 'blur'
    }],
    promociones: [true],
    telefonos: this.formBuilder.array([])
  });

  agregarTelefono(){
    const telefonoFormGroup  = this.formBuilder.group({
      telefono: '',
      descripcion: ''
    });
    this.telefonos.push(telefonoFormGroup);
  }

  removerTelefono(indice: number) {
    this.telefonos.removeAt(indice);
  }

  submit() {

    if (!this.registerForm.valid) {
      alert('Alguna regla de validación no se está cumpliendo');
      return;
    }


    console.log(this.registerForm.value);
  }

  refrescar() {
    this.registerForm.patchValue({
      username: '',
      password: '',
      promociones: true
    });
    this.telefonos.controls.splice(0, this.telefonos.length);
  }
}
