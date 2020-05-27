import React from 'react';
import './styles.scss';
import * as Yup from 'yup';
import {Formik} from 'formik';
import TextInput from '../Formik/TextInput';
import Button from '../common/Button';
import {getAllMailerList, createCampaign} from './client';
import {toast} from 'react-toastify';
import DropDown from '../Formik/DropDown';
import CkEditor from '../Formik/CkEditor';
const campaignSchema = Yup.object().shape({
  name: Yup.string().required('Sender name is required'),
  email: Yup.string()
    .email('Please enter the correct email')
    .required('Sender email cannot be blank'),
  listIds: Yup.object().required('Please select the mailer list'),
  campaign_name: Yup.string().required('Campaign name is required'),
  subject: Yup.string().required('Subject of email is required'),
  replyTo: Yup.string()
    .email('Please enter the correct email')
    .required('ReplyTo cannot be blank'),
  scheduledAt: Yup.string().required('Sender name is required'),
  htmlContent: Yup.string().required('Email template is required')
});

class CreateCampaign extends React.Component {
  state = {
    initialValues: {
      name: '',
      email: '',
      listIds: '',
      campaign_name: '',
      subject: '',
      replyTo: '',
      scheduledAt: '',
      htmlContent: '<p>Welcome to Gerald Email Campaigning</p>'
    },
    isMailerListLoading: true,
    mailerListData: []
  };

  async componentDidMount() {
    try {
      var mailer_list = await getAllMailerList();
      var data = mailer_list.data.data.lists; //TO_DO no time to handle this properly // handing with try catch
      //TO_DO: write in a separate function
      var mailerListData = [];
      data.map((list) => {
        var obj = {};
        (obj['label'] = list.name), (obj['value'] = list.id);
        mailerListData.push(obj);
      });
      this.setState({mailerListData});
    } catch (err) {
      alert(err);
      console.log('CreateCampaign -> componentDidMount -> err', err);
      //loose end
    }
  }
  async handleSubmitForm({values, actions}) {
    actions.setSubmitting(true);
    var result = await createCampaign(values);
    console.log('CreateCampaign -> handleSubmitForm -> result', result);
    actions.setSubmitting(false);
    actions.resetForm();
    toast.success('Campaign Created & Scheduled Successfully..');
  }

  render() {
    const renderView = (props) => {
      console.log('renderView -> props', props);
      return (
        <form onSubmit={props.handleSubmit}>
          <div className="p-2 pt-3">
            <div className="row align-items-end">
              <div className="col-sm-6">
                <TextInput
                  type="text"
                  labelName="name"
                  placeholder="sender name"
                  labelTitle="Please Enter the Sender Name"
                  isMandatory={true}
                />
                <TextInput
                  type="email"
                  labelName="email"
                  placeholder="Email"
                  labelTitle="Please Enter Sender Email ( From Address )"
                  isMandatory={true}
                />
                <DropDown
                  split={false}
                  labelTitle="Select the Mailer List"
                  option={this.state.mailerListData}
                  labelName="listIds"
                  isMandatory={true}
                  style={{marginBottom: '10px'}}
                />
                <TextInput
                  type="text"
                  labelName="campaign_name"
                  placeholder="Campaign name"
                  labelTitle="Please Enter Campaign Name"
                  isMandatory={true}
                />
                <CkEditor labelName="htmlContent" labelTitle="Edit the email template here" isMandatory={true} />
                <TextInput
                  type="text"
                  labelName="subject"
                  placeholder="subject"
                  labelTitle="Enter the Email Subject"
                  isMandatory={true}
                />
                <TextInput
                  type="email"
                  labelName="replyTo"
                  placeholder="replyTo"
                  labelTitle="Enter the replyTo"
                  isMandatory={true}
                />
                <TextInput
                  type="datetime-local"
                  labelName="scheduledAt"
                  placeholder=""
                  labelTitle="Schedule the campaign"
                  isMandatory={true}
                  data-date-format="DD-MM-YYYY HH:mm:ss"
                />
              </div>
              <div className="offset-md-3 col-sm-3">
                <Button type="submit" text="Create Campaign" isSpinning={props.isSubmitting} />
              </div>
            </div>
          </div>
        </form>
      );
    };
    return (
      <Formik
        initialValues={this.state.initialValues}
        render={renderView}
        validationSchema={campaignSchema}
        onSubmit={(values, actions) => {
          this.handleSubmitForm({values, actions});
        }}
      />
    );
  }
}

export default CreateCampaign;
