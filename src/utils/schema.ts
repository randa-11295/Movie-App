import * as Yup from "yup";

export const SearchSchema = Yup.object({
  search: Yup.string()
    .trim()
    .min(2, "Enter at least 2 characters")
    .required("Search is required"),
});