import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { ArquitecturaRoutingModule } from './arquitectura-routing.module';

import { AboutUsComponent } from './about-us/about-us.component';
import { ServiceComponent } from './service/service.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { ServicesComponent } from './services/services.component';


@NgModule({
  declarations: [
    AboutUsComponent,
    ServiceComponent,
    PortfolioComponent,
    ContactComponent,
    HomeComponent,
    ServicesComponent
  ],
  imports: [
    CommonModule,
    ArquitecturaRoutingModule,
    ReactiveFormsModule
  ]
})
export class ArquitecturaModule { }
