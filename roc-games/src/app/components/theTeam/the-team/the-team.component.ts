import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-the-team',
  templateUrl: './the-team.component.html',
  styleUrls: ['./the-team.component.scss']
})
export class TheTeamComponent implements OnInit {

  players: [
    {
      playerName: "Bob 'Guns-a-Blazin' Jones",
      playerPicture: "",
      playerAchievements: ["Holds the East Coast record for rat tails collected with one wing tied behind his back."],
      playerBio: ""
    },
    {
      playerName: "",
      playerPicture: "",
      playerAchievements: [],
      playerBio: ""
    },
    {
      playerName: "",
      playerPicture: "",
      playerAchievements: [],
      playerBio: ""
    },
    {
      playerName: "",
      playerPicture: "",
      playerAchievements: [],
      playerBio: ""
    }
  ]

  constructor() { }

  ngOnInit() {
  }

}
