import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AbstractFactoryComponent } from './components/abstract-factory/abstract-factory.component';
import { FactoryMethodComponent } from './components/factory-method/factory-method.component';
import { BuilderComponent } from './components/builder/builder.component';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    AbstractFactoryComponent,
    FactoryMethodComponent,
    BuilderComponent,
  ],
  exports: [AbstractFactoryComponent, FactoryMethodComponent, BuilderComponent],
})
export class CoreModule {}
