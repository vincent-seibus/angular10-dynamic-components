import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  {
    path: 'issue',
    loadChildren: () => import('./dynamic-content/dynamic-content.module').then(m => m.DynamicContentModule)
  },
  { path: '', redirectTo: 'issue', pathMatch: 'full' },
  { path: '**', redirectTo: 'issue' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
