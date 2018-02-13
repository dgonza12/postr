import { Component } from '@angular/core';

// Firebase:
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/operator/map';
import {ActivatedRoute} from '@angular/router';

interface User {
  id: string;
  username: string;
  about: string;
  password: string;
  image: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  isLoggedIn = false;
  newPostMenu;
  title: string;
  content: string;
  image: string;
  username: string;
  password: string;
  userId: string;
  users;
  user;
  constructor(private afs: AngularFirestore) {
  }
  LogIn() {
    console.log('Trying to log in: ' + this.username + ' ' + this.password);
    this.users = this.afs.collection('users', (ref) => ref.where('username', '==', this.username).limit(1)).valueChanges();
    if ( this.users) {
      console.log('User with username:' + this.username + ' exists');
      this.users.subscribe((user) => {
       this.user = (user[0]);
       if (this.password === this.user.password) {
         this.isLoggedIn = true;
         this.userId = this.user.id;
       } else {
         alert('Password incorrect!');
       }
      });
    }
  }
  LogOut() {
    this.newPostMenu = false;
    this.title = '';
    this.content = '';
    this.image = '';
    this.isLoggedIn = false;
    this.username = '';
    this.password = '';
  }
  addPost() {
    this.afs.collection('posts').add({'title': this.title, 'content': this.content, 'image': this.image, 'user': this.username});
    this.togglePostMenu();
  }
  togglePostMenu() {
    this.newPostMenu = !this.newPostMenu;
    this.title = '';
    this.content = '';
    this.image = '';
  }
}
