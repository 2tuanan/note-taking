import authReducer from "./Reducers/authReducer";
import noteReducer from "./Reducers/noteReducer";

const rootReducer = {
    auth: authReducer,
    note: noteReducer
}

export default rootReducer;