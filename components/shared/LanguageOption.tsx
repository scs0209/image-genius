import { CheckIcon } from "lucide-react";
import { Label } from "../ui/label";
import { RadioGroupItem } from "../ui/radio-group";

type LanguageOptionType = {
  id: string;
  flag: string;
  language: string;
};

const LanguageOption = ({ id, flag, language }: LanguageOptionType) => (
  <div className="flex items-center gap-3">
    <RadioGroupItem className="peer sr-only" id={id} value={id} />
    <Label className="lang-label" htmlFor={id}>
      <div className="flex items-center gap-3">
        <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#f3f4f6] dark:bg-[#1f2937]">
          <span className="text-xl font-bold">{flag}</span>
        </div>
        <span className="font-medium">{language}</span>
      </div>
      <CheckIcon className="h-5 w-5 text-gray-900 dark:text-gray-50" />
    </Label>
  </div>
);

export default LanguageOption;
