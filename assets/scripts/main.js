"use strict";function findParentNodeByClass(e,t){for(var n=t.parentNode;!n.classList.contains(e);)n=n.parentNode;n.classList.toggle("is-visible")}function updateParentOnHover(){var e=document.getElementsByClassName("js-parent-hover");Array.prototype.forEach.call(e,function(e,t){e.addEventListener("mouseover",function(){findParentNodeByClass("project-nav",this)}),e.addEventListener("mouseout",function(){findParentNodeByClass("project-nav",this)})})}function ready(e){"loading"!==document.readyState?e():document.addEventListener("DOMContentLoaded",e)}ready(updateParentOnHover);