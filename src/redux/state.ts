import Immutable from 'seamless-immutable';

export interface State {
  todo: Array<string>,
  response?: string
}

export const INITIAL_STATE = Immutable<State>({
  todo: []
})

export type ImmutableState = Immutable.ImmutableObject<State>