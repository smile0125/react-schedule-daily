import * as ActionTypes from '../action/actionTypes.jsx';
import { initDataTemplate } from './initDataSource.js';
import { generateMatrix, getTimeData } from '../utils/index.js';
const initialState = {
    dataSource: initDataTemplate,
    taskList: [],
    poinkBlock: [],
    onceTimeLength: 60 * 60 * 1000 / 2,
    timeData: [],
    timeAllData: [],
    dragInfo: {
        startDragInfo: {
          dataId: null,
          dataTitle: null,
          dataType: null,
        },
        dropInfo: {
          dataClassIndex: null,
          dataPointRow: 0,
          dataPointCol: 0,
        },
      },
};
const initReducer = (state = initialState, action) => {
    switch (action.type) {
        case ActionTypes.SAVE_DATASOURCE:
            let newState = JSON.parse(JSON.stringify(state));
            const { dataSource, taskList } = action.payload.value;
            const { startTime, endTime } = dataSource;
            const { onceTimeLength } = state;
            newState.taskList = taskList;
            newState.dataSource = dataSource;
            new Promise((resolve) => {
                const poinkBlock = generateMatrix(dataSource);
                const { timeData, timeAllData } = getTimeData({ startTime, endTime, onceTimeLength });
                resolve({poinkBlock, timeData, timeAllData})
            }).then(res => {
                const { poinkBlock, timeData, timeAllData } = res;
                newState.poinkBlock = poinkBlock;
                newState.timeData = timeData;
                newState.timeAllData = timeAllData;
            })
            return newState;
        default:
            return state;
    }
};
export default initReducer;