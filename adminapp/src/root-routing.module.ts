import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
    { path: '', redirectTo: '/app/main/home', pathMatch: 'full' },
    {
        path: 'account',
        loadChildren: './account/account.module#AccountModule', //Lazy load account module
        data: { preload: true }
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes,{
        useHash:true
    })],
    exports: [RouterModule],
    providers: []
})
export class RootRoutingModule {
}