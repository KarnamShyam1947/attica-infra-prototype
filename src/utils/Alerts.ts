import Swal, { SweetAlertIcon } from 'sweetalert2';

export const showAlert = (
    title: string,
    text: string,
    icon: SweetAlertIcon = 'success'
) => {
    Swal.fire({
        title,
        text,
        icon,
        confirmButtonText: 'OK'
    });
};

export const showConfirmation = async (
    title: string,
    text: string,
    icon: SweetAlertIcon = 'question',
    confirmButtonText?: string,
    cancelButtonText?: string,
): Promise<boolean> => {
    const result = await Swal.fire({
        title,
        text,
        icon,
        showCancelButton: true,
        confirmButtonText: confirmButtonText || 'Yes',
        cancelButtonText: cancelButtonText || 'No',
    });

    return result.isConfirmed;
};

/* 
import React from 'react';
import { showAlert, showConfirmation } from './utils/alerts';

const DeleteButton: React.FC = () => {
  const handleDelete = async () => {
    const confirmed = await showConfirmation(
      'Are you sure?',
      'This action cannot be undone.',
      'warning'
    );

    if (confirmed) {
      // perform delete logic here
      showAlert('Deleted!', 'The item was successfully deleted.', 'success');
    } else {
      showAlert('Cancelled', 'Your item is safe.', 'info');
    }
  };

  return <button onClick={handleDelete}>Delete</button>;
};

export default DeleteButton;

*/
