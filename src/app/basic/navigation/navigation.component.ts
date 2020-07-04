import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss'],
})

export class NavigationComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  myBrand = "michael-huelsen.de ";
  separator = "|";
  subLine = "IT Consulting, Solutions, Services";
  menuItems = [{
    "label": "Home",
    "icon": "fa-home",
    "link": "Home",
    "tooltip": "Home",
    "id" : "home"
  },
  /*
  {
    "label": "About me",
    "icon": "fa-info",
    "link": "About",
    "tooltip": "About me",
  },{
    "label": "Development",
    "icon": "fa-info",
    "link": "Development",
    "tooltip": "Development and Technology",
  },*/
  {
    "label": "PGP",
    "icon": "fa-info",
    "link": "PGP",
    "tooltip": "My PGP policy",
    "id" : "pgp"
  },
  {
    "label": "Imprint",
    "icon": "fa-info",
    "link": "Imprint",
    "tooltip": "Imprint",
    "id" : "imprint"
  }
  ];

}
