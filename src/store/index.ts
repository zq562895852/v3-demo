import { createStore } from 'vuex';
import { mutations } from './mutations';
import { actions } from './actions';

interface State {
	token: string | null;
}

export default createStore<State>({
	state: {
		token: null
	},
	mutations,
	actions,
	modules: {}
});
