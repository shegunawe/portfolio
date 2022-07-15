import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import huluClone from '../public/assets/projects/hulu-clone.jpg';
import cloudManagement from '../public/assets/projects/cloud-management.jpg'
import dataFinance from '../public/assets/projects/data-finance.jpg'
import foodSearch from '../public/assets/projects/food-search.jpg'
import restaurant from '../public/assets/projects/restaurant.jpg'
import phoneStoreCart from '../public/assets/projects/phone-store-cart.jpg'
import ProjectItem from './ProjectItem';

const Projects = () => {
  return (
    <div id="projects" className="w-full">
      <div className="max-w-[1240px] mx-auto px-2 py-16">
        <p className="text-xl tracking-widest uppercase text-[#5651e5]">
          Projects
        </p>
        <h2 className="py-4">What I&apos;ve Built</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <ProjectItem
            title="Hulu Clone"
            backgroundImg={huluClone}
            projectUrl="/HuluClone"
            tech="Next JS"
          />
          <ProjectItem
            title="Restaurant Landing Page"
            backgroundImg={restaurant}
            projectUrl="/Restaurant"
            tech="React JS"
          />
          <ProjectItem
            title="Cloud Management"
            backgroundImg={cloudManagement}
            projectUrl="/CloudManagement"
            tech="Next JS"
          />
          <ProjectItem
            title="Data Finance"
            backgroundImg={dataFinance}
            projectUrl="/DataFinance"
            tech="React JS"
          />
          <ProjectItem
            title="Phone Cart"
            backgroundImg={phoneStoreCart}
            projectUrl="/PhoneCart"
            tech="Next JS"
          />
          <ProjectItem
            title="Food Search"
            backgroundImg={foodSearch}
            projectUrl="/FoodSearch"
            tech="Next JS"
          />
        </div>
      </div>
    </div>
  );
};

export default Projects;
