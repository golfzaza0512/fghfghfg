import { Component } from '@angular/core';
import { Item } from "./item";
import { Router, NavigationEnd, Event } from '@angular/router';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  url = "";



  constructor(router: Router) {

    router.events.pipe(

      filter((event: Event) => { return event instanceof NavigationEnd })

    ).subscribe(

      (event: NavigationEnd) => {

        this.url = event.url;

      }

    );
}

}