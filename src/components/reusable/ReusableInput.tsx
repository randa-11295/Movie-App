import { ReusableInputProps } from "../../types/moviesTypes";

const ReusableInput = <T,>({ formik, name }: ReusableInputProps<T>) => {
  return (
    <div className="flex flex-col w-full">
      <input
        name={String(name)}
        type="text"
        placeholder="Search movies..."
        value={formik.values[name] as string}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        className={`p-2 rounded-lg bg-gray-800 text-gray-200 focus:outline-none focus:ring-2 ${
          formik.touched[name] && formik.errors[name]
            ? "focus:ring-red-500 border border-red-500"
            : "focus:ring-blue-500"
        }`}
      />
      {formik.touched[name] && formik.errors[name] && (
        <p className="text-red-400 text-sm mt-1">
          {typeof formik.errors[name] === "string"
            ? formik.errors[name]
            : "Something went wrong"}
        </p>
      )}
    </div>
  );
};

export default ReusableInput;
