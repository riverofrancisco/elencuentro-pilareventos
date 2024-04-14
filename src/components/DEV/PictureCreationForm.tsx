import React, { useState } from "react";
import { Box } from "@mui/material";
import { addPicture } from "../../middlewares/pictures/crud";

// Interfaz para el objeto de descripción en varios idiomas
interface Languages {
  en: string;
  es: string;
}

// Interfaz para el objeto completo
interface FormData {
  description: Languages;
  index: number;
  loading: "lazy" | "eager" | undefined;
  original: string;
  originalTitle: Languages;
  thumbnail: string;
}

const FormComponent: React.FC = () => {
  // Estado para almacenar los datos del formulario
  const [formData, setFormData] = useState<FormData>({
    description: { en: "", es: "" },
    index: 0,
    loading: undefined,
    original: "",
    originalTitle: { en: "", es: "" },
    thumbnail: ""
  });

  // Manejar el cambio en los campos de descripción en varios idiomas
  const handleDescriptionChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      description: {
        ...prevFormData.description,
        [name]: value
      }
    }));
  };


  const handleTitleChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      originalTitle: {
        ...prevFormData.originalTitle,
        [name]: value
      }
    }));
  };
  // Manejar el cambio en los otros campos del formulario
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: name === "index" ? parseInt(value) : value
    }));
  };

  // Manejar el envío del formulario
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    addPicture(formData)
     // Aquí puedes enviar formData a tu API o realizar otras acciones
  };

  return (
    <Box bgcolor={"white"} position="fixed" zIndex={-11111111111111111111111} m="25%">

    
    <form onSubmit={handleSubmit}>
      <label>
        Description (en):
        <input
          type="text"
          name="en"
          value={formData.description.en}
          onChange={handleDescriptionChange}
        />
      </label>
      <label>
        Description (es):
        <input
          type="text"
          name="es"
          value={formData.description.es}
          onChange={handleDescriptionChange}
        />
      </label>
      <label>
        Index:
        <input
          type="number"
          name="index"
          value={formData.index}
          onChange={handleChange}
        />
      </label>
      <label>
        Loading:
        <select name="loading" value={formData.loading} onChange={handleChange}>
          <option value="lazy">Lazy</option>
          <option value="eager">Eager</option>
          <option value="">Undefined</option>
        </select>
      </label>
      <label>
        Original:
        <input
          type="text"
          name="original"
          value={formData.original}
          onChange={handleChange}
        />
      </label>
      <label>
        Original Title (en):
        <input
          type="text"
          name="en"
          value={formData.originalTitle.en}
          onChange={handleTitleChange}
        />
      </label>
      <label>
        Original Title (es):
        <input
          type="text"
          name="es"
          value={formData.originalTitle.es}
          onChange={handleTitleChange}
        />
      </label>
     
      <label>
        Thumbnail:
        <input
          type="text"
          name="thumbnail"
          value={formData.thumbnail}
          onChange={handleChange}
        />
      </label>
      <button type="submit">Submit</button>
    </form>
    </Box>
  );
};

export default FormComponent;
