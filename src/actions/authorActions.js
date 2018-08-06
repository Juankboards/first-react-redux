import * as type from './actionTypes';
import authorApi from '../api/mockAuthorApi';
import { beginAjaxCall } from './ajaxStatusActions';

export function loadAuthorsSuccess(authors) {
	return {type: type.LOAD_AUTHORS_SUCCESS, authors};
}

export function loadAuthors() {
	return function(dispatch) {
		dispatch(beginAjaxCall());
		return authorApi.getAllAuthors().then(authors => {
			dispatch(loadAuthorsSuccess(authors));
		}).catch(error => {
			throw(error);
		});
	};
}