<template>
  <div class="flex sm:flex-row flex-col gap-0 bg-gray-200">
    <div class="w-full">
      <slot name="image"></slot>
    </div>
    <div class="w-full flex flex-col gap-2">
      <span class="bg-mf-cblue p-2">
        <slot name="header"></slot>
      </span>
      <span class="p-2 flex sm:flex-col flex-row justify-between">
        <slot name="longText"></slot>
      </span>
      <span class="p-2 flex sm:flex-col flex-row flex-wrap gap-2 justify-between">
        <slot name="details"></slot>
      </span>
      <span class="p-2">
        <slot name="button"></slot>
      </span>
    </div>
  </div>
  <span class="p-2 bg-mf-ruby w-full">
    <slot name="halo"></slot>
  </span>
</template>