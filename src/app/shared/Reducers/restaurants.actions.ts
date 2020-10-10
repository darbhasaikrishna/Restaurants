import { Action } from '@ngrx/store';
import { Restaurants } from '../models/restaurants';

export const add = 'Add'
export const remove = 'Remove'

export class Add implements Action {
    readonly type = add;
    constructor(public payload: Restaurants) { }

}

export class Remove implements Action {
    readonly type = remove;
    constructor(public payload: number) { }

}

export type Actions = Add | Remove;