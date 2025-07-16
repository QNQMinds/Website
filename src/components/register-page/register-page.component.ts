import { Component } from '@angular/core';
import{FormBuilder, FormGroup, Validators} from '@angular/forms'
import { ReactiveFormsModule } from '@angular/forms';
import { AuthServiceService } from '../../services/auth-service.service';
import { CommonService } from '../../services/common.service';
import { NgxSpinnerService } from 'ngx-spinner';
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
  constructor(private fb:FormBuilder, private authService:AuthServiceService,
    private commonService:CommonService, private spinner:NgxSpinnerService
  ){
    this.registerForm=this.fb.group({
      userName:['',Validators.required],
      address :['',Validators.required],
      mobileNo :['',Validators.required],
       email: ['',[Validators.required,Validators.pattern(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/)]],
      age :['',Validators.required],
      profession :['',Validators.required]
    })
  }

  registerSubmit(){
    this.spinner.show()
    // console.log(this.registerForm.invalid,"this.registerForm.invalid")
    if(this.registerForm.invalid){
      this.registerFormInvalid=true
    }else{
      this.registerFormInvalid=false
      let payload = {
        "UserName": this.registerForm.get('userName')?.value,
        "Address": this.registerForm.get('address')?.value,
        "MobileNo": this.registerForm.get('mobileNo')?.value,
        "Email": this.registerForm.get('email')?.value,
        "Age": this.registerForm.get('age')?.value,
        "Profession": this.registerForm.get('profession')?.value,
        "isAdmin": 1
      }
      this.authService.signup(payload).subscribe((data: any)=>{
        console.log(data,"---")
         this.commonService.successMessage(data.message);
         this.registerForm.reset()
         this.spinner.hide()
      })
    }
    
  }

}
