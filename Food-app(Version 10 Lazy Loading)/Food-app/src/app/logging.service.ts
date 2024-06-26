import { Injectable } from "@angular/core";

@Injectable({providedIn:'root'}) //provides instance to all application
export class LoggingService
{
    lastlog: string;

    printLog(message: string)
    {
        console.log(message);
        console.log(this.lastlog);
        this.lastlog = message;
        
    }
}