import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { TopBarComponent } from './components/top-bar/top-bar.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SiteIntroComponent } from './components/site-intro/site-intro.component';
import { TheTeamComponent } from './components/theTeam/the-team/the-team.component';
import { PlayersCardComponent } from './components/theTeam/playersCard/players-card/players-card.component';
import { ArticleComponent } from './components/articles/article/article.component';
import { TheArticlesComponent } from './components/articles/the-articles/the-articles.component';
import { CreateArticleComponent } from './components/articles/create-article/create-article.component';
import { TheContactComponent } from './components/contact/the-contact/the-contact.component';
import { AddressComponent } from './components/contact/address/address.component';
import { ContactFormComponent } from './components/contact/contact-form/contact-form.component';

@NgModule({
  declarations: [
    AppComponent,
    TopBarComponent,
    NavbarComponent,
    SiteIntroComponent,
    TheTeamComponent,
    PlayersCardComponent,
    ArticleComponent,
    TheArticlesComponent,
    CreateArticleComponent,
    TheContactComponent,
    AddressComponent,
    ContactFormComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
