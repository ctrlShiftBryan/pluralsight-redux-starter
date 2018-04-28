import React, { PropTypes } from 'react';
import TextInput from '../common/TextInput.jsx';
import SelectInput from '../common/SelectInput.jsx';

const CourseForm = ({
  course,
  allAuthoers,
  onSave,
  onChange,
  loading,
  errors
}) => {
  return (
    <form action="">
      <h1>Manage Courses</h1>
      <TextInput
        name="title"
        label="Title"
        value={course.title}
        onChange={onChange}
        error={errors.title}
      />
      <SelectInput
        name="authorId"
        label="Author"
        value={course.authorId}
        defaultOption="Select Author"
        options={allAuthoers}
        onChange={onChange}
        error={errors.authorId}
      />
      <TextInput
        name="category"
        label="Category"
        value={course.category}
        onChange={onChange}
        error={errors.category}
      />
      <TextInput
        name="length"
        label="Length"
        value={course.length}
        onChange={onChange}
        error={errors.length}
      />
      <input
        type="submit"
        value={loading ? 'Saving...' : 'Save'}
        disabled={loading}
        className="btn btn-primary"
        onClick={onSave}
      />
    </form>
  );
};

CourseForm.propTypes = {
  course: React.PropTypes.object.isRequired,
  allAuthoers: React.PropTypes.array,
  onSave: React.PropTypes.func.isRequired,
  onChange: React.PropTypes.func.isRequired,
  loading: React.PropTypes.bool,
  errors: React.PropTypes.object
};

export default CourseForm;
