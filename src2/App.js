import React, { Component } from 'react';

import If  from './components/If.js'


//组件
class App extends Component {

  constructor(props){
    super(props);

    //初始化， this.state 初始化为任何类型的值
    this.state = {value: true, name: "xxx"};
  }

  changeColor = () =>{

    //this.setState进行更新
    /*
    this.setState会和原来的state进行合并，没有修改的值保持原样
    this.setState 的更新属于异步操作！！！！
    this.setState  会将多次相同的操作进行合并(性能优化)
    */
    this.setState({value: !this.state.value});
  }

  /*

  react: props, state
  props: 用于父组件给子组件传递数据，属于单向数据流传递，props是属于父组件传递的，子组件只负责接收，子组件通常是无法修改props的！！！！
  state: state属于组件内部独有的状态值，通过this.state 进行初始化， this.setState是修改状态值(不能直接this.state = {value:　false})。
  每次state的值发生变化，那么组件就会触发更新操作！！！！！
  */

  render(){

    return (
      <div>

       <button onClick={this.changeColor}>点击转换颜色</button>

        {/* 注意 {} */}
        <If test={this.state.value} />
      </div>
    );
  }
}


//导出一个模块
export default App;
