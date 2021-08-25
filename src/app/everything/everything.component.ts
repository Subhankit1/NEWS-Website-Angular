import { Component, OnInit } from '@angular/core';
import { NewsapiservicesService } from '../service/newsapiservices.service';

@Component({
  selector: 'app-everything',
  templateUrl: './everything.component.html',
  styleUrls: ['./everything.component.css']
})
export class EverythingComponent implements OnInit {

  constructor(private _services:NewsapiservicesService) { }

  everyDisplay: any;

  ngOnInit(): void {
    this._services.everyThing().subscribe((result) => {
      this.everyDisplay = result.articles;
    })
  }

}
