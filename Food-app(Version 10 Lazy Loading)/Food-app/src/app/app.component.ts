import { Component, OnInit } from '@angular/core';
import { AuthService } from './auth/auth.service';
import { LoggingService } from './logging.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit
{
  constructor(private authService : AuthService, private loggingService : LoggingService){}

  ngOnInit()
  {
      this.authService.autologin();
      this.loggingService.printLog('hello for ngoninit form app component ts file');
  }
}