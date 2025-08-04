import React from 'react';
import { Property } from '../../types';
import PropertyForm from '../../components/dashboard/properties/PropertyForm';
import { Card, CardBody } from '../../components/ui/Card';

interface PropertyFormPageProps {
  property?: Property;
  isEditing?: boolean;
}

const PropertyFormPage: React.FC<PropertyFormPageProps> = ({
  property,
  isEditing = false,
}) => {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-6">
        {isEditing ? 'Edit Property' : 'Add New Property'}
      </h1>
      <Card>
        <CardBody>
          <PropertyForm
            property={property}
          />
        </CardBody>
      </Card>
    </div>
  );
};

export default PropertyFormPage;