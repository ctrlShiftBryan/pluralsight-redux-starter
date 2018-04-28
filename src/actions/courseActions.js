import * as types from './actionTypes';
import courseApi from '../api/mockCourseApi';

export function loadCoursesSuccess(courses) {
  return { type: types.LOAD_COURSES_SUCCESS, courses: courses };
}

export function createCourseSuccess(course) {
  return { type: types.CREATE_COURSE_SUCCESS, course };
}

export function updateCourseSuccess(course) {
  return { type: types.UPDATE_COURSE_SUCCESS, course };
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

export function saveCourse(course) {
  // getState can be used to reach into redux for additional state info
  // in the case wasn't needed
  return function(dispatch, getState) {
    return courseApi
      .saveCourse(course)
      .then(course => {
        course.id
          ? dispatch(updateCourseSuccess(course))
          : dispatch(createCourseSuccess(course));
      })
      .catch(error => {
        throw error;
      });
  };
}
