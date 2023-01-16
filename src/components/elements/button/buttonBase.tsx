import clsx from "clsx";

export type ButtonBaseProps = {
  size?: "normal" | "large";
  variant?: "outlined" | "contained";
  color?: "lime" | "gray" | "red" | "green";

  // nodes
  children?: React.ReactNode;
  endAdornment?: React.ReactNode;
  startAdornment?: React.ReactNode;
};

export const buttonBaseClassNames = (
  params: Pick<ButtonBaseProps, "size" | "variant" | "color">
): string => {
  const defaults =
    "inline-flex items-center justify-center rounded-lg shadow-sm";

  const withSize = (() => {
    switch (params.size) {
      case "large":
        return "px-4 py-1.5 text-base leading-7";

      default:
        return "px-3 py-1.5 text-sm leading-6";
    }
  })();

  const withVariant = (() => {
    switch (params.variant) {
      case "contained": {
        const contained = "text-white shadow-sm ring-1";
        const colored = (() => {
          switch (params.color) {
            case "lime":
              return "bg-lime-600 ring-lime-600 hover:bg-lime-700 hover:ring-lime-700";

            case "green":
              return "bg-green-600 ring-green-600 hover:bg-green-700 hover:ring-green-700";

            case "red":
              return "bg-red-600 ring-red-600 hover:bg-red-700 hover:ring-red-700";

            default:
              return "bg-gray-600 ring-gray-600 hover:bg-gray-700 hover:ring-gray-700";
          }
        })();

        return clsx(contained, colored);
      }

      default: {
        const outlined = "ring-1";
        const colored = (() => {
          switch (params.color) {
            case "lime":
              return "text-lime-900 ring-lime-900/10 hover:ring-lime-900/20";

            case "green":
              return "text-green-900 ring-green-900/10 hover:ring-green-900/20";

            case "red":
              return "text-red-900 ring-red-900/10 hover:ring-red-900/20";

            default:
              return "text-gray-900 ring-gray-900/10 hover:ring-gray-900/20";
          }
        })();

        return clsx(outlined, colored);
      }
    }
  })();

  return clsx(defaults, withSize, withVariant);
};
