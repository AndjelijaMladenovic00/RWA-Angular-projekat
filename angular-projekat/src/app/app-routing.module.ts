import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArticleEditComponent } from './components/article-edit/article-edit.component';
import { FeedComponent } from './components/feed/feed.component';
import { LoginFormComponent } from './components/login-form/login-form.component';
import { MyArticlesComponent } from './components/my-articles/my-articles.component';
import { SignupFormComponent } from './components/signup-form/signup-form.component';
import { AdminGuard } from './guards/admin.guard';
import { AuthGuard } from './guards/auth.guard';
import { NotificationsComponent } from './components/notifications/notifications.component';
import { ReportsComponent } from './components/reports/reports.component';
import { VievMyArticleComponent } from './components/viev-my-article/viev-my-article.component';
import { ViewArticleComponent } from './components/view-article/view-article.component';
import { MyProfileComponent } from './components/my-profile/my-profile.component';
import { MySubscriptionsComponent } from './components/my-subscriptions/my-subscriptions.component';
import { ProfileComponent } from './components/profile/profile.component';
import { UserArticlesComponent } from './components/user-articles/user-articles.component';
import { SubscriptionsComponent } from './components/subscriptions/subscriptions.component';
import { SubscribersComponent } from './components/subscribers/subscribers.component';
import { SubscriptionFeedComponent } from './components/subscription-feed/subscription-feed.component';
import { SearchComponent } from './components/search/search.component';

const routes: Routes = [
  { path: 'login', component: LoginFormComponent },

  { path: '', component: LoginFormComponent },

  { path: 'signup', component: SignupFormComponent },

  { path: 'feed', component: FeedComponent, canActivate: [AuthGuard] },

  {
    path: 'subscriptionFeed',
    component: SubscriptionFeedComponent,
    canActivate: [AuthGuard],
  },

  {
    path: 'viewMyArticle',
    component: VievMyArticleComponent,
    canActivate: [AuthGuard],
  },

  {
    path: 'articleEdit',
    component: ArticleEditComponent,
    canActivate: [AuthGuard],
  },

  {
    path: 'myArticles',
    component: MyArticlesComponent,
    canActivate: [AuthGuard],
  },

  { path: 'reports', component: ReportsComponent, canActivate: [AdminGuard] },

  {
    path: 'notifications',
    component: NotificationsComponent,
    canActivate: [AuthGuard],
  },

  {
    path: 'viewArticle',
    component: ViewArticleComponent,
    canActivate: [AuthGuard],
  },

  {
    path: 'myProfile',
    component: MyProfileComponent,
    canActivate: [AuthGuard],
  },

  {
    path: 'mySubscriptions',
    component: MySubscriptionsComponent,
    canActivate: [AuthGuard],
  },

  {
    path: 'profile/:id',
    component: ProfileComponent,
    canActivate: [AuthGuard],
  },

  {
    path: 'subscriptions/:id/:username',
    component: SubscriptionsComponent,
    canActivate: [AuthGuard],
  },

  {
    path: 'subscribers/:id/:username',
    component: SubscribersComponent,
    canActivate: [AuthGuard],
  },

  {
    path: 'userArticles/:id/:username',
    component: UserArticlesComponent,
    canActivate: [AuthGuard],
  },

  {
    path: 'search',
    component: SearchComponent,
    canActivate: [AuthGuard],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
