import axios from 'axios';
import firebaseConfig from '../apiKeys.json';

const baseUrl = firebaseConfig.firebaseKeys.databaseURL;

const getNotes = buildingId => new Promise((resolve, reject) => {
  axios.get(`${baseUrl}/notes.json?orderBy="buildingId"&equalTo="${buildingId}"`)
    .then((res) => {
      const notes = [];
      Object.keys(res.data).forEach((fbKey) => {
        res.data[fbKey].id = fbKey;
        notes.push(res.data[fbKey]);
      });
      resolve(notes);
    })
    .catch(err => reject(err));
});

const deleteNote = noteId => axios.delete(`${baseUrl}/notes/${noteId}.json`);

const postNote = newNote => axios.post(`${baseUrl}/notes.json`, newNote);

export default { getNotes, deleteNote, postNote };
