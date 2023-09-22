import { Component, OnInit } from '@angular/core';
import { HeroesService, Heroe } from 'src/app/services/heroes.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
})
export class NavbarComponent implements OnInit {

  heroes:Heroe[]=[];
  buscarTexto: string = '';

  constructor(private router:Router,
              private _heroesService: HeroesService){}

  ngOnInit() {
    this.heroes = this._heroesService.getHeroes();
    // console.log(this.heroes);
  }

  buscarHeroe(termino:string){
    this.router.navigate(['/buscado',termino])
  }
}

