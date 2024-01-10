import { Component, ElementRef, HostListener, OnInit, ViewChild } from '@angular/core';
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
  aboutView = false;
  workView = false;
  projectView = false;
  constructor(
    private gitService: GitService,    
  ) { }

  ngOnInit(): void {
    this.getAllProjects();
  }

  @ViewChild('about', {static: false}) private about!: ElementRef<HTMLDivElement>;
  @ViewChild('trabalhos', {static: false}) private trabalhos!: ElementRef<HTMLDivElement>;
  @ViewChild('projects', {static: false}) private projects!: ElementRef<HTMLDivElement>
  @ViewChild('conteudo') private content!: ElementRef<HTMLDivElement>;

  

  @HostListener('wheel', ['$event'])
  isInViewPort(){
    if (this.about && this.trabalhos){

        if(this.about.nativeElement.getBoundingClientRect().top > 20 && this.about.nativeElement.getBoundingClientRect().top < 400)
        {                    
          document.getElementById("aboutBar")?.classList.add('focus')          
          document.getElementById("aboutLabel")?.classList.add('focusLabel')     
          this.aboutView = true;     
        } else
        {
            document.getElementById("aboutBar")?.classList.remove('focus')          
            document.getElementById("aboutLabel")?.classList.remove('focusLabel')
            this.aboutView = false
        }
        
        if (this.trabalhos.nativeElement.getBoundingClientRect().top > 60 && !this.aboutView){
          console.log(this.trabalhos.nativeElement.getBoundingClientRect().top)
          document.getElementById("workBar")?.classList.add('focus')          
          document.getElementById("workLabel")?.classList.add('focusLabel')    
          this.workView = true;
        } 
        else{
          console.log(this.trabalhos.nativeElement.getBoundingClientRect().top)
          document.getElementById("workBar")?.classList.remove('focus')          
          document.getElementById("workLabel")?.classList.remove('focusLabel')    
          this.workView = false;
        }
        
        if(this.projects.nativeElement.getBoundingClientRect().top > 500 && !this.workView && !this.aboutView){
          document.getElementById("projectsBar")?.classList.add('focus')          
          document.getElementById("labelsBar")?.classList.add('focusLabel') 
        }else{       
          document.getElementById("projectsBar")?.classList.remove('focus')          
          document.getElementById("labelsBar")?.classList.remove('focusLabel') 
        }
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
  }
}
