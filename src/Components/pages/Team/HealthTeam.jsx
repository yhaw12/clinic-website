import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const teamMembers = [
  {
    name: "Dr. Banful",
    title: "Consultant Family Physician",
    image: "/images/placeholder.jpg",
    description:
      "Dr. Banful brings over 15 years of experience in family medicine, specializing in chronic disease management and preventive care. He is dedicated to building strong patient relationships and promoting holistic health.",
  },
  {
    name: "Madam Kate",
    title: "Senior Registered Nurse",
    image: "/images/placeholder.jpg",
    description:
      "With a compassionate approach and 10 years of clinical experience, Nurse Kate excels in patient-centered care and nursing leadership. She is passionate about improving patient outcomes and mentoring junior nurses.",
  },
  {
    name: "Madam Cynthia",
    title: "Midwife",
    image: "/images/placeholder.jpg",
    description:
      "Madam Cynthia is a skilled midwife with extensive experience in prenatal, labor, and postnatal care. She provides compassionate support to mothers and newborns, ensuring a safe and positive birthing experience.",
  },
];

export default function HealthTeam() {
  return (
    <section className="relative w-full overflow-hidden">
      {teamMembers.map((member, index) => (
        <div
          key={index}
          className="relative bg-fuchsia-800 text-white py-20 px-4 md:px-8 lg:px-32"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              viewport={{ once: true }}
              className={`${
                index % 2 === 0 ? "order-2 md:order-1" : "order-2"
              }`}
            >
              <h2 className="text-4xl font-bold mb-4">{member.name}</h2>
              <h3 className="text-xl font-semibold mb-4">{member.title}</h3>
              <p className="text-lg mb-6">{member.description}</p>
              <a
                href="/about"
                className="inline-flex items-center text-white hover:underline font-semibold"
              >
                Find out more
                <ArrowRight className="ml-2 w-4 h-4" />
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
              viewport={{ once: true }}
              className={`relative w-full h-96 rounded-3xl overflow-hidden shadow-xl border-8 border-white ${
                index % 2 === 0 ? "order-1 md:order-2" : "order-1"
              }`}
            >
              <img
                src={member.image}
                alt={member.name}
                className="object-cover w-full h-full"
                onError={(e) => { e.currentTarget.src = "/images/placeholder.jpg" }}
              />
              {/* WhatsApp Icon with number */}
              <a
                href="https://wa.me/233244760710"
                target="_blank"
                rel="noopener noreferrer"
                className="absolute bottom-0 left-0 p-4"
              >
                <div className="relative w-12 h-12 border-2 border-[#25D366] rounded-full shadow-md flex items-center justify-center group hover:scale-110 transition-transform duration-300">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6 text-[#25D366]"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M20.52 3.48A11.856 11.856 0 0012 0C5.37 0 .04 5.35.04 11.97c0 2.11.55 4.16 1.6 5.97L0 24l6.29-1.64c1.74.94 3.7 1.44 5.71 1.44h.01c6.63 0 12-5.35 12-11.96a11.83 11.83 0 00-3.49-8.36zM12 21.82c-1.68 0-3.33-.44-4.78-1.28l-.34-.2-3.73.97.99-3.63-.22-.37A9.899 9.899 0 012.2 11.98c0-5.41 4.41-9.81 9.82-9.81 2.63 0 5.1 1.03 6.96 2.89a9.795 9.795 0 012.87 6.91c.01 5.4-4.41 9.81-9.82 9.81zm5.17-7.57c-.28-.14-1.65-.81-1.9-.9-.25-.09-.43-.14-.6.14-.17.28-.69.9-.84 1.08-.15.17-.31.2-.59.07-.28-.14-1.17-.43-2.24-1.38-.83-.74-1.39-1.66-1.56-1.94-.16-.28-.02-.43.12-.57.13-.13.28-.31.42-.46.14-.14.19-.25.28-.42.09-.17.04-.31-.02-.45-.07-.14-.6-1.44-.82-1.97-.22-.53-.45-.46-.6-.46-.15 0-.31 0-.47 0-.17 0-.44.06-.67.31s-.88.86-.88 2.1c0 1.24.9 2.43 1.02 2.6.13.17 1.76 2.68 4.27 3.75.6.26 1.07.42 1.43.54.6.19 1.14.17 1.57.1.48-.07 1.48-.6 1.69-1.18.21-.58.21-1.07.15-1.18-.06-.11-.25-.17-.53-.3z" />
                  </svg>
                </div>
              </a>
            </motion.div>
          </div>

          <svg
            className="absolute bottom-0 left-0 w-full text-white"
            viewBox="0 0 1440 320"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill="currentColor"
              d="M0,224L80,208C160,192,320,160,480,165.3C640,171,800,213,960,197.3C1120,181,1280,107,1360,69.3L1440,32V320H1360C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320H0Z"
            ></path>
          </svg>
        </div>
      ))}
    </section>
  );
}
