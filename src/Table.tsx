import React from "react";
import "./Table.css";

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
            <strong>{cases}</strong>
          </td>
        </tr>
      ))}
    </div>
  );
};

export default Table;
