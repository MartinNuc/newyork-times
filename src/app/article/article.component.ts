import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { ArticleModel } from '../article-model';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {

  @Input()
  articleInput: ArticleModel;

  @Output()
  liked = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  likeButtonClicked() {
    this.liked.emit();
  }

}
