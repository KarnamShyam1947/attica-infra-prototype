import { Form, Formik } from 'formik';
import { Plus, Save, Trash2, X } from 'lucide-react';
import React, { useState } from 'react';
import { BuilderSchema } from '../../../schema/BuilderSchema';
import { Builder } from '../../../types/Builder';
import Button from '../../ui/Button';
import Input from '../../ui/Input';
import TextArea from '../../ui/TextArea';
import { addBuilder } from '../../../services/BuildersService';
import { showAlert } from '../../../utils/Alerts';

interface BuilderFormProps {
  builder?: Builder;
}

const BuilderForm: React.FC<BuilderFormProps> = ({ builder }) => {
  const [uploadProgress, setUploadProgress] = useState<any[]>([]);

  const initialValues = {
    name: builder?.name || '',
    imageUrls: builder?.imageUrls?.length ? builder.imageUrls : [''],
    description: builder?.description || '',
    experience: builder?.experience || '',
    phone: builder?.phone || '',
    city: builder?.city || '',
    area: builder?.area || '',
    email: builder?.email || '',
    pincode: builder?.pincode || '',
  };

  const handleFileChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    index: number,
    setFieldValue: (field: string, value: any) => void,
    values: any
  ) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const formData = new FormData();
    formData.append('image', file);

    const newProgress = [...uploadProgress];
    newProgress[index] = 0;
    setUploadProgress(newProgress);

    const xhr = new XMLHttpRequest();
    xhr.open('POST', `http://localhost:3000/api/v1/upload/cloudinary`);

    xhr.upload.onprogress = (event) => {
      if (event.lengthComputable) {
        const percent = Math.floor((event.loaded / event.total) * 100);
        const updatedProgress = [...uploadProgress];
        updatedProgress[index] = percent;
        setUploadProgress(updatedProgress);
      }
    };

    xhr.onload = () => {
      if (xhr.status === 200) {
        try {
          const response = JSON.parse(xhr.responseText);
          const imageUrl = response.imageUrl;

          const updatedImages = [...values.imageUrls];
          updatedImages[index] = imageUrl;
          setFieldValue('imageUrls', updatedImages);

          const finishedProgress = [...uploadProgress];
          finishedProgress[index] = 100;
          setUploadProgress(finishedProgress);

        } catch (error) {
          console.error("Parsing Error:", error);
          showAlert("Error", "Error parsing server response", "error");
          updateProgressOnError(index);
        }
      } else {
        showAlert("Error", "Upload failed: " + xhr.responseText, "error");
        updateProgressOnError(index);
      }
    };

    xhr.onerror = () => {
      showAlert("Error", "Network error during upload", "error");
      updateProgressOnError(index);
    };

    xhr.send(formData);
  };


  const updateProgressOnError = (index: number) => {
    const failedProgress = [...uploadProgress];
    failedProgress[index] = -1;
    setUploadProgress(failedProgress);
  };

  const addImageField = (imageUrls: string[], setFieldValue: any) => {
    setFieldValue('imageUrls', [...imageUrls, '']);
    setUploadProgress([...uploadProgress, -1]);
  };

  const removeImageField = (index: number, imageUrls: string[], setFieldValue: any) => {
    const newImageUrls = [...imageUrls];
    newImageUrls.splice(index, 1);

    const newProgress = [...uploadProgress];
    newProgress.splice(index, 1);

    setFieldValue('imageUrls', newImageUrls.length ? newImageUrls : ['']);
    setUploadProgress(newProgress.length ? newProgress : [-1]);
  };


  const isUploading = uploadProgress.some(p => p >= 0 && p < 100); // ✅ Exclude -1

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={BuilderSchema}
      onSubmit={async (values, { setSubmitting, resetForm }) => {
        await addBuilder(values);
        setSubmitting(false);
        setUploadProgress([]);
        showAlert("Success", "Builder successfully submitted!", "success");
        resetForm()
      }}
    >
      {({ errors, touched, handleChange, handleBlur, values, isSubmitting, setFieldValue }) => (
        <Form className="space-y-6">

          {/* Text Inputs */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Builder Name - full width on md and above */}
            <div className="md:col-span-2">
              <Input
                label="Builder Name"
                id="name"
                name="name"
                value={values.name}
                onChange={handleChange}
                onBlur={handleBlur}
                error={touched.name ? errors.name : undefined}
                placeholder="Enter builder name"
              />
            </div>

            {/* Left Column */}
            <div>
              <Input
                label="Email"
                id="email"
                name="email"
                value={values.email}
                onChange={handleChange}
                onBlur={handleBlur}
                error={touched.email ? errors.email : undefined}
                placeholder="Enter builder email"
              />

              <Input
                label="Experience (in years)"
                id="experience"
                name="experience"
                value={values.experience}
                onChange={handleChange}
                onBlur={handleBlur}
                error={touched.experience ? errors.experience : undefined}
                placeholder="Enter years of experience"
              />
              <Input
                label="Phone Number"
                id="phone"
                name="phone"
                value={values.phone}
                onChange={handleChange}
                onBlur={handleBlur}
                error={touched.phone ? errors.phone : undefined}
                placeholder="Enter 10-digit phone number"
              />
            </div>

            {/* Right Column */}
            <div>
              <Input
                label="City"
                id="city"
                name="city"
                value={values.city}
                onChange={handleChange}
                onBlur={handleBlur}
                error={touched.city ? errors.city : undefined}
                placeholder="Enter city"
              />
              <Input
                label="Area"
                id="area"
                name="area"
                value={values.area}
                onChange={handleChange}
                onBlur={handleBlur}
                error={touched.area ? errors.area : undefined}
                placeholder="Enter area"
              />
              <Input
                label="Pincode"
                id="pincode"
                name="pincode"
                value={values.pincode}
                onChange={handleChange}
                onBlur={handleBlur}
                error={touched.pincode ? errors.pincode : undefined}
                placeholder="Enter 6-digit pincode"
              />
            </div>
          </div>


          {/* Image Upload Section */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Upload Builder Images</label>

            {values.imageUrls.map((img: string, index: number) => {
              const progress = uploadProgress[index];
              console.log(index, " ", progress);
              
              const isUploading = progress >= 0 && progress < 100;
              const isSuccess = progress === 100;
              const isFailed = progress === -2; // explicitly set this for upload failures


              return (
                <div key={index} className="mb-4 border p-3 rounded-md relative">
                  <label
                    htmlFor={`image-${index}`}
                    className={`flex items-center justify-between px-4 py-2 border-2 border-dashed rounded-lg cursor-pointer transition
          ${isUploading ? 'bg-gray-100 text-gray-400 cursor-not-allowed' : 'hover:bg-gray-50 border-gray-300'}
        `}
                  >
                    <span className="text-sm truncate max-w-xs text-center">
                      {img ? img.split('/').pop() : 'Click to upload or drag & drop'}
                    </span>
                    <input
                      id={`image-${index}`}
                      type="file"
                      accept="image/*"
                      className="hidden"
                      onChange={(e) => handleFileChange(e, index, setFieldValue, values)}
                      disabled={isUploading}
                    />
                  </label>

                  <div className="mt-2 text-sm">
                    {(progress <= 100 && !img)  && (
                    
                        <div className="w-full bg-gray-200 rounded-full h-2.5 mt-1">
                          <div
                            className="bg-blue-500 h-2.5 rounded-full transition-all duration-75"
                            style={{ width: `${progress}%` }}
                          />
                        </div>
                      
                    )}

                    {isSuccess && img && (
                      <div className="text-green-600">
                        Upload complete — <a href={img} target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">View Image</a>
                      </div>
                    )}

                    {isFailed && (
                      <div className="text-red-600">Upload failed. Try again.</div>
                    )}
                  </div>

                  {values.imageUrls.length > 1 && (
                    <button
                      type="button"
                      onClick={() => removeImageField(index, values.imageUrls, setFieldValue)}
                      className="absolute top-2 right-2 text-red-500 hover:text-red-700"
                    >
                      <Trash2 size={16} />
                    </button>
                  )}
                </div>
              );
            })}


            <button
              type="button"
              onClick={() => addImageField(values.imageUrls, setFieldValue)}
              disabled={isUploading}
              className={`flex items-center text-blue-600 text-sm mt-2 ${isUploading ? 'opacity-50 cursor-not-allowed' : 'hover:text-blue-800'}`}
            >
              <Plus className="mr-1" size={16} /> Add another image
            </button>
          </div>

          {/* Description + Submit Buttons */}
          <TextArea
            label="Description"
            id="description"
            name="description"
            value={values.description}
            onChange={handleChange}
            onBlur={handleBlur}
            error={touched.description ? errors.description : undefined}
            placeholder="Enter builder description"
            rows={4}
          />

          <div className="flex justify-end space-x-4">
            <Button type="button" variant="outline" icon={X} disabled={isSubmitting}>Cancel</Button>
            <Button type="submit" variant="primary" icon={Save} disabled={isSubmitting || isUploading}>
              {isSubmitting ? builder ? 'Updating...' : 'Submitting...' : builder ? 'Update Builder' : 'Add Builder'}
            </Button>
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default BuilderForm;
