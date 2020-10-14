import React, { Component } from 'react';

class Counter extends Component {
   state = { 
       count: 0
   };
    render() { 
      
        return <div><span>Hello!</span><button>Increment</button></div>;
    }
}
 
export default Counter;