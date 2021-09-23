import { Component, OnInit } from '@angular/core';
import { Slide } from './slide';

@Component({
  selector: 'app-slideshow',
  templateUrl: './slideshow.component.html',
  styleUrls: ['./slideshow.component.scss']
})
export class SlideshowComponent implements OnInit {

  slideshows: Array<Slide> =  [
    { posicao : "start", titulo:"Primeiro", descricao: "Descricao breve", ativo:true}  as Slide, 
    { posicao : "", titulo:"segundo", descricao: "Descricao breve"} as Slide, 
    { posicao : "end", titulo:"terceiro", descricao: "Descricao breve"} as Slide, 
    ];

  constructor() { }

  ngOnInit(): void {
  }

  ativarSlide(indice:number){
    this.slideshows.forEach((s,i) => s.ativo = i == indice);
  }

  avancar(){
    let indexSlideAtivo = this.slideshows.findIndex( s=> s.ativo);
    if(indexSlideAtivo < this.slideshows.length-1){
      indexSlideAtivo++;    
      
    }else{
      indexSlideAtivo= 0;      
    }

    this.ativarSlide(indexSlideAtivo);

  }

  voltar(){
    let indexSlideAtivo = this.slideshows.findIndex( s=> s.ativo);
    if(indexSlideAtivo > 0){
      indexSlideAtivo--;
    }else{
      indexSlideAtivo = this.slideshows.length - 1;
    }

    this.ativarSlide(indexSlideAtivo);
  }

}
