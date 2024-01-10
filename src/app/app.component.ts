import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  ngOnInit(): void {
    this.dockItems = [
      {
          label: 'linkedln',
          icon: "../assets/img/linkedin.png",
          url: "https://www.linkedin.com/in/lcferreira98/"
      },
      {
          label: 'github',
          icon: "../assets/img/github.png",
          url: "https://github.com/LFerreira0"
      },
      // {
      //     label: 'traduçao',
      //     icon: "../assets/img/global.png"
      // },
      {
          label: 'curriculum',
          icon: "../assets/img/curriculum-vitae.png",
          url: "https://drive.google.com/file/d/1xwMd2kiWq9Eu7kSjwESFR75I-2hyFUIt/view?usp=sharing"
      }
  ];
  }
  title = 'Portifolio';
  dockItems!: MenuItem[];

}
