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
      articleDate: Date(),
      articleContent: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce suscipit turpis eleifend mollis volutpat. Fusce mollis diam orci, non sagittis felis pharetra sit amet. Integer id nunc sem. Mauris eu quam molestie, congue ex quis, viverra purus. Integer ornare justo et aliquam fringilla. Maecenas ut sodales lorem, quis vehicula ante. Morbi vitae elit urna. Phasellus nisi tellus, commodo eget consequat at, dictum tristique urna. Ut porttitor dapibus magna, sit amet faucibus dolor cursus et. Quisque pellentesque lorem dolor, non dictum ligula volutpat a. <br><br> Donec tincidunt eleifend ipsum, eu ornare diam ullamcorper at. Nulla ac tellus neque. Cras sapien velit, rutrum at accumsan at, pellentesque sed diam. Sed interdum, purus congue ultricies consequat, lorem elit sollicitudin diam, non vulputate arcu sapien in nibh. Morbi vulputate, tortor ac fringilla elementum, lacus nibh convallis justo, ac aliquet leo quam ut nisl. Maecenas ornare purus interdum, convallis tortor vel, dapibus risus. Suspendisse auctor diam mattis molestie scelerisque. Suspendisse quis mattis elit."
    },
    {
      articleTitle: "Two Cans or Not Two Cans",
      articleAuthor: "Sally \"Two Cans\" Miller",
      articleDate: "",
      articleContent: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce suscipit turpis eleifend mollis volutpat. Fusce mollis diam orci, non sagittis felis pharetra sit amet. Integer id nunc sem. Mauris eu quam molestie, congue ex quis, viverra purus. Integer ornare justo et aliquam fringilla. Maecenas ut sodales lorem, quis vehicula ante. Morbi vitae elit urna. Phasellus nisi tellus, commodo eget consequat at, dictum tristique urna. Ut porttitor dapibus magna, sit amet faucibus dolor cursus et. Quisque pellentesque lorem dolor, non dictum ligula volutpat a. <br><br>Donec tincidunt eleifend ipsum, eu ornare diam ullamcorper at. Nulla ac tellus neque. Cras sapien velit, rutrum at accumsan at, pellentesque sed diam. Sed interdum, purus congue ultricies consequat, lorem elit sollicitudin diam, non vulputate arcu sapien in nibh. Morbi vulputate, tortor ac fringilla elementum, lacus nibh convallis justo, ac aliquet leo quam ut nisl. Maecenas ornare purus interdum, convallis tortor vel, dapibus risus. Suspendisse auctor diam mattis molestie scelerisque. Suspendisse quis mattis elit."
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
