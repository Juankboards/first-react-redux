import expect from 'expect';
import { createStore } from 'redux';
import rootReducer from '../reducers';
import initialState from '../reducers/initialState';
import * as courseActions from '../actions/courseActions';

describe('Store', () => {
	it('Should handle creating courses', () => {
		const store = createStore(rootReducer, initialState);
		const course = {
			title: 'First course'
		};

		const action = courseActions.createCourseSuccess(course);
		store.dispatch(action);

		const actual = store.getState().courses[0];
		const expected = {
			title: 'First course'
		};

		expect(actual).toEqual(expected);
	});
});