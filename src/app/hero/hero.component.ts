import { Component, ElementRef, HostListener, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { IRepository } from '../shared/interfaces/git-interface';
import { GitService } from '../shared/services/git.service';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss']
})
export class HeroComponent implements OnInit {
  inView!: string;
  isTestDivScrolledIntoView!: boolean;
  projetos!: IRepository[];
  teste = {
    element: ViewChild('about')
  }
  constructor(
    private gitService: GitService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.getAllProjects();
  }

  @ViewChild('about', {static: false}) private about!: ElementRef<HTMLDivElement>;
  @ViewChild('trabalhos', {static: false})private trabalhos!: HTMLElement;
  @ViewChild('conteudo') private content!: ElementRef<HTMLDivElement>;

  @HostListener('window:scroll', ['$event'])
  isInViewPort(){
    if (this.about && this.trabalhos){
     
    }
  }
  public getAllProjects(): void{
    this.gitService.getAllProjects().subscribe((projetos) => {
      (this.projetos = projetos.filter(({name}) => {
        return name.includes("HL")
      }))
    });
  }

  public scroll(el:HTMLElement){
    this.content.nativeElement.scrollTo(0, el.offsetTop);
    window.scrollTo(0,0);

    if(this.trabalhos.offsetTop >= 18){
      
    }
  }
}
