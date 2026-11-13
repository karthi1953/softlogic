import { studentData } from "../data/studentData";

const Courses = () => {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-gray-800">Enrolled Courses</h1>
        <p className="text-gray-600">List of your registered subjects, instructors, and completion progress.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {studentData.courses.map((course) => (
          <div key={course.id} className="bg-white p-4 rounded-lg shadow-sm border flex justify-between items-center">
            <div>
              <span className="text-xs font-semibold bg-blue-100 text-blue-700 px-2 py-0.5 rounded">{course.id}</span>
              <h2 className="text-lg font-semibold text-gray-800 mt-1">{course.title}</h2>
              <p className="text-sm text-gray-500">{course.instructor} • {course.credits} Credits</p>
            </div>
            <div className="text-right">
              <span className="text-sm font-bold text-gray-700">{course.progress}</span>
              <p className="text-xs text-gray-400">Completed</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
export default Courses;