import { Button } from "@/components/ui/button";
import {
  DialogTrigger,
  DialogTitle,
  DialogHeader,
  DialogFooter,
  DialogContent,
  Dialog,
} from "@/components/ui/dialog";
import { RadioGroup } from "@/components/ui/radio-group";
import { langOption } from "@/constants";
import LanguageOption from "./LanguageOption";
import { LanguagesIcon } from "lucide-react";

interface LanguageModalProps {
  onChange: (value: string) => void;
}

const LanguageModal = ({ onChange }: LanguageModalProps) => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
          className="fixed bottom-6 right-6 h-12 w-12 rounded-full bg-gray-900 text-gray-50 shadow-sm transition-all hover:scale-105 hover:shadow-md dark:bg-gray-50 dark:text-gray-900"
          size="icon"
          variant="outline"
        >
          <LanguagesIcon className="cursor-pointer" />
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Select Language</DialogTitle>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <RadioGroup
            className="grid gap-2"
            defaultValue="en"
            onValueChange={onChange}
          >
            {langOption.map((lang) => (
              <LanguageOption
                key={lang.id}
                id={lang.id}
                flag={lang.flag}
                language={lang.language}
              />
            ))}
          </RadioGroup>
        </div>
        <DialogFooter>
          <div>
            <Button variant="outline">Close</Button>
          </div>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default LanguageModal;
