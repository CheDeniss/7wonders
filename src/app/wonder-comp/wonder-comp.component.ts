import { Component, OnInit  } from '@angular/core';
import { WondersSrvService } from '../wonders-srv.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-wonder-comp',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './wonder-comp.component.html',
  styleUrl: './wonder-comp.component.css'
})
export class WonderCompComponent {
  sevenW:  {imageUrl: string, name: string, description: string}[] = [];
  titleHead = '7 чудес світу';
  constructor(private wondersSrv: WondersSrvService) { }

  ngOnInit(): void {
    this.sevenW = this.wondersSrv.getWonders();
  }
}
