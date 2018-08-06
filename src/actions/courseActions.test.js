import thunk from 'redux-thunk';
import nock from 'nock';
import configureMockStore from 'redux-mock-store';
import * as type from './actionTypes';
import * as courseActions from './courseActions';
import expect from 'expect';

const middleware = [thunk];
const mockStore = configureMockStore(middleware);

describe('Async actions', () => {
	afterEach(() => {
		nock.cleanAll();
	});

	it('Should create BEGIN_AJAX_CALL and LOAD_COURSES_SUCCESS when loading courses', (done) => {
		// nock example
		// nock('http://example.com')
		// 	.get('/courses')
		// 	.reply(200, {body: {course; [{id: 1, firstName: 'Cory', lastName: 'House'}]}});

		const expectedActions = [
			{type: type.BEGIN_AJAX_CALL},
			{type: type.LOAD_COURSES_SUCCESS, body: {courses: [{id:'clean-code', title: 'Clean code'}]}}
		];

		const store = mockStore({courses: []}, expectedActions);
		store.dispatch(courseActions.loadCourses()).then(() => {
			const actions = store.getActions();
			expect(actions[0].type).toEqual(type.BEGIN_AJAX_CALL);
			expect(actions[1].type).toEqual(type.LOAD_COURSES_SUCCESS);
			done();
		});

	});
});