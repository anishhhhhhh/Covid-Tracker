import React, { useState, useEffect } from "react";

import { MenuItem, FormControl, Select } from "@material-ui/core";

import "./App.css";

const App = () => {
  const [countries, setCountries] = useState<string[]>([]);

  useEffect(() => {
    const getCountriesData = async () => {
      await fetch("https://disease.sh/v3/covid-19/countries")
        .then((response) => response.json())
        .then((data) => {
          const countri = data.map((country: any) =>
            // name: country.name,
            // value: country.countryInfo.iso2,
            console.log(country)
          );
          // setCountries(countri);
        });
    };
    getCountriesData();
  }, []);

  return (
    <div className="app">
      <div className="app__header">
        <h1>Covid-19 tracker</h1>
        <FormControl className="app__dropdown">
          <Select variant="outlined">
            {countries.map((country: any) => (
              <MenuItem value={country.value}>{country.name}</MenuItem>
            ))}
          </Select>
        </FormControl>
      </div>
      {/* Header */}
    </div>
  );
};

export default App;
