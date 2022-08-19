import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Notification } from 'src/app/models/notification.model';
import {
  deleteArticle,
  selectMyArticle,
} from 'src/app/store/article/article.actions';
import { openNotification } from 'src/app/store/notification/notification.actions';

@Component({
  selector: 'app-notification-thumb',
  templateUrl: './notification-thumb.component.html',
  styleUrls: ['./notification-thumb.component.css'],
})
export class NotificationThumbComponent implements OnInit {
  @Input() notification: Notification | undefined = undefined;
  opened: boolean = false;

  constructor(private store: Store, private router: Router) {}

  ngOnInit(): void {
    if (this.notification && this.notification.opened)
      this.opened = this.notification.opened;
    if (this.notification) this.opened = this.notification.opened;
    const expHeader: HTMLElement | null =
      document.getElementById('expansionHeader');
    if (expHeader && this.opened) expHeader.className = 'opened';
    if (expHeader && !this.opened) expHeader.className = 'unopened';

    if (this.notification && this.notification.deleteArticleOnReception) {
      const id: number = this.notification.articleID;
      this.store.dispatch(deleteArticle({ id }));
    }
  }

  getDate(d: Date): string {
    const date: Date = new Date(d);
    let s: string = '';
    s +=
      date.getDate() +
      '.' +
      (date.getMonth() + 1) +
      '.' +
      date.getFullYear() +
      '.';
    return s;
  }

  openNotification(title: HTMLElement) {
    if (this.notification && this.opened == false) {
      this.opened = true;
      const id: number = this.notification.id;
      this.store.dispatch(openNotification({ id }));
      title.className = 'opened';
    }
  }

  gotoArticle() {
    if (this.notification) {
      const id: number = this.notification.articleID;
      this.store.dispatch(selectMyArticle({ id }));
      this.router.navigate(['viewMyArticle']);
    }
  }
}