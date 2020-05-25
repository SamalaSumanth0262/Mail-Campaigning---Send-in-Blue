import React from 'react';
import {connect} from 'react-redux';
import {getUsers} from '../../Actions/ActivityActions';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import CreateMailList from '../CreateMailList';
class DashBoard extends React.Component {
  state = {
    users: []
  };
  componentDidMount() {
    this.props.dispatch(getUsers());
  }
  componentDidUpdate(prevProps, currentProps) {
    if (prevProps.users !== this.props.users) {
      this.setState({
        users: this.props
      });
    }
  }
  render() {
    return (
      <div className="container mt-5 mb-5 grey-bg">
        <div className="white-bg br-5 p-3">
          <Tabs defaultActiveKey="profile" id="uncontrolled-tab-example">
            <Tab eventKey="create_mail_list" title="1. Create Mail List">
              <CreateMailList />
            </Tab>
            <Tab eventKey="create_campaign" title="2. Create Campaign">
              2
            </Tab>
            <Tab eventKey="select_mail_list" title="3. Select Mail List">
              3
            </Tab>
            <Tab eventKey="template" title="4. Set Template">
              4
            </Tab>
            <Tab eventKey="schedule" title="5. Schedule A Campaign">
              5
            </Tab>
          </Tabs>
        </div>
      </div>
    );
  }
}

function withStateToProps(state) {
  return {
    users: state.activity.users
  };
}

export default connect(withStateToProps)(DashBoard);
