import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddUserComponent } from './components/users/add-user/add-user.component';
import { UserDetailsComponent } from './components/users/user-details/user-details.component';
import { UsersListComponent } from './components/users/users-list/users-list.component';
import { CarsListComponent } from './components/cars/cars-list/cars-list.component';
import { CarDetailsComponent } from './components/cars/car-details/car-details.component';
import { AddCarComponent } from './components/cars/add-car/add-car.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { UpdateUserComponent } from './components/users/update-user/update-user.component';

@NgModule({
  declarations: [
    AppComponent,
    AddUserComponent,
    UserDetailsComponent,
    UsersListComponent,
    CarsListComponent,
    CarDetailsComponent,
    AddCarComponent,
    UpdateUserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
