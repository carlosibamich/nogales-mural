import React from 'react';
import { withRouter } from 'react-router-dom';

import './home-icon.styles.scss';

const HomeIcon = ({ history }) => {
  return (
    <div className="home-icon-container" onClick={() => {history.push('/')}}>
      <div className="outer-circle">
        <div className="inner-circle">
          <div className="letter-n">N</div>
        </div>
      </div>
    </div>
  )
};

export default withRouter(HomeIcon);