import { Component, OnInit, Input } from '@angular/core';
import { FormsModule} from '@angular/forms';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';

@Component({
  selector: 'app-newpost',
  templateUrl: './newpost.component.html',
  styleUrls: ['./newpost.component.css']
})
export class NewpostComponent implements OnInit {
  isLoggedIn: boolean;
  userId: 'IxUszEpz6zY1guvntllr';
  title: string;
  content: string;
  image: string;
  constructor(private afs: AngularFirestore) { }
  addPost() {
    this.afs.collection('posts').add({'title': this.title, 'content': this.content, 'image': this.image, 'user': 'IxUszEpz6zY1guvntllr'});
  }
  ngOnInit() {
  }

}
