import React from "react";
import { StyledRegisterVideo } from "./styles";

// Custom hook
function useForm(props) {
  const [values, setValues] = React.useState(props.initialValues);
  return {
    values,
    handleChange: (e) => {
      const value = e.target.value;
      const name = e.target.name;
      setValues({
        ...values,
        [name]: value,
      });
    },
    clearForm() {
        setValues({});
    }
  };
}

export default function RegisterVideo() {
  const formRegistration = useForm({
    initialValues: { title: "Frost punk", url: "https://youtube.com.." },
  });
  const [showForm, setShowForm] = React.useState(false);
  return (
    <StyledRegisterVideo>
      <button className="add-video" onClick={() => setShowForm(true)}>
        +
      </button>

      {showForm ? (
        <form
          onSubmit={(e) => {
            e.preventDefault();
            setShowForm(false);
            formRegistration.clearForm();
          }}
        >
          <div>
            <button type="button" className="close-modal" onClick={() => setShowForm(false)}>
              X
            </button>
            <input
              type="text"
              placeholder="Título do vídeo"
              name="title"
              value={formRegistration.values.title}
              onChange={formRegistration.handleChange}
            />
            <input
              type="text"
              placeholder="URL"
              name="url"
              value={formRegistration.values.title}
              onChange={formRegistration.handleChange}
            />
            <button type="submit">Cadastrar</button>
          </div>
        </form>
      ) : null}
    </StyledRegisterVideo>
  );
}
