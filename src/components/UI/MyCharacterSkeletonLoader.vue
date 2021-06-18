<template>
  <div class="col-span-1">
    <div class="relative">
      <!-- Image -->
      <div class="bg-gray-400 bg-opacity-80 w-full sm:h-80 h-52"></div>
      <!-- Description -->
      <div class="absolute bottom-0 left-0 bg-gray-200 bg-opacity-60 w-full flex flex-col space-y-4 py-4">
        <div class="w-9/12 bg-gray-200 h-8 ml-2 rounded-md animate-pulse"></div>
        <div class="bg-gray-200 w-7/12 h-8 ml-2 rounded-md animate-pulse"></div>
      </div>
    </div>
    <!-- Appearances -->
    <div class="w-full bg-gray-100 flex flex-col space-y-4 items-center py-4">
      <div class="h-8 bg-gray-300 w-5/12 rounded-md animate-pulse"></div>
      <div class="flex flex-row justify-between w-full">
        <span
          class="
            flex flex-col
            space-y-2
            items-center
            px-2
            border-r border-gray-400
            w-full
          "
        >
          <div class="h-8 bg-gray-300 w-3/12 rounded-md animate-pulse"></div>
          <div class="h-8 bg-gray-300 w-6/12 rounded-md animate-pulse"></div>
        </span>
        <span class="flex flex-col space-y-2 items-center px-2 w-full">
          <div class="h-8 bg-gray-300 w-3/12 rounded-md animate-pulse"></div>
          <div class="h-8 bg-gray-300 w-6/12 rounded-md animate-pulse"></div>
        </span>
      </div>
      <!-- Details Button -->
      <div class="bg-gray-300 shadow-md h-12 w-5/12 mx-auto rounded-md"></div>
    </div>
  </div>
</template>
