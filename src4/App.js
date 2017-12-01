import React, { Component } from 'react';
import NameForm  from  './components/NameForm.js'
import Form2  from  './components/Form2.js'


//组件
class App extends Component {
  constructor(props){
    super(props);
  }

  render(){
    return (
      <div>
        <NameForm/>

        <hr/>
        
        <Form2/>
      </div>
    );
  }
}


//导出一个模块
export default App;
