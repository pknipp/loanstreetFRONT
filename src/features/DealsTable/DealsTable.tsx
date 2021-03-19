import React from "react";
import { DealsListType, DealType } from "../../types";
import DealsTableRow from "./DealsTableRow/DealsTableRow";
import "./DealsTable.scss";

type DealsTableProps = {
  deals: DealsListType;
  deal: DealType;
  togglePublished: (deal: DealType) => any;
};

const DealsTable = (props: DealsTableProps) => {
  const { deals, togglePublished } = props;
  const dealsTableRows = deals.map((deal) => (
    <DealsTableRow key={deal.id} deal={deal} togglePublished={togglePublished} />
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
