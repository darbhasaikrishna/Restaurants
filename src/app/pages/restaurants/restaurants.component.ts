import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators'
import { CommonService } from 'src/app/shared/common.service';
import { Restaurants } from 'src/app/shared/models/restaurants';
import * as  ResActions from './../../shared/Reducers/restaurants.actions';

@Component({
  selector: 'app-restaurants',
  templateUrl: './restaurants.component.html',
  styleUrls: ['./restaurants.component.scss']
})
export class RestaurantsComponent implements OnInit {
  restaurants = new FormGroup({
    city: new FormControl('', Validators.required),
    other: new FormControl(''),
  });
  list: Restaurants[] = [];
  loaded: boolean = true;
  private unsubscribe: Subject<any> = new Subject();
  constructor(private commonService: CommonService, private store: Store<Restaurants[]>) { }

  ngOnInit(): void {

  }

  onSearch() {
    this.loaded = false;
    if (this.restaurants.valid) {
      if (this.restaurants.controls.other.value === '') {
        this.commonService.getRestaurants(this.restaurants.controls.city.value).pipe(takeUntil(this.unsubscribe)).subscribe((res: any) => {
          this.list = res.restaurants;
          this.list.map(el => {
            el.buttontext = 'Add to Favorites';
            el.buttonClass = 'btn btn-primary';
          });
          this.loaded = true;
        })
        
      }
      else {
        this.list = this.list.filter(item => {
          return Object.keys(item).some(key => {
            return String(item[key]).toLowerCase().includes(this.restaurants.controls.other.value.toLowerCase());
          });
        });
      }
    }
  }

  onAdd(event) {
    const index = this.list.findIndex(i => i.id === event.id);

    this.list[index].buttontext = 'Remove from favorites';
    this.list[index].buttonClass = 'btn btn-danger';
    this.store.dispatch(new ResActions.Add(this.list[index]));
    this.list.splice(index,1); // removing from the list after adding to favorites
  }
}
