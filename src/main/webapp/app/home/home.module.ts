import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { StuEmerConSharedModule } from 'app/shared/shared.module';
import { HOME_ROUTE } from './home.route';
import { HomeComponent } from './home.component';

@NgModule({
  imports: [StuEmerConSharedModule, RouterModule.forChild([HOME_ROUTE])],
  declarations: [HomeComponent]
})
export class StuEmerConHomeModule {}
