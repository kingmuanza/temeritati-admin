import { Component, OnInit } from '@angular/core';
import { NzConfigService } from 'ng-zorro-antd/core/config';

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.scss']
})
export class AccueilComponent implements OnInit {

  openMap: any = {
    sub1: true,
    sub2: false,
    sub3: false
  };

  listOfOption: Array<{ label: string; value: string }> = [];
  listOfTagOptions = [];

  profil = true;
  apropos = false;

  constructor(
    private nzConfigService: NzConfigService
  ) {
    this.nzConfigService.set('theme', { primaryColor: '#550000' });
  }

  ngOnInit(): void {
    const children: Array<{ label: string; value: string }> = [];
    for (let i = 10; i < 36; i++) {
      children.push({ label: i.toString(36) + i, value: i.toString(36) + i });
    }
    this.listOfOption = children;
  }

  openHandler(value: string): void {
    for (const key in this.openMap) {
      if (key !== value) {
        this.openMap[key] = false;
      }
    }
  }

  selectionner(menu: string) {
    this.profil = false;
    this.apropos = false;
    if (menu === 'profil') {
      this.profil = true;
    }
    if (menu === 'apropos') {
      this.apropos = true;
    }
  }

}
