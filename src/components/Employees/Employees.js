import React, { Component } from 'react';

class Employees extends Component {

    constructor(props){
      super(props);
  
    }
  
    render() {
        return (
          <div className="content">
            <div className="contentHeaderBar">
                Employees
            </div>
            <div className="contentBody">
              <div className="toolBar">
                <div className="panel-button--right">
                  <button className="button__success">add employee</button>
                </div>
              </div>

              <div>

                <div className="table">

                </div>
              
                <div className="panel panel--right">

                  <div className="form">

                  </div>

                </div>
              </div>

            </div>
          </div>
        )
      }
    }
    
    
    export default Employees;
    