import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import {HEROES} from '../mock-heroes';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss']

})
export class HeroesComponent implements OnInit {

//  heroes = HEROES;
  heroes: Hero[];
  // selectedHero: Hero;

  // onselect(hero: Hero): void {
  //   this.selectedHero = hero;
  // }

  // hero: Hero = {
  //    id: 1,
  //    name: 'Windstorm'
  //  };

  //    getHeroes(): void {
  //   this.heroes = this.heroService.getHeroes();
  // }
  constructor(private heroService: HeroService) { }
  getHeroes(): void {
    this.heroService.getHeroes()
        .subscribe(heroes => this.heroes = heroes);
  }


 

  ngOnInit() {
    this.getHeroes();
  }
}
