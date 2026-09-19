import React from 'react';
import { createRoot } from 'react-dom/client';
import { Agentation } from 'agentation';

function initAgentation() {
  let rootEl = document.getElementById('agentation-root');
  if (!rootEl) {
    rootEl = document.createElement('div');
    rootEl.id = 'agentation-root';
    document.body.appendChild(rootEl);
  }

  try {
    const root = createRoot(rootEl);
    root.render(React.createElement(Agentation, { copyToClipboard: true }));
    console.log('[Agentation] Visual annotation toolbar initialized.');
  } catch (err) {
    console.error('[Agentation] Failed to mount:', err);
  }
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initAgentation);
} else {
  initAgentation();
}
