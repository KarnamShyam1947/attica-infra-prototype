import React, { useEffect, useState } from 'react';

export interface Contact {
    _id: string;
    name: string;
    email: string;
    phone: string;
    address: string;
    service: string;
    reason: string;
    timestamp: string; 
    createdAt?: string; 
    updatedAt?: string;
  }
  

const RequestPage: React.FC = () => {
  const [contacts, setContacts] = useState<Contact[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchContacts = async () => {
      try {
        const res = await fetch('http://localhost:3000/api/v1/logs');
        const data: Contact[] = await res.json();
        await new Promise(resolve => setTimeout(resolve, 2000));
        setContacts(data);
      } catch (error) {
        console.error('Failed to fetch contacts:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchContacts();
  }, []);

  return (
    <div className="p-6 overflow-x-auto">
      <h2 className="text-2xl font-bold mb-4">Contact Requests</h2>

      {loading ? (
        <div className="space-y-2">
          {[...Array(5)].map((_, i) => (
            <div key={i} className="animate-pulse h-10 bg-gray-200 rounded w-full"></div>
          ))}
        </div>
      ) : (
        <table className="min-w-full border border-gray-200 divide-y divide-gray-200 text-sm text-left">
          <thead className="bg-gray-100 text-gray-700 uppercase">
            <tr>
              <th className="p-3">Name</th>
              <th className="p-3">Email</th>
              <th className="p-3">Phone</th>
              <th className="p-3">Service</th>
              {/* <th className="p-3">Reason</th> */}
              <th className="p-3">Date</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {contacts.map((contact) => (
              <tr key={contact._id} className="hover:bg-gray-50">
                <td className="p-3">{contact.name}</td>
                <td className="p-3">{contact.email}</td>
                <td className="p-3">{contact.phone}</td>
                <td className="p-3">{contact.service}</td>
                {/* <td className="p-3">{contact.reason}</td> */}
                <td className="p-3 text-gray-500">
                  {new Date(contact.timestamp).toLocaleString()}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default RequestPage;
