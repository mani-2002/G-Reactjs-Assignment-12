import {
  ADD_APPOINTMENT,
  EDIT_APPOINTMENT,
  DELETE_APPOINTMENT,
} from "./action";

const initialState = {
  tableData: [],
};

const reducer = (state = initialState, action) => {
  console.log(action);
  switch (action.type) {
    case ADD_APPOINTMENT:
      return {
        ...state,
        tableData: [...state.tableData, action.payload],
      };

    case EDIT_APPOINTMENT:
      const updatedTableData = [...state.tableData];
      updatedTableData[action.payload.index] = action.payload.appointment;
      return {
        ...state,
        tableData: updatedTableData,
      };

    case DELETE_APPOINTMENT:
      return {
        ...state,
        tableData: state.tableData.filter(
          (_, currentIndex) => currentIndex !== action.payload
        ),
      };
    default:
      return state;
  }
};

export default reducer;
