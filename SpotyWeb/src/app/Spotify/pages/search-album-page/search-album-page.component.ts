import { Component } from '@angular/core';

import { SpotifyService } from '../../services/spotify.service';
import { Album } from '../../interfaces/album.interface';
import { SearchBoxComponent } from '../../../shared/components/search-box/search-box.component';
import { CardComponent } from '../../components/card/card.component';
import { AlbumCardComponent } from '../../components/album-card/album-card.component';

@Component({
  selector: 'search-album-page',
  standalone: true,
  imports: [SearchBoxComponent, AlbumCardComponent],
  templateUrl: './search-album-page.component.html',
})
export class SearchAlbumPageComponent {

  public album!: Album;

  constructor(private spotifyService: SpotifyService){}


  searchByAlbum(term:string):void{
    this.spotifyService.searchAlbum(term)
      .subscribe(album =>{
        this.album = album;
        console.log('objeto album: ', this.album.albums.items[0]);
      })
  }

}
