import type { InjectionKey } from 'vue'
export type VmaKey = {vma: Ref<number>, updateVma: (newVma: number) => void};
export const vmaKey = Symbol() as InjectionKey<VmaKey>