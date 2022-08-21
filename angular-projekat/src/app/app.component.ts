import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { faBook } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit, OnDestroy {
  constructor(private router: Router, private store: Store) {}

  ngOnInit(): void {}

  ngOnDestroy(): void {
    localStorage.removeItem('text');
    localStorage.removeItem('title');
  }
  title = 'angular-projekat';
}
