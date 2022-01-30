import * as jQuery from 'jquery';
import { Router } from "@angular/router";
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {

    (function($) {
      $('.nav-switch').on('click', function(event) {
          $('.nav-menu').slideToggle(400);
          event.preventDefault();
      });
    })(jQuery);

  }
}
