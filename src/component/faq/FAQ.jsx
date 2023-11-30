import Faqs from "./Faqs"
const FAQ = () => {

  const AllFAQ = [
    {
      id : "1",
      title: "How can your ICT solutions benefit my business?",
      subtitle: "We provide a comprehensive range of ICT solutions including but not limited to software development, network infrastructure setup, cybersecurity solutions, cloud services, and consultancy tailored to your specific business needs.",
    },
    {
      id : "2",
      title: "What industries do you specialize in?",
      subtitle: "We cater to a diverse range of industries, including but not limited to healthcare, finance, manufacturing, retail, and education. Our solutions are adaptable and customizable to suit the unique demands of various sectors",
    },
    {
      id : "3",
      title: "How do you ensure the security of your ICT solutions?",
      subtitle: "Security is a top priority. We implement robust cybersecurity measures, conduct regular assessments, and adhere to industry best practices to safeguard your data and infrastructure against evolving threats.",
    },
    {
      id : "4",
      title: "Can you assist in the integration of ICT solutions with our existing systems?  ",
      subtitle: "Absolutely. We specialize in seamless integration. Our team will work closely with you to ensure a smooth integration process, minimizing disruptions while leveraging your current infrastructure.",
    },
    {
      id : "5",
      title: "How can I get started with your ICT solutions?",
      subtitle: " Getting started is simple! Reach out to us through our contact page, and our team will connect with you to discuss your needs, provide insights, and begin the journey toward implementing the right ICT solutions for your business.",
    },
   
  ];



  return (
    <div>
      <div className="max-w-5xl lg:mx-auto flex flex-col gap-6 mx-4">
        <div className="bg-blue-100 rounded-lg  py-8 ">
          <div className="flex flex-col gap-2 ">
            <div className="flex justify-center items-center">
              <span className="text-center bg-[#AAAAFF] font-medium rounded-md text-[#6065CB] px-2">
                Faqs • Help Center
              </span>
            </div>
            <h1 className="text-3xl font-bold text-center ">
              Do you have a question?
            </h1>
            <div className=" md:w-2/5 mx-auto">
              <p className="text-center text-[15px]">
                Our support team will get assistance from AI-powered
                suggestions, making it quicker than ever to handle support
                requests.
              </p>
            </div>
          </div>
        </div>
        {/* second */}
        <div>
          <div className="flex flex-col gap-4">
            {AllFAQ.map((faq, e) => (
              <Faqs title={faq.title} subtitle={faq.subtitle}  id={faq.id} key={faq.id}/>
            ))}
          </div>
        </div>
        <p className="text-md font-light text-[15px] dark:text-white ">
          If you need further information,{" "}
          <a href="#contact" className="font-semibold text-secondary dark:text-yellow-500 ">
            please contact us.
          </a>
        </p>
      </div>
    </div>
  );
}

export default FAQ