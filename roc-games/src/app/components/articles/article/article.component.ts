import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss']
})
export class ArticleComponent implements OnInit {

  databaseArticles = [
    {
      articleTitle: "The Best Way to Win at Losing",
      articleAuthor: "Guns-a-Blazin",
      articleDate: "",
      articleContent: ""
    },
    {
      articleTitle: "",
      articleAuthor: "",
      articleDate: "",
      articleContent: ""
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
