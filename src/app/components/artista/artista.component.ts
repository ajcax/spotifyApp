import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-artista',
  templateUrl: './artista.component.html',
  styleUrls: ['./artista.component.css']
})
export class ArtistComponent {

  artist: any = {};
  loading:boolean;
  topTracks: any[] = [];

  constructor(private activatedRoute:ActivatedRoute,
              private _spotifyService:SpotifyService) {
    this.activatedRoute.params.subscribe( params => {
      this.getArtista(params['id']);
      this.getTopTracks(params['id']);
    })
  }

  getArtista(id:string) {
    this.loading=true;
    this._spotifyService.getArtista(id).subscribe(artist => {
      this.artist = artist;
      this.loading = false;
    });
  }

  getTopTracks( id: string ) {
    this._spotifyService.getTopTracks(id)
    .subscribe((data:any) => {
      this.topTracks = data;
      console.log(data);
    })
  }

}
