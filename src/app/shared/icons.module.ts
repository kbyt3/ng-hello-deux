import { NgModule } from '@angular/core';
import {
  IconFileText,
  IconList,
  IconShoppingBag
} from 'angular-feather';

const icons = [
  IconFileText,
  IconList,
  IconShoppingBag
];

@NgModule({
  exports: icons
})
export class IconsModule { }
