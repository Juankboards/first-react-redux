import expect from 'expect';
import React from 'react';
import { mount, shallow } from 'enzyme';
import CourseForm from './CourseForm';

function setup(saving) {
	let props ={
		course: {}, saving, errors: {},
		onSave: () => {}, onChange: () => {}
	};

	return shallow(<CourseForm {...props}/>);
}

describe('CourForm testing using Test Utils', () => {
	it('Save button is labaled "Save" when not saving', () => {
		const wrapper = setup(false);
		expect(wrapper.find('input').props().value).toBe('Save');
	});

	it('Save button is labaled "Saving..." when saving', () => {
		const wrapper = setup(true);
		expect(wrapper.find('input').props().value).toBe('Saving...');
	});
});