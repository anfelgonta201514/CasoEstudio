import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ArquitecturaRoutingModule } from './arquitectura-routing.module';
import { AboutUsComponent } from './about-us/about-us.component';
import { ServiceComponent } from './service/service.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { ContactComponent } from './contact/contact.component';


@NgModule({
  declarations: [
    AboutUsComponent,
    ServiceComponent,
    PortfolioComponent,
    ContactComponent
  ],
  imports: [
    CommonModule,
    ArquitecturaRoutingModule
  ]
})
export class ArquitecturaModule { }
