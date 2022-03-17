import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: []
})
export class PeopleComponent implements OnInit {

  people: any[] = [];

  constructor(private service: ApiService, private router: Router, private aRouter: ActivatedRoute) { }

  ngOnInit(): void {
   this.aRouter.params.subscribe( res => {
      if(res['text'] && res['text']!='') {
        this.search(res['text']);
      } else {
        this.list();  
      }
    });  
  }

  list() {
    this.service.listPeople().subscribe( 
      res => {
      this.people = res;
      },
      err => {
        console.log(err.message);
      }
    );
  }

  search(text: string) {
    this.service.searchPeople(text).subscribe( 
      res => {
      this.people = res;
      },
      err => {
        console.log(err.message);
      }
    );
  }

  details(url: string) {
  let url_temp = url.split('/');
    this.router.navigate(['/person', url_temp[5]]);
  }
   

}
