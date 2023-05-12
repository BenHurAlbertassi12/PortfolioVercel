import { Component, OnInit } from '@angular/core';
import about from '../../data/about.json'

@Component({
  selector: 'app-portfoil',
  templateUrl: './portfoil.component.html',
  styleUrls: ['./portfoil.component.css']
})
export class PortfoilComponent implements OnInit{
  
  title: string = ''
  
  ngOnInit(): void {
    this.title = about.benhur[0].name

    
  }

}
