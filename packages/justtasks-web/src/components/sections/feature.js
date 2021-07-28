import React from 'react'
import { LightningBoltIcon, PlusIcon, CheckIcon, CalendarIcon } from '@heroicons/react/outline'

export const FeatureSection = () => {

  const features = [
    {
      name: 'Create tasks',
      description:
        'Easily create tasks on a specific day by assigning them a title.',
      icon: PlusIcon,
    },
    {
      name: 'Move tasks',
      description:
        'Move tasks between days by moving them between the different columns.',
      icon: CalendarIcon,
    },
    {
      name: 'Complete tasks',
      description:
        'Mark tasks as completed or uncompleted them at the touch of a button.',
      icon: CheckIcon,
    },
    {
      name: 'New features soon',
      description:
        'Stay tuned for the latest features on JustTasks.',
      icon: LightningBoltIcon,
    },
  ]

  return (
    <div>
      <div className="py-12 my-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center">
            <h2 className="text-base text-red-600 font-semibold tracking-wide uppercase">Features</h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              A better way to stay organized
            </p>
            <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
              Lorem ipsum dolor sit amet consect adipisicing elit. Possimus magnam voluptatum cupiditate veritatis in
              accusamus quisquam.
            </p>
          </div>

          <div className="mt-10">
            <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
              {features.map((feature) => (
                <div key={feature.name} className="relative">
                  <dt>
                    <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-red-500 text-white">
                      <feature.icon className="h-6 w-6" aria-hidden="true" />
                    </div>
                    <p className="ml-16 text-lg leading-6 font-medium text-gray-900">{feature.name}</p>
                  </dt>
                  <dd className="mt-2 ml-16 text-base text-gray-500">{feature.description}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
    </div>
  )
}