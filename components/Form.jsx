import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { useDispatch } from 'react-redux';
import { addUser } from '../Redux/actions';

const UserForm = () => {
  const dispatch = useDispatch();

  const validate = (values) => {
    const errors = {};

    if (!values.firstName) {
      errors.firstName = 'El nombre es requerido';
    }

    if (!values.lastName) {
      errors.lastName = 'El apellido es requerido';
    }

    if (!values.email) {
      errors.email = 'El correo electrónico es requerido';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) {
      errors.email = 'Formato de correo electrónico inválido';
    }

    return errors;
  };

  return (
    <Formik
      initialValues={{ firstName: '', lastName: '', email: '' }}
      validate={validate}
      onSubmit={(values, { resetForm }) => {
        dispatch(addUser(values)); // Dispatch la acción para agregar un usuario con los valores ingresados
        resetForm(); // Limpia el formulario después de enviar
      }}
    >
      <div className='col-span-1 relative lg:h-[70vh] h-[50vh] p-4'>
        <Form>
          <h1 className="font-bold text-primary-content text-lg mb-8">Añadir nuevo usuario</h1>
          <label htmlFor="firstName" className='flex items-center gap-2'>Nombre:</label>
          <Field type="text" id="firstName" name="firstName" className="input input-bordered input-secondary w-full max-w-xs" />
          <ErrorMessage name="firstName" component="div" className='text-error text-sm'/>

          <label htmlFor="lastName" className='flex items-center gap-2'>Apellido:</label>
          <Field type="text" id="lastName" name="lastName" className="input input-bordered input-secondary w-full max-w-xs"/>
          <ErrorMessage name="lastName" component="div" className='text-error text-sm'/>

          <label htmlFor="email" className='flex items-center gap-2' >Correo electrónico:</label>
          <Field type="email" id="email" name="email" className="input input-bordered input-secondary w-full max-w-xs" placeholder='nombre@site.com'/>
          <ErrorMessage name="email" component="div" className='text-error text-sm'/>

          <div className=''>
          <button type="submit" className='btn btn-primary my-4' id='save'>Guardar usuario</button>
          <button type="reset" className='btn btn-outline btn-primary my-4 ml-2 '>Limpiar</button> 
          </div>
        </Form>
      </div>
    </Formik>
  );
};

export default UserForm;