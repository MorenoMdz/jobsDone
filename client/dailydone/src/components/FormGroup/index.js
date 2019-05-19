import React from 'react';
import { Form, Input } from '@rocketseat/unform';
import api from '../../services/api';

function FormGroup(props) {
  const { handleToUpdate } = props;
  function handleSubmit(data, { resetForm }) {
    api.post(`completed/`, { ...data });
    handleToUpdate();
  }

  return (
    <div>
      <Form onSubmit={handleSubmit}>
        <label htmlFor="id">ID</label>
        <Input type="number" name="id" />
        <label htmlFor="text">Descrição</label>
        <Input type="text" name="text" />
        <label htmlFor="type">Tipo</label>
        <Input type="text" name="type" />
        <label htmlFor="value">Valor</label>
        <Input type="text" name="value" />
        <button type="submit">Save</button>
      </Form>
    </div>
  );
}

export default FormGroup;
