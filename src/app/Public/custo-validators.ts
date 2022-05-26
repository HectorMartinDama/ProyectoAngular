import {AbstractControl, ValidationErrors} from "@angular/forms";

export class CustoValidators {

  // Metodo que valida si la contraseña del formulario y la contraseña que se tiene que repetir son iguales.
  static passwordMatching(control: AbstractControl): ValidationErrors | null{
    const password= control.get('password')?.value;
    const passwordConfirm= control.get('passwordConfirm')?.value;

    if(password === passwordConfirm && (password !==null && passwordConfirm !== null)){
      return null;
    }else{
      return {passwordsNotMaching: true};
    }
  }
}
