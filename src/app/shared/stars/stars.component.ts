import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-stars',
  templateUrl: './stars.component.html',
  styleUrls: ['./stars.component.css']
})
export class StarsComponent {
@Input() note: number = 0;
nbstar:number = 0;
stars: Array<string> = ["fa-regular fa-star","fa-regular fa-star","fa-regular fa-star","fa-regular fa-star","fa-regular fa-star"];

ngOnInit(): void {
  if(this.note >5)
    this.note = 5;
  this.nbstar = Math.round(this.note);

  for(let i = 0; i < this.nbstar; i++){
    this.stars[i] = "fa-solid fa-star"
  }
}

}
