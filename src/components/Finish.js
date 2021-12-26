import React from 'react';
import styled from 'styled-components';
import {Link} from "react-router-dom";

const Finish = () => {
    return(
      <Buttons>
          <Link to="/" className="btn btn-success">Download CV</Link>
          <Link to="/about" className="btn btn-danger">Back to edit</Link>
      </Buttons>
    );
}

const Buttons = styled.div`
  display: flex;
  flex-direction: column;
  a{
    margin: 5% 0;
  }
`;

export default Finish;