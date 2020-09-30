import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-videojuego',
  templateUrl: './videojuego.component.html',
  styleUrls: ['./videojuego.component.css']
})
export class VideojuegoComponent implements OnInit {

  constructor() {

    console.log('Hola, soy VideojuegoComponent!');

  }

  ngOnInit(): void {
  }

}
