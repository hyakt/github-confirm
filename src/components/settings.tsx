import React, { useEffect } from 'react';

export const Settings: React.FC = () => {
  useEffect(() => {
    chrome.storage.sync.set({ key: 'value' }, function() {
      console.log('Value is set to ' + 'value');
    });

    chrome.storage.sync.get(['key'], function(result) {
      console.log('Value currently is ' + result.key);
    });
  }, []);

  return <div>Settings</div>;
};
