(function(window, undefined) {
  var dictionary = {
    "c8347d3c-1d80-42f1-9f34-ff94c8d721a0": "Create an Account",
    "8ccac1c7-7d19-45ee-ba04-621535233857": "Support",
    "e7513521-1259-46ba-8e70-48c4a5b00b58": "Scheduling",
    "f69b215b-fc30-406e-9a43-b2314b7fb10d": "Home",
    "faadd9c0-9f21-4f43-8790-e8a26b7a46d4": "Sheet Music",
    "b58928d0-b415-4b1c-b2d5-b8a6da5033a4": "Login",
    "6a35cd27-3fa7-4dcf-b248-ebd1c270c6ab": "Staff",
    "f39803f7-df02-4169-93eb-7547fb8c961a": "Template 1",
    "bb8abf58-f55e-472d-af05-a7d1bb0cc014": "default"
  };

  var uriRE = /^(\/#)?(screens|templates|masters|scenarios)\/(.*)(\.html)?/;
  window.lookUpURL = function(fragment) {
    var matches = uriRE.exec(fragment || "") || [],
        folder = matches[2] || "",
        canvas = matches[3] || "",
        name, url;
    if(dictionary.hasOwnProperty(canvas)) { /* search by name */
      url = folder + "/" + canvas;
    }
    return url;
  };

  window.lookUpName = function(fragment) {
    var matches = uriRE.exec(fragment || "") || [],
        folder = matches[2] || "",
        canvas = matches[3] || "",
        name, canvasName;
    if(dictionary.hasOwnProperty(canvas)) { /* search by name */
      canvasName = dictionary[canvas];
    }
    return canvasName;
  };
})(window);