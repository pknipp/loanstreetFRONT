import { connect } from "react-redux";
import DealsTable from "./DealsTable";
import { DealsListType } from "../../types";

const mapStateToProps = (state: DealsListType) => {
  const { deals } = state;
  return {
    deals,
  };
};

export default connect(mapStateToProps)(DealsTable);
