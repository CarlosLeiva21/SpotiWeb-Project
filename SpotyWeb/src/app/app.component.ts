import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './shared/components/navbar/navbar.component';
import { SearchBoxComponent } from './shared/components/search-box/search-box.component';
import { SearchSongPageComponent } from "./Spotify/pages/search-song-page/search-song-page.component";
import { HomePageComponent } from "./Spotify/pages/home-page/home-page.component";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [CommonModule, RouterOutlet, NavbarComponent, SearchBoxComponent, SearchSongPageComponent, HomePageComponent]
})
export class AppComponent {
  title = 'SpotyWeb';
}
