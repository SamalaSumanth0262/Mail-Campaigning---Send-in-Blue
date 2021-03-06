import React from 'react';
import './styles.scss';
import {getCampaigns} from './client';
import Button from '../common/Button';
import {connect} from 'react-redux';
import {cloneCampaign} from '../../Actions/ActivityActions';
class CampaignTable extends React.Component {
  state = {
    isLoading: true,
    campaigns: []
  };
  async componentDidMount() {
    try {
      let result = await getCampaigns();
      var {campaigns} = result.data.data;
      this.setState({campaigns}, () => {
        this.setState({
          isLoading: false
        });
      });
      console.log('CampaignTable -> componentDidMount -> result', this.state);
    } catch (err) {
      console.log('CampaignTable -> componentDidMount -> err, Terribly went wrong NMI', err);
    }
  }
  cloneCampaign = (campaign) => {
    this.props.dispatch(cloneCampaign(campaign));
  };
  render() {
    const {isLoading} = this.state;
    if (isLoading) {
      return <div>Sumant is Laoding....</div>;
    }
    return (
      <div className="campaignContainer">
        <table class="table">
          <thead>
            <tr>
              <th scope="col">S.No</th>
              <th scope="col">Campaign Name</th>
              <th scope="col">Manage</th>
              <th scope="col">Delete</th>
            </tr>
          </thead>
          {this.state.campaigns && (
            <tbody>
              {this.state.campaigns.map((campaign, index) => {
                return (
                  <tr>
                    <th scope="row">{index + 1}</th>
                    <td>{campaign.name}</td>
                    <td>
                      <Button
                        className="btn btn-info btn-sm"
                        text="Clone"
                        type="button"
                        onClick={() => {
                          this.cloneCampaign(campaign);
                        }}
                      />
                    </td>
                    <td>
                      <Button className="btn btn-warning btn-sm" text="Delete" type="button" />
                    </td>
                  </tr>
                );
              })}
            </tbody>
          )}
        </table>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    just_nothing: null
  };
};

export default connect(mapStateToProps)(CampaignTable);
