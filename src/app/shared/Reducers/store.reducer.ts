
import { Restaurants } from '../models/restaurants';
import * as  ResActions from './restaurants.actions';

export function reducer(state: Restaurants[] = [], action: ResActions.Actions) {
    switch (action.type) {
        case ResActions.add:
            const newState = [...state, action.payload]
            return newState

        case ResActions.remove:
            const index = state.findIndex(e => e.id === action.payload)
            let removedState = [...state];
            removedState.splice(index,1)
            return removedState;

        default:
            return state;
    }
}