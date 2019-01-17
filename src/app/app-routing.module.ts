import { NgModule } from '@angular/core';
import { Routes, RouterModule, Router } from '@angular/router';
import { SearchbarComponent } from './searchbar/searchbar.component';
import { InfoAlbumComponent } from './info-album/info-album.component';
import { InfoArtistComponent } from './info-artist/info-artist.component';
import { InfoTrackComponent } from './info-track/info-track.component';

const routes: Routes = [
  {path: '', redirectTo: 'searchbar', pathMatch: 'full'},
  {path: 'searchbar', component: SearchbarComponent},
  {path: 'info-album/:id', component: InfoAlbumComponent},
  {path: 'info-artist/:id', component: InfoArtistComponent},
  {path: 'info-track/:id', component: InfoTrackComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
  constructor(private router: Router) {
    this.router.errorHandler = (error: any) => {
      this.router.navigate(['searchbar']);
    };
  }
}
