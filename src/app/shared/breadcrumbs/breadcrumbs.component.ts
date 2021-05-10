import { Component, OnDestroy } from '@angular/core';
import { ActivationEnd, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { filter, map } from 'rxjs/operators';

@Component({
  selector: 'app-breadcrumbs',
  templateUrl: './breadcrumbs.component.html',
  styles: [
  ]
})
export class BreadcrumbsComponent implements OnDestroy {
  titulo: string;
  paramSub$: Subscription;

  constructor(private readonly router: Router) {
    this.paramSub$ = this.getParameters().subscribe(({ titulo }) => {
      this.titulo = titulo;
      document.title = `Admin Pro - ${this.titulo}`;
    });
  }
  ngOnDestroy(): void {
    this.paramSub$.unsubscribe();
  }

  getParameters = () => {
    return this.router.events.pipe(
      filter(event => event instanceof ActivationEnd),
      filter((event: ActivationEnd) => event.snapshot.firstChild === null),
      map((event: ActivationEnd) => event.snapshot.data));
  }
}
