import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css'],
})

export class NavigationComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  myBrand = "michael-huelsen.de ";
  separator = "|";
  subLine = "Welcome to my personal website.";
  menuItems = [{
    "label": "Home",
    "icon": "home",
    "link": "Home",
    "tooltip": "Home",
    "id": "home"
  },
  {
    "label": "PGP",
    "icon": "https",
    "link": "PGP",
    "tooltip": "My PGP policy",
    "id": "pgp"
  },
  {
    "label": "Imprint",
    "icon": "info",
    "link": "Imprint",
    "tooltip": "Imprint",
    "id": "imprint"
  }
  ];


}
