export interface ObjectiveBase {
    id: string;
    title: string;
    description: string;
  }
  
  export interface Campaign extends ObjectiveBase {
    missionIds: string[];
  }
  
  export interface Mission extends ObjectiveBase {
    objectiveIds: string[];
  }
  
  export interface Objective extends ObjectiveBase {
    detail: string;
  }
  
  export interface PlayerHistory {
    id: string;
    objectiveId: string;
    playerId: string;
    feedback: string;
    vibe: Vibe;
  }
  
  export interface Player {
    id: string;
    username: string;
  }
  
  export enum Vibe {
    Happy,
    Meh,
    Sad
  }
  