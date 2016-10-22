import { NgModule } from '@angular/core';
import {TestComponent} from './test.component';
import { BrowserModule }  from '@angular/platform-browser';
import {ToolTipModule} from '../src/tool-tip.module';

@NgModule({
    imports: [
        BrowserModule, ToolTipModule
    ],
  declarations: [ TestComponent ],
  bootstrap : [ TestComponent ]
})
export class TestModule { }