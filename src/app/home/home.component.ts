import { Component, OnInit } from '@angular/core';
import { Base, SpinnerType } from '../common/base';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent extends Base implements OnInit {
constructor(spinner:NgxSpinnerService) {
  super(spinner);
  
}
     genislik:number=screen.width;
     yukseklik:number=screen.height;
     myclass:string =`position: absolute; right:${-this.genislik/2}; top:${-this.yukseklik/2}; position: relative`

liste:string=this.myclass;

buton:HTMLButtonElement;
  ngOnInit(): void {
    this.showSpinner(SpinnerType.LineSpinFade);
    this.hideSpinner(SpinnerType.LineSpinFade);

    // var myclass:string ="color:black;"
  }
  
}
