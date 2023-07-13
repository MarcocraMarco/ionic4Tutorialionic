import { FormBuilder, FormGroup, Validators } from "@angular/forms";

export class LoginPageForm{
private formBuilder:FormBuilder;
    constructor(formBuilder:FormBuilder) { 
        this.formBuilder=formBuilder;
    }



    createForm():FormGroup {
        return this.formBuilder.group({
            email:['',[Validators.required,Validators.email]], //creating the property email and assigning an empty array of values 
            //which is how the mail value is initially
            password:['',Validators.required]
            //validators are there to validate the content
        });//this function will recieve an object that will inform the properties of the form that we want to create and also how each property will be validated
    }

}