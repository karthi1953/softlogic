import { studentData } from "../data/studentData";

const Profile = () => {
  const { profile } = studentData;

  return (
    <div className="space-y-6 flex justify-center items-center flex-col">
      <div>
        <h1 className="text-2xl font-bold text-gray-800">Student Profile</h1>
        <p className="text-gray-600">View your personal details, academic registration info, and technical skills.</p>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-sm border max-w-xl space-y-4">
        <div className="border-b pb-4">
          <h2 className="text-xl font-bold text-gray-800">{profile.name}</h2>
          <p className="text-sm text-gray-500">{profile.id} • {profile.department}</p>
        </div>

        <div className="grid grid-cols-2 gap-4 text-sm">
          <div><span className="text-gray-500">Year:</span> <strong className="text-gray-800">{profile.year}</strong></div>
          <div><span className="text-gray-500">Semester:</span> <strong className="text-gray-800">{profile.semester}</strong></div>
          <div><span className="text-gray-500">Email:</span> <strong className="text-gray-800">{profile.email}</strong></div>
          <div><span className="text-gray-500">Phone:</span> <strong className="text-gray-800">{profile.phone}</strong></div>
          <div><span className="text-gray-500">Location:</span> <strong className="text-gray-800">{profile.location}</strong></div>
        </div>

        <div className="pt-2">
          <p className="text-sm text-gray-500 mb-2">Skills</p>
          <div className="flex flex-wrap gap-2">
            {profile.skills.map((skill) => (
              <span key={skill} className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-xs font-medium">
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
export default Profile;