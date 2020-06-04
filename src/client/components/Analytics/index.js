import React from 'react';
import {fetchData} from './client';
import './styles.scss';

class Analytics extends React.Component {
  state = {
    data: [],
    isLoading: true
  };

  async componentDidMount() {
    this.setState({
      isLoading: true
    });
    var result = await fetchData();
    var data = result.data.data;
    this.setState(
      {
        data
      },
      () => {
        this.setState({
          isLoading: false
        });
      }
    );
  }
  render() {
    if (this.state.isLoading) {
      //TO_DO add Spinner
      return <div>Loading...</div>;
    }
    const {data} = this.state;
    console.log('Analytics -> render -> data', data);
    return (
      <div class="table-responsive">
        <table class="table table-striped table-responsive" style={{width: '120rem'}}>
          <thead>
            <tr>
              <th scope="col">Campaign Name</th>
              <th scope="col">Status</th>
              <th scope="col">subject</th>
              <th scope="col">Scheduled At</th>
              <th scope="col">Campaign Completed on</th>
              <th scope="col">clickers</th>
              <th scope="col">complaints</th>
              <th scope="col">deferred</th>
              <th scope="col">delivered</th>
              <th scope="col">sent</th>
              <th scope="col">softBounces</th>
              <th scope="col">uniqueClicks</th>
              <th scope="col">uniqueViews</th>
              <th scope="col">unsubscriptions</th>
              <th scope="col">viewed</th>
            </tr>
          </thead>
          {data.campaigns && (
            <tbody>
              {data.campaigns.map((campaign) => {
                var camp_stats_available = campaign.statistics.campaignStats && campaign.statistics.campaignStats[0];
                var camp_stats = campaign.statistics.campaignStats[0];
                return (
                  <tr>
                    <td style={{color: '#16c98d', fontWeight: 'light'}}>{campaign.name}</td>
                    <td>{campaign.status}</td>
                    <td>{campaign.subject}</td>
                    <td>{campaign.scheduledAt ? new Date(campaign.scheduledAt).toLocaleString() : '-'}</td>
                    <td>{campaign.sentDate ? new Date(campaign.sentDate).toLocaleString() : '-'}</td>
                    <td>{camp_stats_available ? camp_stats.clickers : '-'}</td>
                    <td>{camp_stats_available ? camp_stats.complaints : '-'}</td>
                    <td>{camp_stats_available ? camp_stats.delivered : '-'}</td>
                    <td>{camp_stats_available ? camp_stats.sent : '-'}</td>
                    <td>{camp_stats_available ? camp_stats.complaints : '-'}</td>
                    <td>{camp_stats_available ? camp_stats.sent : '-'}</td>
                    <td>{camp_stats_available ? camp_stats.softBounces : '-'}</td>
                    <td>{camp_stats_available ? camp_stats.uniqueClicks : '-'}</td>
                    <td>{camp_stats_available ? camp_stats.uniqueViews : '-'}</td>
                    <td>{camp_stats_available ? camp_stats.unsubscriptions : '-'}</td>
                    <td>{camp_stats_available ? camp_stats.viewed : '-'}</td>
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

export default Analytics;
