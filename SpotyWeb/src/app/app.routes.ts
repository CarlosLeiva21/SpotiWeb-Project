import { Routes } from '@angular/router';
import { HomePageComponent } from './Spotify/pages/home-page/home-page.component';
import { SearchSongPageComponent } from './Spotify/pages/search-song-page/search-song-page.component';
import { SearchAlbumPageComponent } from './Spotify/pages/search-album-page/search-album-page.component';
import { AlbumTracksPageComponent } from './Spotify/pages/album-tracks-page/album-tracks-page.component';
import { ArtistTracksPageComponent } from './Spotify/pages/artist-tracks-page/artist-tracks-page.component';

export const routes: Routes = [
  {
    path: 'home',
    component: HomePageComponent
  },
  {
    path: 'search-song',
    children: [
      {
        path: '',
        component: SearchSongPageComponent
      },
      {
        path: 'artist/:id',
        component: ArtistTracksPageComponent
      },
      {
        path: '**',
        redirectTo: ''
      }
    ]
  },
  { path: 'search-artist',
    children: [
      {
        path: '',
        component: SearchAlbumPageComponent
      },
      {
        path: 'album/:id/:album_name/:album_img',
        component: AlbumTracksPageComponent
      },
      {
        path: '**',
        redirectTo: ''
      }
    ]
  },
  {
    path: '**',
    redirectTo: 'home'
  }
];
