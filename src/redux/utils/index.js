import moment from 'moment';
/**
 * 时间轴处理
 * @param {*}  startTime
 * @param {*}  endTime
 * @param {*}  interval
 */
const getTimeData = ({ startTime, endTime, onceTimeLength }) => {
    let timeData = [];
    let timeAllData = [];
    let len = (new Date(endTime) - new Date(startTime)) / 1000 / 3600;
    for (let i = 0; i <= len; i++) {
      timeData.push(`${moment(i * onceTimeLength * 2 + Date.parse(new Date(startTime))).format('HH:mm')}`);
    }

    for (let i = 0; i <= len * 2; i++) {
      timeAllData.push(`${moment(i * onceTimeLength + Date.parse(new Date(startTime))).format('HH:mm')}`);
    }
    return { timeData, timeAllData };
  };

/**
 * 生成矩阵
 */
const setMatrix = (timeLen, maxRowCount, matrixExist) => {
    let resArr = [];
  
    for (let i = 0; i < maxRowCount; i++) {
      let rowArr = [];
      let itemArr = [];
      if (matrixExist[i]) {
        itemArr = matrixExist[i];
      }
      for (let j = 0; j <= timeLen; j++) {
        if (itemArr.includes(j)) {
          rowArr.push([1]);
        } else {
          rowArr.push([0]);
        }
      }
      resArr.push(rowArr);
    }
    return resArr;
  };

/**
 * 转换data数据，处理最大行数和矩阵
 */
const transformData = (res) => {
    const { list = [], startTime, endTime } = res;
    let maxRowCount = 10;
    let timeLen = (new Date(endTime) - new Date(startTime)) / 1000 / 3600 * 2 - 1;

    // 保存每个班次的矩阵行列
    let pointBlock = [];
    list.map(({ taskInfo = [] }, index) => {
    let sortPointArr = [];
    let currentClassPointBlock = [];
    // 保存每个班次中每一行被占用的格子情况
    let matrixExist = {};

    taskInfo.map(({ pointRow, pointCol, timeLength }) => {
        sortPointArr.push(pointRow);
        if (!matrixExist[pointRow] || matrixExist[pointRow].length <= 0) {
        matrixExist[pointRow] = [];
        }
        // 把同一行被占用的列坐标放在一起
        for (let i = pointCol; i < (Number(pointCol) + Number(timeLength)); i++) {
        matrixExist[pointRow].push(i);
        }
    });
    let newSortList = sortPointArr.sort();
    let newSortListLength = newSortList.length;
    let newMaxRowCount = newSortList[newSortListLength - 1];
    if (newMaxRowCount > maxRowCount) {
        maxRowCount = newMaxRowCount;
    }
    currentClassPointBlock = setMatrix(timeLen, maxRowCount, matrixExist);
    pointBlock[index] = currentClassPointBlock;
  });
  return pointBlock;
};

/**
 * 根据任务情况生成矩阵
 */
const generateMatrix = data => transformData(data);
export {
    generateMatrix,
    getTimeData
}