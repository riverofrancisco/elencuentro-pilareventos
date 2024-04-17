import React, { useState } from "react";
import { Box } from "@mui/material";
import { addPicture } from "../../middlewares/pictures/crud";

// Interfaz para el objeto de descripción en varios idiomas

// Interfaz para el objeto completo
interface FormData {
  description: string;
  index: number;
  loading: "lazy" | "eager" | undefined;
  original: string;
  originalTitle: string;
  thumbnail: string;
}

const FormComponent: React.FC = () => {
  // Estado para almacenar los datos del formulario
  const [formData, setFormData] = useState<FormData>({
    description: "",
    index: 0,
    loading: "lazy",
    original: "",
    originalTitle: "",
    thumbnail: "",
  });

  // Manejar el cambio en los otros campos del formulario
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: name === "index" ? parseInt(value) : value,
    }));
  };

  // Manejar el envío del formulario
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(formData)
    addPicture(formData);
    // Aquí puedes enviar formData a tu API o realizar otras acciones
  };

  return (
    <Box
      bgcolor={"white"}
      position="fixed"
      zIndex={100000000000000000}
      m="15%"
      p={4}
      borderRadius={3}
      display="flex"
      flexDirection="column"
      
      >
      <h3>Add Picture Form</h3>
      <form onSubmit={handleSubmit}>
      <Box
     
    
      zIndex={100000000000000000}
   
      
      borderRadius={3}
      display="flex"
      flexDirection="column"
      >
        <label>
          Description:
          <input
            type="text"
            name="description"
            value={formData.description}
            onChange={handleChange}
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
          <select
            name="loading"
            value={formData.loading}
            onChange={handleChange}
          >
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
          Original Title:
          <input
            type="text"
            name="originalTitle"
            value={formData.originalTitle}
            onChange={handleChange}
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
        </Box>
      </form>
    </Box>
  );
};

export default FormComponent;
