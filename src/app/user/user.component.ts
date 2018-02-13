import { Component, OnInit } from '@angular/core';
import { PostServiceService} from '../post-service.service';


// Firebase:
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import {ActivatedRoute} from '@angular/router';



@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  user;
  users;
  posts;


  constructor(private afs: AngularFirestore, private route: ActivatedRoute, private PostService: PostServiceService) {
    this.route.params.subscribe( params => this.getUser(params['id']) );
  }
  getUser(userId) {
    this.users = this.afs.collection('users', (ref) => ref.where('username', '==', userId).limit(1)).valueChanges();
    this.user = this.users.subscribe((user) => {
      return this.user = user[0];
    });
    this.posts = this.PostService.getPostByUser(userId);
  }
  ngOnInit() {

  }

}
