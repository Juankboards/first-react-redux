import React from 'react';
import { mount, shallow } from 'enzyme';
import expect from 'expect';
import { ManageCoursePage } from './ManageCoursePage';

describe('Manage course page test', () => {
	it('Sets error message when trying to save empty title', () => {
		const props = {
			authors: [],
			course: {id: "", title: "", watchHref: "", authorId: "", length: "", category: ""},
			actions: {saveCourse: () => Promise.resolve()} 
		};
		const wrapper = mount(<ManageCoursePage {...props}/>);
		const saveButton = wrapper.find('input').last();
		expect(saveButton.props().type).toBe('submit');
		saveButton.simulate('click');
		expect(wrapper.state().errors.title).toBe('Title must be at least 5 characters');
	});
});