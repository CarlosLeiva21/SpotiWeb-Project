import { Routes } from '@angular/router';
import { HomePageComponent } from './Spotify/pages/home-page/home-page.component';
import { SearchSongPageComponent } from './Spotify/pages/search-song-page/search-song-page.component';
import { SearchAlbumPageComponent } from './Spotify/pages/search-album-page/search-album-page.component';

export const routes: Routes = [
  {
    path: 'home',
    component: HomePageComponent
  },
  {
    path: 'search-song',
    component: SearchSongPageComponent,
  },
  {
    path: 'search-artist',
    component: SearchAlbumPageComponent
  },
  // {
  //   path: 'artist',
  //   component: nada
  // }
  {
    path: '**',
    redirectTo: 'home'
  }
];
