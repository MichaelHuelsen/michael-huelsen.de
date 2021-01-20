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
      "siteUrl": "https://www.stackoverflow.com",
    },
    {
      "siteName": "GitHub",
      "siteUrl": "https://www.github.com",
    },
    {
      "siteName": "LinkedIn",
      "siteUrl": "https://www.linkedin.com",
    },
    {
      "siteName": "Xing",
      "siteUrl": "https://www.xing.de",
    },
  ];

}
