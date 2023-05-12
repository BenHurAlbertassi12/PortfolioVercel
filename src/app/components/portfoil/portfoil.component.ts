import { Component, OnInit } from '@angular/core';
import about from '../../data/about.json';

@Component({
  selector: 'app-portfoil',
  templateUrl: './portfoil.component.html',
  styleUrls: ['./portfoil.component.css'],
})
export class PortfoilComponent implements OnInit {
  projects: any[] = [];
  selectedProject: any;

  ngOnInit(): void {
    this.projects = about.benhur[0].project;
  }

  selectProject(project: any): void {
    this.selectedProject = project;
  }
}
