import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { SpotifyService } from '../spotify.service';

@Component({
  selector: 'app-info-artist',
  templateUrl: './info-artist.component.html',
  styleUrls: ['./info-artist.component.css']
})
export class InfoArtistComponent implements OnInit {
  id: string;
  infos: Object;
  constructor(private route: ActivatedRoute, private location: Location, private spotify: SpotifyService) {
    this.route.params.subscribe(params => {
      this.id = params['id'];
    });
   }

  ngOnInit() {
    this.spotify.getArtist(this.id).subscribe(res => {
      this.infos = res;
    });
  }

  back() {
    this.location.back();
  }

}
