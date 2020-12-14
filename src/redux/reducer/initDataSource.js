import {_moment} from '../../pages/index/utils.js';
export const initDataTemplate = {
    startTime: _moment(`${new Date().toLocaleDateString()} 7:00:00`),
    endTime: _moment(`${new Date().toLocaleDateString()} 22:00:00`),
    list: []
}
