import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BuildModelComponent } from './build-model/build-model.component';
import { PseudoanonymizeComponent } from './pseudoanonymize/pseudoanonymize.component';
import { KAnonymizeComponent } from './k-anonymize/k-anonymize.component';
import { TwitterLiveComponent } from './twitter-live/twitter-live.component';
const routes: Routes = [
    {path :'',
     component : BuildModelComponent
    }
    ,{
        path:'pseudoanonymize',
        component:PseudoanonymizeComponent
    },
    {
        path:'kanonymize',
        component:KAnonymizeComponent
    },
    {
        path:'twitter-live',
        component:TwitterLiveComponent
    }

];
@NgModule({
    imports: [
      RouterModule.forRoot(routes)
    ],
    exports: [
      RouterModule
    ]
  })
export class AppRoutingModule {}