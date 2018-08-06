import expect from 'expect';
import courseReducer from './courseReducer';
import * as courseActions from '../actions/courseActions';

describe('Course reducers', () => {
	it('Should add course when passed CREATE_COURSE_SUCCESS ', () => {
		const initialState = [
			{title: 'A'},
			{title: 'B'}
		];

		const newCourse = {title: 'C'};
		const action = courseActions.createCourseSuccess(newCourse);
		const newState = courseReducer(initialState, action);

		expect(newState.length).toEqual(3);
		expect(newState[0].title).toEqual('A');
		expect(newState[1].title).toEqual('B');
		expect(newState[2].title).toEqual('C');
	});

	it('Should update course when passed UPDATE_COURSE_SUCCESS ', () => {
		const initialState = [
			{id: 'A', title: 'A'},
			{id: 'B', title: 'B'},
			{id: 'C', title: 'C'}
		];

		const newCourse = {id: 'C', title: 'Updated title'};
		const action = courseActions.updateCourseSuccess(newCourse);
		const newState = courseReducer(initialState, action);

		const updatedCourse = newState.find(course => course.id == newCourse.id);
		const untouchedCourse = newState.find(course => course.id == 'A');


		expect(newState.length).toEqual(3);
		expect(updatedCourse.title).toEqual('Updated title');
		expect(untouchedCourse.title).toEqual('A');
	});
});