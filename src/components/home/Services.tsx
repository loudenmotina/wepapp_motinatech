import React from 'react';
import { Database, LineChart, Cog, Eye, HeadsetIcon, Code } from 'lucide-react';

const services = [
  {
    name: 'Data Science',
    description: 'Advanced analytics and machine learning solutions to extract valuable insights from your data.',
    icon: Database,
  },
  {
    name: 'Data Analytics',
    description: 'Transform raw data into actionable business intelligence through sophisticated analysis.',
    icon: LineChart,
  },
  {
    name: 'Data Engineering',
    description: 'Build robust data infrastructure and pipelines to handle your data processing needs.',
    icon: Cog,
  },
  {
    name: 'Computer Vision',
    description: 'Cutting-edge computer vision solutions for image and video analysis.',
    icon: Eye,
  },
  {
    name: 'Tech Support',
    description: '24/7 technical support to ensure your systems run smoothly and efficiently.',
    icon: HeadsetIcon,
  },
  {
    name: 'Application Development',
    description: 'Custom software solutions tailored to your specific business needs.',
    icon: Code,
  },
];

export function Services() {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-indigo-600">Our Services</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Everything you need to handle your data
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            From data science to application development, we provide comprehensive solutions
            to help your business succeed in the digital age.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
            {services.map((service) => (
              <div key={service.name} className="flex flex-col">
                <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-gray-900">
                  <service.icon className="h-5 w-5 flex-none text-indigo-600" aria-hidden="true" />
                  {service.name}
                </dt>
                <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600">
                  <p className="flex-auto">{service.description}</p>
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
}