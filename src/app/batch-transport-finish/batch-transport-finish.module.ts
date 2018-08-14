import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BatchTransportFinishComponent } from './batch-transport-finish/batch-transport-finish.component';
import { BatchTransportFinishRouting } from './batch-transport-finish.routing'
import { BatchTransportFinishService } from './services/batch-transport-finish.service'

@NgModule({
  imports: [
    CommonModule,
    BatchTransportFinishRouting
  ],
  declarations: [BatchTransportFinishComponent],
  providers: [BatchTransportFinishService]
})
export class BatchTransportFinishModule { }
