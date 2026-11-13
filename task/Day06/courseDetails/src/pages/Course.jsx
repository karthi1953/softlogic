import React from 'react'

const Course = () => {
  return (
<div class="max-w-sm rounded-xl border border-gray-200 bg-white p-6 shadow-md">
  <span class="inline-block rounded-full bg-blue-100 px-3 py-1 text-xs font-semibold text-blue-700">
    6 Months
  </span>

  <h2 class="mt-3 text-xl font-bold text-gray-900">
    Full Stack MERN
  </h2>

  <p class="mt-1 text-sm text-gray-600">
    Trainer: <span class="font-medium text-gray-800">React JS Trainer</span>
  </p>

  <div class="mt-5 flex items-center justify-between border-t pt-4">
    <div>
      <p class="text-xs text-gray-500">Course Fees</p>
      <p class="text-lg font-bold text-gray-900">₹30,000</p>
    </div>

    <button class="rounded-lg bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700">
      Enroll Now
    </button>
  </div>
</div>

  )
}

export default Course;
