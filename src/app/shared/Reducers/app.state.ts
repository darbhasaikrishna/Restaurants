import { Restaurants } from '../models/restaurants';

export interface AppState {
    readonly restaurant: Restaurants[];
}