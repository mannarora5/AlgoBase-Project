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
                // push columns into row
                currentRow.push([])
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
                    return <div>
                        {row.map((node, nodeIdx) => <Node></Node>)}
                    </div>
                    
            })}
                
            </div>
        )
    }
}

  

