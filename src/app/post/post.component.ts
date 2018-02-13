import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import 'rxjs/add/operator/map';
import { PostServiceService} from '../post-service.service';



@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})

export class PostComponent implements OnInit {
  post;
  constructor( private route: ActivatedRoute, private PostService: PostServiceService) {
    this.route.params.subscribe( params => this.post = this.PostService.getPostById(params['id']) );
  }

  ngOnInit() {
  }
}
