import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginComponent} from './components/login/login.component';
import {RoomsComponent} from './components/rooms/rooms.component';
import {BoardComponent} from './components/board/board.component';
import {WaitingComponent} from "./components/waiting/waiting.component";


const routes: Routes = [
  {path: '', redirectTo: '/login', pathMatch: 'full'},
  {path: 'login', component: LoginComponent},
  {path: 'rooms', component: RoomsComponent},
  {path: 'board', component: BoardComponent},
  {path: 'waiting', component: WaitingComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
