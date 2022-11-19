import { NgModule } from "@angular/core";
import { MatButtonModule } from "@angular/material/button";
import { MatCheckboxModule } from "@angular/material/checkbox";
import { MatIconModule } from "@angular/material/icon";
import { MatInputModule } from "@angular/material/input";
import { MatFormFieldModule } from "@angular/material/form-field";

@NgModule({
    imports: [MatButtonModule, MatCheckboxModule, MatIconModule, MatInputModule, MatFormFieldModule],
    exports: [MatButtonModule, MatCheckboxModule, MatIconModule, MatInputModule, MatFormFieldModule]
})

export class MaterialModule{}