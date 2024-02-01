import Copy from "~icons/mdi/content-copy";
import LineMdCheckAll from "~icons/line-md/check-all";
import React from "react";

export interface CopyIconProps {
  copyString?: string;
  holdTime?: number;
}

export default function CopyIcon({
  copyString,
  holdTime = 1000 * 2,
}: CopyIconProps) {
  const [copied, setCopied] = React.useState(false);
  const onClickHandler = async () => {
    if (copied) return;
    try {
      setCopied(true);
      // await navigator.clipboard.writeText(copyString || "");
      const el = document.createElement("textarea");
      el.style.position = "absolute";
      el.style.left = "-9999px";
      el.style.top = "0";
      el.name = "temp-copy-textarea";
      el.value = copyString || "";
      document.body.appendChild(el);
      el.select();
      // @ts-ignore
      document.execCommand("copy");
      el.remove();
    } catch (error) {
      console.log("Error copying to clipboard", error);
    } finally {
      setTimeout(() => {
        setCopied(false);
      }, holdTime);
    }
  };
  return (
    <button onClick={onClickHandler}>
      {copied ? <LineMdCheckAll className="text-green-300" /> : <Copy />}
    </button>
  );
}
