import axios from 'axios'
import { USERLOGIN_FAIL, USERLOGIN_REQUEST, USERLOGIN_SUCCESS } from '../constants/userConstant';

import { BASE_URL } from './.ip';

export const userLoginAction = (loginData) => async (dispatch) => {
	try {
		dispatch({ type: USERLOGIN_REQUEST });

		const { data } = await axios.post(`${BASE_URL}/auth/login`, loginData);

		dispatch({
			type: USERLOGIN_SUCCESS,
			payload: data
		});
	} catch (err) {
		dispatch({
			type: USERLOGIN_FAIL,
			payload: err.message
		});
	}
};
export const registerUserAction = (loginData) => async (dispatch) => {
	try {
		dispatch({ type: USERLOGIN_REQUEST });

		const { data } = await axios.post(`${BASE_URL}/auth/register`, loginData);

		dispatch({
			type: USERLOGIN_SUCCESS,
			payload: data
		});
	} catch (err) {
		dispatch({
			type: USERLOGIN_FAIL,
			payload: err.message
		});
	}
};