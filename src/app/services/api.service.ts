import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { Film } from '../model/film';
import { Person } from '../model/person';



@Injectable({
  providedIn: 'root'
})
export class ApiService {

  url = 'https://swapi.dev/api';

    constructor(private http: HttpClient) { 


    }

  private arrayFilms(resp: any) {
    const films: Film[] = [];
    const data = resp.results;
    data.forEach((element: any) => {
      const film: Film = element;      
      films.push(film);
    });
    return films;
  }

  private film(resp: any) {
    const film: Film = resp; 
    return film;
  }

  private arrayPeople(resp: any) {
    const people: Person[] = [];
    const data = resp.results;
    data.forEach((element: any) => {
      const person: Person = element;      
      people.push(person);
    });
    return people;
  }

  private person(resp: any) {
    const person: Person = resp; 
    return person;
  }

  getHomeworld(urlPlanets: string): Observable<string> {
    return this.http.get( urlPlanets )
           .pipe(map( (data: any) => (data.name) ));
  }

  // Method for Films
  
  listFilms(): Observable<Film[]> {
    return this.http.get(`${ this.url }/films`)
           .pipe(map( this.arrayFilms ));
  }

  getFilm(id: number): Observable<Film> {
    return this.http.get(`${ this.url }/films/${ id }`)
            .pipe(map( this.film ));
  }


  searchFilms(text: string): Observable<Film[]> {
    return this.http.get(`${ this.url }/films/?search=${ text }`)
           .pipe(map( this.arrayFilms ));
  }
// Method for Person

  listPeople(): Observable<Person[]> {
    return this.http.get(`${ this.url }/people`)
           .pipe(map( this.arrayPeople ));
  }

  getPerson(id: number): Observable<Person> {
    return this.http.get(`${ this.url }/people/${ id }`)
            .pipe(map( this.person ));
  }

  searchPeople(text: string): Observable<Person[]> {
    return this.http.get(`${ this.url }/people/?search=${ text }`)
           .pipe(map( this.arrayPeople ));
  }




}
