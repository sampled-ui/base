import { createContext } from "react";

import { Toast } from "./ToastProvider";

export interface ToastContext {
  createToast: (toast: Toast) => void;
}

export const ToastContext = createContext<ToastContext | null>(null);