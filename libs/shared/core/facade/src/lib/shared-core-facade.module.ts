import { NgModule } from '@angular/core';
import { SharedCoreInfrastructureModule } from '@shared/core/infrastructure';

@NgModule({
  imports: [SharedCoreInfrastructureModule.forRoot()],
})
export class SharedCoreFacadeModule {}
