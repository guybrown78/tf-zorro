import { Component } from '@angular/core';

@Component({
  selector: 'app-tf-course-action',
  templateUrl: './tf-course-action.component.html',
  styleUrls: ['./tf-course-action.component.css']
})
export class TfCourseActionComponent {
  log(): void {
    console.log('click dropdown button');
  }
}
