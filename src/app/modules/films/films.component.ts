import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Film } from 'src/app/model/film';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-films',
  templateUrl: './films.component.html',
  styleUrls: []
})
export class FilmsComponent implements OnInit {

  films: Film[] = [];

  constructor( private service: ApiService, private router: Router, private aRouter: ActivatedRoute) { }

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
    this.service.listFilms().subscribe( 
      res => {
      this.films = res;
      },
      err => {
        console.log(err.message);
      }
    );
  }

  search(text: string) {
    this.service.searchFilms(text).subscribe( 
      res => {
      this.films = res;
      },
      err => {
        console.log(err.message);
      }
    );
  }

  details(url: string) {
    let url_temp = url.split('/');
    this.router.navigate(['/film', url_temp[5]]);
  }

}
