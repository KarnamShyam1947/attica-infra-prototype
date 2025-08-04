import React, { useEffect, useState } from 'react';
import BuilderList from '../../components/dashboard/builders/BuilderList';
import Button from '../../components/ui/Button';
import LoadingSpinner from '../../components/ui/LoadingSpinner';
import { Plus } from 'lucide-react';
import { Builder } from '../../types/Builder';
import { fetchBuilders } from '../../services/BuildersService';

interface BuildersPageProps {
  builderSearch: {
    city: string;
    area: string;
    pincode: string;
  };
  setBuilderSearch: (search: { city: string; area: string; pincode: string }) => void;
  onAddNew: () => void;
}

const BuildersPage: React.FC<BuildersPageProps> = ({
  builderSearch,
  setBuilderSearch,
  onAddNew,
}) => {
  const [builders, setBuilders] = useState<Builder[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const loadBuilders = async () => {
      setLoading(true);
      const response = await fetchBuilders();
      if (response.success && response.builders) {
        setBuilders(response.builders);
      }
      setLoading(false);
    };

    loadBuilders();
  }, []);

  const filteredBuilders = builders.filter((builder) => {
    const matchesCity = builderSearch.city
      ? builder.city.toLowerCase().includes(builderSearch.city.toLowerCase())
      : true;

    const matchesArea = builderSearch.area
      ? builder.area.toLowerCase().includes(builderSearch.area.toLowerCase())
      : true;

    const matchesPincode = builderSearch.pincode
      ? builder.pincode.includes(builderSearch.pincode)
      : true;

    return matchesCity && matchesArea && matchesPincode;
  });

  return (
    <div>
      {loading ? (
        <LoadingSpinner text="Fetching Builders data..." />
      ) : (
        <>
          <div className="flex flex-col gap-6 mb-6">
            <div className="flex justify-between items-center">
              <h1 className="text-2xl font-bold">Builders</h1>
              <Button variant="primary" icon={Plus} onClick={onAddNew}>
                Add Builder
              </Button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <input
                type="text"
                placeholder="Search by city..."
                className="px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={builderSearch.city}
                onChange={(e) =>
                  setBuilderSearch({ ...builderSearch, city: e.target.value })
                }
              />

              <input
                type="text"
                placeholder="Search by area..."
                className="px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={builderSearch.area}
                onChange={(e) =>
                  setBuilderSearch({ ...builderSearch, area: e.target.value })
                }
              />

              <input
                type="text"
                placeholder="Search by pincode..."
                className="px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={builderSearch.pincode}
                onChange={(e) =>
                  setBuilderSearch({ ...builderSearch, pincode: e.target.value })
                }
              />
            </div>
          </div>

          <BuilderList builders={filteredBuilders} />
        </>
      )}
    </div>
  );
};

export default BuildersPage;
