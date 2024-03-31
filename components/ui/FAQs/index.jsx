import SectionWrapper from "../../SectionWrapper";

const faqsList = [
  {
    q: "What is Techkareer?",
    a: "Techkareer is a job seeker website that helps companies hire tech talent 10x faster by streamlining the sourcing, reviewing, and shortlisting process.",
  },
  {
    q: "How does Techkareer work?",
    a: "Techkareer leverages advanced algorithms and machine learning techniques to analyze job seeker profiles, projects, and experiences, and match them with relevant job openings. This saves companies a significant amount of time in sourcing and screening candidates.",
  },
  {
    q: "What kind of tech talent can I find on Techkareer?",
    a: "Techkareer hosts a diverse pool of tech talent, including full-stack developers, front-end developers, back-end developers, DevOps engineers, data scientists, machine learning engineers, and more.",
  },
  {
    q: "How does Techkareer ensure the quality of candidates?",
    a: "Techkareer thoroughly vets each candidate's profile, projects, and experiences to ensure they meet the highest standards. Additionally, candidates can showcase their skills through coding challenges and technical assessments.",
  },
  {
    q: "Can I search for candidates based on specific skills or technologies?",
    a: "Yes, Techkareer allows you to search for candidates based on their skills, technologies, years of experience, and other relevant criteria.",
  },
  {
    q: "How much does it cost to use Techkareer?",
    a: "Techkareer offers flexible pricing plans based on the number of hires and the level of support you require. Contact our sales team for more information on pricing.",
  },
  {
    q: "Can I view candidate profiles before hiring them?",
    a: "Absolutely. Techkareer provides access to detailed candidate profiles, including their work experience, projects, skills, and other relevant information.",
  },
  {
    q: "How long does it typically take to hire a candidate through Techkareer?",
    a: "Thanks to our streamlined process, most companies are able to hire qualified candidates within a matter of days or weeks, significantly faster than traditional hiring methods.",
  },
];

const FAQs = () => (
  <SectionWrapper id="faqs">
    <div className="custom-screen text-gray-600">
      <div className="max-w-xl xl:mx-auto xl:text-center">
        <h2 className="text-gray-800 text-3xl font-extrabold sm:text-4xl">
          Frequently Asked Questions
        </h2>
        <p className="mt-3">
          Everything you need to know about Techkareer. Can't find the answer
          you're looking for? Feel free to{" "}
          <a
            className="text-blue-600 hover:text-blue-400 duration-150 font-semibold whitespace-nowrap"
            href="mailto:contact@techkareer.com"
          >
            contact us
          </a>
          .
        </p>
      </div>
      <div className="mt-12">
        <ul className="space-y-8 gap-12 grid-cols-2 sm:grid sm:space-y-0 lg:grid-cols-3">
          {faqsList.map((item, idx) => (
            <li key={idx} className="space-y-3">
              <summary className="flex items-center justify-between font-semibold text-gray-700">
                {item.q}
              </summary>
              <p
                dangerouslySetInnerHTML={{ __html: item.a }}
                className="leading-relaxed"
              ></p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  </SectionWrapper>
);

export default FAQs;
