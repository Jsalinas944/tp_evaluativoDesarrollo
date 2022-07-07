import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent implements OnInit {

  cards =[{
    nombre:"Disco Duro Externo Western Digital Elements 1TB USB 3.0",
    descripcion:"WD Elements discos duros portátiles con USB 3.0 ofrecen, de almacenamiento de alta capacidad fiable para ir, las tasas de transferencia de datos ultra rápidas y conectividad universal con USB .0 y USB 3.0 dispositivos.",
    url:"https://www.totalcompu.com.ar/image/thumbnails/18/aa/disco_externo_1tb_jpg-101037-600x600.jpg",
    precio:"$10.384"
  },{
    nombre:"Teclado Gamer Mecanico Gadnic ZT800 RGB TKL Switch",
    descripcion:"Teclado mecánico para videojuegos, 88 teclas, compacto, portátil, con interruptores Outemu blue. Diseñado para una mayor durabilidad y capacidad de respuesta. Los interruptores son de la más alta calidad, probados para 50 millones de pulsaciones",
    url:"https://www.bidcom.com.ar/publicacionesML/productos/GAMER009/1000x1000-GAMER009.jpg",
    precio:"$4.999"
  },{
    nombre:"MOUSE GAMER RAZER NAGA TRINITY MMO",
    descripcion:"• Sensor óptico de 5G de 16 000 Pppp • 3 placas laterales intercambiables con configuraciones de 2, 7 y 12 botones• Hasta 19 botones programables• Formato mejorado para diestros• Powered by Razer Chroma• Switches mecánicos de Razer™",
    url:"https://www.fullh4rd.com.ar/img/productos/Pics_Prod/mouse-razer-naga-trinity-mmo-0.jpg",
    precio:"$11.550,00"
  }]

  constructor() { }

  ngOnInit(): void {
  }

}
