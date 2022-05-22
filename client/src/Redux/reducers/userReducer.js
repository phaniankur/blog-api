import { USERLOGIN_FAIL, USERLOGIN_REQUEST, USERLOGIN_RESET, USERLOGIN_SUCCESS } from "../constants/userConstant";

export const userLoginReducers = (state = {}, action) => {
	switch (action.type) {

		case USERLOGIN_REQUEST:
			return { loading: true };

		case USERLOGIN_SUCCESS:
			return { userInfo: action.payload, loading: false };

		case USERLOGIN_FAIL:
			return { loading: false, error: action.payload };

		case USERLOGIN_RESET:
			return {};

		default:
			return state;
	}
};