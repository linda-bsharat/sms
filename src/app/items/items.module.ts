
import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { AddItemComponent } from "./add-item/add-item.component";
import { DisplayCardComponent } from "./display/display-card.component";
import { DisplayListComponent } from "./display/display-list.component";

// left for brevity
@NgModule({
  declarations: [DisplayListComponent, DisplayCardComponent, AddItemComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule

  ],
exports: [
  AddItemComponent,
  DisplayListComponent,
  DisplayCardComponent
]
})

export class ItemsModule { }
