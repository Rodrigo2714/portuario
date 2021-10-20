import React, { useState } from 'react';
import { Col, Row } from 'reactstrap';
import Cadastro from './cadastro';
import Lista from './lista';


const Container = () => {
  const [edit, setedit] = useState(null);
  const [update, setupdate] = useState(null);

  return (
    <div>
      <Row className='w-100 flex-grow-1 p-4'>
        <Col lg='4' md='12' sm='12'>
          <Cadastro edit={edit} />
        </Col>
        <Col lg='8' md='12' sm='12'>
          <Lista setedit={setedit} />
        </Col>
      </Row>
    </div>
  );
};

export default Container;