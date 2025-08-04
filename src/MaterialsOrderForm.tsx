import React, { useState } from "react";
import { FormikErrors, useFormik } from "formik";
import * as Yup from "yup";
import LetsConnect from "./components/ui/LetsConnect";
import { showAlert } from "./utils/Alerts";
import LoadingSpinner from "./components/ui/LoadingSpinner";
import { CheckCircle } from "lucide-react";
import UploadProgressBar from "./components/ui/UploadProgressBar";

const materialsData = [
  {
    section: "Cement & Concrete Products",
    items: [
      {
        material: "Ordinary Portland Cement(OPC)",
        grade: "43 / 53 Grade",
        unit: "Bag (50kg)",
        minQty: 10,
        brand: "UltraTech, ACC, Dalmia",
        isFileRequired: false,
        allowedFileTypes: ["application/pdf", "application/msword", "application/vnd.openxmlformats-officedocument.wordprocessingml.document", "image/jpeg", "image/png", "image/gif", "image/webp"] // PDF, DOC, DOCX, JPG, PNG, GIF, WEBP
      },
      {
        material: "Portland Pozzolana Cement(PPC)",
        grade: "ISI Marked",
        unit: "Bag (50kg)",
        minQty: 10,
        brand: "JK Cement, Ambuja, Ramco",
        isFileRequired: false,
        allowedFileTypes: ["application/pdf", "application/msword", "application/vnd.openxmlformats-officedocument.wordprocessingml.document", "image/jpeg", "image/png", "image/gif", "image/webp"] // PDF, DOC, DOCX, JPG, PNG, GIF, WEBP
      },
      {
        material: "Ready Mix Concrete (RMC)",
        grade: "M20 to M50",
        unit: "m³",
        minQty: 5,
        brand: "UltraTech, ACC, Local Plants",
        isFileRequired: true,
        allowedFileTypes: ["application/pdf", "application/msword", "application/vnd.openxmlformats-officedocument.wordprocessingml.document", "image/jpeg", "image/png", "image/gif", "image/webp"] // PDF, DOC, DOCX, JPG, PNG, GIF, WEBP
      },
      {
        material: "Concrete Blocks",
        grade: "Hollow/Solid",
        unit: "Piece",
        minQty: 500,
        brand: "Siporex, Aerocon, Local",
        isFileRequired: false,
        allowedFileTypes: ["application/pdf", "application/msword", "application/vnd.openxmlformats-officedocument.wordprocessingml.document", "image/jpeg", "image/png", "image/gif", "image/webp"] // PDF, DOC, DOCX, JPG, PNG, GIF, WEBP
      }
    ]
  },
  {
    section: "Bricks & Blocks",
    items: [
      {
        material: "Red Clay Bricks",
        grade: "Standard Size",
        unit: "1000 pcs",
        minQty: 1000,
        brand: "Local Kilns",
        isFileRequired: false,
        allowedFileTypes: ["application/pdf", "application/msword", "application/vnd.openxmlformats-officedocument.wordprocessingml.document", "image/jpeg", "image/png", "image/gif", "image/webp"] // PDF, DOC, DOCX, JPG, PNG, GIF, WEBP
      },
      {
        material: "Fly Ash Bricks",
        grade: "230x110x75 mm",
        unit: "1000 pcs",
        minQty: 1000,
        brand: "EcoBricks, Magicrete",
        isFileRequired: false,
        allowedFileTypes: ["application/pdf", "application/msword", "application/vnd.openxmlformats-officedocument.wordprocessingml.document", "image/jpeg", "image/png", "image/gif", "image/webp"] // PDF, DOC, DOCX, JPG, PNG, GIF, WEBP
      },
      {
        material: "AAC Blocks",
        grade: "600x200x200 mm",
        unit: "Piece",
        minQty: 500,
        brand: "Siporex, Magicrete, Birla",
        isFileRequired: false,
        allowedFileTypes: ["application/pdf", "application/msword", "application/vnd.openxmlformats-officedocument.wordprocessingml.document", "image/jpeg", "image/png", "image/gif", "image/webp"] // PDF, DOC, DOCX, JPG, PNG, GIF, WEBP
      }
    ]
  },
  {
    section: "Steel & Reinforcement",
    items: [
      {
        material: "TMT Bars",
        grade: "Fe500/Fe550",
        unit: "kg",
        minQty: 1000,
        brand: "Tata Tiscon, JSW, Kamdhenu",
        isFileRequired: true,
        allowedFileTypes: ["application/pdf", "application/msword", "application/vnd.openxmlformats-officedocument.wordprocessingml.document", "image/jpeg", "image/png", "image/gif", "image/webp"] // PDF, DOC, DOCX, JPG, PNG, GIF, WEBP
      },
      {
        material: "Binding Wire",
        grade: "20 Gauge",
        unit: "kg",
        minQty: 50,
        brand: "Tata Wiron, ISI Local",
        isFileRequired: false,
        allowedFileTypes: ["application/pdf", "application/msword", "application/vnd.openxmlformats-officedocument.wordprocessingml.document", "image/jpeg", "image/png", "image/gif", "image/webp"] // PDF, DOC, DOCX, JPG, PNG, GIF, WEBP
      },
      {
        material: "Structural Steel",
        grade: "ISMB, ISA, etc.",
        unit: "kg",
        minQty: 500,
        brand: "SAIL, Jindal, Essar",
        isFileRequired: true,
        allowedFileTypes: ["application/pdf", "application/msword", "application/vnd.openxmlformats-officedocument.wordprocessingml.document", "image/jpeg", "image/png", "image/gif", "image/webp"] // PDF, DOC, DOCX, JPG, PNG, GIF, WEBP
      }
    ]
  },
  {
    section: "Sand & Aggregates",
    items: [
      {
        material: "River Sand",
        grade: "Washed/Unwashed",
        unit: "Ton",
        minQty: 10,
        brand: "Natural River",
        isFileRequired: false,
        allowedFileTypes: ["application/pdf", "application/msword", "application/vnd.openxmlformats-officedocument.wordprocessingml.document", "image/jpeg", "image/png", "image/gif", "image/webp"] // PDF, DOC, DOCX, JPG, PNG, GIF, WEBP
      },
      {
        material: "M Sand",
        grade: "Manufactured",
        unit: "Ton",
        minQty: 10,
        brand: "Robo, MSand India",
        isFileRequired: false,
        allowedFileTypes: ["application/pdf", "application/msword", "application/vnd.openxmlformats-officedocument.wordprocessingml.document", "image/jpeg", "image/png", "image/gif", "image/webp"] // PDF, DOC, DOCX, JPG, PNG, GIF, WEBP
      },
      {
        material: "Coarse Aggregate",
        grade: "20mm / 40mm",
        unit: "Ton",
        minQty: 10,
        brand: "Blue Metal",
        isFileRequired: false,
        allowedFileTypes: ["application/pdf", "application/msword", "application/vnd.openxmlformats-officedocument.wordprocessingml.document", "image/jpeg", "image/png", "image/gif", "image/webp"] // PDF, DOC, DOCX, JPG, PNG, GIF, WEBP
      },
      {
        material: "Fine Aggregate",
        grade: "Dust/Fine Sand",
        unit: "Ton",
        minQty: 10,
        brand: "Local Crushers",
        isFileRequired: false,
        allowedFileTypes: ["application/pdf", "application/msword", "application/vnd.openxmlformats-officedocument.wordprocessingml.document", "image/jpeg", "image/png", "image/gif", "image/webp"] // PDF, DOC, DOCX, JPG, PNG, GIF, WEBP
      }
    ]
  },
  {
    section: "Doors, Windows & Fixtures",
    items: [
      {
        material: "Wooden Doors",
        grade: "Teak / Salwood",
        unit: "Piece",
        minQty: 5,
        brand: "Greenply, Century",
        isFileRequired: true,
        allowedFileTypes: ["application/pdf", "application/msword", "application/vnd.openxmlformats-officedocument.wordprocessingml.document", "image/jpeg", "image/png", "image/gif", "image/webp"] // PDF, DOC, DOCX, JPG, PNG, GIF, WEBP
      },
      {
        material: "UPVC Windows",
        grade: "Custom Size",
        unit: "sq.ft",
        minQty: 50,
        brand: "Fenesta, Prominance, LG",
        isFileRequired: true,
        allowedFileTypes: ["application/pdf", "application/msword", "application/vnd.openxmlformats-officedocument.wordprocessingml.document", "image/jpeg", "image/png", "image/gif", "image/webp"] // PDF, DOC, DOCX, JPG, PNG, GIF, WEBP
      },
      {
        material: "Aluminum Frames",
        grade: "Powder Coated",
        unit: "sq.ft",
        minQty: 50,
        brand: "Jindal, Hindalco",
        isFileRequired: true,
        allowedFileTypes: ["application/pdf", "application/msword", "application/vnd.openxmlformats-officedocument.wordprocessingml.document", "image/jpeg", "image/png", "image/gif", "image/webp"] // PDF, DOC, DOCX, JPG, PNG, GIF, WEBP
      }
    ]
  },
  {
    section: "Plumbing & Electrical",
    items: [
      {
        material: "PVC Pipes",
        grade: "ISI Standard",
        unit: "Length",
        minQty: 50,
        brand: "Ashirvad, Supreme, Finolex",
        isFileRequired: false,
        allowedFileTypes: ["application/pdf", "application/msword", "application/vnd.openxmlformats-officedocument.wordprocessingml.document", "image/jpeg", "image/png", "image/gif", "image/webp"] // PDF, DOC, DOCX, JPG, PNG, GIF, WEBP
      },
      {
        material: "CP Fittings",
        grade: "Standard",
        unit: "Piece",
        minQty: 10,
        brand: "Jaquar, Hindware, Cera",
        isFileRequired: false,
        allowedFileTypes: ["application/pdf", "application/msword", "application/vnd.openxmlformats-officedocument.wordprocessingml.document", "image/jpeg", "image/png", "image/gif", "image/webp"] // PDF, DOC, DOCX, JPG, PNG, GIF, WEBP
      },
      {
        material: "Electrical Cables",
        grade: "House Wiring",
        unit: "Roll",
        minQty: 10,
        brand: "Polycab, Finolex, RR Kabel",
        isFileRequired: false,
        allowedFileTypes: ["application/pdf", "application/msword", "application/vnd.openxmlformats-officedocument.wordprocessingml.document", "image/jpeg", "image/png", "image/gif", "image/webp"] // PDF, DOC, DOCX, JPG, PNG, GIF, WEBP
      },
      {
        material: "Switches & Boards",
        grade: "Modular/Standard",
        unit: "Piece",
        minQty: 50,
        brand: "Anchor, GM, Legrand",
        isFileRequired: false,
        allowedFileTypes: ["application/pdf", "application/msword", "application/vnd.openxmlformats-officedocument.wordprocessingml.document", "image/jpeg", "image/png", "image/gif", "image/webp"] // PDF, DOC, DOCX, JPG, PNG, GIF, WEBP
      }
    ]
  },
  {
    section: "Finishing Materials",
    items: [
      {
        material: "Wall Putty",
        grade: "White Cement Base",
        unit: "Bag",
        minQty: 20,
        brand: "Birla White, JK",
        isFileRequired: false,
        allowedFileTypes: ["application/pdf", "application/msword", "application/vnd.openxmlformats-officedocument.wordprocessingml.document", "image/jpeg", "image/png", "image/gif", "image/webp"] // PDF, DOC, DOCX, JPG, PNG, GIF, WEBP
      },
      {
        material: "Paint",
        grade: "Interior/Exterior",
        unit: "Litre",
        minQty: 10,
        brand: "Asian Paints, Berger",
        isFileRequired: false,
        allowedFileTypes: ["application/pdf", "application/msword", "application/vnd.openxmlformats-officedocument.wordprocessingml.document", "image/jpeg", "image/png", "image/gif", "image/webp"] // PDF, DOC, DOCX, JPG, PNG, GIF, WEBP
      },
      {
        material: "Tiles",
        grade: "Vitrified/Ceramic",
        unit: "sq.ft",
        minQty: 100,
        brand: "Kajaria, Somany, Johnson",
        isFileRequired: true,
        allowedFileTypes: ["application/pdf", "application/msword", "application/vnd.openxmlformats-officedocument.wordprocessingml.document", "image/jpeg", "image/png", "image/gif", "image/webp"] // PDF, DOC, DOCX, JPG, PNG, GIF, WEBP
      },
      {
        material: "Granite/Marble",
        grade: "Polished",
        unit: "sq.ft",
        minQty: 100,
        brand: "Rajasthani, Local",
        isFileRequired: true,
        allowedFileTypes: ["application/pdf", "application/msword", "application/vnd.openxmlformats-officedocument.wordprocessingml.document", "image/jpeg", "image/png", "image/gif", "image/webp"] // PDF, DOC, DOCX, JPG, PNG, GIF, WEBP
      }
    ]
  },
  {
    section: "Waterproofing & Chemicals",
    items: [
      {
        material: "Waterproofing Liquid",
        grade: "Acrylic/Polymer",
        unit: "Litre",
        minQty: 20,
        brand: "Dr. Fixit, Asian Paints",
        isFileRequired: true,
        allowedFileTypes: ["application/pdf", "application/msword", "application/vnd.openxmlformats-officedocument.wordprocessingml.document", "image/jpeg", "image/png", "image/gif", "image/webp"] // PDF, DOC, DOCX, JPG, PNG, GIF, WEBP
      },
      {
        material: "Admixtures",
        grade: "Liquid/Powder",
        unit: "Litre/kg",
        minQty: 10,
        brand: "MYK Arment, Fosroc",
        isFileRequired: false,
        allowedFileTypes: ["application/pdf", "application/msword", "application/vnd.openxmlformats-officedocument.wordprocessingml.document", "image/jpeg", "image/png", "image/gif", "image/webp"] // PDF, DOC, DOCX, JPG, PNG, GIF, WEBP
      }
    ]
  },
  {
    section: "Construction Tools & Safety",
    items: [
      {
        material: "Helmets, Gloves",
        grade: "ISI Certified",
        unit: "Piece",
        minQty: 20,
        brand: "Karam, Udyogi",
        isFileRequired: false,
        allowedFileTypes: ["application/pdf", "application/msword", "application/vnd.openxmlformats-officedocument.wordprocessingml.document", "image/jpeg", "image/png", "image/gif", "image/webp"] // PDF, DOC, DOCX, JPG, PNG, GIF, WEBP
      },
      {
        material: "Wheel Barrows",
        grade: "Manual",
        unit: "Piece",
        minQty: 5,
        brand: "Local Fabricators",
        isFileRequired: false,
        allowedFileTypes: ["application/pdf", "application/msword", "application/vnd.openxmlformats-officedocument.wordprocessingml.document", "image/jpeg", "image/png", "image/gif", "image/webp"] // PDF, DOC, DOCX, JPG, PNG, GIF, WEBP
      },
      {
        material: "Ladders & Scaffolds",
        grade: "Steel/Aluminum",
        unit: "Piece",
        minQty: 5,
        brand: "Local Supply",
        isFileRequired: false,
        allowedFileTypes: ["application/pdf", "application/msword", "application/vnd.openxmlformats-officedocument.wordprocessingml.document", "image/jpeg", "image/png", "image/gif", "image/webp"] // PDF, DOC, DOCX, JPG, PNG, GIF, WEBP
      }
    ]
  }
];


