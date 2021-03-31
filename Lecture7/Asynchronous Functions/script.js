// function delay(n, f) {
//   for (let i = 1; i <= n; i++) {
//     let x = new Date().getTime();
//     while (new Date().getTime() < 1000 + x) {}
//   }
//   f();
// }
// delay(100, () => {
//   console.log("Hello");
// });

setTimeout(() => {
  console.log("Hello");
}, 5000);
let x=setInterval(() => {
  console.log("Test");
}, 2000);

setTimeout(()=>{
    
})
 function toggleForm() {
            $("#selection-form").slideToggle('fast', function () {
                var $refineSearch = $("#refine-search");
                if ($refineSearch.attr('title') === "REFINE SEARCH") {
                    $refineSearch.attr('title', "[[#{CLOSEPANEL}]]");
                    $refineSearch.html("CLOSE PANEL");
                } else {
                    $refineSearch.attr('title', "[[#{RefineSearch}]]");
                    $refineSearch.html("REFINE SEARCH");
                }
            });
        }

