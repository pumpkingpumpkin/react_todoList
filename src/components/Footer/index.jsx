import React, { Component } from 'react'
import './index.css'
export default class index extends Component {
  handleCheckAll=(event)=>{
    this.props.checkAllTodo(event.target.checked)
  }
  handleClearAll=()=>{
    this.props.clearAllDone()
  }

  render() {
    const {todos} = this.props 

    const doneCount = todos.reduce((pre,current)=>pre+(current.done?1:0),0)
    const allCount = todos.length

    return (
      <div className='todo-footer'>
        <label>
            <input type="checkbox" onChange={this.handleCheckAll} checked={doneCount===allCount&&allCount!==0?true:false}/>
        </label>
        <span>
            <span>已完成{doneCount}</span>/ 全部{allCount}
        </span>
        <button onClick={this.handleClearAll} className='btn btn-danger'>清除已完成任务</button>
      </div>
    )
  }
}
