import { useForm } from "react-hook-form";
import React, { useEffect, useState } from "react";
import "./form.css";

const Form = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [items, setItems] = useState(() => {
      let storedData;
      try {
          storedData = JSON.parse(localStorage.getItem('form'));
      } catch (e) {
          storedData = {};
      }
      return storedData ? storedData : {};
  });

  const onSubmit = (data) => {
      console.log(data);
      setItems(data);
  };

  useEffect(() => {
      localStorage.setItem('form', JSON.stringify(items));
  }, [items]);


  return (
    <div className="formInput">
      <form onSubmit={handleSubmit(onSubmit)}>
        <h1>Ingrese sus datos</h1>
        <div className="formInput-nombre">
          <label>Nombre: </label>
          <input
            type="text"
            value={items.name}
            {...register("name", {
              required: "  Campo requerido",
              pattern: {
                  value: /^[A-Za-z]/,
                message: "  Nombre invalido"
              }
            })}
          />
          {errors.name && errors.name.message}
        </div>
        <div className="formInput-email">
          <label>Email: </label>
          <input
            type="email"
            value={items.email}
            {...register("email", {
              required: "Email requerido",
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: "Email invalido"
              }
            })}
          />
          {errors.email && errors.email.message}
        </div>
        <div className="formInput-fecha">
          <label>Dia de nacimiento: </label>
          <input
            type="date"
              value={items.date}
            {...register("date", {
              required: " Complete la fecha de nacimiento",
              message: " Fecha invalida"
            })}
          />
          
          {errors.date && errors.date.message}
        </div>
        <div className="formInput-numero">
          <label>Número: </label>
          <input
            type="number"
              value={items.number}
            {...register("number", {
              required: " Ingrese su número de telefono",
              pattern: {
                value: /^[0-9]{9}$/,
                message: " Número invalido"
              }
            })}
          />
          
          {errors.number && errors.number.message}
        </div>
        <button className="boton" type="submit">Ir a agendar hora</button>
      </form>
    </div>
  );
};


export default Form;