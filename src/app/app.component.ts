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
          icon: "../assets/img/linkedin.png"
      },
      {
          label: 'github',
          icon: "../assets/img/github.png"
      },
      {
          label: 'traduçao',
          icon: "../assets/img/global.png"
      },
      {
          label: 'curriculum',
          icon: "../assets/img/curriculum-vitae.png"
      }
  ];
  }
  title = 'Portifolio';
  dockItems!: MenuItem[];
}
