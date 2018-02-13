import { Component, OnInit } from '@angular/core';
import { PostServiceService} from '../post-service.service';


import 'rxjs/add/operator/map';

interface Post {
  title: string;
  content: string;
  id: string;
  user: string;
  image: string;
}

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  posts: any;

  constructor(private PostService: PostServiceService) { }

  ngOnInit() {
    this.posts = this.PostService.allPosts();
  }

}
