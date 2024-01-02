"use client";

import * as z from "zod";
import { useForm } from "react-hook-form";
import { useState } from "react";

import { useInfoModal } from "@/hooks/use-info-modal";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Modal } from "@/components/ui/modal";
import { Input } from "@/components/ui/input";
import { Button } from "../ui/button";

const formSchema = z.object({
  name: z.string().min(1),
});

export const StoreModal = () => {
  const infoModal = useInfoModal();

  const [loading, setLoading] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
    },
  });

//   const onSubmit = async (values: z.infer<typeof formSchema>) => {
//     try {
//       setLoading(true);

//       const response = await axios.post("/api/stores", values);

//       window.location.assign(`/${response.data.id}`);
//     } catch (error) {
//       alert("Something went wrong.");
//     } finally {
//       setLoading(false);
//     }
//   };

  return (
    <Modal
      title="Create store"
      description="Add a store to manage products and add categories"
      isOpen={infoModal.isOpen}
      onClose={infoModal.onClose}
    >
      <div>
        <div className="space-y-4 py-2 pb-4">
          {/* <Form {...form}> */}
            <div>
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                    <FormItem>
                      <FormLabel>Name</FormLabel>
                    <FormControl>
                      <Input
                        disabled={loading}
                        placeholder="E-Commerce"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <div className="pt-6 space-x-2 flex items-center justify-end w-full">
                <Button
                  variant="outline"
                  disabled={loading}
                  onClick={infoModal.onClose}
                >
                  Cancel
                </Button>
                <Button disabled={loading} type="submit">
                  Continue
                </Button>
              </div>
            </div>
          {/* </Form> */}
        </div>
      </div>
    </Modal>
  );
};
