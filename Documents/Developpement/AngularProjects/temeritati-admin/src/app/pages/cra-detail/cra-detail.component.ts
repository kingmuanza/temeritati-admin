import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cra-detail',
  templateUrl: './cra-detail.component.html',
  styleUrls: ['./cra-detail.component.scss']
})
export class CraDetailComponent implements OnInit {

  @ViewChild('inputFile') inputFile: ElementRef<HTMLElement> | undefined;

  liste = [1, 2, 3, 4, 5];
  url: any;
  fichier = "";
  constructor(
    private router: Router,
  ) { }

  ngOnInit(): void {
  }

  onSelectFile(event: any) { // called each time file input changes
    if (event.target.files && event.target.files[0]) {
      var reader = new FileReader();
      // this.fichier = event.target.files[0];
      reader.readAsDataURL(event.target.files[0]); // read file as data url

      reader.onload = (event) => { // called once readAsDataURL is completed
        this.url = event?.target?.result;
      }
    }
  }

  getNomFichier(f: string): string {
    const n = f.split('\\').length;
    if (n > 0) {
      return f.split('\\')[n - 1];
    } else {
      return f;
    }
  }

  valider() {
    this.router.navigate(['factures']);
  }
  
  getFichier() {
    let el = this.inputFile?.nativeElement;
    el?.click();
}
}
