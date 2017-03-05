import { Component } from "@angular/core";

@Component({
  selector: 'courses',
  template: `
      <h2>Courses</h2>
      {{title}}
      <ul>
      <li *ngFor="let course of courses">
      {{course}}
</li>
</ul>`
})
export class CoursesComponent {
  title: string = "This title of the courses page";
  courses = ["Course1", "Course2", "Course3"]
}
