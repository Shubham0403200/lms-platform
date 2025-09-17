// custom.d.ts
declare namespace JSX {
    interface IntrinsicElements {
      "zapier-interfaces-chatbot-embed": React.DetailedHTMLProps<
        React.HTMLAttributes<HTMLElement>,
        HTMLElement
      > & {
        "is-popup"?: boolean | "true" | "false"; // Accept boolean or string values
        "chatbot-id"?: string;
      };
    }
  }
  