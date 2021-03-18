import React from "react";
import { DealsListType } from "../../types";
import DealsTableRow from "./DealsTableRow/DealsTableRow";
import "./DealsTable.scss";

type DealsTableProps = DealsListType;

const DealsTable = (props: DealsTableProps) => {
  const { deals } = props;
  const dealsTableRows = deals.map((deal) => (
    <DealsTableRow key={deal.id} deal={deal} />
  ));
  return (
    <div className="tile">
      <div className="tile--header">Deal Portfolio</div>
      <table className='DealsTable'>
        <thead>
          <tr>
            <th className='DealsTable--headerCell'>Institution</th>
            <th className='DealsTable--headerCell'>Deal Type</th>
            <th className='DealsTable--headerCell'>Deal Size</th>
            <th className='DealsTable--headerCell'>Is Published?</th>
          </tr>
        </thead>
        <tbody>{dealsTableRows}</tbody>
      </table>
    </div>
  );
};

export default DealsTable;
