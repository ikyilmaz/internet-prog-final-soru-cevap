import { Component, Inject, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Uye } from 'src/app/models/Uye';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-uye-dialog',
  templateUrl: './mesaj-dialog.component.html',
  styleUrls: ['./mesaj-dialog.component.scss'],
})
export class MesajDialogComponent implements OnInit {
  dialogBaslik: string = "Mesaj Gönder"
  islem: string;
  mesaj : string = ""
  frm: FormGroup;
  Jconfig = {};
  kayit: Uye = new Uye();

  constructor(
    public dialogRef: MatDialogRef<MesajDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    public frmBuild: FormBuilder,
    public apiServis: ApiService
  ) {
    this.frm = this.FormOlustur();
  }

  ngOnInit() {}

  FormOlustur() {
    return this.frmBuild.group({
      mesaj: [this.mesaj],
    });
  }
}
