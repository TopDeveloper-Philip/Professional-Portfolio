// DOM Elements
    const header = document.getElementById('header');
    const themeToggle = document.getElementById('themeToggle');
    const menuToggle = document.getElementById('menuToggle');
    const navLinks = document.getElementById('navLinks');
    const backToTop = document.getElementById('backToTop');
    const downloadResume = document.getElementById('downloadResume');
    const resumeModal = document.getElementById('resumeModal');
    const resumeClose = document.getElementById('resumeClose');
    const downloadResumeBtn = document.getElementById('downloadResumeBtn');
    const blogLinks = document.querySelectorAll('.blog-link');
    const blogModal = document.getElementById('blogModal');
    const blogModalClose = document.getElementById('blogModalClose');
    const blogModalImg = document.getElementById('blogModalImg');
    const blogModalDate = document.getElementById('blogModalDate');
    const blogModalTitle = document.getElementById('blogModalTitle');
    const blogModalText = document.getElementById('blogModalText');
    const blogModalTags = document.getElementById('blogModalTags');
    const preloader = document.getElementById('preloader');
    
    // Preloader
    window.addEventListener('load', () => {
      setTimeout(() => {
        preloader.style.display = 'none';
      }, 500);
    });
    
    // Theme Toggle
    const isDarkMode = localStorage.getItem('darkMode') === 'enabled';
    
    if (isDarkMode) {
      document.body.classList.add('dark-mode');
      themeToggle.innerHTML = '<i class="fas fa-sun"></i>';
    }
    
    themeToggle.addEventListener('click', () => {
      document.body.classList.toggle('dark-mode');
      
      if (document.body.classList.contains('dark-mode')) {
        localStorage.setItem('darkMode', 'enabled');
        themeToggle.innerHTML = '<i class="fas fa-sun"></i>';
      } else {
        localStorage.setItem('darkMode', 'disabled');
        themeToggle.innerHTML = '<i class="fas fa-moon"></i>';
      }
    });
    
    // Mobile Menu Toggle
    menuToggle.addEventListener('click', () => {
      navLinks.classList.toggle('active');
      menuToggle.innerHTML = navLinks.classList.contains('active') ? 
        '<i class="fas fa-times"></i>' : '<i class="fas fa-bars"></i>';
    });
    
    // Close mobile menu when clicking on a link
    document.querySelectorAll('.nav-links a').forEach(link => {
      link.addEventListener('click', () => {
        navLinks.classList.remove('active');
        menuToggle.innerHTML = '<i class="fas fa-bars"></i>';
      });
    });
    
    // Header scroll effect
    window.addEventListener('scroll', () => {
      if (window.scrollY > 100) {
        header.classList.add('scrolled');
        backToTop.classList.add('show');
      } else {
        header.classList.remove('scrolled');
        backToTop.classList.remove('show');
      }
    });
    
    // Back to top button
    backToTop.addEventListener('click', () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });
    
    // Resume/CV Modal
    downloadResume.addEventListener('click', () => {
      resumeModal.classList.add('show');
      document.body.style.overflow = 'hidden';
    });
    
    resumeClose.addEventListener('click', () => {
      resumeModal.classList.remove('show');
      document.body.style.overflow = 'auto';
    });
    
    downloadResumeBtn.addEventListener('click', () => {
      alert('This is a prototype. In the full version, this would download a PDF of the resume.');
    });
    
    // Blog Modal
    const blogPosts = [
      {
        id: 1,
        title: 'Effective Content Strategies for 2025',
        date: 'April 15, 2025',
        image: 'https://cdn.pixabay.com/photo/2018/01/17/07/06/laptop-3087585_960_720.jpg',
        content: `
          <p>Content creation has evolved significantly in recent years, with new platforms, formats, and audience preferences shaping the digital landscape. In 2025, effective content strategies require a thoughtful blend of innovation, authenticity, and technical optimization.</p>
          
          <h3>Understanding Your Audience</h3>
          <p>The foundation of any successful content strategy begins with a deep understanding of your target audience. Beyond basic demographics, today's content creators must develop comprehensive audience personas that include:</p>
          <ul>
            <li>Content consumption habits and preferences</li>
            <li>Platform-specific behavior patterns</li>
            <li>Pain points and challenges</li>
            <li>Information needs at different stages of the buyer journey</li>
          </ul>
          
          <h3>Content Formats That Resonate</h3>
          <p>While traditional blog posts remain valuable, diversifying your content portfolio is essential in 2025. Consider incorporating:</p>
          <ul>
            <li>Interactive content (quizzes, calculators, assessments)</li>
            <li>Short-form video optimized for various platforms</li>
            <li>Audio content (podcasts, audio articles)</li>
            <li>AI-enhanced personalized content experiences</li>
          </ul>
          
          <h3>SEO in 2025</h3>
          <p>Search engine optimization continues to evolve, with user intent and experience taking precedence over keyword density. Successful SEO strategies now include:</p>
          <ul>
            <li>Comprehensive topic coverage rather than keyword targeting</li>
            <li>Voice search optimization</li>
            <li>Mobile-first content design</li>
            <li>Page experience optimization (Core Web Vitals)</li>
          </ul>
          
          <h3>Measuring Success</h3>
          <p>Content effectiveness must be measured beyond pageviews and shares. Modern content analytics focus on:</p>
          <ul>
            <li>Engagement metrics (time on page, scroll depth)</li>
            <li>Conversion impact (contribution to lead generation)</li>
            <li>Content performance by channel and format</li>
            <li>Return on content investment (ROCI)</li>
          </ul>
          
          <p>By implementing these strategies, businesses and content creators can develop more effective, resonant content that achieves measurable results in today's complex digital ecosystem.</p>
        `,
        tags: ['Content Strategy', 'Digital Marketing', 'SEO', 'Content Creation', 'Audience Engagement']
      },
      {
        id: 2,
        title: '10 Resume Writing Tips That Will Get You Hired',
        date: 'March 28, 2025',
        image: 'https://cdn.pixabay.com/photo/2015/07/17/22/43/student-849825_960_720.jpg',
        content: `
          <p>In today's competitive job market, your resume needs to do more than simply list your work history—it needs to tell a compelling story about your professional journey and showcase your potential value to employers. Here are ten essential resume writing tips that will help you stand out and land more interviews.</p>
          
          <h3>1. Tailor Your Resume for Each Application</h3>
          <p>Generic resumes rarely make it past the initial screening. Take the time to customize your resume for each position, highlighting the skills and experiences most relevant to the specific role. This demonstrates your genuine interest and shows how you're a perfect fit for the position.</p>
          
          <h3>2. Optimize for ATS (Applicant Tracking Systems)</h3>
          <p>Most companies use ATS software to screen resumes before a human ever sees them. Include relevant keywords from the job description, use standard section headings, and avoid complex formatting, tables, or graphics that ATS systems struggle to parse.</p>
          
          <h3>3. Lead with a Powerful Professional Summary</h3>
          <p>Replace the outdated objective statement with a concise professional summary that highlights your most impressive qualifications, relevant skills, and career achievements. This 3-4 line section serves as your "elevator pitch" and sets the tone for the rest of your resume.</p>
          
          <h3>4. Quantify Your Achievements</h3>
          <p>Numbers make your accomplishments more concrete and compelling. Instead of saying you "increased sales," specify that you "increased regional sales by 32% over 12 months, exceeding targets by $425,000." Quantifiable results provide tangible evidence of your capabilities.</p>
          
          <h3>5. Focus on Impact, Not Just Duties</h3>
          <p>Rather than simply listing job responsibilities, emphasize the results of your work. For each position, ask yourself: "What changed in the organization because of my work?" and "What problems did I solve?" This approach demonstrates your value-adding potential.</p>
          
          <h3>6. Showcase Relevant Skills</h3>
          <p>Include a dedicated skills section that highlights both technical and soft skills pertinent to the position. Organize these logically, prioritizing the most valuable skills for the role you're applying for.</p>
          
          <h3>7. Keep Design Clean and Professional</h3>
          <p>While creative industries may appreciate innovative designs, most employers prefer clean, well-organized resumes. Use consistent formatting, adequate white space, and a professional font. The design should enhance readability, not distract from your qualifications.</p>
          
          <h3>8. Include Relevant Educational Information</h3>
          <p>List your educational background concisely, including degrees, certifications, and specialized training relevant to your target position. Recent graduates should highlight academic achievements, while experienced professionals can keep this section brief.</p>
          
          <h3>9. Proofread Meticulously</h3>
          <p>Spelling or grammatical errors signal carelessness to employers. After proofreading multiple times yourself, ask someone else to review your resume as well. Fresh eyes often catch mistakes you've overlooked.</p>
          
          <h3>10. Update Your Digital Presence</h3>
          <p>Include links to relevant professional profiles or portfolios. Ensure your LinkedIn profile aligns with your resume, as recruiters frequently cross-check these resources. A cohesive professional narrative across platforms reinforces your personal brand.</p>
          
          <p>By implementing these strategies, you'll create a resume that effectively communicates your value proposition and significantly increases your chances of landing interviews in today's competitive job market.</p>
        `,
        tags: ['Resume Writing', 'Career Development', 'Job Search', 'Professional Branding', 'ATS Optimization']
      },
      {
        id: 3,
        title: 'Web Design Trends Dominating 2025',
        date: 'February 14, 2025',
        image: 'https://cdn.pixabay.com/photo/2016/11/19/14/00/code-1839406_960_720.jpg',
        content: `
          <p>Web design continues to evolve rapidly, with new technologies and user preferences driving innovation. In 2025, several distinct trends are reshaping how websites look, feel, and function. Understanding these trends can help businesses create more engaging, effective digital experiences.</p>
          
          <h3>Immersive 3D Experiences</h3>
          <p>Advancements in browser capabilities have made sophisticated 3D elements more accessible. Leading websites are incorporating subtle 3D elements to create depth and visual interest without sacrificing performance. These range from simple animated objects to complex interactive environments that invite exploration and engagement.</p>
          
          <h3>Adaptive Palette Systems</h3>
          <p>Dynamic color schemes that respond to user preferences, time of day, or device settings are becoming standard. These adaptive palettes ensure optimal readability and visual comfort while maintaining brand identity across different viewing conditions. This trend also supports better accessibility for users with visual impairments.</p>
          
          <h3>Micro-Interactions with Purpose</h3>
          <p>Subtle, responsive animations that provide feedback and guide users through their journey are replacing flashy effects. These purposeful micro-interactions improve usability by confirming actions, indicating status changes, and creating more intuitive interfaces that feel responsive and alive.</p>
          
          <h3>Content-First Layouts</h3>
          <p>The emphasis has shifted from rigid grid systems to flexible layouts that adapt to content requirements. These content-first designs prioritize readability and information hierarchy, allowing the nature of the content to influence the layout rather than forcing content into predetermined structures.</p>
          
          <h3>Voice User Interface Integration</h3>
          <p>As voice search and commands become more prevalent, websites are incorporating voice interface elements alongside traditional navigation. This multimodal approach enhances accessibility and convenience, particularly for complex searches or actions.</p>
          
          <h3>Ethical Data Visualization</h3>
          <p>With growing awareness of how design choices can mislead users, there's increased emphasis on ethical presentation of data and statistics. Transparent, accurate data visualization that respects user intelligence is becoming a mark of trustworthy design.</p>
          
          <h3>Seamless Cross-Device Experiences</h3>
          <p>Rather than creating separate experiences for different devices, designers are developing fluid interfaces that adapt intuitively across the entire device spectrum. These designs maintain consistency while optimizing for the strengths of each device type.</p>
          
          <h3>Sustainable Web Design</h3>
          <p>Energy-efficient design practices that reduce the environmental impact of digital experiences are gaining traction. This includes optimizing asset sizes, reducing unnecessary animations, and streamlining code to decrease server loads and battery drain.</p>
          
          <h3>Authenticity in Illustration</h3>
          <p>Generic stock imagery is being replaced by custom illustrations and authentic photography that reflects real diversity. These visual elements help brands convey personality and build emotional connections with users.</p>
          
          <h3>AI-Enhanced Personalization</h3>
          <p>Machine learning algorithms are enabling more sophisticated personalization without intrusive data collection. These systems adapt content, offers, and interfaces based on user behavior patterns while respecting privacy boundaries.</p>
          
          <p>As these trends demonstrate, web design in 2025 is focused on creating more human-centered, accessible, and sustainable digital experiences. The most successful websites will be those that thoughtfully implement these trends in service of user needs rather than simply following fashion.</p>
        `,
        tags: ['Web Design', 'UX/UI', 'Digital Trends', 'Interactive Design', 'User Experience']
      }
    ];
    
    blogLinks.forEach(link => {
      link.addEventListener('click', (e) => {
        e.preventDefault();
        const blogId = parseInt(link.getAttribute('data-blog-id'));
        const post = blogPosts.find(post => post.id === blogId);
        
        if (post) {
          blogModalImg.src = post.image;
          blogModalImg.alt = post.title;
          blogModalDate.innerHTML = `<i class="far fa-calendar-alt"></i> ${post.date}`;
          blogModalTitle.textContent = post.title;
          blogModalText.innerHTML = post.content;
          
          blogModalTags.innerHTML = '';
          post.tags.forEach(tag => {
            const tagSpan = document.createElement('span');
            tagSpan.classList.add('blog-modal-tag');
            tagSpan.textContent = tag;
            blogModalTags.appendChild(tagSpan);
          });
          
          blogModal.classList.add('show');
          document.body.style.overflow = 'hidden';
        }
      });
    });
    
    blogModalClose.addEventListener('click', () => {
      blogModal.classList.remove('show');
      document.body.style.overflow = 'auto';
    });
    
    // Close modals when clicking outside
    window.addEventListener('click', (e) => {
      if (e.target === resumeModal) {
        resumeModal.classList.remove('show');
        document.body.style.overflow = 'auto';
      }
      
      if (e.target === blogModal) {
        blogModal.classList.remove('show');
        document.body.style.overflow = 'auto';
      }
    });
    
    // Initialize AOS Animation
    AOS.init({
      duration: 800,
      easing: 'ease-in-out',
      once: true,
      offset: 100
    });
    
    // Initialize Swiper slider for testimonials
    const testimonialSlider = new Swiper('.testimonials-slider', {
      slidesPerView: 1,
      spaceBetween: 30,
      loop: true,
      pagination: {
        el: '.swiper-pagination',
        clickable: true
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
      },
      breakpoints: {
        768: {
          slidesPerView: 2
        },
        1024: {
          slidesPerView: 3
        }
      }
    });
    
    // Initialize Particles.js for background
    particlesJS('particles-js', {
      "particles": {
        "number": {
          "value": 80,
          "density": {
            "enable": true,
            "value_area": 800
          }
        },
        "color": {
          "value": "#1a73e8"
        },
        "shape": {
          "type": "circle",
          "stroke": {
            "width": 0,
            "color": "#000000"
          },
          "polygon": {
            "nb_sides": 5
          }
        },
        "opacity": {
          "value": 0.5,
          "random": false,
          "anim": {
            "enable": false,
            "speed": 1,
            "opacity_min": 0.3,
            "sync": false
          }
        },
        "size": {
          "value": 3,
          "random": true,
          "anim": {
            "enable": false,
            "speed": 40,
            "size_min": 0.1,
            "sync": false
          }
        },
        "line_linked": {
          "enable": true,
          "distance": 150,
          "color": "#1a73e8",
          "opacity": 0.4,
          "width": 1
        },
        "move": {
          "enable": true,
          "speed": 6,
          "direction": "none",
          "random": false,
          "straight": false,
          "out_mode": "out",
          "bounce": true,
          "attract": {
            "enable": false,
            "rotateX": 600,
            "rotateY": 1200
          }
        }
      },
      "interactivity": {
        "detect_on": "canvas",
        "events": {
          "onhover": {
            "enable": true,
            "mode": "grab"
          },
          "onclick": {
            "enable": true,
            "mode": "push"
          },
          "resize": true
        },
        "modes": {
          "grab": {
            "distance": 400,
            "line_linked": {
              "opacity": 1
            }
          },
          "bubble": {
            "distance": 400,
            "size": 20,
            "duration": 2,
            "opacity": 3,
            "speed": 3
          },
          "repulse": {
            "distance": 200,
            "duration": 0.4
          },
          "push": {
            "particles_nb": 4
          },
          "remove": {
            "particles_nb": 2
          }
        }
      },
      "retina_detect": true,
      "fullScreen": {
        "enable": true,
        "zIndex": -1 // Ensure it's behind other content
    }
    });
    
    // Portfolio filtering
    const portfolioItems = document.querySelectorAll('.portfolio-item');
    const filterBtns = document.querySelectorAll('.portfolio-filter-btn');
    
    filterBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        // Remove active class from all buttons
        filterBtns.forEach(btn => btn.classList.remove('active'));
        // Add active class to current button
        btn.classList.add('active');
        
        const filter = btn.getAttribute('data-filter');
        
        portfolioItems.forEach(item => {
          if (filter === 'all' || item.getAttribute('data-category') === filter) {
            item.style.display = 'block';
          } else {
            item.style.display = 'none';
          }
        });
      });
    });
    
    // Form submission
    const contactForm = document.querySelector('.contact-form');
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      alert('Thank you for your message! This is a prototype. In the full version, your message would be sent.');
      contactForm.reset();
    });
    
    // Newsletter submission
    const newsletterForm = document.querySelector('.footer-newsletter');
    newsletterForm.addEventListener('submit', (e) => {
      e.preventDefault();
      alert('Thank you for subscribing! This is a prototype. In the full version, you would be added to the newsletter list.');
      newsletterForm.reset();
    });