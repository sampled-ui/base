import { useContext } from "react";

import { ToastContext } from "./context";
import { Toast } from "./ToastProvider";

export const useToast = () => {
  const context = useContext(ToastContext);
  if (!context) {
    throw new Error("useToast must be used within a ToastProvider");
  }
  return {
    toast: (toast: Omit<Toast, "id">) => {
      const id = crypto.randomUUID();
      context.createToast({ id, ...toast });
    },
  };
};
