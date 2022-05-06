import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookmarksComponent } from './components/bookmarks/bookmarks.component';
import { MoviesComponent } from './components/movies/movies.component';
import { SeriesComponent } from './components/series/series.component';
import { TrendingComponent } from './components/trending/trending.component';

const routes: Routes = [
  {path: '', component: TrendingComponent},
  {path: 'movies', component: MoviesComponent},
  {path: 'series', component: SeriesComponent},
  {path: 'bookmarks', component: BookmarksComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
