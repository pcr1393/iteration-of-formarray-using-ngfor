import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';

import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { ViewContactsComponent } from './home/view-contacts/view-contacts.component';
import { AddEditContactComponent } from './home/add-edit-contact/add-edit-contact.component';
import { ContactListService } from './Services/contact-list.service';
import {NgxPaginationModule} from 'ngx-pagination';
import { ContactPipe } from './pipes/contact.pipe';
import { RemainingTargetPipe } from './pipes/remaining-balance.pipe';



@NgModule({
  declarations: [
    ContactPipe,
    HomeComponent,
    ViewContactsComponent,
    AddEditContactComponent,
    RemainingTargetPipe
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgxPaginationModule
  ],
  providers: [ContactListService],
})
export class DashboardModule { }
