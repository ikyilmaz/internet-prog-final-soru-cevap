import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Soru } from 'src/app/models/Soru';
import { ApiService } from 'src/app/services/api.service';
import { SoruDialogComponent } from '../dialogs/soru-dialog/soru-dialog.component';

@Component({
  selector: 'app-mesaj-liste',
  templateUrl: './mesaj-liste.component.html',
  styleUrls: ['./mesaj-liste.component.css'],
})
export class MesajListeComponent implements OnInit {
  mesajlar: any[] = ["selam"];
  constructor(public apiServis: ApiService) {}

  ngOnInit() {
    this.apiServis.MesajListele().subscribe((d: any[]) => {
      this.mesajlar = d
    })
  }
}
