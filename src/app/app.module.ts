import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HomeComponent } from './home/home.component';
import { UsersComponent } from './users/users.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { UserComponent } from './user/user.component';
import {FormsModule} from "@angular/forms";
import { ConverterPipe } from './pipes/converter.pipe';
import { NoAccessComponent } from './no-access/no-access.component';
import { RoleAvatarDirective } from './role-avatar.directive';
import { GreetingDirective } from './greeting.directive';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    UsersComponent,
    NotfoundComponent,
    UserComponent,
    ConverterPipe,
    NoAccessComponent,
    RoleAvatarDirective,
    GreetingDirective,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
