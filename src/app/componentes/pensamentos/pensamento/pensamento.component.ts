import { Pensamento } from './../pensamento';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-pensamento',
  templateUrl: './pensamento.component.html',
  styleUrls: ['./pensamento.component.css']
})
export class PensamentoComponent implements OnInit {

  @Input() pensamento: Pensamento = {//array = "listarPensamento e pensamento" are the same thing, what change is the name only
    id: 0,
    conteudo: 'I love Angular',//therefore why have these fields = conteudo, autoria and modelo in 2 file
    autoria: 'Brandon',
    modelo: 'modelo3'
  }
  constructor() { }

  ngOnInit(): void {
  }

  larguraPensamento(): string {//function why return a class different
    if(this.pensamento.conteudo.length >= 256) {
      return 'pensamento-g';
    }
    return 'pensamento-p';
  }

}
