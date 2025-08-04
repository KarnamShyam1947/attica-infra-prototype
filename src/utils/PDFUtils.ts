import { jsPDF } from 'jspdf';

interface ContactFormValues {
  name: string;
  email: string;
  phone: string;
  address: string;
}

export const generatePDF = (contactDetails: ContactFormValues) => {
    const doc = new jsPDF();
    let yPos = 20;
    const margin = 20;
    const pageWidth = doc.internal.pageSize.width;
    const contentWidth = pageWidth - (2 * margin);
    const colWidth = contentWidth / 2;
    const lineHeight = 8;

    // Title
    doc.setFontSize(20);
    doc.setTextColor(0, 0, 0);
    doc.text('Construction Quote Details', margin, yPos);
    yPos += 20;

    // Contact Information
    doc.setFontSize(16);
    doc.setFillColor(220, 220, 220);
    doc.rect(margin, yPos - 5, contentWidth, 10, 'F');
    doc.text('Contact Information', margin, yPos);
    yPos += 15;

    doc.setFontSize(12);
    doc.text(`Name: ${contactDetails.name}`, margin, yPos);
    yPos += lineHeight;
    doc.text(`Email: ${contactDetails.email}`, margin, yPos);
    yPos += lineHeight;
    doc.text(`Phone: ${contactDetails.phone}`, margin, yPos);
    yPos += lineHeight;
    doc.text(`Address: ${contactDetails.address}`, margin, yPos);
    yPos += lineHeight * 2;

    // Specifications
    sections.forEach(section => {
      // Section Header
      if (yPos > 250) {
        doc.addPage();
        yPos = 20;
      }

      doc.setFontSize(16);
      doc.setFillColor(220, 220, 220);
      doc.rect(margin, yPos - 5, contentWidth, 10, 'F');
      doc.text(section.title, margin, yPos);
      yPos += 15;

      doc.setFontSize(12);
      section.fields.forEach(field => {
        if (yPos > 250) {
          doc.addPage();
          yPos = 20;
        }

        const value = quoteValues[field.name]?.trim() || field.defaultValue;

        // Field name in left column
        doc.text(field.label, margin, yPos);

        // Value in right column (with word wrap)
        const splitValue = doc.splitTextToSize(value, colWidth - 10);
        doc.text(splitValue, margin + colWidth, yPos);

        // Calculate height needed for this row
        const textHeight = Math.max(
          lineHeight,
          splitValue.length * lineHeight
        );

        yPos += textHeight + 5;
      });

      yPos += lineHeight;
    });

    doc.save(`construction_quote_${contactDetails.name}.pdf`);
  };