import React from 'react';
import Page from '../Shared/Page';
import ConfirmButton from './ConfirmButton';
import WelcomeMessage from './WelcomeMessage';

const Settings = () => {
  return (
   <Page name="settings">
      <WelcomeMessage />
      <ConfirmButton />
   </Page>
  )
};

export default Settings;
