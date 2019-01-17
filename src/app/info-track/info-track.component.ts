import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { SpotifyService } from '../spotify.service';

@Component({
  selector: 'app-info-track',
  templateUrl: './info-track.component.html',
  styleUrls: ['./info-track.component.css']
})
export class InfoTrackComponent implements OnInit {
  id: string;
  infos: Object;
  constructor(private route: ActivatedRoute, private location: Location, private spotify: SpotifyService) {
    this.route.params.subscribe(params => {
      this.id = params['id'];
    });
   }

  ngOnInit() {
    this.spotify.getTracks(this.id).subscribe(res => {
      this.infos = res;
    });
  }

  back() {
    this.location.back();
  }

}
