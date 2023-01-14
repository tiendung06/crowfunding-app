import React from "react";
import { useController } from "react-hook-form";

const TextArea = ({ control, name, children, ...rest }) => {
  const { field } = useController({
    control,
    name,
    defaultValue: "",
  });

  return (
    <textarea
      className="w-full px-6 py-4 text-sm font-medium bg-transparent border resize-none border-strock rounded-xl text-text1 dark:text-white placeholder:text-text4 dark:placeholder:text-text2 min-h-[140px] outline-none"
      {...rest}
      {...field}
    ></textarea>
  );
};

export default TextArea;
