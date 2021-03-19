import React, { useState } from "react";
import noop from "lodash/noop";
import { DealType } from "../../../types";

import "./DealsTableRow.scss";

const currencyAmountToString = (amount: string) => {
  return `$${amount.replace(/\B(?=(\d{3})+(?!\d))/g, ",")}`;
};

// type DealFormProps = {
//   onCreateDeal: (deal: DealType) => any;
// };

type DealsTableRowProps = {
  deal: DealType;
  togglePublished: (deal: DealType) => any;
};

const DealsTableRow = (props: DealsTableRowProps) => {
  const [toggled, setToggled] = useState(false);
  const {
    togglePublished = noop,
    deal,
  } = props;
  const handleToggle = (deal: DealType) => {
    setToggled(!deal.isPublished);
  };

  return (
    <tr className='DealsTableRow'>
      <td className='DealsTableRow--cell'>{deal.institution}</td>
      <td className='DealsTableRow--cell'>{deal.dealType}</td>
      <td className='DealsTableRow--cell'>
        {currencyAmountToString(deal.dealSize)}
      </td>
      <td className='DealsTableRow--cell'>
        {deal.isPublished ? "Yes" : "No"}
        <button onClick={() => handleToggle(deal)}>
          TOGGLE
        </button>
        {toggled ? "toggled" : "untoggled"}
      </td>
    </tr>
  );
};

export default DealsTableRow;
