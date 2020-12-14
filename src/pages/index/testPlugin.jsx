import React, { Component } from 'react'
import Schedule from './index.jsx';
import { mockData, taskList } from './mockData.js';

export default class TestPlugin extends Component {
    render() {
        return (
            <div>
                <Schedule
                    dataSource={mockData}
                    taskList={taskList}
                />
            </div>
        )
    }
}
