import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-aboutme',
  templateUrl: './aboutme.component.html',
  styleUrls: ['./aboutme.component.scss']
})
export class AboutmeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  connectLinkItems = [
    {
      "name": "Twitter",
      "icon": "fa-twitter",
      "iconstyle": "fa fa-2x",
      "link": "https://twitter.com/MichaelHuelsen"
    },
    {
      "name": "Stackoverflow",
      "icon": "fa-stack-overflow",
      "iconstyle": "fa fa-2x",
      "link": "http://stackoverflow.com/users/4537576/michaelhuelsen"
    },
    {
      "name": "Scala Programming Language",
      "icon": "",
      "iconstyle": "fa fa-2x",
      "link": "https://www.scala-lang.org"
    },
  ];
  visitLinkItems = [{
    "url": "http://www.debian.org/",
    "website": "Debian GNU/Linux"
  },
  {
    "url": "http://www.raspian.org/",
    "website": "Raspian Distribution for RasperryPi"
  },
  {
    "url": "http://www.archlinux.org/",
    "website": "Arch Linux"
  },
  {
    "url": "https://ubuntuusers.de/",
    "website": "Ubuntuusers.de"
  },
  {
    "url": "https://angularJS.org/",
    "website": "AngularJS"
  },
  {
    "url": "http://www.heise.de/open/",
    "website": "Heise open"
  },
  {
    "url": "http://www.xkcd.com",
    "website": "xkcd Comics"
  },
  {
    "url": "http://www.dilbert.com",
    "website": "Dilbert Comics"
  },
  {
    "url": "http://www.ruthe.com",
    "website": "Ruthe Comics"
  },
  ];
}
