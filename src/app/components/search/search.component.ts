import { Component } from '@angular/core';
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {

  artists:any[] = [];
  loading:boolean;
  
  constructor(private _spotifyService: SpotifyService) { }

  buscar(termino:string) {
    this.loading = true;
    this._spotifyService.getArtistas(termino)
    .subscribe(data => {
      this.artists = data;
      this.loading = false;
    });
  }

}
