import axios from 'axios';
import firebaseConfig from '../apiKeys.json';

const baseUrl = firebaseConfig.firebaseKeys.databaseURL;

const getBuildings = () => new Promise((resolve, reject) => {
  axios.get(`${baseUrl}/buildings.json`)
    .then((res) => {
      const buildings = [];
      Object.keys(res.data).forEach((fbKey) => {
        res.data[fbKey].id = fbKey;
        buildings.push(res.data[fbKey]);
      });
      resolve(buildings);
    })
    .catch(err => reject(err));
});

export default { getBuildings };
