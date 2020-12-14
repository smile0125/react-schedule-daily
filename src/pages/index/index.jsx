import React, { Component } from "react";
import { Row, Col } from 'antd';
// import Drag from "./drag.js";
import * as ActionCreaters from '../../redux/action/actionCreaters.jsx';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

class Index extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    componentDidMount() {
        const { dataSource, taskList } = this.props;
        this.props.actions.saveDataSource({ dataSource, taskList });
    }

    componentWillReceiveProps() {

    }

    render() {
        console.log(this.props)
        const { dataSource } = this.props;
        return (
            <div>666999</div>
        );
    }
}

const mapStateToProps = state => ({
    state
});
const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators(ActionCreaters, dispatch)
})

export default connect(mapStateToProps, mapDispatchToProps)(Index);
