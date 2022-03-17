import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FilmsComponent } from './films/films.component';
import { VehiclesComponent } from './vehicles/vehicles.component';
import { StarshipsComponent } from './starships/starships.component';
import { PlanetsComponent } from './planets/planets.component';
import { PeopleComponent } from './people/people.component';
import { SpeciesComponent } from './species/species.component';
import { FilmComponent } from './films/film.component';
import { PersonComponent } from './people/person.component';



const routes: Routes = [
  {
    path:'',
    children: [
      { path: 'films', component: FilmsComponent },
      { path: 'films/:text', component: FilmsComponent },
      { path: 'film/:id', component: FilmComponent },
      { path: 'people', component: PeopleComponent },
      { path: 'people/:text', component: PeopleComponent },
      { path: 'person/:id', component: PersonComponent },
      {path:'planets', component: PlanetsComponent},
      {path:'starships', component: StarshipsComponent},
      {path:'species', component: SpeciesComponent},
      {path:'vehicles', component: VehiclesComponent},
      {path:'**', redirectTo: 'films'}
    ]
  }
]



@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ]
})
export class ModuleRoutingModule { }
