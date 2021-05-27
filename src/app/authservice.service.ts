import { User } from './User';
import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import firebase from 'firebase/app';
import 'firebase/auth';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})


export class AuthserviceService {
  user: User | any;

  constructor(private fireAuth: AngularFireAuth,
    private router: Router) {
    this.fireAuth.authState.subscribe(user => {
      this.user = user;
    });
  }

  async googleSignIn() {
    await this.fireAuth.signInWithPopup(new firebase.auth.GoogleAuthProvider()).then(
      res => {
        console.log('Login Successful');
        console.log(this.user.displayName);
        console.log(this.user.photoURL);
        this.router.navigate(['/TaskPage']);
      }).catch(err => {
        console.log('Error while sign in', err);
      })
  }

}