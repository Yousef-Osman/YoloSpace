import { Component, OnInit } from '@angular/core';
import { ValuesService } from 'src/app/services/values.service';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {
  displayData: any;
  constructor(private valService: ValuesService) { }

  ngOnInit(): void {
    this.valService.getValues().subscribe(response => {
      this.displayData = response;
      // console.log(this.displayData);
    }, error => {
      console.log("Your code is shit");
    });
  }
}
