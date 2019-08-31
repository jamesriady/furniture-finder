import { REQUEST_FURNITURES, RESPONSE_FURNITURES } from '../actions';

const initialState = {
	furniture: {},
	filterName: '',
	filterStyles: [],
	filterTimes: []
}

const reducer = (state = initialState, payload) => {
	switch(payload.type) {
		case REQUEST_FURNITURES:
			return { ...state, loading: true };
		case RESPONSE_FURNITURES:
			return { ...state, furniture: payload.furniture, loading: false };
		default:
			return { ...state, ...payload };
	}
};

export default reducer;
