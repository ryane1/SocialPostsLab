import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Post } from '../interface/post';
@Component({
  selector: 'social-posts',
  templateUrl: './social-posts.component.html',
  styleUrls: ['./social-posts.component.css']
})
export class SocialPostsComponent implements OnInit {
  shouldBeShown: boolean = true;
  socialPosts: any[] = [
    {
    title: "Dog",
    thought: "jh ajd cjkd sc ajkf dha dohcd sk ljha sd fds lkfhs adlk sdjf ha lsd khf ;alk sdj skdf h;adls khf;sa lkdh lads hfl ksd hfkhf; lskdhf"},
    {
      title: "Cat",
      thought: "jh ajd cjkd sc ajkf dha dohcd sk ljha sd fds lkfhs adlk sdjf ha lsd khf ;alk sdj skdf h;adls khf;sa lkdh lads hfl ksd hfkhf; lskdhf"
    },
    {
      title: "Bird",
      thought: "jh ajd cjkd sc ajkf dha dohcd sk ljha sd fds lkfhs adlk sdjf ha lsd khf ;alk sdj skdf h;adls khf;sa lkdh lads hfl ksd hfkhf; lskdhf"
    }
  ];

  constructor() { }

  onSubmit(post:Post): void {
    this.socialPosts.unshift(post);
    this.shouldBeShown = false;
    console.log(this.socialPosts);
   
   
  }
  toggleDisplay():void {
    this.shouldBeShown = !this.shouldBeShown;
  }
  // onRemovePost=(event)=>{
  //   const index= this.socialPosts.indexOf(event);
  //   this.socialPosts.splice(index,1);   
  // }
  ngOnInit() {
  }

}
