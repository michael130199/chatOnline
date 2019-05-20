import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private AFauth : AngularFireAuth, private router: Router) { }

  login(email:string, pass:string){
    
    return new Promise((resolve, rejected) =>{
      this.AFauth.auth.signInWithEmailAndPassword(email, pass).then(user =>{
        resolve(user);
      }).catch(err => rejected(err));
    });
  }

  logout(){
    this.AFauth.auth.signOut().then(auth =>
      this.router.navigate(['/login'])
      );
  }
}