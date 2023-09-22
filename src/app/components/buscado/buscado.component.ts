import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeroesService } from 'src/app/services/heroes.service';

@Component({
  selector: 'app-buscado',
  templateUrl: './buscado.component.html',
})
export class BuscadoComponent implements OnInit{

  heroes:any[] = [];

  constructor(private activatedRoute: ActivatedRoute,
              private _heroesService: HeroesService){
  }

  ngOnInit(){

    this.activatedRoute.params.subscribe(params => {
      this.heroes = this._heroesService.buscarHeroes(params['termino']);
      console.log(this.heroes);
      });
  }

}
