import { ModuleWithProviders } from "@angular/core";
import { Routes,RouterModule } from "@angular/router";
// Componentes
import { AppComponent } from "./app.component";
import { DetailComponent } from "./views/details/detail.component";
import { HomeComponent } from "./views/home/home.component";

const appRoutes:Routes = [
    { path: '', pathMatch: 'full', component: HomeComponent },
    { path: 'home', pathMatch: 'full', component: HomeComponent },
    { path: 'detail', pathMatch: 'full', component: DetailComponent}
];

export const appRoutingProviders:any[] = [];
export const routing: ModuleWithProviders<RouterModule> = RouterModule.forRoot(appRoutes);