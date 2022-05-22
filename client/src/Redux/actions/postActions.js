import axios from 'axios'

import { GET_ALL_POSTS_FAIL, GET_ALL_POSTS_REQUEST, GET_ALL_POSTS_SUCCESS } from "../constants/postConstant";
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