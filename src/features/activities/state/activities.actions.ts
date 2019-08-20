import {Action} from '@ngrx/store';
import { Activity } from 'src/models/activity.model';

export enum ActivityActionTypes {
  LoadActivity = '[Activity] Load Activity',
  LoadSuccessful = '[Activity] Load Successful',
  LoadFailed = '[Activity] Load Failed',
  DeleteActivity = '[Activity] Delete Activity',
  DeleteSuccessful = '[Activity] Delete Successful',
  DeleteFailed = '[Activity] Delete Failed',
  AddActivity = '[Activity] Add Activity',
  AddSuccessful = '[Activity] Add Successful',
  AddFailed = '[Activity] Add Failed',
  AddActivityFiles = '[Activity] Add Activity Files',
  AddFilesSuccessful = '[Activity] Add Files Successful',
  AddFilesFailed = '[Activity] Add Files Failed',
  UpdateFilesProgress = '[Activity] Update Files Progress'
}

export class LoadActivity implements  Action {
  readonly type = ActivityActionTypes.LoadActivity;

  // Payload is the user email
  constructor(public payload: string) {}
}

export class LoadSuccessful implements Action {
  readonly type = ActivityActionTypes.LoadSuccessful;

  // Payload is the array of activities
  constructor(public payload: Activity[]) {}
}

export class LoadFailed implements Action {
  readonly type = ActivityActionTypes.LoadFailed;

  // Payload is the error message
  constructor(public payload: string) {}
}

export class AddActivity implements  Action {
  readonly type = ActivityActionTypes.AddActivity;

  // Payload is the activity to be added
  constructor(public payload: {activity: Activity, files: Set<File>}) {}
}

export class AddSuccessful implements Action {
  readonly type = ActivityActionTypes.AddSuccessful;

  // Payload is the array of activities
  constructor(public payload: Activity) {}
}

export class AddFailed implements Action {
  readonly type = ActivityActionTypes.AddFailed;

  // Payload is the error message
  constructor(public payload: string) {}
}

export class AddActivityFiles implements  Action {
  readonly type = ActivityActionTypes.AddActivityFiles;

  // Payload is the activity to be added
  constructor(public payload: {id: number, files: Set<File>}) {}
}

export class AddFilesSuccessful implements Action {
  readonly type = ActivityActionTypes.AddFilesSuccessful;

  // Payload is the array of activities
  constructor(public payload: string) {}
}

export class AddFilesFailed implements Action {
  readonly type = ActivityActionTypes.AddFilesFailed;

  // Payload is the error message
  constructor(public payload: string) {}
}

export class UpdateFilesProgress implements Action {
  readonly type = ActivityActionTypes.UpdateFilesProgress;

  // Payload is the progress map
  constructor(public payload: []) {}
}

export class DeleteActivity implements Action {
  readonly type = ActivityActionTypes.DeleteActivity;

  // Payload is the activity id
  constructor(public payload: number) {}
}

export class DeleteSuccessful implements Action {
  readonly type = ActivityActionTypes.DeleteSuccessful;

  // Payload is the id of the activity deleted
  constructor(public payload: number) {}
}

export class DeleteFailed implements Action {
  readonly type = ActivityActionTypes.DeleteFailed;

  // Payload is the error message
  constructor(public payload: string) {}
}

export type ActivityActions = LoadActivity
  | LoadSuccessful
  | LoadFailed
  | DeleteActivity
  | DeleteSuccessful
  | DeleteFailed
  | AddActivity
  | AddSuccessful
  | AddFailed
  | UpdateFilesProgress;