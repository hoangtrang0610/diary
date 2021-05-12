import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedModule } from './shared/modules/shared/shared.module';
import { UsersModule } from './modules/users/users.module';
import { DiariesModule } from './modules/diaries/diaries.module';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { LogInComponent } from './modules/users/components/log-in/log-in.component';
import { RegisterComponent } from './modules/users/components/register/register.component';
import { AuthInterceptor } from './shared/services/authconfig.interceptor';
import { DiaryDetailComponent } from './modules/diaries/components/diary-detail/diary-detail.component';

const routes: Routes = [
  { path: '', redirectTo: '/log-in', pathMatch: 'full' },
  { path: 'login', component: LogInComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'diaries/:id' , component: DiaryDetailComponent}
];

@NgModule({
  declarations: [
    AppComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SharedModule,
    UsersModule,
    DiariesModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule.forChild(routes)
  ],
  providers: [
     { provide: HTTP_INTERCEPTORS,
       useClass: AuthInterceptor,
       multi: true
     }
  ],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
