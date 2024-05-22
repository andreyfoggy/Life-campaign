import axios, { AxiosPromise } from 'axios';
import { Campaign, Mission, Objective, Player, PlayerHistory, Vibe } from './models'

const baseUrl = 'https://88b3-104-228-82-125.ngrok-free.app'; // Replace with your API base URL
const playerId = '3fa85f64-1111-4562-b3fc-2c963f66afa6' // TODO, handle login

export interface Feedback {
  playerId?: string,
  objectiveId: string,
  feedback: string,
  vibe: Vibe 
}


// Campaign CRUD
export const getAllCampaigns = (): AxiosPromise<Campaign[]> => {
  return axios.get(`${baseUrl}/campaign`);
};

export const getCampaign = (id: string): AxiosPromise<Campaign> => {
  return axios.get(`${baseUrl}/campaign/${id}`);
};

export const createCampaign = (campaign: Campaign): AxiosPromise<Campaign> => {
  return axios.post(`${baseUrl}/campaign`, campaign);
};

export const deleteCampaign = (id: string): AxiosPromise<void> => {
  return axios.delete(`${baseUrl}/campaign/${id}`);
};

// Mission CRUD
export const getMissionById = (id: string): AxiosPromise<Mission> => {
  return axios.get(`${baseUrl}/mission/${id}`);
};

export const getMissionsByCampaignId = (id: string): AxiosPromise<Mission[]> => {
  return axios.get(`${baseUrl}/campaign/${id}/mission`);
};

export const createMission = (mission: Mission): AxiosPromise<Mission> => {
  return axios.post(`${baseUrl}/mission`, mission);
};

export const deleteMission = (id: string): AxiosPromise<void> => {
  return axios.delete(`${baseUrl}/mission/${id}`);
};

// Objective CRUD
export const getObjectiveById = (id: string): AxiosPromise<Objective> => {
  return axios.get(`${baseUrl}/objective/${id}`);
};

export const getAllObjectives = (): AxiosPromise<Objective[]> => {
  return axios.get(`${baseUrl}/objective`);
};

export const getObjectivesByMissionId = (id: string): AxiosPromise<Objective[]> => {
  console.log(id);
  return axios.get(`${baseUrl}/mission/${id}/objective`);
};

export const createObjective = (objective: Objective): AxiosPromise<Objective> => {
  return axios.post(`${baseUrl}/objective`, objective);
};

export const deleteObjective = (id: string): AxiosPromise<void> => {
  return axios.delete(`${baseUrl}/objective/${id}`);
};

// Player CRUD
export const getPlayerById = (id=playerId): AxiosPromise<Player> => {
  return axios.get(`${baseUrl}/player/${id}`);
};

export const getPlayers = (): AxiosPromise<Player[]> => {
  return axios.get(`${baseUrl}/player`);
};

export const saveFeedback = (feedback: Feedback): AxiosPromise<Player[]> =>  {
  feedback.playerId = playerId;
  return axios.post(`${baseUrl}/playerhistory`, feedback);
}

export const getPlayerHistoryByPlayerId = (): AxiosPromise<PlayerHistory[]> => {
  return axios.get(`${baseUrl}/player/${playerId}/playerhistory/`);
};