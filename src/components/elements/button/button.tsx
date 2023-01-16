import clsx from "clsx";
import React from "react";

import type { ButtonBaseProps } from "./buttonBase";
import { buttonBaseClassNames } from "./buttonBase";

export type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> &
  ButtonBaseProps;

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (props, ref) => {
    const {
      size,
      color,
      variant,
      children,
      endAdornment,
      startAdornment,
      ...rest
    } = props;

    return (
      <button
        {...rest}
        ref={ref}
        className={clsx(
          rest.className,
          buttonBaseClassNames({ color, variant, size })
        )}
      >
        {startAdornment}
        {children}
        {endAdornment}
      </button>
    );
  }
);

Button.displayName = "Button";
