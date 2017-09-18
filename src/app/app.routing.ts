import {ModuleWithProviders} from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

//Components

import { HomeComponent } from './components/home/home.component';
import { ErrorComponent } from './components/error/error.component';
import { ProductosListComponent } from './components/productos-list/productos-list.component';
import { ProductNewComponent } from './components/product-new/product-new.component';
import { ProDetComponent } from './components/pro-det/pro-det.component';
import { ProeditComponent } from './components/proedit/proedit.component';

const appRoutes:Routes = [
    {path:"",component:HomeComponent},
    {path:"home",component:HomeComponent},
    {path:"productos",component:ProductosListComponent},
    {path:"creaproducto",component:ProductNewComponent},
    {path:"detalle/:id",component:ProDetComponent},
    {path:"editar/:id",component:ProeditComponent},
    {path:"**",component:ErrorComponent},
]

export const appRoutingProviders: any[]=[];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes); 