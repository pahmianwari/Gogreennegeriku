import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  email!: string;
  password!: string;
  


}
// username: string;
//   password: string;

//   constructor(private authService: AuthService) { }

//   onSubmit() {
//     this.authService.login(this.username, this.password).subscribe(
//       response => console.log(response),
//       error => console.log(error)
//     );
//   }