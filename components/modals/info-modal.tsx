"use client";

import { useState } from "react";

import { useInfoModal } from "@/hooks/use-info-modal";
import { Modal } from "@/components/ui/modal";

export const StoreModal = () => {
  const infoModal = useInfoModal();

  const [loading, setLoading] = useState(false);

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
            <div>
            </div>
        </div>
      </div>
    </Modal>
  );
};
