import type { Control } from "react-hook-form";
import { FormField, FormItem, FormLabel, FormControl, FormMessage } from "./ui/form";
import { Input } from "./ui/input";
import { PhoneInput } from "./ui/phone-input";

interface BaseProps {
    name: string;
    // biome-ignore lint/suspicious/noExplicitAny: <explanation>
    control: Control<any>;
    hoverCard?: React.ReactNode;
  }
  
  interface CustomProps extends BaseProps {
    label?: string;
    placeholder: string;
    readOnly?: boolean;
    type?: string;
  }

const CustomFormField = ({
    name,
    control,
    label,
    placeholder,
    readOnly = false,
    type,
    hoverCard,
  }: CustomProps) => {
    return (
      <FormField
        name={name}
        control={control}
        render={({ field }) => (
          <FormItem>
            {label && (
              <FormLabel className="inline-flex items-center gap-2">
                <span>{label}</span>
                {hoverCard && hoverCard}
              </FormLabel>
            )}
            <FormControl>
              {name === "presentorTel" ||
              name === "presentorFax" ||
              name === "companyFax" ||
              name === "companyTel" || name === "phone" ? (
                <PhoneInput
                  placeholder={placeholder}
                  defaultCountry="HK"
                  {...field}
                />
              ) : (
                <Input
                  placeholder={placeholder}
                  type={type}
                  readOnly={readOnly}
                  {...field}
                />
              )}
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
    );
  };
  
  export default CustomFormField;