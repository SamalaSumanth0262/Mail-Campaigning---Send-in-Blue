import React from 'react';
import './styles.scss';
import * as Yup from 'yup';
import {Formik} from 'formik';
import TextInput from '../Formik/TextInput';
import Button from '../common/Button';
import {createMailList} from './client';
import {toast} from 'react-toastify';

import DropDown from '../Formik/DropDown';
import CkEditor from '../Formik/CkEditor';
const campaignSchema = Yup.object().shape({
  fileUrl: Yup.string().required('Link is Required'),
  listName: Yup.string().required('Mail list name is Required'),
  folderId: Yup.number('Folder ID cannot be a text..').required('Folder Id is required')
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
      scheduledAt: ''
    }
  };
  async handleSubmitForm({values, actions}) {
    actions.setSubmitting(true);
    var result = await createMailList(values);
    actions.setSubmitting(false);
    actions.resetForm();
    toast.success('Mailer List Created Successfully..');
  }

  render() {
    const renderView = (props) => {
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
                  option={[{label: 'check one', value: 'ch'}]}
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
                />
              </div>
              <div className="offset-md-3 col-sm-3">
                <Button type="submit" text="Create Campaign & schedule" isSpinning={props.isSubmitting} />
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
          console.log('CreateMailList -> render -> actions', actions);
          this.handleSubmitForm({values, actions});
        }}
      />
    );
  }
}

export default CreateCampaign;
