import { AbstractControl, ValidationErrors } from "@angular/forms"
export class ValidacionesPropias {
    static esLetra(control: AbstractControl): ValidationErrors | null{
        const name = control.value
        if(name){
            if(isNaN(name)){
                return null
            }else{
                return {esLetra:true}
            }
        }else{
            return {esLetra:true}
        }
    }

    static esNumero(control: AbstractControl): ValidationErrors | null{
        const numero = control.value;
        if(numero){
            if(!isNaN(numero) && (numero.substr(0,1)==7||numero.substr(0,1)==6||numero.substr(0,1)==9)) return null
            else return {esNumero:true}
        }else{
            return {esNumero:true}
        }
    }

    static mismaPasswd(control: AbstractControl): ValidationErrors | null{
        const passwd = control.get("passwd");
        const passwd2 = control.get("passwd2");
        if(passwd && passwd2 && passwd.value !== passwd2.value){
            return {mismaPasswd:true}
        }
        return null;
    }
        
    
}
