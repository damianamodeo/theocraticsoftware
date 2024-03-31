import {
  Select as Sel,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '../source/select';

export function Select({
  placeholder,
  options,
  onValueChange,
}: {
  placeholder: string;
  options: { value: any; label: string | React.ReactNode }[];
  onValueChange: (value: string) => void;
}) {
  return (
    <Sel onValueChange={onValueChange}>
      <SelectTrigger className={`w-[280px]`}>
        <SelectValue placeholder={placeholder} />
      </SelectTrigger>
      <SelectContent>
        {options.map((option) => {
          return (
            <SelectItem value={option.value} key={option.value}>
              {option.label}
            </SelectItem>
          );
        })}
      </SelectContent>
    </Sel>
  );
}
