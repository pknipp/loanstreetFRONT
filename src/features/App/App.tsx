import React from "react";
import DealsTable from "../DealsTable/DealsTableContainer";
import NewDealForm from "../NewDealForm/NewDealFormContainer";
import "./App.scss";
import LSLogo from "../../assets/LSLogo";

const App = () => {
  return (
    <>
      <div className='App--header'>
        <LSLogo />
      </div>
      <div className='App'>
        <DealsTable />
        <NewDealForm />
      </div>
    </>
  );
};

export default App;
