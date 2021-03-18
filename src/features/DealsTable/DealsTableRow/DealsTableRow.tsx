import React from "react";
import { DealType } from "../../../types";

import "./DealsTableRow.scss";

const currencyAmountToString = (amount: string) => {
  return `$${amount.replace(/\B(?=(\d{3})+(?!\d))/g, ",")}`;
};

type DealsTableRowProps = {
  deal: DealType;
};

const DealsTableRow = (props: DealsTableRowProps) => {
  const {
    deal: { institution, dealType, dealSize, isPublished },
  } = props;
  return (
    <tr className='DealsTableRow'>
      <td className='DealsTableRow--cell'>{institution}</td>
      <td className='DealsTableRow--cell'>{dealType}</td>
      <td className='DealsTableRow--cell'>
        {currencyAmountToString(dealSize)}
      </td>
      <td className='DealsTableRow--cell'>{isPublished ? "Yes" : "No"}</td>
    </tr>
  );
};

export default DealsTableRow;
