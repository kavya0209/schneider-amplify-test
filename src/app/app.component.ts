import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  // title = 'project-test';

  constructor(
    private router: Router,
   
) {}

  ngOnInit() {
    console.log("app component called");
    // this.router.navigate[('/login')];
    this.router.navigate(['login']);
  }
}
