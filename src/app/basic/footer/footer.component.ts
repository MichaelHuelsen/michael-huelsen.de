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

  version = "2.3.0";
  date = "2021-01-20";
  appVersion() {
    return "Version " + this.version + ", " + this.date;
  }
  appCopyright = "&copy; 2015-2021 Michael H&uuml;lsen"

}
