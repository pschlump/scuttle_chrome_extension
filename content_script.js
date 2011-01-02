
// Copyright (C) Philip Schlump, 2011.
// BSD Type License in LICENSE.

var additionalInfo = {
    "selection": window.getSelection().toString()
  , "title": document.title
};

chrome.extension.connect().postMessage(additionalInfo);

