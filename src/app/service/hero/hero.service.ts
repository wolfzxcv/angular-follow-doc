import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';

import { Hero } from '../../models/Hero';
import { HEROES } from '../../../assets/mock-heroes';
import { MessageService } from '../message/message.service';

@Injectable({
  providedIn: 'root',
})
export class HeroService {
  constructor(private messageService: MessageService) {}

  getHeroes(): Observable<Hero[]> {
    // TODO: send the message _after_ fetching the heroes
    this.messageService.add('HeroService: fetched heroes');
    return of(HEROES);
  }
}
