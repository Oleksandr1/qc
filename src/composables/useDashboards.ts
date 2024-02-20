import type { iDashboardItem } from '@/types'
import config from '@/config'
import { useStorage } from '@vueuse/core'

export function useDashboards() {
  const { grid, dashboardWidth, dashboardHeight } = config

  const generateItems = (count: number) => {
    const items = [] as Array<iDashboardItem>
    for (let i = 0; i < count; i++) {
      items.push({
        x: 20 * i,
        y: 20 * i,
        width: dashboardWidth,
        height: dashboardHeight,
        isActive: false,
        id: i,
        zIndex: 0,
        visible: true,
        name: `Title ${i + 1}`
      })
    }
    return items
  }

  const elements = useStorage('dashboards', generateItems(5))

  return {
    grid,
    dashboardWidth,
    dashboardHeight,
    generateItems,
    elements
  }
}
