import { HttpClient } from '@angular/common/http';
import { Component, ElementRef, HostListener, OnInit, ViewChild } from '@angular/core';
import { Observable } from 'rxjs';
import { GitService } from '../services/git.service';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss']
})
export class HeroComponent implements OnInit {
  inView!: string;
  projetos: any;
  constructor(
    private gitService: GitService
  ) { }

  ngOnInit(): void {
    this.getAllProjects();
  }

  @ViewChild('about', {static: false}) private about!: ElementRef<HTMLDivElement>;
  isTestDivScrolledIntoView!: boolean;

  @HostListener('window:scroll', ['$event'])
  isScrolledIntoView(){
    if (this.about){
      const rect = this.about.nativeElement.getBoundingClientRect();
      const topShown = rect.top >= 0;
      const bottomShown = rect.bottom <= window.innerHeight;
      this.isTestDivScrolledIntoView = topShown && bottomShown;
    }
  }

  public getAllProjects(): void{
    this.gitService.getAllProjects().subscribe((projetos) => {
      (this.projetos = projetos)
      console.log(this.projetos)
    });
  }

}
