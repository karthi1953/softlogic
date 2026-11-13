import { studentData } from "../data/studentData";

const Assignments = () => {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-gray-800">Course Assignments</h1>
        <p className="text-gray-600">Track upcoming deadlines, submission statuses, and evaluation scores.</p>
      </div>

      <div className="bg-white rounded-lg shadow-sm border overflow-hidden">
        <table className="w-full text-left border-collapse">
          <thead className="bg-gray-50 border-b text-sm text-gray-600">
            <tr>
              <th className="p-3">Assignment Title</th>
              <th className="p-3">Course</th>
              <th className="p-3">Due Date</th>
              <th className="p-3">Marks</th>
              <th className="p-3">Status</th>
            </tr>
          </thead>
          <tbody className="divide-y text-sm">
            {studentData.assignments.map((item) => (
              <tr key={item.id} className="hover:bg-gray-50">
                <td className="p-3 font-medium text-gray-800">{item.title}</td>
                <td className="p-3 text-gray-600">{item.course}</td>
                <td className="p-3 text-gray-600">{item.dueDate}</td>
                <td className="p-3 text-gray-600">{item.marks}</td>
                <td className="p-3">
                  <span className={`px-2 py-1 rounded text-xs font-medium ${
                    item.status === "Pending" ? "bg-amber-100 text-amber-700" :
                    item.status === "Submitted" ? "bg-blue-100 text-blue-700" :
                    "bg-green-100 text-green-700"
                  }`}>
                    {item.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
export default Assignments;