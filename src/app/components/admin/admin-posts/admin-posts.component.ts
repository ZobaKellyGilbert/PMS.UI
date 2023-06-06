
import { Component, OnInit } from '@angular/core';
import { PostService } from 'src/app/services/post.service';
import { Post } from '../../../data/Models/post.model';


@Component({
  selector: 'pms-admin-posts',
  templateUrl: './admin-posts.component.html',
  styleUrls: ['./admin-posts.component.css']
})

export class AdminPostsComponent implements OnInit {
constructor(private postService: PostService){}
posts: Post[] = [];
  ngOnInit(): void {
this.postService.getAllPosts()
.subscribe(
  response => {
    this.posts = response;
  }
);
  }
}
