
import s1img1 from './assets/ourServies/s1img1.png';
import s1img2 from './assets/ourServies/s1img2.png';
import s1img3 from './assets/ourServies/s1img3.png';
import s1img4 from './assets/ourServies/s1img4.png';
import s1img5 from './assets/ourServies/s1img5.png';
import s1img6 from './assets/ourServies/s1img6.png';
import s1img7 from './assets/ourServies/s1img7.png';
import s1img8 from './assets/ourServies/s1img8.png';
import s2img1 from './assets/ourServies/s2img1.png';
import s2img2 from './assets/ourServies/s2img2.png';
import s2imgL from './assets/ourServies/unimg.png';
import courseimg from './assets/ourServies/pexels-fauxels-3184338 (1).jpg';

const OurServices = () => {
  return (
    <>
      {/* Page Heading Section */}
      <section className="page-heading bg-gradient-to-b from-[#FA931C] to-white text-white py-20">
        <div className="container mx-auto text-center">
          <h4 className="text-lg uppercase tracking-widest">Enhancing Your Online Presence</h4>
          <h1 className="text-5xl font-bold mt-4">Top SEO Services to Boost Your Visibility</h1>
        </div>
      </section>

      {/* Services Section */}
      <section className="services py-16">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h6 className="text-uppercase font-semibold">Our SEO Services</h6>
            <h4 className="text-3xl font-bold">Explore Our <em className="text-[#eab374]">Comprehensive SEO Solutions</em></h4>
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
            {[
              {
                title: 'Keyword Research',
                description: 'Identify high-impact keywords to optimize your content and improve search engine rankings.',
                icon: s1img1,
              },
              {
                title: 'On-Page SEO',
                description: 'Optimize your website’s content and structure to enhance its relevance and usability.',
                icon: s1img2,
              },
              {
                title: 'Technical SEO',
                description: 'Address technical aspects of your website to ensure search engines can crawl and index it effectively.',
                icon: s1img3,
              },
              {
                title: 'Link Building',
                description: 'Develop a robust backlink profile to increase your site’s authority and improve its search rankings.',
                icon: s1img4,
              },
              {
                title: 'Content Marketing',
                description: 'Create and promote valuable content to attract and engage your target audience while boosting SEO.',
                icon: s1img5,
              },
              {
                title: 'Local SEO',
                description: 'Optimize your website for local searches to attract customers in your geographic area.',
                icon: s1img6,
              },
              {
                title: 'SEO Audits',
                description: 'Conduct comprehensive audits to identify SEO issues and opportunities for improvement.',
                icon: s1img7,
              },
              {
                title: 'Analytics & Reporting',
                description: 'Track and analyze SEO performance to measure the effectiveness of your strategies and make data-driven decisions.',
                icon: s1img8,
              },
            ].map((service, index) => (
              <div key={index} className="service-item bg-white p-8 rounded-xl shadow-lg transition-transform transform hover:scale-105">
                <div className="icon mb-6">
                  <img src={service.icon} alt={service.title} className="w-16 h-16 mx-auto" />
                </div>
                <h4 className="text-2xl font-bold text-gray-800">{service.title}</h4>
                <p className="text-gray-600 mt-4">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Simple CTA Section */}
      <section className="simple-cta bg-gradient-to-b from-[#FA931C] text-white py-20">
        <div className="container mx-auto flex flex-col lg:flex-row items-center justify-between">
          <div className="w-full lg:w-1/2" data-aos="fade-up-right">
            <img src={courseimg} alt="SEO Services Promotion" className="w-full rounded-lg shadow-lg" style={{ borderRadius: '74% 26% 70% 30% / 36% 30% 70% 64%' }} />
          </div>
          <div data-aos="fade-left" className="w-full lg:w-1/2 mt-8 lg:mt-0 lg:ml-12 text-center lg:text-left">
            <h6 className="text-white font-bold uppercase">Enhance Your SEO Strategy!</h6>
            <h4 className="text-4xl font-bold mt-4">Exclusive 50% OFF on Our SEO Services</h4>
            <p className="text-white text-xl mt-4">Elevate your online presence with our expert SEO services. Take advantage of our limited-time discount and drive more traffic to your site.</p>
            <a href="seo-services.html" className="mt-8 inline-block bg-[#f0b673] py-3 px-8 rounded-full font-bold uppercase tracking-widest shadow-lg hover:bg-red-400 hover:text-white transition-colors">View Services</a>
          </div>
        </div>
      </section>

      {/* Featured Product Section */}
      <section className="featured-product py-20 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h6 className="text-[#FA931C] uppercase font-semibold">Featured SEO Service</h6>
            <h4 className="text-3xl font-bold">Explore Our <em className="text-[#f0b673]">Top SEO Solutions</em></h4>
          </div>
          <div className="flex flex-wrap justify-center items-center">
            <div className="w-full lg:w-1/4 mb-12 lg:mb-0">
              <div className="space-y-10">
                {[
                  {
                    title: 'Advanced Keyword Strategy',
                    description: 'Develop a comprehensive keyword strategy to target high-value terms and drive targeted traffic.',
                    icon: s2img1,
                  },
                  {
                    title: 'SEO Analytics',
                    description: 'Analyze SEO metrics to measure performance and refine strategies for optimal results.',
                    icon: s2img2,
                  },
                ].map((course, index) => (
                  <div key={index} className="info-item flex items-center space-x-4">
                    <div className="icon object-cover object-top">
                      <img src={course.icon} alt={course.title} className="w-48" />
                    </div>
                    <div>
                      <h4 className="text-xl font-semibold text-gray-800">{course.title}</h4>
                      <p className="text-gray-600 mt-2">{course.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="w-full lg:w-2/4 flex justify-center">
              <img src={s2imgL} alt="Featured SEO Service" className="w-full rounded-lg" />
            </div>
            <div className="w-full lg:w-1/4 mt-12 lg:mt-0">
              <div className="space-y-10">
                {[
                  {
                    title: 'Content Optimization',
                    description: 'Enhance the quality and relevance of your content to improve search engine visibility and user engagement.',
                    icon: s1img4,
                  },
                  {
                    title: 'Technical SEO Audits',
                    description: 'Conduct detailed audits to identify and fix technical SEO issues that impact your site’s performance.',
                    icon: s1img6,
                  },
                ].map((course, index) => (
                  <div key={index} className="info-item flex items-center space-x-4">
                    <div className="icon object-cover object-top">
                      <img src={course.icon} alt={course.title} className="w-32" />
                    </div>
                    <div>
                      <h4 className="text-xl font-semibold text-gray-800">{course.title}</h4>
                      <p className="text-gray-600 mt-2">{course.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default OurServices;
