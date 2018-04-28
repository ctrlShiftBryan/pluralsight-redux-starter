import * as types from './actionTypes';
import courseApi from '../api/mockCourseApi';

export function loadCoursesSuccess(courses) {
  return { type: types.LOAD_COURSES_SUCCESS, courses: courses };
}

export function loadCourses() {
  return function(dispath) {
    return courseApi
      .getAllCourses()
      .then(courses => {
        dispath(loadCoursesSuccess(courses));
      })
      .catch(error => {
        throw error;
      });
  };
}
