import { Routes } from '@angular/router';
import { SongsTableComponent } from './Spotify/components/songs-table/songs-table.component';

export const routes: Routes = [
    { 
        path: 'album/:id/:album_name/:album_img', 
        component: SongsTableComponent
    },
];
