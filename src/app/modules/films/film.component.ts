import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-film',
  templateUrl: './film.component.html',
  styleUrls: []
})
export class FilmComponent implements OnInit {


  id: number = 0;
  film: any = {};


  constructor(private service: ApiService, private aRoute: ActivatedRoute) {
    this.aRoute.params.subscribe(param => {
      this.id = param['id'];
    });
   }

   details() {    
    this.service.getFilm(this.id).subscribe( 
      res => {
      this.film = res;
      },
      err => {
        console.log(err.message);
      }
    );
  }

  ngOnInit(): void {
    this.details()
  }

}
