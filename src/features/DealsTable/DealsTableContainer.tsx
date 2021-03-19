import { connect } from "react-redux";
import { togglePublished } from "../../redux/actions";
import DealsTable from "./DealsTable";
import { DealType } from "../../types";

type DispatchType = (arg0: {
  type: string;
  payload: { deal: DealType };
}) => any;

const mapDispatchToProps = (dispatch: DispatchType) => ({
  togglePublished: (deal: DealType) => dispatch(togglePublished(deal)),
});

export default connect(undefined, mapDispatchToProps)(DealsTable);
