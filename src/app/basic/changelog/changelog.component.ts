import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-changelog',
  templateUrl: './changelog.component.html',
  styleUrls: ['./changelog.component.scss']
})
export class ChangelogComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  changelog = [
    /*{
        "versionName": "a.b.c",
        "versionDate": "2017-09-15",
        "versionIssues": [
          { "text":"TEXT1" },
          { "text":"TEXT2" },
        ]
      },*/
    {
      "versionName": "2.5.0",
      "versionDate": "2022-02-10",
      "versionIssues": [
        { "text": "Angular version upgrade" },
      ]
    },
    {
      "versionName": "2.4.1",
      "versionDate": "2021-02-08",
      "versionIssues": [
        { "text": "fixing URL typos" },
      ]
    },
    {
      "versionName": "2.4.0",
      "versionDate": "2021-01-31",
      "versionIssues": [
        { "text": "improving versioning" },
        { "text": "fixing stylesheets" },
      ]
    },
    {
      "versionName": "2.3.2",
      "versionDate": "2021-01-30",
      "versionIssues": [
        { "text": "adding @angular/flex and flexbox refactoring." },
      ]
    },
    {
      "versionName": "2.3.1",
      "versionDate": "2021-01-28",
      "versionIssues": [
        { "text": "Menu refactoring." },
        { "text": "npm package upgrades." },
      ]
    },
    {
      "versionName": "2.3.0",
      "versionDate": "2021-01-27",
      "versionIssues": [
        { "text": "Added links to social media platforms." },
        { "text": "Minor upgrades." },
      ]
    },
    {
      "versionName": "2.2.0",
      "versionDate": "2020-07-03",
      "versionIssues": [
        { "text": "Major upgrade, Angular was migrated to version 10." },
        { "text": "Outdated npm packages were upgraded as well." }
      ]
    }, {
      "versionName": "2.1.3",
      "versionDate": "2020-07-02",
      "versionIssues": [
        { "text": "Corrections in imprint." },
        { "text": "Some npm packages were updated." }
      ]
    }, {
      "versionName": "2.1.2",
      "versionDate": "2019-05-28",
      "versionIssues": [
        { "text": "Corrections in pgp policy." }
      ]
    }, {
      "versionName": "2.1.1",
      "versionDate": "2019-03-26",
      "versionIssues": [
        { "text": "Refurbishments, again." }
      ]
    }, {
      "versionName": "2.1.0",
      "versionDate": "2019-03-25",
      "versionIssues": [
        { "text": "Refurbishments." }
      ]
    },
    {
      "versionName": "2.0.3",
      "versionDate": "2018-09-22",
      "versionIssues": [
        { "text": "Fixed link list and markup." }
      ]
    },
    {
      "versionName": "2.0.2",
      "versionDate": "2018-09-13",
      "versionIssues": [
        { "text": "https working properly as default, http requests are rerouted." },
        { "text": "Change log display implemented" },
      ]
    },
    {
      "versionName": "2.0.1",
      "versionDate": "2018-02-27",
      "versionIssues": [
        { "text": "UI Framework changed to Angular Material" },
      ]
    },
    {
      "versionName": "2.0.0",
      "versionDate": "2018-02-21",
      "versionIssues": [
        { "text": "Finalization of initial rewrite" },
        { "text": "Deployment of version 2.0.0" },
      ]
    },
    {
      "versionName": "1.12.5",
      "versionDate": "2017-10-03",
      "versionIssues": [
        { "text": "Angular Upgrade: I was stuck in the webpack world, there was no time for Angular." },
        { "text": "Angular Upgrade: some more documentation to come." },
        { "text": "Webpack is generating the index page and correctly references required JavaScript bundles." },
        { "text": "I threw away the Fontawesome icon library." },
      ]
    },
    {
      "versionName": "1.12.4",
      "versionDate": "2017-09-28",
      "versionIssues": [
        { "text": "Angular Upgrade: still learning webpack. adding stuff to the webpack config." },
        { "text": "Angular Upgrade: some more documentation to come..." }
      ]
    },
    {
      "versionName": "1.12.3",
      "versionDate": "2017-09-27",
      "versionIssues": [
        { "text": "Angular Upgrade: webpack does all the bundling for me." },
        { "text": "Angular Upgrade: grunt Grunt still creates my deployment package with grunt-contrib-copy." }
      ]
    },
    {
      "versionName": "1.12.2",
      "versionDate": "2017-09-26",
      "versionIssues": [
        { "text": "Angular Upgrade: package management only done via npm, bower is not in use anymore." },
        { "text": "Angular Upgrade: documentation added." }
      ]
    },
    {
      "versionName": "1.12.1",
      "versionDate": "2017-09-25",
      "versionIssues": [
        { "text": "Angular Upgrade: I am using a TypeScript compiler to build the JavaScript sources." },
        { "text": "Angular Upgrade: documentation added." }
      ]
    },
    {
      "versionName": "1.12.0",
      "versionDate": "2017-09-24",
      "versionIssues": [
        { "text": "plans to migrate from AngularJS to Angular" },
        { "text": "implemented a strategy to write about the changes." },
      ]
    },
    {
      "versionName": "1.11.0",
      "versionDate": "2017-09-20",
      "versionIssues": [
        { "text": "reorganization of source code" },
        { "text": "recommendations from Angular style guide implemented" },
      ]
    },
    {
      "versionName": "1.10.1",
      "versionDate": "2017-09-20",
      "versionIssues": [{
        "text": "More automation implemented with grunt (include-source, watch)"
      },
      {
        "text": "bootstrap theme refurbishment, it's getting cleaner."
      },
      ]
    },
    {
      "versionName": "1.10.0",
      "versionDate": "2017-09-19",
      "versionIssues": [{
        "text": "Starting some refurbishment"
      },]
    },
    {
      "versionName": "1.9.1",
      "versionDate": "2017-09-15",
      "versionIssues": [{
        "text": "going back to ngRoute instead of an old version of the 'new angular router'"
      },
      {
        "text": "Automation in deployment via Python script implemented"
      },
      ]
    },
    {
      "versionName": "1.9.0",
      "versionDate": "2017-09-14",
      "versionIssues": [{
        "text": "AngularJS 1.6.5"
      },
      {
        "text": "Unit testing frameworks Karma and Jasmine are in use"
      },
      {
        "text": "Fixes in app architecture"
      },
      ]
    },
    {
      "versionName": "1.8.1",
      "versionDate": "2017-09-03",
      "versionIssues": [{
        "text": "Fixes in stylesheet"
      },
      {
        "text": "some backend cleanup"
      }
      ]
    },
    {
      "versionName": "1.8.0",
      "versionDate": "2017-09-02",
      "versionIssues": [{
        "text": "Upgrade to AngularJS 1.6.3"
      },
      {
        "text": "Starting to build services within site to share data"
      },
      {
        "text": "Build/deployment cleanup in config files."
      },
      {
        "text": "Deleting unnecessary code."
      },
      ]
    },
    {
      "versionName": "1.7.0",
      "versionDate": "2017-08-30",
      "versionIssues": [{
        "text": "minor corrections"
      }]
    },
    {
      "versionName": "1.6.0",
      "versionDate": "2017-07-27",
      "versionIssues": [{
        "text": 'I am offering https by default for this website.'
      }]
    },
    {
      "versionName": "1.5.2",
      "versionDate": "2017-05-22",
      "versionIssues": [{
        "text": "minor updates"
      }]
    },
    {
      "versionName": "1.5.1",
      "versionDate": "2017-04-10"
    },
    {
      "versionName": "1.5.0",
      "versionDate": "2017-04-08",
      "versionIssues": [{
        "text": "changed git workflow"
      },
      {
        "text": "minor changes in about me section"
      },
      ]
    },
    {
      "versionName": "1.4.2",
      "versionDate": "2017-03-15",
      "versionIssues": [{
        "text": "Bye bye Google Analytics"
      },
      {
        "text": "Upgrade to jQuery3"
      }
      ]
    },
    {
      "versionName": "1.4.1",
      "versionDate": "2017-03-08",
      "versionIssues": [{
        "text": "I migrated from AngularJS1.5 to AngularJS1.6 incl. components"
      },
      {
        "text": "Using the new AngularJSrouter."
      }
      ]
    },
    {
      "versionName": "1.4.0",
      "versionDate": "2017-02-18",
      "versionIssues": [{
        "text": "I migrated from AngularJS1.2 to AngularJS1.4 incl. components"
      },
      {
        "text": "My personal Bootstrap sytle got refurbished."
      },
      {
        "text": "Navigation menu is built dynamically out of a JSON."
      },
      {
        "text": "Lots of refactoring happened"
      },
      ]
    },
    {
      "versionName": "1.3.2",
      "versionDate": "2017-02-17",
    },
    {
      "versionName": "1.2.3",
      "versionDate": "2017-01-29",
    },
    {
      "versionName": "1.2.2",
      "versionDate": "2017-01-23",
    },
    {
      "versionName": "1.2.1",
      "versionDate": "2017-01-22",
    },
    {
      "versionName": "1.2.0",
      "versionDate": "2017-01-22",
    },
    {
      "versionName": "1.1.0",
      "versionDate": "2017-01-02",
    },
    {
      "versionName": "1.0.7",
      "versionDate": "2016-04-17",
    },
    {
      "versionName": "1.0.6",
      "versionDate": "2016-03-13",
    },
    {
      "versionName": "1.0.5",
      "versionDate": "2016-03-06",
    },
    {
      "versionName": "1.0.4",
      "versionDate": "2016-02-16",
    },
    {
      "versionName": "1.0.3",
      "versionDate": "2016-01-28",
    },
    {
      "versionName": "1.0.2",
      "versionDate": "2015-07-20",
    },
    {
      "versionName": "1.0.1",
      "versionDate": "2015-05-08",
    },
    {
      "versionName": "1.0.0",
      "versionDate": "2015-05-03",
    },
  ];

}
