import { createActions } from 'reduxsauce'

export const { Types, Creators } = createActions(
  {
    addTodo: ['text'],
    fetchJSON: ['timestamp'],
    updateResponse: ['response']
  },
  {
    prefix: 'PREFIX_'
  }
)
