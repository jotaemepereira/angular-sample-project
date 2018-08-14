import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BatchesComponent } from './batches/batches.component';
import { BatchesRouting } from './batches.routing';
import { BatchesService } from './services/batches.service'

@NgModule({
  imports: [
    CommonModule,
    BatchesRouting
  ],
  declarations: [BatchesComponent],
  providers: [BatchesService]
})
export class BatchesModule { }
