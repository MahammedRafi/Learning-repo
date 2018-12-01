import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TreeRoutingModule } from './tree-routing.module';
import { NodeComponent } from './node/node.component';

@NgModule({
  imports: [
    CommonModule,
    TreeRoutingModule
  ],
  declarations: [NodeComponent]
})
export class TreeModule { }
