import React, { useEffect, useCallback } from 'react';
import { Check, X, AlertTriangle } from 'lucide-react';

interface ToastProps {
  message: string;
  visible: boolean;
  onClose: () => void;
  type?: 'success' | 'error' | 'info' | 'warning';
  duration?: number;
}

const Toast: React.FC<ToastProps> = ({
  message,
  visible,
  onClose,
  type = 'success',
  duration = 3000,
}) => {
  const onCloseCallback = useCallback(() => {
    if (visible) {
      onClose();
    }
  }, [visible, onClose]);

  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (visible) {
      timer = setTimeout(onCloseCallback, duration);
    }
    return () => {
      clearTimeout(timer);
    };
  }, [visible, duration, onCloseCallback]);

  if (!visible) return null;

  const getBgColor = () => {
    switch (type) {
      case 'success':
        return 'bg-success';
      case 'error':
        return 'bg-error';
      case 'info':
        return 'bg-primary';
      case 'warning':
        return 'bg-warning';
      default:
        return 'bg-dark-bg';
    }
  };

  const getIcon = () => {
    switch (type) {
      case 'success':
        return <Check className="w-5 h-5" />;
      case 'error':
        return <X className="w-5 h-5" />;
      case 'warning':
        return <AlertTriangle className="w-5 h-5" />;
      default:
        return null;
    }
  };

  return (
    <div className="fixed bottom-5 left-1/2 transform -translate-x-1/2 z-50 animate-slide-up">
      <div className={`${getBgColor()} text-white py-2 px-4 rounded-lg shadow-md flex items-center`}>
        {getIcon() && <span className="mr-2">{getIcon()}</span>}
        <span>{message}</span>
        <button
          onClick={onClose}
          className="ml-4 p-1 rounded-full hover:bg-black/20 transition-colors"
        >
          <X className="w-3 h-3" />
        </button>
      </div>
    </div>
  );
};

export default Toast;