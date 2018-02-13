import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';

interface Post {
  title: string;
  content: string;
  id: string;
  user: string;
  image: string;
}

@Injectable()
export class PostServiceService {

  constructor(private afs: AngularFirestore) { }
  allPosts() {
    const postCol = this.afs.collection('posts');
    return postCol.snapshotChanges()
      .map(actions => {
        return actions.map(a => {
          const data = a.payload.doc.data() as Post;
          const id = a.payload.doc.id;
          return { id, data };
        });
      });
  }
  getPostById(postId) {
    return this.afs.doc('posts/' + postId).valueChanges();
  }
  getPostByUser(userId) {
    return this.afs.collection('posts', ref => ref.where('user', '==', userId)).snapshotChanges()
      .map(actions => {
        return actions.map(a => {
          const data = a.payload.doc.data() as Post;
          const id = a.payload.doc.id;
          return { id, data };
        });
      });
  }
  deletePostById(postId) {
    this.afs.doc('posts/' + postId).delete();
  }
}
