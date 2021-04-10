import axios from 'axios';

const playerRequest = axios.create({
  baseURL: 'https://web-sandbox.onefootball.com/assignments/player/',
});

export const apiPlayerData = (id) => playerRequest.get(`/data/${id}.json`);
export const apiPlayerProfile = (id) => playerRequest.get(`/profile/${id}`);
