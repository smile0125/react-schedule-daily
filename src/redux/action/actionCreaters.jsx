import * as ActionTypes from './actionTypes.jsx';

const getSaveDataSourceType = value => ({ type: ActionTypes.SAVE_DATASOURCE, payload: { value } });

export const saveDataSource = ({ dataSource, taskList }) => dispatch => {
    const data = { dataSource, taskList }
    dispatch(getSaveDataSourceType(data));
}