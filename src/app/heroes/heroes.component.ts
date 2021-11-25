import { Component, OnInit } from '@angular/core';
import { HeroService } from '../hero.service';
import { Hero } from '../hero';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  selectedHero?: Hero;

  //heroes = HEROES;
  heroes: Hero[] = [];

  constructor(private heroService: HeroService, 
              private messageService: MessageService) { }

  ngOnInit(): void {
    this.getHeroes();
  }

  
  onSelect(hero: Hero): void {
    this.selectedHero = hero;
    this.messageService.add(`HeroesComponent: Selected hero id=${hero.id}`);
  }

  // getHeroes(): void {
    // Essa chamada é Bloqueante!!!!
  //  this.heroes = this.heroService.getHeroes();
  //}

  getHeroes(): void {
    this.heroService.getHeroes()
        .subscribe(
          //Esse codigo vai ser execultado em
          //algum momento (assincrono/ não bloqueante)
          //
          // Esse simbolo =>  é uma arrow function
          heroes => this.heroes = heroes);
  }
}