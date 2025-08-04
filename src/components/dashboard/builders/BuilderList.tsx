import React from 'react';
import { Builder } from '../../../types/Builder';
import BuilderCard from './BuilderCard';
import Pagination from '../../ui/Pagination';

interface BuilderListProps {
  builders: Builder[];
}

const BuilderList: React.FC<BuilderListProps> = ({ builders }) => {
  const [currentPage, setCurrentPage] = React.useState(1);
  const itemsPerPage = 6;
  const totalPages = Math.ceil(builders.length / itemsPerPage);
  
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentBuilders = builders.slice(startIndex, endIndex);

  if (builders.length === 0) {
    return (
      <div className="text-center py-12">
        <h3 className="text-lg font-medium text-gray-500">No builders found</h3>
        <p className="text-gray-400 mt-2">Add your first builder to get started.</p>
      </div>
    );
  }

  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {currentBuilders.map((builder) => (
          <BuilderCard
            key={builder.id}
            builder={builder}
          />
        ))}
      </div>

      {totalPages > 1 && (
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={setCurrentPage}
        />
      )}
    </div>
  );
};

export default BuilderList;