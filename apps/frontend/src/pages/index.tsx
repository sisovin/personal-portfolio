import { Hero } from '../components/sections/Hero';
import { ProjectsGrid } from '../components/sections/ProjectsGrid';
import { SkillsChart } from '../components/sections/SkillsChart';
import { Testimonials } from '../components/sections/Testimonials';

const HomePage = () => {
  return (
    <div>
      <Hero />
      <SkillsChart />
      <ProjectsGrid />
      <Testimonials />
    </div>
  );
};

export default HomePage;
