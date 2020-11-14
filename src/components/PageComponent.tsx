import React from 'react'
import { Button, Timeline, Input, Row, Col } from 'antd'
import { AnyAction } from 'redux'

export interface Props {
  todos: Array<string>
  response?: string
  addTodo: (text: string) => AnyAction
  fetchJSON: (timestamp: number) => AnyAction
}

interface State {
  inputValue: string
}

export default class PageComponent extends React.PureComponent<Props, State> {
  constructor(props: Props) {
    super(props)
    this.state = {
      inputValue: ''
    }
  }

  onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    // alert(event.target.value)
    this.setState({ inputValue: event?.target?.value })
  }

  render() {
    return (
      <div style={{ flex: 1 }}>
        <Input.Group>
          <Row>
            <Col span={3}>
              <Input value={this.state.inputValue} onChange={this.onChange} />
            </Col>
            <Button
              type="primary"
              onClick={() => this.props.addTodo(this.state.inputValue || '默认值')}
            >
              新增
            </Button>
          </Row>
        </Input.Group>
        <Timeline>
          {this.props.todos.map(todo => (
            <Timeline.Item>{todo}</Timeline.Item>
          ))}
        </Timeline>
        <Button type="primary" onClick={() => this.props.fetchJSON(new Date().getTime())}>
          fetch
        </Button>
        <div>{this.props.response}</div>
      </div>
    )
  }
}
