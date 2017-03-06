import { Component } from "@angular/core";

@Component({
  selector: 'authors',
  template: `
      <h2>Authors</h2>
      {{title}}
      <ul>
      <li *ngFor="let author of authors">
      {{author}}
</li>
</ul>`

})
export class AuthorsComponent {
  title: string = "This title of the courses page";
  authors = ["Ben"];
}
