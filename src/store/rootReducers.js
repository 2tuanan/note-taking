import adminReducer from "./Reducers/adminReducer";
import authReducer from "./Reducers/authReducer";
import noteReducer from "./Reducers/noteReducer";

const rootReducer = {
    auth: authReducer,
    note: noteReducer,
    admin: adminReducer
}

export default rootReducer;