import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: []
})
export class PersonComponent implements OnInit {

  id: number = 0;
  person: any = {};

  constructor(private service: ApiService, private aRoute: ActivatedRoute) {
     this.aRoute.params.subscribe(param => {
        this.id = param['id'];
      });
   }

  ngOnInit(): void {
    this.details();
  }

  details() {    
    this.service.getPerson(this.id).subscribe( 
      res => {
      this.person = res;
      },
      err => {
        console.log(err.message);
      }
    );
  }

}
