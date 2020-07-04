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

  version = "2.2.1";
  date = "2020-07-05";
  appVersion() {
    return "Version " + this.version + ", " + this.date;
  }
  appCopyright = "&copy; 2015-2020 Michael H&uuml;lsen"

}
