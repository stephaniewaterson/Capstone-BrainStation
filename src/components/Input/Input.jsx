import "./Input.scss";

function Input({ label, name, type }) {
  if (type === "textarea") {
    return (
      <div className="field">
        <label htmlFor={name}>{label}</label>
        <textarea id={name} name={name} rows={5} className="field__input" />
      </div>
    );
  }

  return (
    <div className="field">
      <label htmlFor={name}>{label}</label>
      <input type={type} id={name} name={name} className="field__input" />
    </div>
  );
}

export default Input;
