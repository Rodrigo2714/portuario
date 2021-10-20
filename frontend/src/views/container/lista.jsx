import React, { Fragment, useEffect, useState } from 'react';
import { Button, Card, CardBody, CardHeader, CardTitle } from 'reactstrap';
import ReactDatatable from '@ashvin27/react-datatable';
import axios from 'axios';
import { FaEdit, FaTrash } from 'react-icons/fa';

const config = {
  page_size: 10,
  length_menu: [10, 20, 50],
  button: {
    print: true,
  }
}

const records2 = [
  {
    'id': '1',
    'name': 'User 1',
  }
];

const deleteRecord = async id => {
  try {
    const response = await axios.delete(`${process.env.REACT_APP_BACKEND_URL}container/${id}`);
  } catch (error) {

  }
}

const Lista = props => {

  const [records, setrecords] = useState([]);

  const columns = [
    {
      key: 'client',
      text: 'Cliente',
      className: 'name',
      align: 'left',
      sortable: true,
    },
    {
      key: 'number',
      text: 'Número',
      className: 'name',
      align: 'left',
      sortable: true,
    },
    {
      key: 'status',
      text: 'Status',
      className: 'name',
      align: 'left',
      sortable: true,
    },
    {
      key: 'category',
      text: 'Categoria',
      className: 'name',
      align: 'left',
      sortable: true,
    },
    {
      key: 'action',
      text: 'Ação',
      className: 'action',
      width: 100,
      align: 'left',
      sortable: false,
      cell: record => {
        return (
          <Fragment>
            <Button
              className='btn btn-icon border-0'
              outline
              color='primary'
              onClick={() => editRecord(record.id)}
            >
              <FaEdit size='12' />
            </Button>
            <Button
              className='btn btn-icon border-0'
              outline
              color='danger'
              onClick={() => deleteRecord(record.id)}
            >
              <FaTrash size='12' />
            </Button>
          </Fragment>
        );
      }
    }
  ];

  const getList = async () => {
    try {
      const response = await axios.get(`${process.env.REACT_APP_BACKEND_URL}container`);

      setrecords(response.data.containers);

    } catch (error) {
      console.log(error);
    }
  }

  const editRecord = id => {
    props.setedit(id);
  }

  useEffect(() => {
    getList()
  }, [])

  return (
    <Card>
      <CardHeader>
        <CardTitle>Lista de Conteiner</CardTitle>
      </CardHeader>
      <CardBody>
        <ReactDatatable
          config={config}
          records={records}
          columns={columns}
        />
      </CardBody>
    </Card>
  );
};

export default Lista;