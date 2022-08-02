import { createRouter, createWebHistory } from 'vue-router'

import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
    children: [
      {
        path: '/Overview',
        name: 'Overview',
        component: () => import('@/components/Overview.vue'),
      },
      {
        path: '/BubbleSort',
        name: 'BubbleSort',
        component: () => import('@/components/BubbleSort.vue'),
      },
      {
        path: '/InsertionSort',
        name: 'InsertionSort',
        component: () => import('@/components/InsertionSort.vue'),
      },
      {
        path: '/MergeSort',
        name: 'MergeSort',
        component: () => import('@/components/MergeSort.vue'),
      },
      {
        path: '/QuickSort',
        name: 'QuickSort',
        component: () => import('@/components/QuickSort.vue'),
      },
      {
        path: '/SelectionSort',
        name: 'SelectionSort',
        component: () => import('@/components/SelectionSort.vue'),
      },
      {
        path: '/ShellSort',
        name: 'ShellSort',
        component: () => import('@/components/ShellSort.vue'),
      },
      {
        path: '/HeapSort',
        name: 'HeapSort',
        component: () => import('@/components/HeapSort.vue'),
      },
      {
        path: '/BogoSort',
        name: 'BogoSort',
        component: () => import('@/components/BogoSort.vue'),
      },
      {
        path: '/RadixSort',
        name: 'RadixSort',
        component: () => import('@/components/RadixSort.vue'),
      },
      {
        path: '/CountingSort',
        name: 'CountingSort',
        component: () => import('@/components/CountingSort.vue'),
      },
      {
        path: '/CocktailShakerSort',
        name: 'CocktailShakerSort',
        component: () => import('@/components/CocktailShakerSort.vue'),
      },
    ],
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router