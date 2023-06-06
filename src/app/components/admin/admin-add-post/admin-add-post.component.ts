
import { Component, OnInit } from '@angular/core';
import { PostService } from 'src/app/services/post.service';
import { AddPostRequest } from '../../../data/Models/add-post.model';
@Component({
  selector: 'pms-admin-add-post',
  templateUrl: './admin-add-post.component.html',
  styleUrls: ['./admin-add-post.component.css']
})

export class AdminAddPostComponent implements OnInit {
  constructor(private postService: PostService){}
    post: AddPostRequest={
      author: '',
      content: '',
      featuredImageUrl: '',
      publishedDate: '',
      updatedDate:  '',
      summary: '',
      title: '',
      urlHandle: '',
      visible: true,
    }

  ngOnInit(): void {
  
  }
  onSubmit()
  {
this.postService.addPost(this.post).subscribe(
  response=>{
    alert('Success');
  }
);
  }

}

