import React from 'react';
import './styles.scss';
import {getCampaigns} from './client';
import Button from '../common/Button';
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
  render() {
    const {isLoading} = this.state;
    if (isLoading) {
      return <div>Sumant is Laoding....</div>;
    }
    var {campaigns} = this.state;
    console.log('render -> campaigns', campaigns);
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
          <tbody>
            {this.state.campaigns.map((campaign, index) => {
              return (
                <tr>
                  <th scope="row">{index + 1}</th>
                  <td>{campaign.name}</td>
                  <td>
                    <Button className="btn btn-info btn-sm" text="Clone" type="button" />
                  </td>
                  <td>
                    <Button className="btn btn-warning btn-sm" text="Delete" type="button" />
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  }
}

export default CampaignTable;
