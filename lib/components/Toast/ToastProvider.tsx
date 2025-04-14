import { useEffect, useState } from "react";

import classNames from "classnames";

import { Variants } from "../../units";
import { Flex } from "../Flex";

import { ToastContext } from "./context";
import styles from "./styles.module.scss";

export interface Toast {
  id: string;
  message: string;
  type?: Omit<Variants, "primary" | "secondary" | "disabled">;
}

interface ToastProviderProps extends React.HTMLAttributes<HTMLDivElement> {
  verticalAlignment?: "top" | "bottom";
  horizontalAlignment?: "left" | "right" | "center";
}

export const ToastProvider: React.FC<ToastProviderProps> = ({
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
        style={{
          flexDirection:
            verticalAlignment === "top" ? "column" : "column-reverse",
        }}
      >
        {toasts.map((toast) => (
          <div
            key={toast.id}
            className={classNames(styles.toast, {
              [styles.success]: toast.type === "success",
              [styles.warning]: toast.type === "warning",
              [styles.danger]: toast.type === "danger",
            })}
          >
            {toast.message}
          </div>
        ))}
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
