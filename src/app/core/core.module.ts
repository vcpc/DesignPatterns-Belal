import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AbstractFactoryComponent } from './components/abstract-factory/abstract-factory.component';
import { FactoryMethodComponent } from './components/factory-method/factory-method.component';

@NgModule({
  declarations: [],
  imports: [CommonModule, AbstractFactoryComponent, FactoryMethodComponent],
  exports: [AbstractFactoryComponent, FactoryMethodComponent],
})
export class CoreModule {}
