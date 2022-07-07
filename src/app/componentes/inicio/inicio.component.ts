import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {
  cards=[{
    titulo:"Reparaciones",
    subtitulo:"PC y Notebooks",
    url:"https://images.segundamano.mx/api/v1/smmx/images/01/0153098221.jpg?rule=web_gallery_3x",
    texto:""
  },{
    titulo:"Articulos de tecnologia",
    subtitulo:"Componentes para PC",
    url:"https://cdn.shopify.com/s/files/1/0557/6346/8426/collections/Componentes_580x.jpg?v=1638119144",
    texto:""
  },
  {
    titulo:"Dispositivos Perifericos",
    subtitulo:"Todo para ser un gamer",
    url:"https://oechsle.vteximg.com.br/arquivos/ids/3065631-1500-1500/image-42cb0324c4e1446eb29b9bb56dd8765a.jpg?v=637492432201100000",
    texto:""
  }
]
  longText = `The Shiba Inu is the smallest of the six original and distinct spitz breeds of dogfrom Japan. A small, agile dog that copes very well with mountainous terrain, the Shiba Inu wasoriginally bred for hunting.`;
  constructor() { }

  ngOnInit(): void {
  }

}
