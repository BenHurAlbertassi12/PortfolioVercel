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
  allStacks: string[] = [];

  ngOnInit(): void {
    this.projects = about.benhur[0].project;
    this.getAllStacks();
  }

  selectProject(project: any): void {
    this.selectedProject = project;
  }

  getAllStacks(): void {
    this.projects.forEach((project) => {
      project.stacks.forEach((stack: string) => {
        if (!this.allStacks.includes(stack)) {
          this.allStacks.push(stack);
        }
      });
    });
  }

  filterProjectsByStack(stack: string): void {
    this.selectedProject = null; 
    if (stack === 'all') {
      this.projects = about.benhur[0].project; 
    } else {
      this.projects = about.benhur[0].project.filter((project) =>
        project.stacks.includes(stack)
      ); 
    }
  }
}
