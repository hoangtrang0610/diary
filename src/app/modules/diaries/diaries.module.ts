import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DiariesComponent } from './diaries.component';
import { DiaryCreateComponent } from './components/diary-create/diary-create.component';
import { MaterialModule } from 'src/app/shared/modules/material/material.module';
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DiaryDetailComponent } from './components/diary-detail/diary-detail.component';

@NgModule({
  declarations: [
    DiariesComponent,
    DiaryCreateComponent,
    DiaryDetailComponent,
  ],
  imports: [
    CommonModule,
    MaterialModule,
    CKEditorModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  exports: [
    DiariesComponent,
    DiaryCreateComponent,
    DiaryDetailComponent
  ]
})

export class DiariesModule { }
