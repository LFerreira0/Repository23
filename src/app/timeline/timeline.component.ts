import { Component, OnInit } from '@angular/core';

interface EventItem {
  status?: string;
  date?: string;
  icon?: string;
  color?: string;
  image?: string;
  content?: [string, string];
}

@Component({
  selector: 'app-timeline',
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.scss']
})
export class TimelineComponent implements OnInit {
  events: EventItem[];
  constructor() { 
    this.events = [
      { status: 'Inglês', date: '2013 - 2018 ', icon: 'pi pi-book', color: '#00bf8f', 
        content: [
          "Curso de inglês voltado à aprimorar a fluência: Um curso de inglês avançado que ajudou a me expressar mais fluência e confiança, seja na escrita, leitura, fala ou compreensão auditiva.", 
          "Ampliar o vocabulário: Com aulas mais especializadas, tive a oportunidade de aprender vocabulário mais específico de áreas de interesse ou profissões, o que é essencial para a comunicação eficaz em contextos mais complexos."
        ] 
      },    
      {
        status: 'Senai Ampliar - Web designer', date: '2015 - 2016',icon: 'pi pi-code', color: '#00bf8f', 
        content: [
          "Neste curso, adquiri conhecimento em design de interface de usuário (UI) e experiência do usuário (UX). Domínio de ferramentas de design, como Adobe Photoshop, Illustrator e/ou Sketch.", "Habilidades em codificação front-end, como HTML, CSS e JavaScript. Experiência com design responsivo e frameworks como Bootstrap. Conhecimento em design de sites e aplicativos móveis. Capacidade de criar wireframes e protótipos interativos. "
        ]
      },
      { status: 'Etec Itaquera - Informática', date: '2017 - 2018', icon: 'pi pi-code', color: '#00bf8f', 
        content: [
          "Curso técnico em informática voltado à adquirir conhecimento abrangente de linguagens de programação front-end e back-end, tais como HTML, CSS, JavaScript, Java, PHP, C#, VB, entre outras, permitindo a capacidade de desenvolver aplicações completas.", 
          "Habilidades em design responsivo e acessibilidade web, garantindo a criação de interfaces amigáveis e adaptáveis para diferentes dispositivos e usuários."
        ]
      },
      { status: 'Trabalho bilingue', date: '2018 - 2020', icon: 'pi pi-briefcase', color: '#00bf8f', 
        content: [
          "Em 2018 tive minha primeira oportunidade de trabalho bilingue, onde operava a ferramente Sabre, gerenciador criado pela American Airlines operado via linhas de comando para gerenciamento de passagens aéreas",
          "Neste momento tive a oportunidade de conversar com pessoas do mundo todo, especialmente em inglês, seja por e-mail ou chat com diversos paises."
        ] 
      },
      { status: 'Fiap', date: '2018 - 2021', icon: 'pi pi-code', color: '#00bf8f', 
        content: [
          "Ingressei no curso de Analise e desenvolvimento de sistemas da FIAP em 2018 onde pude aprender sobre tópicos essensiais no mundo da tecnologia,  desde modelagens e construções de bancos de dados, gestões de projeto, cloud e outros, à desenvolvimento back-end, front, UX e UI",
          "Pude aplicar estes conhecimentos em diversos projetos, individuais e em grupos, inclusive em parceria com grandes empresas, como a IBM por exemplo, onde soluções para um problema real foram desenvolvidas."
        ] 
      },
      { status: 'BRQ', date: '2020 - 2022', icon: 'pi pi-code', color: '#00bf8f', 
        content: [
          "Na BRQ tive minha primeira oportunidade na área de técnologia, começando como estagiário onde passei a trabalhar com angular e c#, desenvolvendo sistemas e aplicações para um grande banco, realizando integrações rest e testes unitários.",
          "Após muito aprendizado, fui promovido para trainee e pouco tempo depois, para desenvolvedor Junior, onde pude aprender novas tecnologias e lidar diretamente com o cliente final, para conhecer mais da àrea e dos processos."
        ] 
      },
      {
        status: 'Tech Hunter Brasil', date: '2020 - 2022', icon: 'pi pi-code', color: '#00bf8f', 
        content: [
          "Fui convidado para mentorar uma turma de alunos do curso de Analise de sistemas na universidade Sâo Judas, prestando suporte à conteudos de front-end e back-end, uma grande oportunidade para desenvolver skills importantes dentro da àrea de técnologia",
          "Encerramos a turma e premiamos os destaques com uma oportunidade para engressar no mercado de trabalho, uma oportunidade incrivel para desenvolver a habilidade de gestão de pessoas e tempo."
        ]
      },
      {
        status: 'IBM', date: '2022 - atual', icon: 'pi pi-code', color: '#00bf8f',
        content: [
          "E assim chegamos aos dias de hoje, onde trabalho como um desenvolvedor de aplicações criando interfaces e realizando integração à serviços REST e graphql, utilizando git para versionamento e AWS para deploys, me desenvolvendo diariamente", 
          "Na IBM tive a oportunidade de atuar como team lead, emcabeçando tomadas de decições técnicas e organizacionais dentro de um time de front-end, um grande passo no aprendizado de gestão de pessoas."
        ]
      }
  ];
  }

  ngOnInit(): void {
  }

}
