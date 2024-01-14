import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './shared/components/navbar/navbar.component';
import { SearchBoxComponent } from './shared/components/search-box/search-box.component';
import { SearchSongPageComponent } from "./Spotify/pages/search-song-page/search-song-page.component";
import { HomePageComponent } from "./Spotify/pages/home-page/home-page.component";
import { SearchAlbumPageComponent } from './Spotify/pages/search-album-page/search-album-page.component';
import { SongsTableComponent } from './Spotify/components/songs-table/songs-table.component';
import { AlbumTracksPageComponent } from './Spotify/pages/album-tracks-page/album-tracks-page.component';

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [CommonModule, RouterOutlet, NavbarComponent, SearchBoxComponent, SearchSongPageComponent, HomePageComponent, SearchAlbumPageComponent, SongsTableComponent, AlbumTracksPageComponent]
})
export class AppComponent {
  title = 'SpotyWeb';
}
