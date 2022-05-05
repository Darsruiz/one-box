import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailComponent } from './pages/detail/detail.component';
import { MainComponent } from './pages/main/main.component';

const routes: Routes = [
  { path: '**', component: MainComponent, pathMatch: 'full' },
  { path: 'detail/:id', component: DetailComponent }
]
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
