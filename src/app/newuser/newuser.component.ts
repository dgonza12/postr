import { Component, OnInit } from '@angular/core';

import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-newuser',
  templateUrl: './newuser.component.html',
  styleUrls: ['./newuser.component.css']
})
export class NewuserComponent implements OnInit {
  username;
  password;
  image;
  about;
  constructor(private afs: AngularFirestore) { }
  ngOnInit() {
  }
  addUser() {
    this.afs.collection('users').add({'username': this.username, 'password': this.password, 'image': this.image, 'about': this.about});
    window.location.href = 'localhost:4200/posts';
  }
}
