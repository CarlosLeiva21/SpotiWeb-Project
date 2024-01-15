import { Component } from '@angular/core';
import { SpotifyService } from '../../../Spotify/services/spotify.service';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
@Component({
  selector: 'shared-sidebar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './sidebar.component.html',
})
export class SidebarComponent {

  constructor(private spotifyService: SpotifyService, private router: Router) {
  }

  get tags() {
    return this.spotifyService._history
  }

  searchTag(tag: string, name: string) {
    if (name === 'song') {
      localStorage.setItem('song', JSON.stringify(tag))

      this.router.navigateByUrl('search-song')
    } else {
      localStorage.setItem('album', JSON.stringify(tag))

      this.router.navigateByUrl('search-artist')
    }

  }
}
