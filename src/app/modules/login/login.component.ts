import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';
import { TokenService } from 'src/app/services/token.service';
import { ErrorDialogComponent } from './dialog-error/error-dialog.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html'
})
export class LoginComponent implements OnInit {
  
  loginForm!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private _activatedRoute: ActivatedRoute,
    private _router: Router,
    private _tokenService:TokenService,
    private _loginService:LoginService,
    private dialog: MatDialog

    ) {
    this.loginForm = this.formBuilder.group({
      email: ['test@equifax.com', [Validators.required, Validators.email]],
      password: ['12345678', Validators.required]
    });
  }

  ngOnInit() {
    
  }

  signIn(): void
    {
      this._loginService.login(this.loginForm.value['email'],this.loginForm.value['password']).subscribe({
        next:(value)=>{
          // console.warn(value)
          this._tokenService.saveTokenToLocal(value.accessToken)
          const redirectURL = this._activatedRoute.snapshot.queryParamMap.get('redirectURL') || '/signed-in-redirect';
          console.log(redirectURL)
          // Navigate to the redirect url
          this._router.navigateByUrl(redirectURL);
        },
        error:(err)=> {
          this.dialog.open(ErrorDialogComponent, {
            data: { title:"Error al iniciar sesion!", errorMessage:"Email o contraseña incorrecta" }
          });
            
        },
      })
      
    }
}