import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss']
})
export class ArticleComponent implements OnInit {

  databaseArticles = [
    {
      articleTitle: "",
      articleAuthor: "",
      articleDate: "",
      articleContent: ""
    },
    {
      articleTitle: "",
      articleAuthor: "",
      articleDate: "",
      articleContent: ""
    }
  ]

  constructor() { }

  ngOnInit() {
  }

}
