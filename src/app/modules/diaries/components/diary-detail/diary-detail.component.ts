import { Component, OnInit , Output , EventEmitter } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { DiaryDetailService } from '../../services/diary-detail.service'

@Component({
  selector: 'app-diary-detail',
  templateUrl: './diary-detail.component.html',
  styleUrls: ['./diary-detail.component.scss']
})
export class DiaryDetailComponent implements OnInit {
  diaryDetail: any;

  constructor(
    private _location: Location,
    private route: ActivatedRoute,
    private diaryDetailService: DiaryDetailService,
    ) { }
  @Output() parentFunction:EventEmitter<any> = new EventEmitter();
  ngOnInit(): void {
    this.showDiaryDetail()
  }

  onBackHomePage(){
    this._location.back()
  }

  showDiaryDetail() {
    const diaryId = Number(this.route.snapshot.paramMap.get('id')) ;
    this.diaryDetailService.getById(diaryId)
    .subscribe((data: any) => this.diaryDetail = data)
  }

}
