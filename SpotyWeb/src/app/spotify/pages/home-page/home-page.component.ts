import { Component } from '@angular/core';
import { SearchBoxComponent } from '../../../shared/components/search-box/search-box.component';
import { SpotifyService } from '../../services/spotify.service';
import { Artist } from '../../interfaces/artist.interface';
import { Album } from '../../interfaces/album.interface';

@Component({
  selector: 'home-page',
  standalone: true,
  imports: [SearchBoxComponent],
  templateUrl: './home-page.component.html',
})
export class HomePageComponent {

  public artists!: Artist; 
  public album!: Album;


  constructor(private spotifyServices: SpotifyService){}


  searchByArtist(term:string):void{
    this.spotifyServices.searchArtist(term)
      .subscribe(artists =>{
        this.artists = artists;
        console.log('objeto artista: ', this.artists.artists.items[0]);
      })
  }

  searchByAlbum(term:string):void{
    this.spotifyServices.searchAlbum(term)
      .subscribe(album =>{
        this.artists = album;
        console.log('objeto album: ', this.album);
      })
  }

}
