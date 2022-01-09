import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-social',
  templateUrl: './social.component.html',
  styleUrls: ['./social.component.scss']
})
export class SocialComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  linkedSites = [
    {
      "siteName": "StackOverflow",
      "siteUrl": "https://stackoverflow.com/users/4537576/michaelhuelsen",
    },
    {
      "siteName": "GitHub",
      "siteUrl": "https://www.github.com/michaelhuelsen",
    },
    {
      "siteName": "LinkedIn",
      "siteUrl": "https://www.linkedin.com/in/michael-hülsen-72aa23199",
    },
    {
      "siteName": "Twitter",
      "siteUrl": "https://www.twitter.com/MichaelHuelsen",
    },
  ];

}
