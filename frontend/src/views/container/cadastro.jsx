import React, { useEffect, useState } from 'react';
import { Button, Card, CardBody, CardFooter, CardHeader, CardTitle, Col, Form, FormGroup, Input, Label, Row } from 'reactstrap';
import Select from 'react-select';
import axios from 'axios';

const Cadastro = props => {
  const [id, setid] = useState(null);
  const [client, setclient] = useState('');
  const [number, setnumber] = useState('');
  const [btnSubmit, setBtnSubmit] = useState('Cadastro');
  const [errorForm, setErrorForm] = useState([]);

  const [type, settype] = useState([]);
  const [status, setstatus] = useState([]);
  const [category, setcategory] = useState([]);
  const [optionstype, setoptionstype] = useState([{ label: '20', value: '20' }, { label: '40', value: '40' }]);
  const [optionsstatus, setoptionsstatus] = useState([{ label: 'Cheio', value: 'Cheio' }, { label: 'Vazio', value: 'Vazio' }]);
  const [optionscategory, setoptionscategory] = useState([{ label: 'Importação', value: 'Importação' }, { label: 'Exportação', value: 'Exportação' }]);

  const handleSubmit = async e => {
    e.preventDefault();

    const data = {
      client,
      number,
      type: type.value,
      status: status.value,
      category: category.value
    }
    try {

      if (id) {
        const response = await axios.put(`${process.env.REACT_APP_BACKEND_URL}container/${id}`, data);

      } else {
        const response = await axios.post(`${process.env.REACT_APP_BACKEND_URL}container`, data);
      }

      resetForm();

    } catch (error) {
      if (error.response.data.errors) {
        setErrorForm(error.response.data.errors);
        console.log(error);
      }
    }
  };

  useEffect(async () => {
    if (props.edit) {
      try {
        const response = await axios.get(`${process.env.REACT_APP_BACKEND_URL}container/${props.edit}/edit`);

        setid(response.data.container.id);
        setclient(response.data.container.client);
        setnumber(response.data.container.number);

      } catch (error) {
        console.log(error);
      }
    }
  }, [props.edit])

  const resetForm = () => {
    setErrorForm([]);
    setBtnSubmit('Cadastrar');
    setid(null);
    setclient('');
    setnumber('');
    settype([]);
    setcategory([]);
    setstatus([]);
  };

  return (
    <div>
      <Form onSubmit={handleSubmit}>
        <Card>
          <CardHeader>
            <CardTitle>Cadastro de Conteiner</CardTitle>
          </CardHeader>
          <CardBody>
            <Row>
              <Col sm='12'>
                <FormGroup>
                  <Label for='client'>Cliente</Label>
                  <Input
                    type='text'
                    name='client'
                    placeholder=''
                    value={client}
                    onChange={e => setclient(e.target.value)}
                  />
                  {errorForm?.client && (<div style={{ color: 'red', fontSize: 12 }}>{errorForm?.client[0]}</div>)}
                </FormGroup>
              </Col>
              <Col sm='12'>
                <FormGroup>
                  <Label for='number'>number</Label>
                  <Input
                    type='text'
                    name='number'
                    placeholder=''
                    value={number}
                    onChange={e => setnumber(e.target.value)}
                  />
                  {errorForm?.number && (<div style={{ color: 'red', fontSize: 12 }}>{errorForm?.number[0]}</div>)}
                </FormGroup>
              </Col>
              <Col sm='12'>
                <FormGroup>
                  <Label for='type'>Tipo</Label>
                  <Select
                    value={type}
                    onChange={settype}
                    options={optionstype}
                  />
                  {errorForm?.type && (<div style={{ color: 'red', fontSize: 12 }}>{errorForm?.type[0]}</div>)}
                </FormGroup>
              </Col>
              <Col sm='12'>
                <FormGroup>
                  <Label for='status'>Status</Label>
                  <Select
                    value={status}
                    onChange={setstatus}
                    options={optionsstatus}
                  />
                  {errorForm?.status && (<div style={{ color: 'red', fontSize: 12 }}>{errorForm?.status[0]}</div>)}
                </FormGroup>
              </Col>
              <Col sm='12'>
                <FormGroup>
                  <Label for='category'>Categoria</Label>
                  <Select
                    value={category}
                    onChange={setcategory}
                    options={optionscategory}
                  />
                  {errorForm?.category && (<div style={{ color: 'red', fontSize: 12 }}>{errorForm?.category[0]}</div>)}
                </FormGroup>
              </Col>
            </Row>
          </CardBody>
          <CardFooter>
            <Button type='submit' color='primary' className='mx-1'>{btnSubmit}</Button>
            <Button type='button' color='danger' outline onClick={resetForm}>Cancelar</Button>
          </CardFooter>
        </Card>
      </Form>
    </div>
  );

};

export default Cadastro;