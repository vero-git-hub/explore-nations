import { Component, OnInit } from '@angular/core';
import { CountryService } from '../../services/country.service';

@Component({
  selector: 'app-country-list',
  templateUrl: './country-list.component.html',
  styleUrl: './country-list.component.css'
})
export class CountryListComponent implements OnInit {

  countries: any[] = [];
  filteredCountries: any[] = [];
  searchTerm: string = '';
  selectedRegion: string = '';
  regions: string[] = ['Africa', 'America', 'Asia', 'Europe', 'Oceania'];

  constructor(private countryService: CountryService) { }

  ngOnInit(): void {
    this.countryService.getCountries().subscribe(data => {
      this.countries = data;
      this.filteredCountries = data;
    });
  }

  filterCountries(): void {
    this.filteredCountries = this.countries
      .filter(country =>
        country.name.toLowerCase().includes(this.searchTerm.toLowerCase()) &&
        (this.selectedRegion ? country.region.toLowerCase().trim() === this.selectedRegion.toLowerCase().trim() : true)
      );
  }

  onRegionChange(): void {
    this.filterCountries();
  }
}
