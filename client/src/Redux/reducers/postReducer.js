import { CREATE_POST_FAIL, CREATE_POST_REQUEST, CREATE_POST_RESET, CREATE_POST_SUCCESS, GET_ALL_POSTS_FAIL, GET_ALL_POSTS_REQUEST, GET_ALL_POSTS_RESET, GET_ALL_POSTS_SUCCESS } from "../constants/postConstant";

export const getAllPostsReducers = (state = {}, action) => {
	switch (action.type) {
		case GET_ALL_POSTS_REQUEST:
			return { loading: true };

		case GET_ALL_POSTS_SUCCESS:
			return { data: action.payload, loading: false };

		case GET_ALL_POSTS_FAIL:
			return { loading: false, error: action.payload };

		case GET_ALL_POSTS_RESET:
			return {};

		default:
			return state;
	}
};

export const createPostReducers = (state = {}, action) => {
	switch (action.type) {
		case CREATE_POST_REQUEST:
			return { loading: true };

		case CREATE_POST_SUCCESS:
			return { data: action.payload, loading: false };

		case CREATE_POST_FAIL:
			return { loading: false, error: action.payload };

		case CREATE_POST_RESET:
			return {};

		default:
			return state;
	}
};