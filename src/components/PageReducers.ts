import { INITIAL_STATE, ImmutableState } from '../redux/state'
import { Types } from './PageActions'

const addTodo = (state: ImmutableState = INITIAL_STATE, { text }: { text: string }) => {
  const todos = state.todo.concat([text])
  return state.merge({ todo: todos })
}

const updateResponse = (
  state: ImmutableState = INITIAL_STATE,
  { response }: { response: string }
) => {
  return state.merge({ response })
}

export const HANDLERS = {
  [Types.ADD_TODO]: addTodo,
  [Types.UPDATE_RESPONSE]: updateResponse
}

export default HANDLERS
