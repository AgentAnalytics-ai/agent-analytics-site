interface Window {
  Calendly?: {
    initPopupWidget: (options: {
      url: string;
      text?: string;
      color?: string;
      textColor?: string;
      branding?: boolean;
    }) => void;
  };
  formStartTime?: number;
}

declare global {
  interface Window {
    Calendly?: {
      initPopupWidget: (options: {
        url: string;
        text?: string;
        color?: string;
        textColor?: string;
        branding?: boolean;
      }) => void;
    };
    formStartTime?: number;
  }
} 