import axios from 'axios'

import { CREATE_POST_FAIL, CREATE_POST_REQUEST, CREATE_POST_SUCCESS, GET_ALL_POSTS_FAIL, GET_ALL_POSTS_REQUEST, GET_ALL_POSTS_SUCCESS } from "../constants/postConstant";
import { BASE_URL } from './.ip';

export const getAllPostsAction = () => async (dispatch) => {
	try {
		dispatch({ type: GET_ALL_POSTS_REQUEST });


		const { data } = await axios.get(`${BASE_URL}/getallblog`);

		dispatch({
			type: GET_ALL_POSTS_SUCCESS,
			payload: data
		});
	} catch (err) {
		dispatch({
			type: GET_ALL_POSTS_FAIL,
			payload: err.message
		});
	}
};
export const createPostAction = (formData) => async (dispatch, getState) => {
	try {
		const { userLogin: {userInfo} } = getState();
		console.log(userInfo.token);

		const config = {
			headers: {
				Authorization: `Bearer ${userInfo.token}`
			}
		};
		dispatch({ type: CREATE_POST_REQUEST });

		const { data } = await axios.post(`${BASE_URL}/postblog`, formData, config);

		dispatch({
			type: CREATE_POST_SUCCESS,
			payload: data
		});
	} catch (err) {
		dispatch({
			type: CREATE_POST_FAIL,
			payload: err.message
		});
	}
};