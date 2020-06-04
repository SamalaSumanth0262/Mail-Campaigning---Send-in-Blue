import React from 'react';
import {connect} from 'react-redux';
// import {getUsers} from '../../Actions/ActivityActions';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import CreateMailList from '../CreateMailList';
import CreateCampaign from '../CreateCampaign';
import Analytics from '../Analytics';
class DashBoard extends React.Component {
  state = {
    users: []
  };
  componentDidMount() {
    // this.props.dispatch(getUsers());
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
        <div className="white-bg br-5 p-3 mb-5">
          <Tabs defaultActiveKey="create_campaign" id="uncontrolled-tab-example">
            <Tab eventKey="create_mail_list" title="Create Mail List">
              <CreateMailList />
            </Tab>
            <Tab eventKey="create_campaign" title="Create Campaign & Schedule">
              <CreateCampaign />
            </Tab>
            <Tab eventKey="Analytics & Reports" title="Campaign Analytics">
              <Analytics />
            </Tab>
          </Tabs>
        </div>
      </div>
    );
  }
}

function withStateToProps(state) {
  return {
    users: null
  };
}

export default connect(withStateToProps)(DashBoard);
