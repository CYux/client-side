import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'client';
  //@ts-ignore
  searchForm : FormGroup;

  constructor(private formBuilder: FormBuilder,
    private router: Router) {
  }

  ngOnInit() {
    this.searchForm = this.formBuilder.group({
      search: ['', Validators.required],
    });
  }

  onSearch() {
    if (!this.searchForm.valid) return;
    this.router.navigate(['search'], { queryParams: { query: this.searchForm.get('search')!.value } });
  }
}
