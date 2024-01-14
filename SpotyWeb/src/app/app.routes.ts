import { Routes } from '@angular/router';
import { HomePageComponent } from './Spotify/pages/home-page/home-page.component';
import { SearchSongPageComponent } from './Spotify/pages/search-song-page/search-song-page.component';
import { SearchAlbumPageComponent } from './Spotify/pages/search-album-page/search-album-page.component';
import { SongsTableComponent } from './Spotify/components/songs-table/songs-table.component';
import { AlbumTracksPageComponent } from './Spotify/pages/album-tracks-page/album-tracks-page.component';
import { ArtistTracksPageComponent } from './Spotify/pages/artist-tracks-page/artist-tracks-page.component';

export const routes: Routes = [
  {
    path: 'home',
    component: HomePageComponent
  },
  {
    path: 'search-song',
    component: SearchSongPageComponent
  },
  /*{
    path: 'search-artist',
    component: SearchAlbumPageComponent,
    children: [
      {
        path: 'album/:id/:album_name/:album_img', // no lo envia al componente!
        component: SongsTableComponent
      },
    ]
  },*/
  {
    path: 'search-artist',
    component: SearchAlbumPageComponent
  },
  {
    path: 'album/:id/:album_name/:album_img', 
    component: AlbumTracksPageComponent
  },
  {
    path: 'artist/:id', 
    component: ArtistTracksPageComponent
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
