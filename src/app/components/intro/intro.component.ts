import { Component, OnInit } from '@angular/core';
import about from '../../data/about.json';

@Component({
  selector: 'app-intro',
  templateUrl: './intro.component.html',
  styleUrls: ['./intro.component.css'],
})
export class IntroComponent implements OnInit {

  name:string = ''
  title:string = ''
  text:string = ''


  ngOnInit(): void {
    this.name = about.benhur[0].name
    this.title = about.benhur[0].function;
    this.text = about.benhur[0].description;
  }

}
