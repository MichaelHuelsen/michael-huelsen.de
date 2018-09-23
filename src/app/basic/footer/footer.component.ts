import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  version = "2.0.3";
  date = "2018-09-22";
  appVersion() {
    return "Version " + this.version + ", " + this.date;
  }
  appCopyright = "&copy; 2015-2018 Michael H&uuml;lsen"

}
