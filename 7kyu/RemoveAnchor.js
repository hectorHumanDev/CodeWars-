// Complete the function/method so that it returns the url with anything after the anchor (#) removed.
// Examples

// "www.codewars.com#about" --> "www.codewars.com"
// "www.codewars.com?page=1" -->"www.codewars.com?page=1"


// =====================solution==========================


function removeUrlAnchor(url){
    let urlArray = url.split('')
    let removeIndex = urlArray.findIndex(e => e === '#') //--16
    return removeIndex === -1 ? url : urlArray.slice(0, removeIndex).join('')
  }


//   ==========================or==============================


function removeUrlAnchor(url){
    return url.split('#')[0]
  }


  console.log(removeUrlAnchor("www.codewars.com#about"))