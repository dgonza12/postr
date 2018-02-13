import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class UserServiceService {

  constructor(private afs: AngularFirestore) { }
  getUserById(userId) {
    return this.afs.doc('users/' + userId).valueChanges();
  }

}
