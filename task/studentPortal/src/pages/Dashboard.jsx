import { studentData } from "../data/studentData";

const Dashboard = () => {
  const { profile, courses, assignments } = studentData;
  const pendingCount = assignments.filter(a => a.status === "Pending").length;

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-gray-800">Student Dashboard</h1>
        <p className="text-gray-600">Overview of your academic performance and current semester status.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="bg-white p-4 rounded-lg shadow-sm border">
          <p className="text-sm text-gray-500">Enrolled Courses</p>
          <p className="text-2xl font-bold text-blue-600">{courses.length}</p>
        </div>
        <div className="bg-white p-4 rounded-lg shadow-sm border">
          <p className="text-sm text-gray-500">Pending Assignments</p>
          <p className="text-2xl font-bold text-amber-600">{pendingCount}</p>
        </div>
        <div className="bg-white p-4 rounded-lg shadow-sm border">
          <p className="text-sm text-gray-500">Current CGPA</p>
          <p className="text-2xl font-bold text-green-600">{profile.cgpa}</p>
        </div>
        <div className="bg-white p-4 rounded-lg shadow-sm border">
          <p className="text-sm text-gray-500">Attendance</p>
          <p className="text-2xl font-bold text-purple-600">{profile.attendance}</p>
        </div>
      </div>
    </div>
  );
}
export default Dashboard;