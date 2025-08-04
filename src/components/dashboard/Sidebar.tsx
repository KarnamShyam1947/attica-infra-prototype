import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { LayoutDashboard, Home, Users, ChevronDown, ChevronRight, Plus, List, LogOut, ListTodoIcon } from 'lucide-react';

interface MenuItem {
  id: string;
  label: string;
  icon: React.ElementType;
  path: string;
  children?: MenuItem[];
}

interface SidebarProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
  isOpen: boolean;
  onClose: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ activeTab, isOpen, onClose }) => {
  const [expandedMenus, setExpandedMenus] = useState<string[]>([]);
  const navigate = useNavigate();

  const menuItems: MenuItem[] = [
    { 
      id: 'dashboard', 
      label: 'Dashboard', 
      icon: LayoutDashboard,
      path: '/dashboard'
    },
    { 
      id: 'logs', 
      label: 'Request', 
      icon: ListTodoIcon,
      path: '/requests'
    },
    {
      id: 'properties',
      label: 'Properties',
      icon: Home,
      path: '/dashboard/properties',
      children: [
        { id: 'properties-list', label: 'List Properties', icon: List, path: '/dashboard/properties' },
        { id: 'properties-add', label: 'Add Property', icon: Plus, path: '/dashboard/properties/add' },
      ],
    },
    {
      id: 'builders',
      label: 'Builders',
      icon: Users,
      path: '/dashboard/builders',
      children: [
        { id: 'builders-list', label: 'List Builders', icon: List, path: '/dashboard/builders' },
        { id: 'builders-add', label: 'Add Builder', icon: Plus, path: '/dashboard/builders/add' },
      ],
    },
  ];

  const toggleMenu = (menuId: string) => {
    setExpandedMenus((prev) =>
      prev.includes(menuId)
        ? prev.filter((id) => id !== menuId)
        : [...prev, menuId]
    );
  };

  const handleNavigation = (path: string, hasChildren: boolean, menuId: string) => {
    if (!hasChildren) {
      navigate(path);
      onClose();
    } else {
      toggleMenu(menuId);
    }
  };

  const renderMenuItem = (item: MenuItem, level = 0) => {
    const hasChildren = item.children && item.children.length > 0;
    const isExpanded = expandedMenus.includes(item.id);
    const Icon = item.icon;
    const isActive = activeTab === item.path;

    return (
      <div key={item.id}>
        <button
          className={`flex items-center w-full px-4 py-3 text-left rounded-md transition-colors ${
            isActive
              ? 'bg-blue-800 text-white'
              : 'text-blue-100 hover:bg-blue-800'
          }`}
          onClick={() => handleNavigation(item.path, hasChildren, item.id)}
          style={{ paddingLeft: `${level * 1 + 1}rem` }}
        >
          <Icon className="h-5 w-5 mr-3" />
          <span>{item.label}</span>
          {hasChildren && (
            <div className="ml-auto">
              {isExpanded ? (
                <ChevronDown className="h-4 w-4" />
              ) : (
                <ChevronRight className="h-4 w-4" />
              )}
            </div>
          )}
        </button>
        {hasChildren && isExpanded && (
          <div className="ml-4">
            {item.children.map((child) => renderMenuItem(child, level + 1))}
          </div>
        )}
      </div>
    );
  };

  return (
    <>
      <aside
        className={`fixed  inset-y-0 left-0 z-20 w-64 bg-blue-900 text-white transform transition-transform duration-300 ease-in-out ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="flex flex-col h-full">
          <div className="px-4 pt-8 pb-6">
            <div className="flex items-center">
              <Home className="h-8 w-8 text-white" />
              <span className="ml-2 text-xl font-bold">ConstructAdmin</span>
            </div>
          </div>

          <nav className="flex-1 px-2 pb-4 space-y-1 overflow-y-auto">
            {menuItems.map((item) => renderMenuItem(item))}
          </nav>

          <div className="px-2 pb-8">
            <button className="flex items-center w-full px-4 py-3 text-left text-blue-100 hover:bg-blue-800 rounded-md transition-colors">
              <LogOut className="h-5 w-5 mr-3" />
              <span>Logout</span>
            </button>
          </div>
        </div>
      </aside>

      {isOpen && (
        <div
          className="fixed inset-0 bg-gray-900 bg-opacity-50 z-10"
          onClick={onClose}
        ></div>
      )}
    </>
  );
};

export default Sidebar;