// import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UploadAdapter } from '../../uploadImageAdapter';
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import Image from '@ckeditor/ckeditor5-image/src/image';
import ImageResize from '@ckeditor/ckeditor5-image/src/imageresize';
import { ITopic } from '../../models/ITopic';
import { DiaryService } from '../../services/diary.service';
import { DiaryCreateService } from '../../services/diary-create.service'


@Component({
  selector: 'app-diary-create',
  templateUrl: './diary-create.component.html',
  styleUrls: ['./diary-create.component.scss']
})

// const url = "http://192.168.30.26:9090/api/v1/topics";

// interface Itopics{
//   id: 0;
//   name: string;
// }

export class DiaryCreateComponent implements OnInit {

  formGroup: FormGroup;

  selected = 'domain';
  topics = new FormControl();
  topicList: ITopic[] = [];

  public Editor = ClassicEditor;
  public adapters: Array<any> = [];
  public srcImgs: Array<{ path: string }> = [];

  constructor(private diaryService: DiaryService) { }

  ngOnInit(): void {
    this.getListTopics();
    this.initForm();
  }

  initForm() {
    this.formGroup = new FormGroup({
      content: new FormControl('', [Validators.required]),
      title: new FormControl(''),
      topicIds: new FormControl(),
      imageDtos: new FormControl(),
    })
  }

  public onReady(editor) {


    editor.plugins.get("FileRepository").createUploadAdapter = (loader) => {
      let adapter = new UploadAdapter(loader);
      this.adapters.push(adapter);
      return adapter;
    };

    editor.ui
      .getEditableElement()
      .parentElement.insertBefore(
        editor.ui.view.toolbar.element,
        editor.ui.getEditableElement(),
      );
  }

  getListTopics() {
    this.diaryService.getListTopics().subscribe(res => {
      this.topicList = res;
      console.log(this.topicList);
    });
  }

  createDiary() {

    for (let i of this.adapters) {
      this.srcImgs.push({ path: i.xhr.response[0] });
    }
    this.formGroup.patchValue({ imageDtos: this.srcImgs });

    if (this.formGroup.valid) {
      this.diaryService.createDiary(this.formGroup.value).subscribe(result => {
        console.log('succeed');
      })
    }
  }

}
