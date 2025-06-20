import React from 'react';
import { Mail, Code2, Heart } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { 
  Card,
  CardContent
} from "@/components/ui/card";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

// Current GitHub logo as of 2024
const GitHubIcon = ({ className }) => (
  <svg viewBox="0 0 98 96" xmlns="http://www.w3.org/2000/svg" className={className}>
    <path fillRule="evenodd" clipRule="evenodd" d="M48.854 0C21.839 0 0 22 0 49.217c0 21.756 13.993 40.172 33.405 46.69 2.427.49 3.316-1.059 3.316-2.362 0-1.141-.08-5.052-.08-9.127-13.59 2.934-16.42-5.867-16.42-5.867-2.184-5.704-5.42-7.17-5.42-7.17-4.448-3.015.324-3.015.324-3.015 4.934.326 7.523 5.052 7.523 5.052 4.367 7.496 11.404 5.378 14.235 4.074.404-3.178 1.699-5.378 3.074-6.6-10.839-1.141-22.243-5.378-22.243-24.283 0-5.378 1.94-9.778 5.014-13.2-.485-1.222-2.184-6.275.486-13.038 0 0 4.125-1.304 13.426 5.052a46.97 46.97 0 0 1 12.214-1.63c4.125 0 8.33.571 12.213 1.63 9.302-6.356 13.427-5.052 13.427-5.052 2.67 6.763.97 11.816.485 13.038 3.155 3.422 5.015 7.822 5.015 13.2 0 18.905-11.404 23.06-22.324 24.283 1.78 1.548 3.316 4.481 3.316 9.126 0 6.6-.08 11.897-.08 13.526 0 1.304.89 2.853 3.316 2.364 19.412-6.52 33.405-24.935 33.405-46.691C97.707 22 75.788 0 48.854 0z" 
      fill="currentColor"/>
  </svg>
);

// Current LinkedIn logo as of 2024
const LinkedInIcon = ({ className }) => (
  <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}>
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" 
      fill="currentColor"/>
  </svg>
);

const SocialLink = ({ href, icon: Icon, label, isCustomIcon }) => (
  <TooltipProvider delayDuration={300}>
    <Tooltip>
      <TooltipTrigger asChild>
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="group transition-transform hover:scale-110"
        >
          <Button 
            variant="outline" 
            size="lg"
            className="border-primary/20 hover:border-primary/50 hover:bg-primary/5"
          >
            {isCustomIcon ? (
              <Icon className="w-5 h-5 transition-colors group-hover:text-primary" />
            ) : (
              <div className="w-5 h-5 transition-colors group-hover:text-primary">
                <Icon className="w-full h-full" />
              </div>
            )}
          </Button>
        </a>
      </TooltipTrigger>
      <TooltipContent>
        <p>{label}</p>
      </TooltipContent>
    </Tooltip>
  </TooltipProvider>
);

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer 
      className="relative border-t border-border overflow-hidden"
      data-aos="fade-up" 
      data-aos-duration="500"
    >
      {/* Background gradient effect */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-primary/5 pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 py-10 sm:py-16 relative">
        <Card className="bg-background/50 backdrop-blur-sm border-primary/10">
          <CardContent className="p-6 sm:p-8 md:p-12 space-y-6 sm:space-y-8">
            {/* Main content */}
            <div className="space-y-3 sm:space-y-4">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold bg-gradient-to-r from-primary to-primary/60 text-transparent bg-clip-text animate-glow">
                Let's get in touch.
              </h2>
              <p className="text-base sm:text-lg text-muted-foreground">
                Now that you know me, let me get to know you!
              </p>
            </div>

            {/* Social links */}
            <div className="flex flex-wrap gap-3 sm:gap-4">
              <SocialLink 
                href="https://github.com/apocalypse9949"
                icon={GitHubIcon}
                label="Check out my GitHub"
                isCustomIcon={false}
              />
              <SocialLink 
                href="https://www.linkedin.com/in/sai-prudhvi-raja-dodda-26b80a321/"
                icon={LinkedInIcon}
                label="Connect on LinkedIn"
                isCustomIcon={false}
              />
              <SocialLink 
                href="mailto:rathernode06@gmail.com"
                icon={Mail}
                label="Send me an email"
                isCustomIcon={true}
              />
            </div>

            {/* Divider */}
            <div className="h-px bg-border w-full opacity-50" />

            {/* Footer credits */}
            <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-xs sm:text-sm text-muted-foreground">
              <div className="flex items-center gap-1 sm:gap-2">
                <Code2 className="w-3 h-3 sm:w-4 sm:h-4" />
                <span>Coded by Sai Prudhvi</span>
              </div>
              <div className="flex items-center gap-1 sm:gap-2">
                <span>Built with</span>
                <Heart className="w-3 h-3 sm:w-4 sm:h-4 text-red-500" />
                <span>using React Vite & Tailwind</span>
              </div>
              <div className="text-xs sm:text-sm">© {currentYear} Prudhvi</div>
            </div>
          </CardContent>
        </Card>
      </div>
    </footer>
  );
};

export default Footer;