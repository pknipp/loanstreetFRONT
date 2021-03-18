import React, { useState } from "react";
import noop from "lodash/noop";
import { DealType } from "../../types";
import "./NewDealForm.scss";

const DEFAULT_DEAL: DealType = {
  institution: "",
  dealType: "",
  dealSize: "",
  isPublished: false,
};

type DealFormProps = {
  onCreateDeal: (deal: DealType) => any;
};

const DealForm = (props: DealFormProps) => {
  const { onCreateDeal = noop } = props;
  const [newDeal, setNewDeal] = useState(DEFAULT_DEAL);

  const handleUpdateProperty = (property: string) => (
    e: React.ChangeEvent<any>
  ) => setNewDeal({ ...newDeal, [property]: e.target.value });

  const handleCreateDeal = (e: React.SyntheticEvent) => {
    e.preventDefault();
    onCreateDeal({ ...newDeal });
    // Reset state for the next deal input.
    setNewDeal({ ...DEFAULT_DEAL });
  };

  return (
    <form className='NewDealForm tile'>
      <div className='tile--header'>Add New Deal</div>
      <div className='NewDealForm--div'>
        <label className='NewDealForm--label'>Institution</label>
        <input
          className='NewDealForm--input'
          value={newDeal.institution}
          placeholder='LS Credit Union'
          onChange={handleUpdateProperty("institution")}
          required
        />
      </div>
      <div className='NewDealForm--div'>
        <label className='NewDealForm--label'>Deal Type</label>
        <input
          className='NewDealForm--input'
          value={newDeal.dealType}
          placeholder='Consumer Auto'
          onChange={handleUpdateProperty("dealType")}
          required
        />
      </div>
      <div className='NewDealForm--div'>
        <label className='NewDealForm--label'>Deal Size</label>
        <input
          className='NewDealForm--input'
          value={newDeal.dealSize}
          placeholder='$1,000,000'
          onChange={handleUpdateProperty("dealSize")}
          required
        />
      </div>
      <button className='NewDealForm--button' onClick={handleCreateDeal}>
        Create Deal
      </button>
    </form>
  );
};

export default DealForm;
