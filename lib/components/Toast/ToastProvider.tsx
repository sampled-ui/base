import { JSX, useEffect, useState } from "react";

import classNames from "classnames";

import { Variants } from "../../utils/units";
import { Flex } from "../Flex";

import { ToastContext } from "./context";
import styles from "./styles.module.scss";

import "../../theme/theme.css";
import "../../theme/variables.css";

export interface Toast {
  id: string;
  message: string;
  icon?: JSX.Element;
  type?: Omit<Variants, "primary" | "secondary" | "disabled">;
}

interface ToastProviderProps extends React.HTMLAttributes<HTMLDivElement> {
  icons?: {
    success?: JSX.Element;
    warning?: JSX.Element;
    danger?: JSX.Element;
    default?: JSX.Element;
  };
  verticalAlignment?: "top" | "bottom";
  horizontalAlignment?: "left" | "right" | "center";
}

export const ToastProvider: React.FC<ToastProviderProps> = ({
  icons,
  verticalAlignment = "top",
  horizontalAlignment = "center",
  children,
  ...restProps
}) => {
  const [toasts, setToasts] = useState<Toast[]>([]);
  const [_toastTimeouts, setToastTimeouts] = useState<
    ReturnType<typeof setTimeout>[]
  >([]);

  useEffect(() => {
    toasts.forEach((toast) => {
      const timeout = setTimeout(() => {
        setToasts((prevToasts) => prevToasts.filter((t) => t.id !== toast.id));
      }, 4000);

      setToastTimeouts((prevTimeouts) => [...prevTimeouts, timeout]);
    });
  }, [toasts]);

  const renderToasts = () => {
    return (
      <Flex
        gap="md"
        className={classNames(styles.list, {
          [styles.top]: verticalAlignment === "top",
          [styles.bottom]: verticalAlignment === "bottom",
          [styles.left]: horizontalAlignment === "left",
          [styles.right]: horizontalAlignment === "right",
          [styles.center]: horizontalAlignment === "center",
        })}
      >
        {toasts.map((toast) => {
          const defaultIcon = icons
            ? toast.type
              ? (icons as Record<string, JSX.Element>)[toast.type as string]
              : icons.default
            : null;
          return (
            <div
              key={toast.id}
              className={classNames(styles.toast, {
                [styles.success]: toast.type === "success",
                [styles.warning]: toast.type === "warning",
                [styles.danger]: toast.type === "danger",
              })}
            >
              <Flex gap="sm">
                {toast.icon ?? defaultIcon ?? null}
                {toast.message}
              </Flex>
            </div>
          );
        })}
      </Flex>
    );
  };

  const createToast = (toast: Toast) => {
    setToasts((prevToasts) => [...prevToasts, toast]);
  };

  return (
    <ToastContext.Provider value={{ createToast }} {...restProps}>
      {children}
      {renderToasts()}
    </ToastContext.Provider>
  );
};
