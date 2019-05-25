import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Post } from '../interface/post';

@Component({
  selector: 'post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
@Input() post:Post;
// @Output() remove = new EventEmitter<any>();
  

  constructor() { }
  // removePost(index: number): void {
  //   this.remove.emit(this.post);
   
  // }
  ngOnInit() {
  }

}
