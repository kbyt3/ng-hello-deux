import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { IconsModule } from '../icons/icons.module';
import { HeaderComponent } from '../header/header.component';

@NgModule({
  imports: [
    CommonModule,
    NgbModule
  ],
  declarations: [
    HeaderComponent
  ],
  exports: [
    HeaderComponent,
    NgbModule,
    IconsModule
  ]
})
export class SharedModule { }
