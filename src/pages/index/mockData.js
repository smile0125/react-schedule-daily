import { _moment } from './utils.js';
const localeDate = new Date().toLocaleDateString();
const mockData = {
    startTime: _moment(`${localeDate} 7:00:00`),
    endTime: _moment(`${localeDate} 22:00:00`),
    list: [{
        rowId: '1',
        taskInfo: [{
            colId: '1-1',
            pointRow: 0,
            pointCol: 0,
            startTime: _moment(`${localeDate} 7:00:00`),
            endTime: _moment(`${localeDate} 8:00:00`),
            timeLength: 2,
            color: '#90ccff',
            context: '文本内容1'
        }, {
            colId: '1-1',
            pointRow: 0,
            pointCol: 4,
            startTime: _moment(`${localeDate} 9:00:00`),
            endTime: _moment(`${localeDate} 12:00:00`),
            timeLength: 6,
            color: '#1b89e6',
            context: '文本内容2'
        }, {
            colId: '1-2',
            pointRow: 1,
            pointCol: 0,
            startTime: _moment(`${localeDate} 7:00:00`),
            endTime: _moment(`${localeDate} 11:00:00`),
            timeLength: 8,
            color: '#b34eff',
            context: '文本内容3'
        }]
    }]
};

const taskList = [
    { id: 1, title: '任务1' },
    { id: 2, title: '任务2' },
    { id: 3, title: '任务3' },
    { id: 4, title: '任务4' },
]

export {
    mockData,
    taskList
}