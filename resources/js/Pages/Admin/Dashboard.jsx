import Title from '@/Components/Dashboard/Title';
import AdminLayout from '@/Layouts/AdminLayout';
import { FiSend } from 'react-icons/fi';

const Dashboard = () => {
  return (
    <AdminLayout>
      <div className="flex flex-col flex-1 p-5 bg-white rounded-2xl dark:bg-gray-600 dark:text-gray-300">
        <div className="flex items-center justify-between">
          <Title>Dashboard</Title>
          <FiSend className="w-8 h-8 p-2 text-gray-300 bg-gray-500 rounded-full" />
        </div>
        <h1 className="text-2xl font-bold">
          $600,000 <span className="text-xl font-medium">(USD)</span>
        </h1>
        <span>on last month</span>
      </div>
    </AdminLayout>
  );
};

export default Dashboard;
