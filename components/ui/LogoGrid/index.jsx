import SectionWrapper from "../../SectionWrapper";

const companies = [
  "BanterAI - NYC based AI startup",
  "CodemateAI - Top 30 AI startups of 2024 (by Inc42), IIT K incubated",
  "Slashbase - OSS project with 1.3K+ stars",
  "Shram io - Productivity app startup serving top Indian early stage startups",
];

const LogoGrid = () => (
  <SectionWrapper>
    <div className="custom-screen">
      <h2 className="font-semibold text-xl text-gray-800 text-center mb-8">
        Companies that have hired from Us
      </h2>
      <div className="mt-8 flex justify-center">
        <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {companies.map((company, idx) => (
            <li
              key={idx}
              className="bg-white rounded-lg shadow-md p-6 text-center transition-all duration-300 hover:shadow-lg"
            >
              <p className="text-gray-700 font-medium">{company}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  </SectionWrapper>
);

export default LogoGrid;
