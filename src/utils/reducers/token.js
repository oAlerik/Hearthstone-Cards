const tokenReducer = (state, action) => {
	switch (action.type) {
		case 'SET_TOKEN':
			return {
				...state,
				accessToken: action.accessToken,
			}

		default:
			return state
	}
}

export default tokenReducer
