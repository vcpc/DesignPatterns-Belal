import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AbstractFactoryComponent } from './components/abstract-factory/abstract-factory.component';

@NgModule({
  declarations: [],
  imports: [CommonModule, AbstractFactoryComponent],
  exports: [AbstractFactoryComponent],
})
export class CoreModule {}
