import React from 'react';
import './styles.scss';
const Button = (props) => {
  return (
    <button className="btn btn-primary btn-block" type={props.type ? props.type : 'button'} {...props}>
      <div className="d-flex align-items-center justify-content-center">
        {props.isSpinning && (
          <React.Fragment>
            <span className="spinner-border spinner-border-sm mr-2" role="status" aria-hidden="true" />
            <span className="sr-only">Loading...</span>
          </React.Fragment>
        )}
        {props.text}
      </div>
    </button>
  );
};

export default Button;
