import { Component } from '@angular/core';
import { ArticleModel } from './article-model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  // same like: articles: Array<ArticleModel> = [
  articles: ArticleModel[] = [
    {
      title: 'How the Saturn dissapeared',
      author: 'Jack Thestarguard',
      text: 'Once upon a time there was Saturn...'
    },
    {
      title: 'How to come on time to the class',
      author: 'Martin the coach',
      text: 'Today I will give you tips to get up early and come on time.'
    }
  ];

  likeArticle(likedArticle: ArticleModel) {
    console.log('liked article:', likedArticle);
  }
}
