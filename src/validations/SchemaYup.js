import * as Yup from "yup";

export const schemaYup = Yup.object().shape({
  nombre: Yup.string()
    .required("El nombre es obligatorio")
    .min(2, "El nombre es muy corto"),
  edad: Yup.number()
    .typeError("La edad debe ser un número")
    .required("La edad es obligatoria")
    .min(3, "Edad inválida")
    .max(100, "Edad inválida"),
  sexo: Yup.string()
    .oneOf(["Masculino", "Femenino", "Otro", ""], "Opción inválida")
    .notRequired(),
  email: Yup.string()
    .email("Formato de email inválido")
    .required("El email es obligatorio"),
  imagen: Yup.string()
    .notRequired()
  .trim()
  .test('is-url-or-empty', 'Debe ser una URL válida o dejar vacío', value => {
    if (!value) return true; // Si está vacío, pasa
    // Validar URL
    const urlPattern = /^(https?:\/\/.*)/i;
    if (!urlPattern.test(value)) return false;
    // Validar extensión
    return /\.(jpg|jpeg|png|webp)$/i.test(value);
  })
});
