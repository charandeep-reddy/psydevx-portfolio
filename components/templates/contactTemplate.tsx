"use client";
import { InfoCard } from "../infoCard";
import { useForm } from "react-hook-form";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { useState } from "react";
import { Loader2Icon } from "lucide-react";

interface ContactConfig {
  title: string;
  sections: Array<{
    type: string;
    fields?: Array<{
      name: string;
      label: string;
      type: string;
      placeholder: string;
    }>;
    items?: Array<{
      title: string;
      value: string;
    }>;
  }>;
}

interface ContactTemplateProps {
  config: ContactConfig;
}

interface FormValues {
  [key: string]: string;
}

export const ContactTemplate = ({ config }: ContactTemplateProps) => {
  const [isLoading, setIsLoading] = useState(false);
  const form = useForm<FormValues>({
    defaultValues: {
      name: "",
      email: "",
      message: "",
    }
  });

  const onSubmit = async (data: FormValues) => {
    try {
      setIsLoading(true);
      await new Promise((resolve) => setTimeout(resolve, 1000));
      console.log(data);
      toast.success("Message sent successfully");
      form.reset();
    } catch (error) {
      toast.error("Failed to send message");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      {config.sections.map((section, sectionIndex) => {
        if (section.type === "form") {
          return (
            <div key={sectionIndex} className="flex flex-col gap-5">
              <Form {...form}>
                <form
                  onSubmit={form.handleSubmit(onSubmit)}
                  className="grid grid-cols-1 lg:grid-cols-2 gap-5 w-full"
                >
                  {section.fields?.map((field, fieldIndex) => (
                    <FormField
                      key={fieldIndex}
                      control={form.control}
                      name={field.name}
                      rules={{
                        required: `${field.label} is required`,
                      }}
                      render={({ field: formField }) => (
                        <FormItem
                          className={`${
                            field.type === "textarea"
                              ? "lg:col-span-2 col-span-1"
                              : ""
                          } flex flex-col gap-4`}
                        >
                          <FormLabel className="text-white font-semibold text-sm">
                            {field.label}
                          </FormLabel>
                          <FormControl>
                            {field.type === "textarea" ? (
                              <Textarea
                                placeholder={field.placeholder}
                                className="text-white w-full px-4 py-3 min-h-[100px] border-gray-700"
                                rows={5}
                                {...formField}
                              />
                            ) : (
                              <Input
                                type={field.type}
                                placeholder={field.placeholder}
                                className="text-white px-4 py-6 border-gray-700"
                                {...formField}
                              />
                            )}
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  ))}
                  <Button
                    type="submit"
                    variant="default"
                    className="mt-2 w-40 text-white bg-blue-500 hover:bg-blue-600"
                    disabled={isLoading}
                  >
                    {isLoading ? <Loader2Icon className="size-4 animate-spin" /> : "Send Message"}
                  </Button>
                </form>
              </Form>
            </div>
          );
        }

        if (section.type === "info") {
          return (
            <div key={sectionIndex} className="flex flex-col gap-4">
              {section.items?.map((item, itemIndex) => (
                <InfoCard
                  key={itemIndex}
                  title={item.title}
                  value={item.value}
                />
              ))}
            </div>
          );
        }

        return null;
      })}
    </>
  );
};
