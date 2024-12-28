/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
/*!******************!*\
  !*** ./index.js ***!
  \******************/
__webpack_require__.r(__webpack_exports__);
let activeIndex = 0;

const groups = document.getElementsByClassName("card-group");
// Next button handler
const handleNextClick = () => {
    const nextIndex = activeIndex + 1 <= groups.length - 1 ? activeIndex + 1 : 0;

    const currentGroup = document.querySelector(`[data-index="${activeIndex}"]`),
        nextGroup = document.querySelector(`[data-index="${nextIndex}"]`);

    currentGroup.dataset.status = "after";

    nextGroup.dataset.status = "becoming-active-from-before";

    setTimeout(() => {
        nextGroup.dataset.status = "active";
        activeIndex = nextIndex;
    });
}
// Back button handler
const handleBackClick = () => {
    const nextIndex = activeIndex - 1 >= 0 ? activeIndex - 1 : groups.length - 1;

    const currentGroup = document.querySelector(`[data-index="${activeIndex}"]`),
        nextGroup = document.querySelector(`[data-index="${nextIndex}"]`);

    currentGroup.dataset.status = "before";

    nextGroup.dataset.status = "becoming-active-from-after";

    setTimeout(() => {
        nextGroup.dataset.status = "active";
        activeIndex = nextIndex;
    });
}
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FyZHRlc3QubWpzIiwibWFwcGluZ3MiOiI7O1VBQUE7VUFDQTs7Ozs7V0NEQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7OztBQ05BOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGdFQUFnRSxZQUFZO0FBQzVFLDJEQUEyRCxVQUFVOztBQUVyRTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsZ0VBQWdFLFlBQVk7QUFDNUUsMkRBQTJELFVBQVU7O0FBRXJFOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCxDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vY2FyZHMvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vY2FyZHMvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9jYXJkcy8uL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIFRoZSByZXF1aXJlIHNjb3BlXG52YXIgX193ZWJwYWNrX3JlcXVpcmVfXyA9IHt9O1xuXG4iLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJsZXQgYWN0aXZlSW5kZXggPSAwO1xuXG5jb25zdCBncm91cHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwiY2FyZC1ncm91cFwiKTtcbi8vIE5leHQgYnV0dG9uIGhhbmRsZXJcbmNvbnN0IGhhbmRsZU5leHRDbGljayA9ICgpID0+IHtcbiAgICBjb25zdCBuZXh0SW5kZXggPSBhY3RpdmVJbmRleCArIDEgPD0gZ3JvdXBzLmxlbmd0aCAtIDEgPyBhY3RpdmVJbmRleCArIDEgOiAwO1xuXG4gICAgY29uc3QgY3VycmVudEdyb3VwID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgW2RhdGEtaW5kZXg9XCIke2FjdGl2ZUluZGV4fVwiXWApLFxuICAgICAgICBuZXh0R3JvdXAgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGBbZGF0YS1pbmRleD1cIiR7bmV4dEluZGV4fVwiXWApO1xuXG4gICAgY3VycmVudEdyb3VwLmRhdGFzZXQuc3RhdHVzID0gXCJhZnRlclwiO1xuXG4gICAgbmV4dEdyb3VwLmRhdGFzZXQuc3RhdHVzID0gXCJiZWNvbWluZy1hY3RpdmUtZnJvbS1iZWZvcmVcIjtcblxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICBuZXh0R3JvdXAuZGF0YXNldC5zdGF0dXMgPSBcImFjdGl2ZVwiO1xuICAgICAgICBhY3RpdmVJbmRleCA9IG5leHRJbmRleDtcbiAgICB9KTtcbn1cbi8vIEJhY2sgYnV0dG9uIGhhbmRsZXJcbmNvbnN0IGhhbmRsZUJhY2tDbGljayA9ICgpID0+IHtcbiAgICBjb25zdCBuZXh0SW5kZXggPSBhY3RpdmVJbmRleCAtIDEgPj0gMCA/IGFjdGl2ZUluZGV4IC0gMSA6IGdyb3Vwcy5sZW5ndGggLSAxO1xuXG4gICAgY29uc3QgY3VycmVudEdyb3VwID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgW2RhdGEtaW5kZXg9XCIke2FjdGl2ZUluZGV4fVwiXWApLFxuICAgICAgICBuZXh0R3JvdXAgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGBbZGF0YS1pbmRleD1cIiR7bmV4dEluZGV4fVwiXWApO1xuXG4gICAgY3VycmVudEdyb3VwLmRhdGFzZXQuc3RhdHVzID0gXCJiZWZvcmVcIjtcblxuICAgIG5leHRHcm91cC5kYXRhc2V0LnN0YXR1cyA9IFwiYmVjb21pbmctYWN0aXZlLWZyb20tYWZ0ZXJcIjtcblxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICBuZXh0R3JvdXAuZGF0YXNldC5zdGF0dXMgPSBcImFjdGl2ZVwiO1xuICAgICAgICBhY3RpdmVJbmRleCA9IG5leHRJbmRleDtcbiAgICB9KTtcbn0iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=