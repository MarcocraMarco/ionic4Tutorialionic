import { FormBuilder, FormGroup } from "@angular/forms";
import { LoginPageForm } from "./login.page.form";

describe('LoginPageForm',()=>{

let loginPageForm:LoginPageForm;
let form:FormGroup;

/*instruction to be esecuted before each test,  */
beforeEach(()=>{
    loginPageForm=new LoginPageForm(new FormBuilder());
    form =loginPageForm.createForm();
})
    it('should create loginform empty',()=>{
        expect(form).not.toBeNull();
        expect(form.get('email')).not.toBeNull();
        expect(form.get('email')!.value).toEqual('');
        expect(form.get('email')!.valid).toBeFalsy();
        expect(form.get('password')).not.toBeNull();
        expect(form.get('password')!.value).toEqual('');
        expect(form.get('password')!.valid).toBeFalsy();

    } ),

    it('should have mail invalid if email is not valid',()=>{
        
        form.get('email')?.setValue('invalid email');
        expect(form.get('email')!.valid).toBeFalsy();

    } )
    it('should have valid mail  if email is  valid',()=>{
       
        form.get('email')?.setValue('valid@email.com');
        expect(form.get('email')!.valid).toBeTruthy();

    } )
    it('should have valid form',()=>{
       
        form.get('email')?.setValue('valid@email.com');
        form.get('password')?.setValue('anyPassword');
        expect(form.valid).toBeTruthy();

    } )
})