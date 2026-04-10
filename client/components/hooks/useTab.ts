import { useState, useCallback, useId } from 'react';

export function useTab(tabCount: number, initialTab = 0) {
  const [activeIndex, setActiveIndex] = useState(initialTab);
  const id = useId();

  const getBtnId = useCallback((i: number) => `${id}-tab-btn-${i}`, [id]);
  const getPanelId = useCallback((i: number) => `${id}-tab-panel-${i}`, [id]);

  const selectTab = useCallback((index: number) => {
    if (index >= 0 && index < tabCount) {
      setActiveIndex(index);
    }
  }, [tabCount]);

  return { activeIndex, selectTab, getBtnId, getPanelId };
}