const validationSchema = Yup.object().shape({
  materials: Yup.array().of(
    Yup.object().shape({
      checked: Yup.boolean(),
      quantity: Yup.number()
        .when("checked", {
          is: true,
          then: (schema) => schema.required("Required").test("minQty", function (value) {
            const { minQty } = this.parent;
            return value >= minQty || this.createError({ message: `Minimum quantity is ${minQty}` });
          })
        }),
      brand: Yup.string(),
      grade: Yup.string(),
      fileUrl: Yup.string().nullable()
    })
  )
});

const ConstructionMaterialsForm: React.FC = () => {

  const [isModelOpen, setIsModelOpen] = useState(false);
  const [loading, setLoading] = useState(false);

  const onSubmit = async (values: any) => {
    const groupedMaterials: any[] = [];
    let flatIndex = 0;
    setLoading(true);

    for (const section of materialsData) {
      const selectedItems = [];

      for (const item of section.items) {
        const formItem = values.materials[flatIndex];
        if (formItem.checked) {
          selectedItems.push({
            material: formItem.material,
            grade: formItem.grade,
            unit: formItem.unit,
            quantity: formItem.quantity,
            brand: formItem.brand,
            fileUrl: formItem.fileUrl || null
          });
        }
        flatIndex++;
      }

      if (selectedItems.length > 0) {
        groupedMaterials.push({
          section: section.section,
          items: selectedItems
        });
      }
    }

    console.log(JSON.stringify(groupedMaterials, null, 2));


    // await new Promise(resolve => setTimeout(resolve, 2000));
    setLoading(false);

    showAlert("Success", "YOur order details submitted successfully");
  };

  const formik = useFormik({
    initialValues: {
      materials: materialsData.flatMap(section =>
        section.items.map(item => ({
          checked: false,
          material: item.material,
          grade: item.grade,
          unit: item.unit,
          quantity: item.minQty,
          minQty: item.minQty,
          brand: item.brand,
          file: null,
          fileUrl: "",
          isFileRequired: item.isFileRequired,
          allowedFileTypes: item.allowedFileTypes || []
        }))
      )
    },
    validationSchema,
    validateOnBlur: true,
    validateOnChange: true,
    onSubmit
  });

  const handleSubmit = async (contactDetails: any) => {
    setLoading(true);

    const groupedMaterials: any[] = [];
    let flatIndex = 0;
    console.log(formik.errors);

    for (const section of materialsData) {
      const selectedItems = [];
      const values = formik.values;

      for (const item of section.items) {
        const formItem = values.materials[flatIndex];
        if (formItem.checked) {
          selectedItems.push({
            material: formItem.material,
            grade: formItem.grade,
            unit: formItem.unit,
            quantity: formItem.quantity,
            brand: formItem.brand,
            fileUrl: formItem.fileUrl || null
          });
        }
        flatIndex++;
      }

      if (selectedItems.length > 0) {
        groupedMaterials.push({
          section: section.section,
          items: selectedItems
        });
      }
    }

    const data = { groupedMaterials, contactDetails }
    console.log(JSON.stringify(data, null, 2));

    try {
      const res = await fetch(`http://localhost:3000/submit-material-order`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      const response = await res.json();
      console.log(response);

      if (response.error) {
        showAlert("Error", response.error, "error")
        return;
      }

      showAlert("success", 'Your material order request submitted successfully!', "success");
    } catch (e) {
      console.error(e);
    }
    finally {
      setLoading(false);
    }

  }

  const [uploadingIndex, setUploadingIndex] = useState<number | null>(null);
  const [uploadProgress, setUploadProgress] = useState<Record<number, number>>({});

  return (
    <>
      {loading && <LoadingSpinner text="submitting your order details..." />}

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 py-6 pb-8">

          {/* LEFT COLUMN */}
          <div className="bg-white  px-4 sm:px-6 lg:px-8 max-w-6xl">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Order Materials
            </h2>
            <p className="text-gray-700 mb-4 text-justify">
              Attica Infra Services, we specialize in delivering top-quality construction solutions at unbeatable wholesale prices. Whether you're developing residential, commercial, or industrial projects, we ensure superior craftsmanship, timely delivery, and exceptional value for your investment.
            </p>
            <ul className="space-y-3 text-justify">
              <li className="flex items-start gap-2">
                <span className="mt-1">
                  <CheckCircle className="text-green-600 w-4 h-4 sm:w-4 sm:h-4" />
                </span>
                <span>Best Price Guarantee</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1">
                  <CheckCircle className="text-green-600 w-4 h-4 sm:w-4 sm:h-4" />
                </span>
                <span>Trusted Wholesale Construction Partner</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1">
                  <CheckCircle className="text-green-600 w-4 h-4 sm:w-4 sm:h-4" />
                </span>
                <span>Superior Quality & Reliable Service</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1">
                  <CheckCircle className="text-green-600 w-4 h-4 sm:w-4 sm:h-4" />
                </span>
                <span>Tailored Solutions for Every Project. Build with confidence.</span>
              </li>
            </ul>



          </div>

          {/* RIGHT IMAGE */}
          <div className="relative h-[350px] w-full">
            <img
              src="./services/order-material.jpeg"
              alt="Construction Site"
              className="rounded-lg object-fit w-full h-full shadow-2xl"
            />
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <form onSubmit={formik.handleSubmit} className="p-4">
          {materialsData.map((section, sectionIndex) => (
            <div key={section.section} className="mb-6">
              <h2 className="text-xl font-bold text-blue-700 mb-2">{section.section}</h2>
              <table className="w-full table-auto border border-blue-200">
                <thead>
                  <tr className="bg-blue-100 text-blue-800">
                    <th className="p-2 border">Select</th>
                    <th className="p-2 border">Material</th>
                    <th className="p-2 border">Unit</th>
                    <th className="p-2 border">Grade</th>
                    <th className="p-2 border">Quantity</th>
                    <th className="p-2 border">Brand</th>
                    <th className="p-2 border">File Upload</th>
                  </tr>
                </thead>
                <tbody>
                  {section.items.map((item, index) => {
                    const globalIndex = materialsData.slice(0, sectionIndex).reduce((acc, curr) => acc + curr.items.length, 0) + index;
                    const formItem = formik.values.materials[globalIndex];
                    const error = formik.errors.materials?.[globalIndex] as FormikErrors<typeof formik.values.materials[number]> | undefined;
                    const touched = formik.touched.materials?.[globalIndex] as typeof formik.touched.materials[number] | undefined;
                    return (
                      <tr key={index} className="border">
                        <td className="p-2 border text-center">
                          <input
                            className="accent-blue-600"
                            type="checkbox"
                            name={`materials[${globalIndex}].checked`}
                            checked={formItem.checked}
                            onChange={formik.handleChange}
                          />
                        </td>
                        <td className="p-2 border">{item.material}</td>
                        <td className="p-2 border">{item.unit}</td>
                        <td className="p-2 border">
                          <input
                            type="text"
                            name={`materials[${globalIndex}].grade`}
                            value={formItem.grade}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            disabled={!formItem.checked}
                            className="border rounded p-1 w-full"
                          />
                        </td>
                        <td className="p-2 border">
                          <input
                            type="number"
                            name={`materials[${globalIndex}].quantity`}
                            value={formItem.quantity}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            disabled={!formItem.checked}
                            className={`border rounded p-1 w-full ${touched?.quantity && error?.quantity ? "border-red-500" : ""}`}
                          />
                          {touched?.quantity && error?.quantity && (
                            <div className="text-red-500 text-sm">{error.quantity}</div>
                          )}
                        </td>
                        <td className="p-2 border">
                          <input
                            type="text"
                            name={`materials[${globalIndex}].brand`}
                            value={formItem.brand}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            disabled={!formItem.checked}
                            className="border rounded p-1 w-full"
                          />
                        </td>

                        <td className="p-2 border">
                          <div className="flex flex-col">
                            <input
                              type="file"
                              name={`materials[${globalIndex}].file`}
                              accept={formItem.allowedFileTypes?.join(',')}
                              disabled={!formItem.checked}
                              onChange={async (e) => {
                                const file = e.currentTarget.files?.[0] || null;
                                const allowedTypes = formItem.allowedFileTypes;

                                if (!file) return;
                                if (!allowedTypes.includes(file.type)) {
                                  alert("Invalid file type. Only PDF allowed.");
                                  e.target.value = "";
                                  formik.setFieldValue(`materials[${globalIndex}].fileUrl`, "");
                                  return;
                                }

                                const formData = new FormData();
                                formData.append("image", file);
                                formData.append("folderName", "material-file-upload");

                                setUploadingIndex(globalIndex);
                                setUploadProgress(prev => ({ ...prev, [globalIndex]: 0 }));

                                const xhr = new XMLHttpRequest();
                                xhr.open("POST", `http://localhost:3000/api/v1/upload/`);

                                xhr.upload.onprogress = (event) => {
                                  if (event.lengthComputable) {
                                    const percentComplete = Math.round((event.loaded / event.total) * 100);
                                    setUploadProgress(prev => ({ ...prev, [globalIndex]: percentComplete }));
                                  }
                                };

                                xhr.onload = () => {
                                  setUploadingIndex(null);
                                  if (xhr.status === 200) {
                                    const response = JSON.parse(xhr.responseText);
                                    console.log(response);

                                    const url = response.url || `https://mock-file.com/${file.name}`;
                                    formik.setFieldValue(`materials[${globalIndex}].fileUrl`, url);
                                  } else {
                                    alert("Upload failed");
                                    formik.setFieldValue(`materials[${globalIndex}].fileUrl`, "");
                                  }
                                };

                                xhr.onerror = () => {
                                  setUploadingIndex(null);
                                  alert("Upload error");
                                  formik.setFieldValue(`materials[${globalIndex}].fileUrl`, "");
                                };

                                xhr.send(formData);
                              }}
                              className="w-full"
                            />

                            {uploadingIndex === globalIndex && (
                              <UploadProgressBar progress={uploadProgress[globalIndex]} />
                            )}

                            {formItem.fileUrl && !uploadingIndex && (
                              <div className="text-sm text-green-700 mt-1 truncate">
                                <a
                                  href={formItem.fileUrl}
                                  className="text-blue-600 underline"
                                  target="_blank"
                                  rel="noreferrer"
                                >
                                  View Uploaded File
                                </a>
                              </div>
                            )}
                          </div>
                        </td>

                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          ))}
          <div className="text-center">
            <button
              type="button"
              onClick={() => setIsModelOpen(true)}
              className="bg-blue-600 text-white px-4 py-2 rounded mt-4">Submit</button>
          </div>
        </form>
      </div>
      <LetsConnect
        isOpen={isModelOpen}
        onClose={() => { setIsModelOpen(false) }}
        onSubmit={handleSubmit}
      />
    </>
  );
};

export default ConstructionMaterialsForm;
