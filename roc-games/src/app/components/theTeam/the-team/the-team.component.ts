import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-the-team',
  templateUrl: './the-team.component.html',
  styleUrls: ['./the-team.component.scss']
})
export class TheTeamComponent implements OnInit {

  players: [
    {
      playerName: "Bob \"Guns-a-Blazin\" Jones",
      playerPicture: "../../../../assets/images/temp/blazin.jpg",
      playerAchievements: ["Holds the East Coast record for rat tails collected with one wing tied behind his back."],
      playerBio: "'You see this hair baby.....that\'s all I\'ve got to say'"
    },
    {
      playerName: "Mary \"Evil Eye\" Henderson",
      playerPicture: "",
      playerAchievements: ["Once flew from New York to LA without flapping her wings."],
      playerBio: "You lookin\' at me chump?"
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
