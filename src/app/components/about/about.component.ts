import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';
import about from '../../data/about.json';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css'],
})
export class AboutComponent implements OnInit {
  courses: any[] = [];

  ngOnInit(): void {
    this.courses = about.benhur[0].courses.map((course: any) => ({
      name: course.name,
      course: course.course,
      stacks: course.stacks,
    }));
  }
}
