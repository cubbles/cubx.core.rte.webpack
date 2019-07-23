'use strict';

/**
 * Handles a resize post message from an iframe to resize it.
 * @param event
 */
export default function handleMessage (event) {
  var data = event.data || {};
  if (!data || !data.id || !data.iframeHeight) {
    return;
  }
  document.querySelector('#' + data.id).height = data.iframeHeight;
  document.querySelector('#' + data.id).width = '100%';
};
window.addEventListener('message', handleMessage, false);
