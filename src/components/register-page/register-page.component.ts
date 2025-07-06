import { Component } from '@angular/core';
import{FormBuilder, FormGroup, Validators} from '@angular/forms'
import { ReactiveFormsModule } from '@angular/forms';
@Component({
  selector: 'app-register-page',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './register-page.component.html',
  styleUrl: './register-page.component.scss'
})
export class RegisterPageComponent {
  registerForm!: FormGroup;
  registerFormInvalid=false;
  constructor(private fb:FormBuilder){
    this.registerForm=this.fb.group({
      userName:['',Validators.required],
      address :['',Validators.required],
      mobileNo :['',Validators.required],
      email :['',Validators.required, Validators.pattern(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/)],
      age :['',Validators.required],
      profession :['',Validators.required]
    })
  }

  registerSubmit(){
    console.log(this.registerForm.invalid,"this.registerForm.invalid")
    if(this.registerForm.invalid){
      this.registerFormInvalid=true
    }else{
      this.registerFormInvalid=false
    }
  }

}
