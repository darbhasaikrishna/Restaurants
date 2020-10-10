import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Restaurants } from 'src/app/shared/models/restaurants';
import { AppState } from 'src/app/shared/Reducers/app.state';
import * as  ResActions  from './../../shared/Reducers/restaurants.actions';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.scss']
})
export class FavoritesComponent implements OnInit {
  favList: Observable<Restaurants[]>;
  favorites: Restaurants[] = [];
  constructor(private store: Store<AppState>) {
    this.favList = store.select('restaurant') ;
  }

  ngOnInit(): void {
    this.favList.subscribe((state) => {
        this.favorites = [...state];

    })
  }

  onRemove(item: Restaurants) {
    this.store.dispatch(new ResActions.Remove(item.id))
  }
}
