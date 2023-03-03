/* eslint-disable @typescript-eslint/no-namespace */
import * as React from 'react';

const CastButton = ({ ...props }) => {
  return <google-cast-launcher style={{ cursor: 'pointer' }} {...props} />;
};

CastButton.propTypes = {};

export default CastButton;
