import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginFormComponent } from './components/login-form/login-form.component';
import { SignupFormComponent } from './components/signup-form/signup-form.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { EffectsModule } from '@ngrx/effects';
import { FeedComponent } from './components/feed/feed.component';
import { HeaderComponent } from './components/header/header.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ArticleEditComponent } from './components/article-edit/article-edit.component';
import { MyArticlesComponent } from './components/my-articles/my-articles.component';
import { ReportsComponent } from './components/reports/reports.component';
import { NotificationsComponent } from './components/notifications/notifications.component';
import { Reducers } from './store/app.state';
import { UserEffects } from './store/user/user.effects';
import { InterceptorService } from './guards/interceptor';
import { ArticleEffects } from './store/article/article.effects';
import { ArticleThumbComponent } from './components/article-thumb/article-thumb.component';
import { environment } from 'src/environments/environment';
import { VievMyArticleComponent } from './components/viev-my-article/viev-my-article.component';
import { ReviewComponent } from './components/review/review.component';
import { FeedArticleThumbComponent } from './components/feed-article-thumb/feed-article-thumb.component';
import { ViewArticleComponent } from './components/view-article/view-article.component';
import { AddReviewComponent } from './components/add-review/add-review.component';
import { ScoreComponent } from './components/score/score.component';
import { NotificationThumbComponent } from './components/notification-thumb/notification-thumb.component';
import { NotificationEffects } from './store/notification/notification.effects';
import { ReportThumbComponent } from './components/report-thumb/report-thumb.component';
import { MyProfileComponent } from './components/my-profile/my-profile.component';
import { ProfileComponent } from './components/profile/profile.component';
import { MySubscriptionsComponent } from './components/my-subscriptions/my-subscriptions.component';
import { UserArticlesComponent } from './components/user-articles/user-articles.component';
import { SubscriptionsComponent } from './components/subscriptions/subscriptions.component';
import { SubscribersComponent } from './components/subscribers/subscribers.component';
import { UserThumbComponent } from './components/user-thumb/user-thumb.component';
import { SubscriptionFeedComponent } from './components/subscription-feed/subscription-feed.component';
import { SearchComponent } from './components/search/search.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginFormComponent,
    SignupFormComponent,
    FeedComponent,
    HeaderComponent,
    ArticleEditComponent,
    MyArticlesComponent,
    ReportsComponent,
    NotificationsComponent,
    ArticleThumbComponent,
    VievMyArticleComponent,
    ReviewComponent,
    FeedArticleThumbComponent,
    ViewArticleComponent,
    AddReviewComponent,
    ScoreComponent,
    NotificationThumbComponent,
    ReportThumbComponent,
    ProfileComponent,
    MyProfileComponent,
    MySubscriptionsComponent,
    UserArticlesComponent,
    SubscriptionsComponent,
    SubscribersComponent,
    UserThumbComponent,
    SubscriptionFeedComponent,
    SearchComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    FormsModule,
    HttpClientModule,
    StoreModule.forRoot(Reducers),
    StoreDevtoolsModule.instrument({
      maxAge: 25,
      autoPause: true,
      logOnly: environment.production,
    }),
    EffectsModule.forRoot([UserEffects, ArticleEffects, NotificationEffects]),
    MatToolbarModule,
    MatIconModule,
    FontAwesomeModule,
    MatMenuModule,
    MatCardModule,
    MatDividerModule,
    MatExpansionModule,
    MatAutocompleteModule,
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: InterceptorService, multi: true },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
