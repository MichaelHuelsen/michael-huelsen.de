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

  version = "2.1.2";
  date = "2019-05-27";
  appVersion() {
    return "Version " + this.version + ", " + this.date;
  }
  appCopyright = "&copy; 2015-2019 Michael H&uuml;lsen"

}
