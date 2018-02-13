import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule} from '@angular/router';


// Firebase
import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyC4jeBSxA6EpX2Ktr9AgA0g25k9hlYXW4k',
  authDomain: 'postr-840e6.firebaseapp.com',
  databaseURL: 'https://postr-840e6.firebaseio.com',
  projectId: 'postr-840e6',
  storageBucket: 'postr-840e6.appspot.com',
  messagingSenderId: '565782182875'
};

// Components
import { AppComponent } from './app.component';
import { PostsComponent } from './posts/posts.component';
import { PostComponent } from './post/post.component';
import { UserComponent } from './user/user.component';
import { NewpostComponent } from './newpost/newpost.component';
// Services
import { PostServiceService} from './post-service.service';
import { UserServiceService} from './user-service.service';

@NgModule({
  declarations: [
    AppComponent,
    PostsComponent,
    PostComponent,
    UserComponent,
    NewpostComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFirestoreModule,
    RouterModule.forRoot([
      {
        path: 'posts',
        component: PostsComponent
      },
      {
        path: 'post/:id',
        component: PostComponent
      },
      {path: 'user/:id',
       component: UserComponent
      },
      {path: 'newpost',
       component: NewpostComponent
      }
    ])
  ],
  providers: [PostServiceService, UserServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
