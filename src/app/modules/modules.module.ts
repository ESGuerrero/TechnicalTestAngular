import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FilmsComponent } from './films/films.component';
import { PeopleComponent } from './people/people.component';
import { PlanetsComponent } from './planets/planets.component';
import { StarshipsComponent } from './starships/starships.component';
import { VehiclesComponent } from './vehicles/vehicles.component';
import { ModuleRoutingModule } from './module-routing.module';
import { SpeciesComponent } from './species/species.component';
import { PersonComponent } from './people/person.component';
import { FilmComponent } from './films/film.component';
import { HeightPipe } from './people/pipes/height.pipe';
import { HomeworldPipe } from './people/pipes/homeworld.pipe';



@NgModule({
  declarations: [
    FilmsComponent,
    PeopleComponent,
    PlanetsComponent,
    StarshipsComponent,
    VehiclesComponent,
    SpeciesComponent,
    PersonComponent,
    FilmComponent,
    HeightPipe,
    HomeworldPipe
  ],
  imports: [
    CommonModule,
    ModuleRoutingModule
  ]
})
export class ModulesModule { }
