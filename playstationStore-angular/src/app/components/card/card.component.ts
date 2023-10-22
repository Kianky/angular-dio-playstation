import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  @Input()
  gameTitle: string = ""
  @Input()
  gameCover: string = ""
  @Input()
  gameLabel: string = ""
  @Input()
  gameConsole: string = "XPTO | PS4"
  @Input()
  gamePrice: string = "R$100,00"
  constructor() { }
  ngOnInit(): void {

  }

}
