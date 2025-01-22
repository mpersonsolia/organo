import "./CampoTexto.css";

export const CampoTexto = (props) => {
  const aoDigitado = (e) => {
    props.aoAlterado(e.target.value);
  };

  return (
    <div className="campo-texto">
      <label>{props.label}</label>
      <input
        value={props.valor}
        required={props.obrigatorio}
        onChange={aoDigitado}
        placeholder={props.placeholder}
      />
    </div>
  );
};

export default CampoTexto;
