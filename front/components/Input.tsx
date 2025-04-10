import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input as UiInput } from "./ui/input";
import { Label } from "./ui/label";

interface Option {
  label: string;
  value: string;
}

interface InputProps {
  label: string;
  name: string;
  type?: "text" | "select";
  options?: Option[];
}

export default function Input({
  label,
  name,
  type = "text",
  options,
}: InputProps) {
  if (type === "select") {
    return (
      <div className="space-y-2">
        <Label htmlFor={name}>{label}</Label>
        <Select>
          <SelectTrigger>
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              {options?.map((option: Option) => (
                <SelectItem value={option.value}>{option.label}</SelectItem>
              ))}
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>
    );
  }
  return (
    <div className="space-y-2">
      <Label htmlFor={name}>{label}</Label>
      <UiInput type={type} name={name} />
    </div>
  );
}
