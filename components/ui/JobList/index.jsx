const JobList = () => {
  const tableItems = [
    {
      position: "Senior Backend Developer",
      jobType: "Full-time",
      company: "Gramhal",
      salary: "₹12L - ₹20L / yr ",
      location: "Goa, India (Remote)",
      applyLink: "https://example.com",
    },
    {
      position: "Associate Backend Developer",
      jobType: "Full-time",
      company: "Gramhal",
      salary: "₹20L - ₹36L / yr",
      location: "Goa, India (Remote)",
      applyLink: "https://example.com",
    },
    {
      position: "Hardware Engineer",
      jobType: "Internship",
      company: "DevKit",
      salary: "₹8K - ₹15K / mo",
      location: "Faridabad, Haryana, India",
      applyLink: "https://example.com",
    },
    {
      position: "Android Developer",
      jobType: "Full-time",
      company: "Gramhal",
      salary: "₹20L - ₹36L / yr",
      location: "Goa, India (Remote)",
      applyLink: "https://example.com",
    },
  ];
  return (
    <div>
      <div className="max-w-screen-xl mx-auto px-4 md:px-8">
        <div className="max-w-lg">
          <h3 className="text-gray-800 text-xl font-bold sm:text-2xl">
            Job Board
          </h3>
          <p className="text-gray-600 mt-2">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </p>
        </div>
        <div className="mt-12 shadow-sm border rounded-lg overflow-x-auto">
          <table className="w-full table-auto text-sm text-left">
            <thead className="bg-gray-50 text-gray-600 font-medium border-b">
              <tr>
                <th className="py-3 px-6">Position</th>
                <th className="py-3 px-6">Job Type</th>
                <th className="py-3 px-6">Company</th>
                <th className="py-3 px-6">Salary</th>
                <th className="py-3 px-6">Location</th>
                <th className="py-3 px-6">Apply</th>
              </tr>
            </thead>
            <tbody className="text-gray-600 divide-y">
              {tableItems.map((item, idx) => (
                <tr key={idx}>
                  <td className="px-6 py-4 whitespace-nowrap">
                    {item.position}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    {item.jobType}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    {item.company}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">{item.salary}</td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    {item.location}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <a href={item.applyLink} target="_blank">
                      {" "}
                      <button className="px-4 py-2 text-white bg-indigo-600 rounded-full duration-150 hover:bg-indigo-500 active:bg-indigo-700">
                        Apply
                      </button>
                    </a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
export default JobList;
