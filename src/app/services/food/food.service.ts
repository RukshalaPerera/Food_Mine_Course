import { Injectable } from '@angular/core';
import {Food} from '../../shared/models/food';
import {Tag} from '../../shared/models/Tag'
@Injectable({
  providedIn: 'root'
})
export class FoodService {
  constructor() {
  }
  getFoodById(id:number):Food{
    return this.getAll().find(food=>food.id==id)!;
  }
  getAllFoodBySearchTerm(searchTerm:string): Food[]{
    return this.getAll().filter(
    food =>food.name.toLowerCase().includes(searchTerm.toLowerCase()));
  }
  getAllTags():Tag[]{
    return [
      {name: 'All', count:14 },
      {name: 'Fast Food', count:4 },
      {name: 'Pizza', count:2 },
      {name: 'Lunch', count:3 },
      {name: 'SlowFood', count:2 },
      {name: 'Hamburger', count:1 },
      {name: 'Fry', count:1 },
      {name: 'Soup', count:1 },
    ]
  }

  getAllFoodsByTag(tag:string): Food[] {
    return tag == "All" ?
        this.getAll() :
        this.getAll().filter(food => food.tags?.includes(tag));
  }

  getAll(): Food[] {
    return [
      {
        id: 1,
        name: 'food1',
        price: 200,
        cookTime: '10-20',
        favorite: false,
        origins: ['Italy'],
        stars: 4.0,
        imageUrl: '/assets/images/foods/food1.jpeg'
      },
      {
        id: 2,
        name: 'food2',
        price: 200,
        cookTime: '10-20',
        favorite: false,
        origins: ['Sri Lanka'],
        stars: 4.0,
        imageUrl: '/assets/images/foods/food2.jpeg'
      },
      {
        id: 3,
        name: 'food3',
        price: 200,
        cookTime: '10-20',
        favorite: false,
        origins: ['India'],
        stars: 4.0,
        imageUrl: '/assets/images/foods/food3.jpeg'
      },
      {
        id: 4,
        name: 'food4',
        price: 200,
        cookTime: '10-20',
        favorite: false,
        origins: ['Uganda'],
        stars: 4.0,
        imageUrl: '/assets/images/foods/food4.jpeg'
      },
      {
        id: 5,
        name: 'food5',
        price: 200,
        cookTime: '10-20',
        favorite: false,
        origins: ['Induneesia'],
        stars: 4.0,
        imageUrl: '/assets/images/foods/food5.jpeg'
      },
      {
        id: 6,
        name: 'food6',
        price: 200,
        cookTime: '10-20',
        favorite: false,
        origins: ['Iraq'],
        stars: 4.0,
        imageUrl: '/assets/images/foods/food6.jpeg'
      },

    ]

  }
}



