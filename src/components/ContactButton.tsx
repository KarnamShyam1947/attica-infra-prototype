import React, { useState } from 'react';
import ContactModal from './ContactModal';

interface ContactButtonProps {
  buttonText?: string;
  buttonClassName?: string;
  modalTitle?: string;
  submitButtonText?: string;
  additionalInfo?: any;
  onSubmit: (formData: any) => void;
}

const ContactButton: React.FC<ContactButtonProps> = ({
  buttonText = 'Contact Us',
  buttonClassName = 'bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 transition-colors',
  modalTitle,
  submitButtonText,
  additionalInfo = {},
  onSubmit
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleSubmit = (formData: any) => {
    onSubmit(formData);
    setIsModalOpen(false);
  };

  return (
    <>
      <button
        onClick={() => setIsModalOpen(true)}
        className={buttonClassName}
      >
        {buttonText}
      </button>

      <ContactModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSubmit={handleSubmit}
        title={modalTitle}
        additionalInfo={additionalInfo}
        submitButtonText={submitButtonText}
      />
    </>
  );
};

export default ContactButton;