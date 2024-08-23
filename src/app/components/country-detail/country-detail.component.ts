import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { CountryService } from "../../services/country.service";
import { Location } from '@angular/common';

@Component({
  selector: 'app-country-detail',
  templateUrl: './country-detail.component.html',
  styleUrl: './country-detail.component.css'
})
export class CountryDetailComponent implements OnInit {

  country: any;
  currencies: string = '';
  languages: string = '';

  constructor(
    private route: ActivatedRoute,
    private countryService: CountryService,
    private location: Location
  ) { }

  ngOnInit(): void {
    console.log('CountryDetailComponent initialized');
    const countryName = this.route.snapshot.paramMap.get('name');
    console.log('Selected country name:', countryName);
    this.countryService.getCountries().subscribe(countries => {
      this.country = countries.find((c: any) => c.name === countryName);
      console.log('Country details:', this.country);
      if (this.country) {
        this.currencies = this.country.currencies.map((c: any) => c.name).join(', ');
        this.languages = this.country.languages.map((l: any) => l.name).join(', ');
      }
    });
  }

  goBack(): void {
    this.location.back();
  }
}
