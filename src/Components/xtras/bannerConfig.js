import home1             from '../../assests/banners/clinic.jpg';
import home2             from '../../assests/banners/clinic kasoa 2nd.jpg';
import home3             from '../../assests/banners/divine clinic.jpg';

import aboutImg          from '../../assests/banners/medical teamkasoa.jpg';
import faqImg            from '../../assests/banners/faq.jpeg';
import privacyImg        from '../../assests/banners/privacy.webp';
import cookieImg         from '../../assests/banners/cookie.jpg';
import careersImg        from '../../assests/banners/health-interview.jpg';
import contactImg        from '../../assests/banners/contact us.jpg';

import servicesImg       from '../../assests/banners/doctorKasoa.jpg';
import paymentImg        from '../../assests/banners/payment.jpg';
import makingPaymentImg  from '../../assests/banners/payment.jpg';
import becomingPatientImg from '../../assests/banners/Patient-Care.webp';

import managementImg     from '../../assests/banners/medical teamkasoa.jpg';
import healthTeamImg     from '../../assests/banners/team2kasoa.jpg';
import notFoundImg       from '../../assests/banners/question.jpg';



// Banner configuration based on routes
const bannerConfig = {
    '/': [
      {
        image: home1,
        altText: 'Modern medical building',
        titleSmall: 'Welcome to DSMC',
        titleLarge: 'Expert care with compassion and precision.',
        link: '/services',
        infoCardBg: 'bg-purple-900',
      },
      {
        image: home2,
        altText: 'Clinic staff',
        titleSmall: 'Excellence in Healthcare',
        titleLarge: 'Your well-being is our top priority.',
        link: '/about',
        infoCardBg: 'bg-indigo-800',
      },
      {
        image: home3,
        altText: 'Patient consultation',
        titleSmall: 'Recovery Starts Here',
        titleLarge: 'Tailored treatments for your best recovery.',
        link: '/patients/becoming-a-patient',
        infoCardBg: 'bg-rose-900',
      },
    ],
  
    '/about': {
      image: aboutImg,
      altText: 'Clinic history wall',
      titleSmall: 'Who We Are',
      titleLarge: 'Learn about our mission and legacy.',
      link: '/team/management',
      infoCardBg: '#1e3a8a', // Navy blue hex
    },
  
    '/faqs': {
      image: faqImg,
      altText: 'Question board',
      titleSmall: 'Need Help?',
      titleLarge: 'Find answers to common questions here.',
      link: '/contact',
      infoCardBg: 'bg-green-700',
    },
  
    '/privacy-policy': {
      image: privacyImg,
      altText: 'Locked data graphic',
      titleSmall: 'Privacy Policy',
      titleLarge: 'We protect your information with care.',
      link: '/about',
      infoCardBg: '#0f172a',
    },
  
    '/cookie-policy': {
      image: cookieImg,
      altText: 'Cookie notification',
      titleSmall: 'Cookies & You',
      titleLarge: 'Understand how we use cookies.',
      link: '/privacy-policy',
      infoCardBg: 'bg-yellow-700',
    },
  
    '/careers': {
      image: careersImg,
      altText: 'Healthcare career path',
      titleSmall: 'Join Our Team',
      titleLarge: 'Shape the future of healthcare with us.',
      link: '/get-in-touch',
      infoCardBg: 'bg-blue-800',
    },
  
    '/contact': {
      image: contactImg,
      altText: 'Contact us desk',
      titleSmall: 'Get in Touch',
      titleLarge: 'We’re here to answer your questions.',
      link: '/faqs',
      infoCardBg: 'bg-cyan-800',
    },
  
    '/services': {
      image: servicesImg,
      altText: 'Medical services tools',
      titleSmall: 'Our Services',
      titleLarge: 'Explore treatments and specializations.',
      link: '/patients/services-and-treatments',
      infoCardBg: 'bg-lime-800',
    },
  
    '/patients/payments': {
      image: paymentImg,
      altText: 'Paying for care',
      titleSmall: 'Payment Options',
      titleLarge: 'Flexible payment solutions for you.',
      link: '/patients/making-a-payment',
      infoCardBg: 'bg-orange-900',
    },
  
    '/patients/making-a-payment': {
      image: makingPaymentImg,
      altText: 'Making payment online',
      titleSmall: 'Quick Payment',
      titleLarge: 'Secure, fast, and easy transactions.',
      link: '/contact',
      infoCardBg: 'bg-amber-800',
    },
  
    '/patients/becoming-a-patient': {
      image: becomingPatientImg,
      altText: 'New patient intake',
      titleSmall: 'New Here?',
      titleLarge: 'Start your journey with Divine Sanitas.',
      link: '/contact',
      infoCardBg: 'bg-teal-900',
    },
  
    '/team/management': {
      image: managementImg,
      altText: 'Management team',
      titleSmall: 'Meet the Leaders',
      titleLarge: 'The minds driving our mission forward.',
      link: '/team/health-team',
      infoCardBg: '#334155',
    },
  
    '/team/health-team': {
      image: healthTeamImg,
      altText: 'Doctors and nurses',
      titleSmall: 'Our Health Experts',
      titleLarge: 'Caring professionals at your service.',
      link: '/services',
      infoCardBg: 'bg-fuchsia-800',
    },
  
    '*': {
      image: notFoundImg,
      altText: 'Page not found',
      titleSmall: 'Oops!',
      titleLarge: 'Page not found. Let’s get you back on track.',
      link: '/',
      infoCardBg: '#991b1b',
    },
  };
  
export default bannerConfig;