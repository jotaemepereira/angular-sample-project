import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { BatchesTransportComponent } from './batches-transport/batches-transport.component';
import { BatchesTransportRouting } from './batches-transport.routing'
import { BatchesTransportService } from './services/batches-transport.service'

@NgModule({
  imports: [
    CommonModule,
    BatchesTransportRouting,
    FormsModule
  ],
  declarations: [BatchesTransportComponent],
  providers: [BatchesTransportService]
})
export class BatchesTransportModule { }
