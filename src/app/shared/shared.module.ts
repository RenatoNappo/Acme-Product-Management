import { ConvertToSpacesPipe } from './Pipes/convert-to-spaces.pipe';

import { StarComponent } from './star/star.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    StarComponent,
    ConvertToSpacesPipe
  ],
exports: [
  StarComponent,
  CommonModule,
  FormsModule,
  ConvertToSpacesPipe
]
})
export class SharedModule { }


