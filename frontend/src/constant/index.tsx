import { TName } from "@/types";

export const formatCategoryName = (name: TName) => {
  const splitName =
    name.replace(/([a-z])([A-Z])/g, "$1 $2").match(/[A-Za-z][a-z]*/g) || [];

  const formattedName = splitName
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
  return formattedName;
};

export const formatCategoryNameForward = (name: TName) => {
  let formattedName = name.toLowerCase();
  formattedName = formattedName.replace(/\s+/g, "");
  return formattedName;
};
