import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Route, Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup //! -> неинициализировано значение

  constructor(private router: Router,
    private authService: AuthService) { 
     
  }

/**
 * в случае авторизации админа переходит на страницу для админа
 */
  submitLogin() {
    this.authService.login(this.loginForm.value).subscribe({
      next: () => this.router.navigate(['admin']),
      error: (err) => alert(err.message)
    })
  }

  ngOnInit(): void { //отрабатывается один раз при инициалищации приложения
    this.loginForm = new FormGroup({
      'email': new FormControl('', [Validators.required, Validators.email]),
      'password': new FormControl('',
        [Validators.required,
        Validators.pattern(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}/)]) //минимальная длина 8, буквы и цифры, знаки

    })

  }

}
