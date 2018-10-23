import axios from 'axios';

export const QUERY_NOTES = 'QUERY_NOTES';

export const FETCHING_NOTES = 'FETCHING_NOTES';
export const GET_NOTES_ERROR = 'GET_NOTES_ERROR';
export const FETCHED_NOTES = 'FETCHED_NOTES';

// export const FETCHING_NOTE_BY_ID = 'FETCHING_NOTE_BY_ID';
// export const FETCHED_NOTE_BY_ID_ERROR = 'GET_NOTE_BY_ID_ERROR';
// export const FETCHED_NOTE_BY_ID = 'FETCHED_NOTE_BY_ID';

export const PUTTING_NOTE = 'PUTTING_NOTE';
export const PUT_NOTE_ERROR = 'PUT_NOTE_ERROR';
export const PUT_NOTE = 'PUT_NOTE';

export const POSTING_NOTE = 'POSTING_NOTE';
export const POST_NOTE_ERROR = 'POST_NOTE_ERROR';
export const POSTED_NOTE = 'POSTED_NOTE';

export const DELETING_NOTE = 'DELETING_NOTE';
export const DELETE_NOTE_ERROR = 'DELETE_NOTE_ERROR';
export const DELETED_NOTE = 'DELETED_NOTE';

const heroku = 'https://immense-plateau-90586.herokuapp.com/api/notes';
const dev = 'http://localhost:5000';
const token = localStorage.getItem('authtoken');
const requestOptions = {
  headers: {
    Authorization: `Bearer ${token}`,
  },
};

// Get request
export const get_notes = () => dispatch => {
  console.log('get Notes called from action')
  dispatch({ type: FETCHING_NOTES });

  axios
    .get(`${heroku}/api/notes`, requestOptions)
    .then(response => {
      dispatch({ type: FETCHED_NOTES, notes: response.data });
    })
    .catch(err => {
      console.log('err', err)
      dispatch({ type: GET_NOTES_ERROR, errorMessage: 'Error fetching notes' });
    });
};

export const query_notes = query => {
  return { type: QUERY_NOTES, query };
};

// Put request
export const edit_note = (id, note) => dispatch => {
  dispatch({ type: PUTTING_NOTE });

  axios
    .put(`${heroku}/api/notes/${id}`, note, requestOptions)
    .then(response => {
<<<<<<< HEAD
      console.log('res', response)
      dispatch({ type: PUT_NOTE, notes: response.data });
=======
      console.log('response from server====', response);
      dispatch({ type: PUT_NOTE, note: response.data, id });
>>>>>>> f5d0a9890252ee3f898d2e15815eb6b0ab78ab21
    })
    .catch(err => {
      dispatch({ type: PUT_NOTE_ERROR, errorMessage: 'Error putting note' });
    });
};

// Post request
export const post_note = note => dispatch => {
  console.log('post note called in actions', note)
  dispatch({ type: POSTING_NOTE });
  debugger;
  axios
    .post(`${heroku}/api/notes`, note, requestOptions)
    .then(response => {
      debugger;
      console.log('res', response);
      dispatch({ type: POSTED_NOTE, note: response.data });
    })
    .catch(err => {
      dispatch({ type: POST_NOTE_ERROR, errorMessage: err });
    });
};

// Delete request
export const delete_note = id => dispatch => {
  dispatch({ type: DELETING_NOTE });

  axios
    .delete(`${heroku}/api/notes/${id}`, requestOptions)
    .then(response => {
      console.log('response from server if success', response);
      dispatch({ type: DELETED_NOTE, message: 'Note deleted successfully' });
    })
    .catch(err => {
      dispatch({
        type: DELETE_NOTE_ERROR,
        errorMessage: 'Error deleting note',
      });
    });
};
