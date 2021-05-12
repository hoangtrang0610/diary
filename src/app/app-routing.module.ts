import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DiaryDetailComponent } from '../app/modules/diaries/components/diary-detail/diary-detail.component'

const routes: Routes = [

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
