import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import {Loader} from '@googlemaps/js-api-loader';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  constructor(
    private http: HttpClient
  ) { }

  ngOnInit(): void {

    let loader = new Loader({
      apiKey: 'AIzaSyBgP9PiTd5C_WFEJjoL83I6x8wujHfkC1E' 
    })

    loader.load().then(() => {
      let pos = {lat: 20.5937, lng: 78.9629 }
      const map = new google.maps.Map(document.getElementById("map") as HTMLElement,{
        center: pos, 
        zoom: 4,
      });
      // Marker
      const marker = new google.maps.Marker({
        position: pos,
        map: map,
      });

    })
    
  }

}
