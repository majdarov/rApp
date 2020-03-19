import React from "react";
import TextAreaContainer from "./TextAreaContainer";
import ProfileInfo from "./ProfileInfo";
import { connect } from "react-redux";
import { toggleShowTxtAC } from "../../../redux/profileReduser";


const mapState = state => {
  
  let textarea;
  if (state.profilePage.showTxt) {
    textarea = <TextAreaContainer />
  } else {
    textarea = null;
  }

  return {
    description: state.profilePage.profileDescription,
    textarea: textarea
  }
}

const mapDispatch = dispatch => {
  return {
    onClick: e => {
      e.currentTarget.setAttribute("disabled", true);
      dispatch(toggleShowTxtAC(true));
    }
  }
}


const ProfileInfoContainer = connect(mapState, mapDispatch)(ProfileInfo);

export default ProfileInfoContainer;