import * as yup from "yup";

export const flashcardSchema = yup.object({
  group: yup.string().min(5).max(40).required("Please enter a group name"),
  description: yup
    .string()
    .min(10)
    .max(5000)
    .required("Write something in description"),
});
