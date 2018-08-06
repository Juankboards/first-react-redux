import expect from 'expect';
import React from 'react';
import TestUtils from 'react-addons-test-utils';
import CourseForm from './CourseForm';

function setup(saving) {
	let props ={
		course: {}, saving, errors: {},
		onSave: () => {}, onChange: () => {}
	};

	let renderer = TestUtils.createRenderer();
	renderer.render(<CourseForm {...props}/>);
	let output = renderer.getRenderOutput();

	return {
		props,
		output,
		renderer
	};
}

describe('CourForm testing using Test Utils', () => {
	it('Save button is labaled "Save" when not saving', () => {
		const { output } = setup(false);
		const submitButton = output.props.children[5];
		expect(submitButton.props.value).toBe('Save');
	});
	it('Save button is labaled "Saving..." when saving', () => {
		const { output } = setup(true);
		const submitButton = output.props.children[5];
		expect(submitButton.props.value).toBe('Saving...');
	});
});