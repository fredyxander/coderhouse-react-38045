import React from 'react';
import "./ContactoPage.css";

const ComponenteAlerta = ({ condition, alerta }) => {
  return (
    <div className={`${alerta === "cuidado" ? "clase1" : "clase2"} border`}>
      <p style={{ color: condition === true ? 'orange' : 'black' }}>
        soy una alerta
      </p>
    </div>
  );
};

export const ContactoPage = () => {
  return (
    <div>
      <h1>Hello StackBlitz!</h1>
      <ComponenteAlerta condition={false} alerta="todo ok" />
      <ComponenteAlerta condition={true} alerta="cuidado" />
    </div>
  );
}
