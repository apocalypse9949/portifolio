import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import TypewriterEffect from '../components/TypewriterEffect';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChevronRight, MousePointer2, ArrowRight, User, Briefcase } from 'lucide-react';
import FeaturedProject from '../components/FeaturedProject';
import projects from '../data/projects';
import { blogPosts } from '../data/blogData';
import ExperienceCarousel from '../components/ExperienceCarousel';


import OptimizedFlowField from '../components/OptimizedFlowField';

function Home() {
  const scrollRef = useRef(null);
  const featuredProject = [...projects].sort((a, b) => 
    new Date(b.date) - new Date(a.date)
  )[0];
  
  // Sort blog posts to get the most recent
  const latestBlogPost = [...blogPosts].sort((a, b) => 
    new Date(b.date) - new Date(a.date)
  )[0];

  useEffect(() => {
    function updateMousePosition(e) {
      if (!scrollRef.current) return;
      const { clientX, clientY } = e;
      const x = clientX / window.innerWidth;
      const y = clientY / window.innerHeight;
      scrollRef.current.style.setProperty('--mouse-x', x);
      scrollRef.current.style.setProperty('--mouse-y', y);
    }

    function updateTouchPosition(e) {
      if (!scrollRef.current || !e.touches[0]) return;
      const { clientX, clientY } = e.touches[0];
      const x = clientX / window.innerWidth;
      const y = clientY / window.innerHeight;
      scrollRef.current.style.setProperty('--mouse-x', x);
      scrollRef.current.style.setProperty('--mouse-y', y);
    }

    window.addEventListener('mousemove', updateMousePosition);
    window.addEventListener('touchmove', updateTouchPosition);
    
    return () => {
      window.removeEventListener('mousemove', updateMousePosition);
      window.removeEventListener('touchmove', updateTouchPosition);
    };
  }, []);

  return (
    <main className="min-h-screen overflow-x-hidden" ref={scrollRef}>
      {/* Animation background with theme support */}
      <div className="fixed inset-0 z-0 opacity-75 transition-opacity duration-500">
        <OptimizedFlowField />
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 relative z-10">
        {/* Hero Section */}
        <section 
          className="min-h-screen flex flex-col justify-center relative px-3 sm:px-6"
          data-aos="fade-right"
        >
          
          <div className="space-y-6 sm:space-y-8 relative backdrop-blur-sm bg-background/30 p-4 sm:p-8 rounded-xl">
            <div className="space-y-2 sm:space-y-4">
              <TypewriterEffect />
              <h1 className="text-4xl sm:text-5xl md:text-7xl font-semibold">
                I am <span className="text-primary">Prudhvi.</span>
              </h1>
            </div>
            <p className="text-lg sm:text-xl text-muted-foreground">
              Come take a look at what I've been up to!
            </p>
            
            <div className="flex flex-wrap items-center gap-4 sm:gap-6">
              <Link to="/projects" className="inline-block">
                <Button 
                  size="lg"
                  className="group text-base sm:text-lg bg-primary hover:bg-primary/90 text-primary-foreground"
                >
                  Projects
                  <ChevronRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </Link>
              <div className="hidden sm:block h-12 w-px bg-border" />
              <a 
                href="https://www.linkedin.com/in/sai-prudhvi-raja-dodda-26b80a321/" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                <Button 
                  variant="outline"
                  size="lg"
                  className="group text-base sm:text-lg border-primary/20 hover:border-primary/40 hover:bg-primary/10"
                >
                  LinkedIn
                  <ChevronRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </a>
            </div>
          </div>
          <div className="absolute left-1/2 bottom-12">
            <div className="flex flex-col items-center text-muted-foreground p-2 rounded-full -translate-x-1/2 animate-bounce">
              <MousePointer2 className="h-5 w-5 sm:h-6 sm:w-6" />
              <span className="text-xs sm:text-sm">Scroll to explore</span>
            </div>
          </div>
        </section>

        {/* Latest Blog Section */}
        <section 
          className="sm:py-16 flex items-center"
          data-aos="fade-up" 
          data-aos-duration="1000"
        >
          <div className="w-full relative group">
            <div className="absolute -inset-1 bg-primary/10 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 
                            group-hover:shadow-2xl group-hover:shadow-primary/20"></div>
            <Card className="w-full relative z-10 backdrop-blur-md bg-background/70">
              <CardContent className="p-6 sm:p-8 md:p-12 space-y-6 sm:space-y-8">
                <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-primary">Latest Ideas</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 md:gap-12">
                  <Link to={`/blog/${latestBlogPost.slug}`} className="block">
                    <Card className="bg-background/50 backdrop-blur hover:bg-background/70 transition-colors">
                      <CardContent className="p-4 sm:p-6 md:p-8 space-y-3 sm:space-y-4">
                        <h3 className="text-xl sm:text-2xl font-semibold">{latestBlogPost.title}</h3>
                        <p className="text-sm sm:text-base text-muted-foreground">
                          {latestBlogPost.excerpt}
                        </p>
                        <div className="group/link inline-flex items-center text-primary">
                          Read more
                          <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover/link:translate-x-1" />
                        </div>
                      </CardContent>
                    </Card>
                  </Link>

                  <div className="space-y-4 sm:space-y-6">
                    <p className="text-base sm:text-lg md:text-xl text-muted-foreground leading-relaxed">
                      I write about technology, engineering, and my experiences as a student and developer.
                    </p>
                    <Link to="/blog" className="inline-block">
                      <Button 
                        variant="outline"
                        size="lg"
                        className="group text-base sm:text-lg border-primary/20 hover:border-primary hover:text-primary transition-colors"
                      >
                        View all posts
                        <ChevronRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                      </Button>
                    </Link>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* About Section */}
        <section 
          className="py-10 sm:py-16 flex items-center"
          data-aos="fade-up" 
          data-aos-duration="1000"
        >
          <div className="w-full relative group">
            <div className="absolute -inset-1 bg-[#2DB19B]/10 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500
                            group-hover:shadow-2xl group-hover:shadow-[#2DB19B]/20"></div>
            <Card className="w-full relative z-10 backdrop-blur-md bg-background/70">
              <CardContent className="p-6 sm:p-8 md:p-12 space-y-6 sm:space-y-12">
                <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-[#2DB19B]">About Me</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
                  <div className="space-y-4 sm:space-y-6">
                    <p className="text-base sm:text-lg md:text-xl text-muted-foreground leading-relaxed">
                      Learn more about my background, skills, and the journey that shapes my approach to technology and innovation.
                    </p>
                    <Link to="/about" className="inline-block">
                      <Button 
                        variant="outline"
                        size="lg"
                        className="group text-base sm:text-lg border-[#2DB19B]/20 hover:border-[#2DB19B] hover:text-[#2DB19B] transition-colors"
                      >
                        Get to know me
                        <ChevronRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                      </Button>
                    </Link>
                  </div>
                  <div className="flex justify-center order-first md:order-last">
                    <User className="h-32 w-32 sm:h-40 sm:w-40 md:h-48 md:w-48 text-[#2DB19B]/50" />
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>
        
        {/* Experience Section */}
        <section 
          className="py-10 sm:py-16 flex items-center"
          data-aos="fade-up" 
          data-aos-duration="1000"
        >
          <div className="w-full relative group">
            <div className="absolute -inset-1 bg-[#4B93D1]/10 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500
                            group-hover:shadow-2xl group-hover:shadow-[#4B93D1]/20"></div>
            <Card className="w-full relative z-10 backdrop-blur-md bg-background/70">
              <CardContent className="p-6 sm:p-8 md:p-12 space-y-6 sm:space-y-8">
                <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-[#4B93D1]">Experience</h2>
                <p className="text-base sm:text-lg md:text-xl text-muted-foreground leading-relaxed">
                  Places I've worked and projects I've contributed to throughout my career.
                </p>
                <ExperienceCarousel />
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Projects Section */}
        <section 
          className="py-10 sm:py-16 flex items-center mb-10"
          data-aos="fade-up" 
          data-aos-duration="1000"
        >
          <div className="w-full relative group">
            <div className="absolute -inset-1 bg-[lightcoral]/10 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500
                            group-hover:shadow-2xl group-hover:shadow-[lightcoral]/20"></div>
            <Card className="w-full relative z-10 backdrop-blur-md bg-background/70">
              <CardContent className="p-6 sm:p-8 md:p-12 space-y-6 sm:space-y-12">
                <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-[lightcoral]">Projects</h2>
                <FeaturedProject project={featuredProject} />
              </CardContent>
            </Card>
          </div>
        </section>
      </div>
    </main>
  );
}

export default Home;