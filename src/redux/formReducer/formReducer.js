import { SAVEINPUTVALUE } from "../actionType";

const initialState = {
  name: "",
  email: "",
  phoneNumber: "",
  cooperationPosition: "",
  resumes: "",
};

const formReducer = (state = initialState, action) => {
  switch (action.type) {
    case SAVEINPUTVALUE:
      return {
        ...state,
        name: action.payload.name,
        email: action.payload.email,
        phoneNumber: action.payload.phoneNumber,
        cooperationPosition: action.payload.cooperationPosition,
        resumes: action.payload.resumes,
      };

    default:
      return state;
  }
};

export default formReducer;
