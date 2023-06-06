import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { PostService } from 'src/app/services/post.service';
import { Post } from '../../../data/Models/post.model';
import { UpdatePostRequest } from '../../../data/Models/update-post';
@Component({
  selector: 'pms-admin-view-post',
  templateUrl: './admin-view-post.component.html',
  styleUrls: ['./admin-view-post.component.css']
})

export class AdminViewPostComponent  implements OnInit{
  constructor(private route: ActivatedRoute, private postService:PostService){}
  post: Post | undefined; 
  ngOnInit(): void {
 this.route.paramMap.subscribe(
  params =>{
    const id = params.get('id');
    if(id){
      this.postService.getPostById(id).subscribe(
        response=>{
        this.post = response;
        }); 
    }
  }
 )
  }
onSubmit():void {
const updatePostRequest:UpdatePostRequest={
author: this.post?.author,
content: this.post?.content,
featuredImageUrl: this.post?.featuredImageUrl,
summary: this.post?.summary,
updatedDate: this.post?.updatedDate,
publishedDate: this.post?.publishedDate,
visible: this.post?.visible,
title: this.post?.title,
urlHandle: this.post?.urlHandle
  }
 this.postService.updatePost(this.post?.id, updatePostRequest).subscribe(response=>{
  alert('Success');
 })
}
deletePost(): void{
  this.postService.deletePost(this.post?.id).subscribe(response=>{
    alert('Successfully deleted');
  })
}
};
