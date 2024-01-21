import { Component } from '@angular/core';
import { SearchBoxComponent } from '../../../shared/components/search-box/search-box.component';
import { SpotifyService } from '../../services/spotify.service';
import { Item } from '../../interfaces/track.interface';
import { CardComponent } from '../../components/card/card.component';

@Component({
  selector: 'home-page',
  standalone: true,
  imports: [SearchBoxComponent, CardComponent],
  templateUrl: './home-page.component.html',
})
export class HomePageComponent {

  public trackList: Item[] = [];

  constructor(private spotifyService: SpotifyService){
  }

  ngOnInit():void{
    this.spotifyService.getNewReleases()
    .subscribe(
      albums => {
        albums.albums.items.forEach(album => {
          this.spotifyService.getAlbumTrack(album.id)
            .subscribe(
              track => {
                this.spotifyService.getSongById(track.items[0].id)
                  .subscribe(
                    song => {
                      this.trackList.push(song);
                    },
                    error => this.handleApiError(error)
                  );
              },
              error => this.handleApiError(error)
            );
        });
      },
      error => this.handleApiError(error)
    );

    if(localStorage.getItem('Volver')){
      localStorage.removeItem('Volver')
    }
}

private async handleApiError(error: any){
  // Manejar errores de autorización (401) u otros errores aquí
  if (error.status === 401 || error.status === 400) {
    //console.error("Error 401: Unauthorized");
    try {
      await this.spotifyService.getToken();
      this.ngOnInit();
    } catch (error) {
      console.error('Error:', error);
    }
  } else {
    console.error("Error desconocido:", error);
  }
}
}
