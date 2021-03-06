import { Component } from '@angular/core';

@Component({
  selector: 'app-tf-table',
  templateUrl: './tf-table.component.html'
})
export class TfTableComponent {
  listOfData = [
    {
      key: '1',
      name: 'Cold Water Survival',
      code: 'CS_001',
      status: 'Live'
    },
    {
      key: '2',
      name: 'Optito Bosiet with CA-EBS',
      code: 'CS_020',
      status: 'Live'
    },
    {
      key: '3',
      name: 'Course Three',
      code: 'CS_300',
      status: 'ARCHIVED'
    }
  ];
}
