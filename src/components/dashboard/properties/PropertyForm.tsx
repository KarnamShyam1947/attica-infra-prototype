import React, { useState } from 'react';
import { useFormik } from 'formik';
import { Property, PropertyTypeOptions } from '../../../types/Proerty';
import Input from '../../ui/Input';
import Select from '../../ui/Select';
import TextArea from '../../ui/TextArea';
import TagInput from '../../ui/TagInput';
import Button from '../../ui/Button';
import { Plus, Save, Trash2, X } from 'lucide-react';
import { propertySchema } from '../../../schema/PropertySchema';
import { addProperty } from '../../../services/PropertyService';
import LoadingSpinner from '../../ui/LoadingSpinner';
import { showAlert } from '../../../utils/Alerts';

interface PropertyFormProps {
  property?: Property;
}

const PropertyForm: React.FC<PropertyFormProps> = ({ property }) => {
  const [imageUploadProgress, setImageUploadProgress] = React.useState<number[]>([]);
  const [loading, setLoading] = useState(false);

  const formik = useFormik({
    initialValues: {
      title: property?.title || '',
      type: property?.type || '',
      price: property?.price || '',
      phone: property?.phone || '',
      email: property?.email || '',
      location: {
        city: property?.location?.city || '',
        area: property?.location?.area || '',
        pincode: property?.location?.pincode || '',
      },
      features: property?.features || [],
      imageUrls: property?.imageUrls?.length ? property.imageUrls : [''],
      description: property?.description || '',
    },
    validationSchema: propertySchema,
    onSubmit: async (values: any, { resetForm }) => {
      setLoading(true);
  
      const result = await addProperty(values);
      console.log(result);
      resetForm();
      setImageUploadProgress([]);
  
      setLoading(false);
    },
  });

  const normalizeError = (field: string) => {
    const keys = field.split('.');
    let error: any = formik.errors;
    let touched: any = formik.touched;

    for (const key of keys) {
      error = error?.[key];
      touched = touched?.[key];
    }

    return touched && typeof error === 'string' ? error : undefined;
  };

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>, index: number) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const formData = new FormData();
    formData.append('image', file);
    console.log(file);


    const newProgress = [...imageUploadProgress];
    newProgress[index] = 0;
    setImageUploadProgress(newProgress);

    const xhr = new XMLHttpRequest();
    xhr.open('POST', `http://localhost:3000/api/v1/upload/cloudinary`);

    xhr.upload.onprogress = (event) => {
      if (event.lengthComputable) {
        const percent = Math.floor((event.loaded / event.total) * 100);
        const updatedProgress = [...imageUploadProgress];
        updatedProgress[index] = percent;
        console.log(`${index}` + updatedProgress[index]);

        setImageUploadProgress(updatedProgress);
      }
    };

    xhr.onload = () => {
      if (xhr.status === 200) { 
        try {
          const response = JSON.parse(xhr.responseText);
          console.log(response);
          
          const imageUrl = response.imageUrl; 

          const updatedImages = [...formik.values.imageUrls];
          updatedImages[index] = imageUrl;
          formik.setFieldValue('imageUrls', updatedImages);
        } catch (error) {
          showAlert("Error", 'Error parsing response:'+ error, "error");
          console.error('Error parsing response:', error);
        }
      } else {
        showAlert("Error", 'Upload failed:' + xhr.responseText, "error");
        console.error('Upload failed:', xhr.responseText);
      }

      const updatedProgress = [...imageUploadProgress];
      updatedProgress[index] = -1;
      setImageUploadProgress(updatedProgress);
    };

    xhr.onerror = () => {
      console.error('Upload error');
      showAlert("Error", "Upload Error", "error");
      const resetProgress = [...imageUploadProgress];
      resetProgress[index] = -1;
      setImageUploadProgress(resetProgress);
    };

    xhr.send(formData);
  };

  const removeImage = (index: number) => {
    const newImages = [...formik.values.imageUrls];
    newImages.splice(index, 1);
    const newProgress = [...imageUploadProgress];
    newProgress.splice(index, 1);

    formik.setFieldValue('imageUrls', newImages.length ? newImages : ['']);
    setImageUploadProgress(newProgress);
  };

  const isUploading = imageUploadProgress.some(p => p >= 0 && p < 100);

  return (
    <>
      {loading && <LoadingSpinner text="Adding properties details to the database" />}
      <form onSubmit={formik.handleSubmit} className="space-y-6">
        {/* Property Details */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <Input
              label="Property Title"
              id="title"
              value={formik.values.title}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              placeholder="Enter property title"
              error={normalizeError('title')}
            />
            <Select
              label="Property Type"
              id="type"
              value={formik.values.type}
              onChange={(e) => formik.setFieldValue('type', e.target.value)}
              onBlur={formik.handleBlur}
              options={PropertyTypeOptions.map((option) => ({
                value: option,
                label: option.charAt(0).toUpperCase() + option.slice(1),
              }))}
              error={normalizeError('type')}
            />
            <Input
              label="Price"
              id="price"
              value={formik.values.price}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              placeholder="Enter price"
              error={normalizeError('price')}
            />
            
            <Input
              label="Email"
              id="email"
              value={formik.values.email}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              placeholder="Enter email"
              error={normalizeError('email')}
            />
          </div>
          <div>
              <Input
                label="City"
                id="location.city"
                value={formik.values.location.city}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                placeholder="Enter city"
                error={normalizeError('location.city')}
              />
              <Input
                label="Area"
                id="location.area"
                value={formik.values.location.area}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                placeholder="Enter area"
                error={normalizeError('location.area')}
              />
            <Input
              label="Pincode"
              id="location.pincode"
              value={formik.values.location.pincode}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              placeholder="Enter pincode"
              error={normalizeError('location.pincode')}
            />
            <Input
              label="Phone Number"
              id="phone"
              value={formik.values.phone}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              placeholder="Enter 10-digit phone number"
              error={normalizeError('phone')}
            />
          </div>
        </div>
        {/* Image Uploads */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Upload Property Images
          </label>
          {formik.values.imageUrls.map((img, index) => (
            <div key={index} className="mb-4 border p-3 rounded-md relative">
              <label
                htmlFor={`image-${index}`}
                className={`flex items-center justify-center px-4 py-2 border-2 border-dashed rounded-lg cursor-pointer transition ${imageUploadProgress[index] >= 0 && imageUploadProgress[index] < 100
                  ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                  : 'hover:bg-gray-50 border-gray-300'
                  }`}
              >
                <span className="text-sm truncate max-w-xs">
                  {img ? img.split('/').pop() : 'Click to upload or drag & drop'}
                </span>
                <input
                  id={`image-${index}`}
                  type="file"
                  accept="image/*"
                  className="hidden"
                  onChange={(e) => handleImageUpload(e, index)}
                  disabled={imageUploadProgress[index] >= 0 && imageUploadProgress[index] < 100}
                />
              </label>
              {img && (
                <div className="mt-2 text-sm text-gray-600">
                  <a
                    href={img}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 underline"
                  >
                    View Image
                  </a>
                </div>
              )}
              {formik.values.imageUrls.length > 1 && (
                <button
                  type="button"
                  onClick={() => removeImage(index)}
                  className="absolute top-2 right-2 text-red-500 hover:text-red-700"
                >
                  <Trash2 size={16} />
                </button>
              )}
              {imageUploadProgress[index] >= 0 && (
                <div className="w-full bg-gray-200 rounded-full h-2.5 mt-3">
                  <div
                    className="bg-blue-500 h-2.5 rounded-full transition-all duration-75"
                    style={{ width: `${imageUploadProgress[index]}%` }}
                  />
                </div>
              )}
            </div>
          ))}
          <button
            type="button"
            onClick={() => {
              formik.setFieldValue('imageUrls', [...formik.values.imageUrls, '']);
              setImageUploadProgress([...imageUploadProgress, -1]);
            }}
            disabled={isUploading}
            className={`flex items-center text-blue-600 text-sm mt-2 ${isUploading ? 'opacity-50 cursor-not-allowed' : 'hover:text-blue-800'
              }`}
          >
            <Plus className="mr-1" size={16} /> Add another image
          </button>
          {normalizeError('images') && (
            <p className="text-red-500 text-sm mt-1">{normalizeError('images')}</p>
          )}
        </div>
        {/* Features */}
        <div>
          <label className="block mb-2 text-sm font-medium text-gray-700">Features</label>
          <TagInput
            tags={formik.values.features}
            onChange={(tags) => formik.setFieldValue('features', tags)}
            placeholder="Type feature and press Enter"
            error={normalizeError('features')}
          />
          <p className="text-xs text-gray-500 mt-1">Press Enter to add a new feature</p>
        </div>
        {/* Description */}
        <TextArea
          label="Description"
          id="description"
          value={formik.values.description}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          placeholder="Enter property description"
          rows={4}
          error={normalizeError('description')}
        />
        {/* Actions */}
        <div className="flex justify-end space-x-4">
          <Button type="button" variant="outline" icon={X}>
            Cancel
          </Button>
          <Button type="submit" variant="primary" icon={Save} disabled={formik.isSubmitting}>
            {formik.isSubmitting
              ? property
                ? 'Updating...'
                : 'Submitting...'
              : property
                ? 'Update Property'
                : 'Add Property'}
          </Button>
        </div>
      </form>
    </>
  );
};

export default PropertyForm;
