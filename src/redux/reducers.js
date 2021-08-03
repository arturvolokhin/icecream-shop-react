import { combineReducers } from "redux";
import blog from "./blogSlice";
import preset from './presetSlice';

export default combineReducers({
    blog,
    preset
});
