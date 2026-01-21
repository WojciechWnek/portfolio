"use client";

import { useState } from "react";
import { Button } from "../ui/button";
import { Mail, MailCheck } from "lucide-react";
import { Tooltip, TooltipContent, TooltipTrigger } from "../ui/tooltip";

const CopyEmail = () => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    const text = "wownek@gmail.com";
    navigator.clipboard.writeText(text);
    setCopied(true);
  };

  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <Button onClick={handleCopy} variant={"toggle"} className="px-7 py-5">
          <div className="flex items-center gap-5">
            {copied ? <MailCheck /> : <Mail />}
            <p>wownek@gmail.com</p>
          </div>
        </Button>
      </TooltipTrigger>
      <TooltipContent>
        <p>Copy email</p>
      </TooltipContent>
    </Tooltip>
  );
};

export default CopyEmail;
