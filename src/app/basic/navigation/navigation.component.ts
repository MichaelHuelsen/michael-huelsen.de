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

  myBrand = "michael-huelsen.de";
  menuItems = [{
    "label": "Home",
    "icon": "fa-home",
    "link": "Home",
    "tooltip": "Home"
  },
  /*{
    "label": "Development",
    "id": "dd-dev",
    "icon": "fa-cogs",
    "iconclasses": "fa",
    "link": "Development",
    "children": [
      {
        "label": "From AngularJS to Angular",
        "link": "Development/AngularUpgrade",
        "separator": true
      },
      {
        "label": "How this page is built",
        "link": "Development/Pipeline",
        "separator": false
      },
      {
        "label": "Website Change Log",
        "link": "Development/ChangeLog",
        "separator": true
      },
      {
        "label": "Recommended Reading",
        "link": "Development/Recommended",
        "separator": false
      }
    ]
  },*/
  {
    "label": "About Me",
    "id": "dd-test",
    "icon": "fa-street-view",
    "link": "AboutMe",
    "tooltip": "Something about me",
    "children": [
      {
        "label": "About",
        "link": "About",
        "separator": true
      },
      {
        "label": "PGP Policy",
        "link": "About/Policy",
      }
    ]
  },
  {
    "label": "PGP",
    "icon": "fa-info",
    "link": "PGP",
    "tooltip": "My PGP policy",
  },
  {
    "label": "Imprint",
    "icon": "fa-info",
    "link": "Imprint",
    "tooltip": "Imprint"
  }
  ];

}
