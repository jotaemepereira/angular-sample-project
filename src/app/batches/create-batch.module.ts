import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { CreateBatchComponent } from './create-batch/create-batch.component';
import { CreateBatchRouting } from './create-batch.routing'
import { BatchesService } from './services/batches.service'

@NgModule({
  imports: [
    CommonModule,
    CreateBatchRouting,
    FormsModule
  ],
  declarations: [CreateBatchComponent],
  providers: [BatchesService]
})
export class CreateBatchModule { }
