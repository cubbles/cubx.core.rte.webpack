export function findTemplate (id) {
  var promises = [];
  var importDocList = document.querySelectorAll('link[rel=import]');
  var importDoc;
  for (var i = 0; i < importDocList.length; i++) {
    importDoc = importDocList[i];

    promises.push(new Promise(function (resolve, reject) {
      if (importDoc.import) {
        resolveTemplateContent(importDoc, id, resolve, reject);
      } else {
        importDoc.addEventListener('load', function (event) {
          resolveTemplateContent(event.target, id, resolve, reject);
        });
      }
    }));
  }
  return Promise.all(promises);
};

export function resolveTemplateContent (importDoc, id, resolve, reject) {
  var content;
  var template;
  if (importDoc) {
    content = importDoc.import;
  }
  if (content) {
    template = content.querySelector('#' + id);
  }
  if (template) {
    resolve(template);
  } else {
    resolve(false);
  }
};

export function createElementFromString (htmlString) {
  var div = document.createElement('div');
  div.innerHTML = htmlString.trim();
  // Change this to div.childNodes to support multiple top-level nodes
  return div.firstChild;
};

/**
* Utility function to get nested property (usage: get(window, 'cubx.CRCInit.loadCif')
* @param {object} obj
* @param {string} key nested property
* @returns {*} undefined, if property does not exist
*/
export function get (obj, key) {
  return key.split('.').reduce(function (o, x) {
    return (typeof o === 'undefined' || o === null) ? o : o[x];
  }, obj);
};
