import React, { Component } from 'react'
import Node from './Node';
import "./PathVisualiser.css"

const START_ROW_NODE = 10;
const START_COL_NODE = 10;

const FINISH_ROW_NODE = 10;
const FINISH_COL_NODE = 35;

// Acts like a normal eclass that is a component
export default class PathVisualiser extends Component {
    // Constructor will be used to initialise an object instance of this class
    constructor(props) {
        super(props)
        // State of nodes is an empty array
        this.state = {
            nodes: [],
        };
    }
    componentdid
    componentDidMount() {
        // create a list of nodes
        const nodes = []
        for (let row = 0; row < 15; row++) {
            const currentRow = []
            for (let col = 0; col < 50; col++) {
                // create object for current node
                // isStart is true if row is 10 and col is 5
                // isFinish is true if row is 10 and col is 45
                const currentNode = {
                    col,
                    row,
                    isStart: row === 10 && col === 5,
                    isFinish: row === 10 && col === 45,
                };
                // push columns into row
                currentRow.push(currentNode)
            }
            // push rows into nodes array
            nodes.push(currentRow)
        }
        // update the state of nodes array
        this.setState({nodes})
    }




    render() {
        const {nodes} = this.state
        console.log(nodes)
        // Info Reminder ----
        // Map (element, index)
        return (
            <div className="grid">
                {nodes.map((row, rowIdx) => {
                    return (
                    <div key={rowIdx}>
                        {row.map((node, nodeIdx) => {
                        const {isStart, isFinish} = node;
                        return (
                            <Node 
                            key={nodeIdx}
                            isStart={isStart}
                            isFinish={isFinish}
                            test={'foo'}
                            test2={'kappa'}
                            ></Node>  
                        )
                         })}
                    </div>
                    )   
            })}
            </div>
        )
    }
}

  

