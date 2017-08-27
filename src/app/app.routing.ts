import {ModuleWithProviders} from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

//Components

import { HomeComponent } from './components/home/home.component';
import { ErrorComponent } from './components/error/error.component';
import { ProductosListComponent } from './components/productos-list/productos-list.component'
import { ProductNewComponent } from './components/product-new/product-new.component'
const appRoutes:Routes = [
    {path:"",component:HomeComponent},
    {path:"home",component:HomeComponent},
    {path:"productos",component:ProductosListComponent},
    {path:"creaproducto",component:ProductNewComponent},
    {path:"**",component:ErrorComponent},
]

export const appRoutingProviders: any[]=[];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes); 