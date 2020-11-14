import { connect } from 'react-redux'
import PageComponent from './PageComponent'
import { Creators } from './PageActions'

const mapStateToProps = (state: any) => {
  return {
    todos: state.todo,
    response: state.response
  }
}

const mapDispatchToProps = (dispatch: any) => {
  return {
    addTodo: (text: string) => dispatch(Creators.addTodo(text)),
    fetchJSON: (timestamp: number) => dispatch(Creators.fetchJSON(timestamp))
  }
}

const VisibleTodoList = connect(mapStateToProps, mapDispatchToProps)(PageComponent)

export default VisibleTodoList
