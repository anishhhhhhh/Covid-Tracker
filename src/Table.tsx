import React from "react";
import "./Table.css";
import numeral from "numeral";

interface TableProps {
  countries: any;
}

interface CountriesProps {
  country: string;
  cases: number;
}

const Table = ({ countries }: TableProps) => {
  return (
    <div className="table">
      {countries.map(({ country, cases }: CountriesProps) => (
        <tr>
          <td>{country}</td>
          <td>
            <strong>{numeral(cases).format("0,0")}</strong>
          </td>
        </tr>
      ))}
    </div>
  );
};

export default Table;
