import { AuthModule } from './auth/auth.module';
import { FilmsModule } from './components/films/films.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CardComponent } from './card/card.component';
import { AuthComponent } from './auth/auth/auth.component';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { BookComponent } from './book/book.component'; 
@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    BookComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FilmsModule,
    AuthModule 
  ],
 
  bootstrap: [AppComponent]
})
export class AppModule { }
