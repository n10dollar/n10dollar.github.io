<script setup lang="ts">
import { useRouter, useRoute } from 'vue-router'
import type { MenuOption } from 'naive-ui'
import { computed } from 'vue'

const router = useRouter()
const route = useRoute()

const menuOptions: MenuOption[] = [
  { key: '/about', label: 'About' },
  { key: '/contact', label: 'Contact' },
  { key: '/home', label: 'Home' },
  { key: '/project', label: 'Projects' }
]

const activeKey = computed(() => route.path)

function handleSelect(key: string) {
  router.push(key)
}
</script>

<template>
  <n-flex>
    <h1>Header</h1>
    <n-menu
      mode="horizontal"
      :options="menuOptions"
      :value="activeKey"
      @update:value="handleSelect"
    />
  </n-flex>
</template>
