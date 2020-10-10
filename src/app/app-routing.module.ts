import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FavoritesModule } from './pages/favorites/favorites.module';
import { RestaurantsModule } from './pages/restaurants/restaurants.module';

const routes: Routes = [{
  path: 'restaurants',
  loadChildren: () => import('./pages/restaurants/restaurants.module').then(m => m.RestaurantsModule)
},
{
  path: 'favorites',
  loadChildren: () => import('./pages/favorites/favorites.module').then(m => m.FavoritesModule)
},
{
  path: '',
  pathMatch: 'full',
  redirectTo: '/restaurants'
}];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    RestaurantsModule,
    FavoritesModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
