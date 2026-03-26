"use client";
import { useEffect, useMemo } from "react";
import Script from "next/script";

declare global {
  interface Window {
    CreateWhatsappChatWidget?: (options: Record<string, unknown>) => void;
  }
}

const WhatsappChatWidget = () => {
  const options = useMemo(
    () => ({
      enabled: true,
      chatButtonSetting: {
        backgroundColor: "#1FAD33",
        ctaText: "",
        borderRadius: "25",
        marginLeft: "0",
        marginRight: "20",
        marginBottom: "20",
        ctaIconWATI: false,
        position: "right",
      },
      brandSetting: {
        brandName: "TCIS Mangalore",
        brandSubTitle: "The Cambridge International School",
        brandImg:
          "https://apply.tcismangalore.org/images/ogImage/ogImage.png",
        welcomeText: "Hi there!\nHow can I help you?",
        messageText: "Hi, I'd like to enquire about admissions at The Cambridge International School. Could you please assist me with the details?",
        backgroundColor: "#00e785",
        ctaText: "Chat with us",
        borderRadius: "25",
        autoShow: false,
        phoneNumber: "+919686357711",
      },
    }),
    []
  );

  useEffect(() => {
    if (typeof window !== "undefined" && window.CreateWhatsappChatWidget) {
      window.CreateWhatsappChatWidget(options);
    }
  }, [options]);

  return (
    <Script
      src="https://wati-integration-prod-service.clare.ai/v2/watiWidget.js?50756"
      strategy="lazyOnload"
      onLoad={() => {
        if (typeof window !== "undefined" && window.CreateWhatsappChatWidget) {
          window.CreateWhatsappChatWidget(options);
        }
      }}
    />
  );
};

export default WhatsappChatWidget;
