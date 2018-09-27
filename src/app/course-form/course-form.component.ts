import { Component } from '@angular/core';

@Component({
  selector: 'course-form',
  templateUrl: './course-form.component.html',
  styleUrls: ['./course-form.component.css']
})
export class CourseFormComponent{

  categories = [
    { id: 1, name: "Development"},
    { id: 2, name: "Art"},
    { id: 3, name: "Language"},
  ]

  log(x) {
    console.log(x);
  }

  submit(f) {
    console.log(f);
  }
}
