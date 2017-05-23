"use strict";$(function(){function a(){t.hide(),r.hide(),s.show(),p.show(),l.show()}function e(){return i[Math.floor(Math.random()*i.length)]}function c(){var a=h[g-1];return v=a.map(function(a){return q[a]})}function b(a){var e=a.replace(/\s/g,"").match(/^rgba?\((\d+),(\d+),(\d+)/i);return e&&4===e.length?"#"+("0"+parseInt(e[1],10).toString(16)).slice(-2)+("0"+parseInt(e[2],10).toString(16)).slice(-2)+("0"+parseInt(e[3],10).toString(16)).slice(-2):a}function d(){console.log("In play round",g);e();c(),console.log("roundArray",v),v.shuffle(),console.log("shuffledArray",y),p.each(function(a,e){$(e).css("backgroundColor",y[a])})}function f(a){var e=$(a.target).index(".square"),c=$(".square").length;0!==e&&e!==c-1&&(0===B?(k=$(this),m=k.css("background-color")):1===B&&(k.css("background-color",$(this).css("background-color")),$(this).css("background-color",m),B=-1,o()),B+=1)}function o(){var a=[];p.each(function(e,c){var b=$(c).css("backgroundColor");a.push(b)}),console.log("userRgb",a);var e=a.map(b);console.log("userSortedArray",e),console.log("roundArray",v),e.length===v.length&&e.every(function(a,e){return a===v[e]})?(console.log("It's a match, well done"),u.show(),alert("Round Complete, press Next Round to continue")):console.log("Not quite, have another go")}console.log("Igor, JavaScript' alive!");var n=($(".gameBoard"),$(".difficulty")),t=$(".easyButton"),r=$(".hardButton"),s=$(".resetButton"),u=$(".nextButton"),l=($(".quickTime"),$(".roundDisplay")),i=($(".soundOnOff"),[["#3db5f9","#48a8e8","#539ad7","#5e8dc6","#697fb5","#7472a4","#7e6493","#895782","#944a71","#9f3c60","#aa2f4f","#b5213e","#c0142d"],["#44f267","#4bdf68","#51cd69","#58ba6a","#5ea76b","#65956c","#6b826d","#726f6e","#795d6f","#7f4a70","#863771","#8c2572","#931273"],["#553e13","#5a3c1c","#5f3a25","#65382f","#6a3638","#6f3441","#74324b","#7a3054","#7f2e5d","#842c66","#8a2a6f","#8f2879","#942682"],["#5c2c2d","#623a35","#68483d","#6d5745","#73654e","#797356","#7e815e","#849066","#8a9e6e","#90ac77","#95ba7f","#9bc987","#a1d78f"],["#148ea9","#278faa","#3a90ab","#4d90ab","#6091ac","#7392ad","#8692ae","#9993ae","#ac94af","#bf95b0","#d295b1","#e596b1","#f897b2"],["#493582","#524586","#5b568b","#63668f","#6c7693","#758798","#7e979c","#86a7a0","#8fb8a5","#98c8a9","#a1d8ad","#a9e9b2","#b2f9b6"],["#6746f2","#7241e3","#7d3bd4","#8735c5","#9230b6","#9d2ba7","#a72597","#b21f88","#bd1a79","#c8156a","#d30f5b","#dd094c","#e8043d"],["#23184c","#321e4c","#40244d","#4f2a4d","#5e2f4d","#6c354d","#7b3b4e","#8a414e","#98474e","#a74d4e","#b6524e","#c4584f","#d35e4f"],["#78a0d8","#7ca1cd","#80a2c2","#84a4b7","#89a5ad","#8da6a2","#91a797","#95a98c","#99aa81","#9cab77","#a2ad6c","#a6ae61","#aaaf56"],["#1fe876","#29e268","#34dc60","#3ed658","#49d051","#53ca49","#5ec441","#68bd39","#72b731","#7db12a","#87ab22","#92a51a","#9c9f12"],["#3f4887","#4c4885","#5a4884","#674982","#754981","#82497f","#904a7e","#9d4a7c","#aa4a7a","#b84a79","#c54b77","#d34b76","#e04b74"],["#1a57e8","#255dd6","#3062c4","#3b68b3","#456da1","#50738f","#5b787d","#667e6b","#718459","#7b8948","#868f36","#919424","#929a12"],["#05a83e","#18ad4e","#2bb35e","#3fb86e","#52bd7e","#65c28e","#78c79e","#8ccdaf","#9fd2bf","#b2d7cf","#c5dddf","#d9e2ef","#ece7ff"],["#2fded8","#3ae0ca","#45e2bb","#50e4ad","#5be69f","#66e890","#71ea82","#7beb74","#86ed65","#91ef57","#9cf149","#a7f33a","#b2f52c"],["#462e75","#523d73","#5d4d70","#695c6e","#746b6c","#807b69","#8b8a67","#979965","#a3a962","#aeb860","#bac75e","#c5d75b","#d1e659"],["#5ddac3","#69d3a7","#76cc9a","#82c48e","#8fbd81","#9bb674","#a7af68","#b4a85b","#c0a14f","#cd9a42","#d99236","#c68b2a","#f2841d"],["#052e3d","#123c4c","#20495c","#2d576b","#3b647a","#48728a","#558099","#638da8","#709bb8","#7ea8c7","#8bb6d6","#99c3e6","#a6d1f5"],["#2c08ba","#380baf","#440ea3","#501298","#5c158d","#661881","#741b76","#801e6b","#8c215f","#982554","#a42849","#b02b3d","#bc2e32"],["#06bf79","#12b37d","#1fa880","#2b9c84","#389187","#44858b","#517a8e","#5d6e91","#696295","#765798","#824b9c","#8f40a0","#9b34a3"],["#3d770e","#4a8214","#578e1b","#649921","#72a427","#7fb02d","#8cbb34","#99c63a","#a6d240","#b4dd46","#c1e84d","#cef435","#dbff59"],["#5ca10e","#679b16","#72941d","#7d8e25","#88872c","#938134","#9e7a3b","#a87443","#b36d4b","#be6752","#c9605a","#d45a61","#df5369"],["#7bc9e5","#82c5d5","#8ac2c6","#91beb7","#98bba7","#9fb797","#a7b488","#aeb078","#b5ac69","#bca95a","#c4a54a","#cba32b","#d29e2b"],["#71d72f","#7bc82e","#85b92c","#8faa2b","#999b2a","#a38c28","#ad7d27","#b66d26","#c05e24","#ca4f23","#d44022","#de3120","#e8221f"],["#d5870b","#c58514","#b5821d","#a58026","#957e2f","#857b38","#747941","#647749","#547452","#44725b","#347064","#246d6d","#146b76"],["#f23f8e","#e4408d","#d6418b","#c8438a","#ba4489","#ac4588","#9e4787","#8f4885","#814984","#734a83","#654b81","#574d80","#494e7f"],["#dab2f6","#cfaae2","#c4a2ce","#b99bb9","#ae93a5","#a38b91","#98837d","#8e7b68","#837354","#786b40","#6d642b","#625c17","#575403"],["#da87ce","#d28dc0","#ca93b2","#c299a4","#ba9f96","#b29588","#abab7a","#93b26b","#9bb85d","#93be4f","#8bc441","#83ca33","#7bd025"],["#f89951","#ed915b","#e28a66","#d78270","#cc7a7a","#c17285","#b66b8f","#ab6399","#a05ba4","#9553ae","#8a4bb8","#7f44c3","#743ccd"],["#f5d2bf","#e6c3c1","#d7b3c4","#c8a4c7","#ba94c9","#ab84cb","#9c75ce","#8d65d1","#7e56d3","#6f47d5","#6137d8","#5228da","#4318dd"],["#8abc18","#81b32a","#79ab3b","#70a24b","#67995f","#5f9171","#568882","#4d7f94","#4577a6","#3c6eb8","#3365ca","#2b5ddb","#2254ed"],["#b6c506","#abb915","#a1ae24","#96a233","#8b9642","#818a51","#767e61","#6b7370","#61677f","#565b8e","#4b4f9d","#4144ac","#3638bb"]]),h=[[0,3,6,9,12],[0,3,5,7,9,12],[0,1,3,6,9,11,12],[0,1,3,5,7,9,11,12],[0,1,3,4,6,8,9,11,12],[0,1,2,4,5,7,8,10,11,12],[0,1,2,3,5,6,7,9,10,11,12],[0,1,2,3,4,5,7,8,9,10,11,12],[0,1,2,3,4,5,6,7,8,9,10,11,12]],g=1,p=($(".round"),$(".square")),v=null,y=[],k=void 0,m=null,B=0;s.hide(),u.hide(),p.hide(),l.hide();for(var I=0;I<6;I++);n.on("click",function(e){console.log("clicked"),$(e.target).hasClass("easyButton")?(a(),d()):$(e.target).hasClass("hardButton")&&(g+=4,a())});var q=e();console.log(q),Array.prototype.shuffle=function(){for(var a=1;a<this.length-1;a++)y.push(this[a]);return y.sort(function(){return.5-Math.random()}),y.push(this[this.length-1]),y.unshift(this[0]),y},p.on("click",f)});
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5qcyJdLCJuYW1lcyI6WyIkIiwiZ2FtZVN0YXJ0Iiwic2h1ZmZsZWRBcnJheSIsIiRoYXJkQnV0dG9uIiwiaGlkZSIsIiRyZXNldEJ1dHRvbiIsInNob3ciLCJpbmRleCIsImxlbmd0aCIsIk1hdGgiLCJmbG9vciIsInJhbmRvbSIsImNvbG9yUGFsZXR0ZSIsInNlcXVlbmNlTWF0Y2hlciIsImNvdW50IiwiZWxlbWVudFNlbGVjdG9yIiwicm91bmROdW1iZXIiLCJjaGVja0NvbXBsZXRlIiwicmFuZG9tQ29sb3JzQXJyIiwiaXRlbSIsInJnYlRvSGV4IiwidXNlclJnYiIsInJnYiIsInJlcGxhY2UiLCJtYXRjaCIsImNvbnNvbGUiLCJsb2ciLCJwYXJzZUludCIsInRvU3RyaW5nIiwic2xpY2UiLCJ1c2VyU29ydGVkQXJyYXkiLCJwbGF5Um91bmQiLCJjb2xvcnMiLCJhbGVydCIsInJvdW5kQXJyYXkiLCIkZ2FtZVNxdWFyZXMiLCJlYWNoIiwiaWR4IiwiZWwiLCJjc3MiLCJjaGFuZ2VDb2xvciIsImUiLCJ0YXJnZXQiLCJwcmV2IiwidGhpcyIsInByZXZjb2xvciIsImVsZW1lbnQiLCJiYWNrZ3JvdW5kQ29sb3VyIiwicHVzaCIsIm1hcCIsImV2ZXJ5IiwidiIsImkiLCIkbmV4dEJ1dHRvbiIsIiRkaWZmaWN1bHR5IiwiJGdhbWVib2FyZCIsIiRlYXN5QnV0dG9uIiwiJHNvdW5kIiwiJHF1aWNrVGltZSIsInJvdW5kQ291bnRlciIsInF1aWNrZXN0VGltZSIsIiR3aGljaFJvdW5kIiwiaGFzQ2xhc3MiLCJzZXF1ZW5jZUFycmF5Iiwib24iLCJzaHVmZmxlIl0sIm1hcHBpbmdzIjoiWUFBQUEsR0FBRSxXQW9JRyxRQUFBQyxLQUNEQyxFQUFBQSxPQUNFQyxFQUFPQyxPQUNSQyxFQUZEQyxPQUdBSixFQUFBQSxPQUNBQSxFQUFBQSxPQTZCQSxRQUFNSyxLQUNOLE1BQU1DLEdBQVdDLEtBQUZDLE1BQWFGLEtBQTVCRyxTQUFBQyxFQUFBSixTQU9JUixR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LFVBQUEsVUFBQSxVQUFBLFVBQUEsVUFBQSxVQUFBLFVBQUEsVUFBQSxVQUFBLFVBQUEsWUFDQSxVQUFhaEIsVUFBYixVQUFBLFVBQUEsVUFBQSxVQUFBLFVBQUEsVUFBQSxVQUFBLFVBQUEsVUFBQSxVQUFBLFlBQ0EsVUFBSW1DLFVBQWlCLFVBQXJCLFVBQUEsVUFBQSxVQUFBLFVBQUEsVUFBQSxVQUFBLFVBQUEsVUFBQSxVQUFBLFlBQ0EsVUFBSXlCLFVBQUosVUFBQSxVQUFBLFVBQUEsVUFBQSxVQUFBLFVBQUEsVUFBQSxVQUFBLFVBQUEsVUFBQSxZQUNBLFVBQUkxQixVQUFKLFVBQUEsVUFBQSxVQUFBLFVBQUEsVUFBQSxVQUFBLFVBQUEsVUFBQSxVQUFBLFVBQUEsWUFDQSxVQUFJaEMsVUFBSixVQUFBLFVBQUEsVUFBQSxVQUFBLFVBQUEsVUFBQSxVQUFBLFVBQUEsVUFBQSxVQUFBLFlBQ0EsVUFBSXlDLFVBQUosVUFBQSxVQUFBLFVBQUEsVUFBQSxVQUFBLFVBQUEsVUFBQSxVQUFBLFVBQUEsVUFBQSxZQUFBLFVBQVVFLFVBQVYsVUFBQSxVQUFBLFVBQUEsVUFBQSxVQUFBLFVBQUEsVUFBQSxVQUFBLFVBQUEsVUFBQSxZQUNBLFVBQUEsVUFBQSxVQUFBLFVBQUEsVUFBQSxVQUFBLFVBQUEsVUFBQSxVQUFBLFVBQUEsVUFBQSxVQUFBLFlBdENHLFVBQVcsVUFBVyxVQUFXLFVBQVcsVUFBVyxVQUFXLFVBQVcsVUFBVyxVQUFXLFVBQVcsVUFBVyxVQUFXLFlBeUN2SXhDLFVBQWFELFVBQWIsVUFBQSxVQUFBLFVBQUEsVUFBQSxVQUFBLFVBQUEsVUFBQSxVQUFBLFVBQUEsVUFBQSxZQUNBaUQsVUFBWWpELFVBQVosVUFBQSxVQUFBLFVBQUEsVUFBQSxVQUFBLFVBQUEsVUFBQSxVQUFBLFVBQUEsVUFBQSxZQUNBK0IsVUFBYS9CLFVBQWIsVUFBQSxVQUFBLFVBQUEsVUFBQSxVQUFBLFVBQUEsVUFBQSxVQUFBLFVBQUEsVUFBQSxZQUNBeUQsVUFBWXpELFVBQVosVUFBQSxVQUFBLFVBQUEsVUFBQSxVQUFBLFVBQUEsVUFBQSxVQUFBLFVBQUEsVUFBQSxZQXZDRyxVQUFXLFVBQVcsVUFBVyxVQUFXLFVBQVcsVUFBVyxVQUFXLFVBQVcsVUFBVyxVQUFXLFVBQVcsVUFBVyxZQXlDdkksVUFBQSxVQUF1QmdELFVBRXRCLFVBQUEsVUFBQSxVQUFBLFVBQUEsVUFBQSxVQUFBLFVBQUEsVUFBQSxVQUFBLFlBekNFLFVBQVcsVUFBVyxVQUFXLFVBQVcsVUFBVyxVQUFXLFVBQVcsVUFBVyxVQUFXLFVBQVcsVUFBVyxVQUFXLFlBNEN2SSxVQUFTbkQsVUFBYSxVQUFBLFVBQUEsVUFBQSxVQUFBLFVBQUEsVUFBQSxVQUFBLFVBQUEsVUFBQSxVQUFBLFlBQ3BCdUQsVUFBWXBELFVBQVosVUFBQSxVQUFBLFVBQUEsVUFBQSxVQUFBLFVBQUEsVUFBQSxVQUFBLFVBQUEsVUFBQSxZQUNBRCxVQUFZQyxVQUFaLFVBQUEsVUFBQSxVQUFBLFVBQUEsVUFBQSxVQUFBLFVBQUEsVUFBQSxVQUFBLFVBQUEsWUFDQUMsVUFBQUEsVUFBQSxVQUFBLFVBQUEsVUFBQSxVQUFBLFVBQUEsVUFBQSxVQUFBLFVBQUEsVUFBQSxVQUFBLFlBQ0E4QixVQUFBQSxVQUFBLFVBQUEsVUFBQSxVQUFBLFVBQUEsVUFBQSxVQUFBLFVBQUEsVUFBQSxVQUFBLFVBQUEsWUFDQTBCLFVBQVl2RCxVQUFaLFVBQUEsVUFBQSxVQUFBLFVBQUEsVUFBQSxVQUFBLFVBQUEsVUFBQSxVQUFBLFVBQUEsWUFDRCxVQUFBLFVBQUEsVUFBQSxVQUFBLFVBQUEsVUFBQSxVQUFBLFVBQUEsVUFBQSxVQUFBLFVBQUEsVUFBQSxZQTFDRSxVQUFXLFVBQVcsVUFBVyxVQUFXLFVBQVcsVUFBVyxVQUFXLFVBQVcsVUFBVyxVQUFXLFVBQVcsVUFBVyxhQUdqSVMsSUE0Q0osRUFBSWYsRUFBRXlDLEVBQUVDLEVBQUFBLEtBMUNQLEVBQUcsRUFBRyxFQUFHLEVBQUcsRUFBRyxLQTRDZHpDLEVBQUFBLEVBQUFBLEVBQUFBLEVBQUFBLEVBQUFBLEdBQUFBLEtBQ0E4QixFQUFBQSxFQUFBQSxFQUFBQSxFQUFBQSxFQUFBQSxFQUFBQSxHQUFBQSxLQUhGLEVBQUEsRUFLTyxFQUFBLEVBQU1VLEVBQUVDLEVBQUFBLEVBQUosR0FBWW9CLEtBQ3JCLEVBQUEsRUFBQSxFQUFBLEVBQUEsRUFBQSxFQUFBLEVBQUEsR0FBQSxHQUFBLEtBQ0EsRUFBQSxFQUFBLEVBQUEsRUFBQSxFQUFBLEVBQUEsRUFBQSxFQUFBLEdBQUEsR0FBQSxLQUNBLEVBQUEsRUFBQSxFQUFBLEVBQUEsRUFBQSxFQUFBLEVBQUEsRUFBQSxFQUFBLEdBQUEsR0FBQSxLQUNBLEVBQUEsRUFBQSxFQUFBLEVBQUEsRUFBQSxFQUFBLEVBQUEsRUFBQSxFQUFBLEVBQUEsR0FBQSxHQUFBLEtBSUQ5QyxFQUFBLEVBMUNDbUIsR0EwQkpuQyxFQUFBLFVBMUJtQkEsRUFBRSxZQStDbkJrQyxFQUFPdEIsS0FDUlYsS0E1Q0d5QyxNQUFBQSxHQUFNRSxFQUFZLEtBOENsQjNCLEVBQUFBLENBSUpiLEdBQVNRLE9BQ1B3QyxFQUFNVSxPQUNONUIsRUFBT0QsT0FDTDJCLEVBQU8zQyxNQUVWLEtBQUEsR0FBQWtDLEdBQUEsRUFBQUEsRUFBQSxFQUFBQSxLQWpDREUsRUFBWVUsR0FBRyxRQUFTLFNBQUN2QixHQWlEekJoQixRQUFTTCxJQUFBQSxXQUVQcEIsRUFBQXlDLEVBQVFuQixRQUFPQSxTQUFBLGVBOUNickIsSUFxREo4QixLQUVFL0IsRUFBWXlDLEVBQUFDLFFBQUFvQixTQUFpQjlDLGdCQUs3QlMsR0FBNkJ2QixFQUM3QmlDLE1BV0lRLElBQUFBLEdBQUFYLEdBQ0FhLFNBQUFBLElBQUFBLEdBV05WLE1BQUFBLFVBQWdCOEIsUUFBU3pCLFdBcER2QixJQUFJLEdBQUlZLEdBQUUsRUFBR0EsRUFBRVIsS0FBS3BDLE9BQU8sRUFBRzRDLElBc0RoQ2xELEVBQVNlLEtBQVQyQixLQUEwQlEsR0FPdEIsT0FMRmpCLEdBQWFDLEtBQUssV0FDaEIsTUFBQSxHQUFBM0IsS0FBQUUsV0FFQVQsRUFBQThDLEtBQUFKLEtBQUFBLEtBQUFwQyxPQUFBLElBQ0FOLEVBQU02QyxRQUFBQSxLQUFxQkQsSUFDM0I1QyxHQTJGTmlDLEVBQUE2QixHQUFBLFFBQUF4QiIsImZpbGUiOiJhcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyIkKCgpID0+IHtcblxuICBjb25zb2xlLmxvZygnSWdvciwgSmF2YVNjcmlwdFxcJyBhbGl2ZSEnKTtcblxuICAvLyBjb25zdCBhdWRpbyA9ICQoJ2F1ZGlvJylbMF07XG4gIC8vIGF1ZGlvLnNyYyA9ICcuLi9hc3NldHMvaHVlX2h1bnRlcl9iYWNrZ3JvdW5kLm1wMyc7XG4gIC8vIGF1ZGlvLnBsYXkoKTtcblxuICBjb25zdCAkZ2FtZWJvYXJkID0gJCgnLmdhbWVCb2FyZCcpO1xuICBjb25zdCAkZGlmZmljdWx0eSA9ICQoJy5kaWZmaWN1bHR5Jyk7XG4gIGNvbnN0ICRlYXN5QnV0dG9uID0gJCgnLmVhc3lCdXR0b24nKTtcbiAgY29uc3QgJGhhcmRCdXR0b24gPSAkKCcuaGFyZEJ1dHRvbicpO1xuICBjb25zdCAkcmVzZXRCdXR0b24gPSAkKCcucmVzZXRCdXR0b24nKTtcbiAgY29uc3QgJG5leHRCdXR0b24gPSAkKCcubmV4dEJ1dHRvbicpO1xuICBjb25zdCAkcXVpY2tUaW1lID0gJCgnLnF1aWNrVGltZScpO1xuICBjb25zdCAkd2hpY2hSb3VuZCA9ICQoJy5yb3VuZERpc3BsYXknKTtcbiAgY29uc3QgJHNvdW5kID0gJCgnLnNvdW5kT25PZmYnKTtcblxuICBjb25zdCBjb2xvclBhbGV0dGUgPSBbXG4gICAgWycjM2RiNWY5JywgJyM0OGE4ZTgnLCAnIzUzOWFkNycsICcjNWU4ZGM2JywgJyM2OTdmYjUnLCAnIzc0NzJhNCcsICcjN2U2NDkzJywgJyM4OTU3ODInLCAnIzk0NGE3MScsICcjOWYzYzYwJywgJyNhYTJmNGYnLCAnI2I1MjEzZScsICcjYzAxNDJkJ10sXG4gICAgWycjNDRmMjY3JywgJyM0YmRmNjgnLCAnIzUxY2Q2OScsICcjNThiYTZhJywgJyM1ZWE3NmInLCAnIzY1OTU2YycsICcjNmI4MjZkJywgJyM3MjZmNmUnLCAnIzc5NWQ2ZicsICcjN2Y0YTcwJywgJyM4NjM3NzEnLCAnIzhjMjU3MicsICcjOTMxMjczJ10sXG4gICAgWycjNTUzZTEzJywgJyM1YTNjMWMnLCAnIzVmM2EyNScsICcjNjUzODJmJywgJyM2YTM2MzgnLCAnIzZmMzQ0MScsICcjNzQzMjRiJywgJyM3YTMwNTQnLCAnIzdmMmU1ZCcsICcjODQyYzY2JywgJyM4YTJhNmYnLCAnIzhmMjg3OScsICcjOTQyNjgyJ10sXG4gICAgWycjNWMyYzJkJywgJyM2MjNhMzUnLCAnIzY4NDgzZCcsICcjNmQ1NzQ1JywgJyM3MzY1NGUnLCAnIzc5NzM1NicsICcjN2U4MTVlJywgJyM4NDkwNjYnLCAnIzhhOWU2ZScsICcjOTBhYzc3JywgJyM5NWJhN2YnLCAnIzliYzk4NycsICcjYTFkNzhmJ10sXG4gICAgWycjMTQ4ZWE5JywgJyMyNzhmYWEnLCAnIzNhOTBhYicsICcjNGQ5MGFiJywgJyM2MDkxYWMnLCAnIzczOTJhZCcsICcjODY5MmFlJywgJyM5OTkzYWUnLCAnI2FjOTRhZicsICcjYmY5NWIwJywgJyNkMjk1YjEnLCAnI2U1OTZiMScsICcjZjg5N2IyJ10sXG4gICAgWycjNDkzNTgyJywgJyM1MjQ1ODYnLCAnIzViNTY4YicsICcjNjM2NjhmJywgJyM2Yzc2OTMnLCAnIzc1ODc5OCcsICcjN2U5NzljJywgJyM4NmE3YTAnLCAnIzhmYjhhNScsICcjOThjOGE5JywgJyNhMWQ4YWQnLCAnI2E5ZTliMicsICcjYjJmOWI2J10sXG4gICAgWycjNjc0NmYyJywgJyM3MjQxZTMnLCAnIzdkM2JkNCcsICcjODczNWM1JywgJyM5MjMwYjYnLCAnIzlkMmJhNycsICcjYTcyNTk3JywgJyNiMjFmODgnLCAnI2JkMWE3OScsICcjYzgxNTZhJywgJyNkMzBmNWInLCAnI2RkMDk0YycsICcjZTgwNDNkJ10sXG4gICAgWycjMjMxODRjJywgJyMzMjFlNGMnLCAnIzQwMjQ0ZCcsICcjNGYyYTRkJywgJyM1ZTJmNGQnLCAnIzZjMzU0ZCcsICcjN2IzYjRlJywgJyM4YTQxNGUnLCAnIzk4NDc0ZScsICcjYTc0ZDRlJywgJyNiNjUyNGUnLCAnI2M0NTg0ZicsICcjZDM1ZTRmJ10sXG4gICAgWycjNzhhMGQ4JywgJyM3Y2ExY2QnLCAnIzgwYTJjMicsICcjODRhNGI3JywgJyM4OWE1YWQnLCAnIzhkYTZhMicsICcjOTFhNzk3JywgJyM5NWE5OGMnLCAnIzk5YWE4MScsICcjOWNhYjc3JywgJyNhMmFkNmMnLCAnI2E2YWU2MScsICcjYWFhZjU2J10sXG4gICAgWycjMWZlODc2JywgJyMyOWUyNjgnLCAnIzM0ZGM2MCcsICcjM2VkNjU4JywgJyM0OWQwNTEnLCAnIzUzY2E0OScsICcjNWVjNDQxJywgJyM2OGJkMzknLCAnIzcyYjczMScsICcjN2RiMTJhJywgJyM4N2FiMjInLCAnIzkyYTUxYScsICcjOWM5ZjEyJ10sXG4gICAgWycjM2Y0ODg3JywgJyM0YzQ4ODUnLCAnIzVhNDg4NCcsICcjNjc0OTgyJywgJyM3NTQ5ODEnLCAnIzgyNDk3ZicsICcjOTA0YTdlJywgJyM5ZDRhN2MnLCAnI2FhNGE3YScsICcjYjg0YTc5JywgJyNjNTRiNzcnLCAnI2QzNGI3NicsICcjZTA0Yjc0J10sXG4gICAgWycjMWE1N2U4JywgJyMyNTVkZDYnLCAnIzMwNjJjNCcsICcjM2I2OGIzJywgJyM0NTZkYTEnLCAnIzUwNzM4ZicsICcjNWI3ODdkJywgJyM2NjdlNmInLCAnIzcxODQ1OScsICcjN2I4OTQ4JywgJyM4NjhmMzYnLCAnIzkxOTQyNCcsICcjOTI5YTEyJ10sXG4gICAgWycjMDVhODNlJywgJyMxOGFkNGUnLCAnIzJiYjM1ZScsICcjM2ZiODZlJywgJyM1MmJkN2UnLCAnIzY1YzI4ZScsICcjNzhjNzllJywgJyM4Y2NkYWYnLCAnIzlmZDJiZicsICcjYjJkN2NmJywgJyNjNWRkZGYnLCAnI2Q5ZTJlZicsICcjZWNlN2ZmJ10sXG4gICAgWycjMmZkZWQ4JywgJyMzYWUwY2EnLCAnIzQ1ZTJiYicsICcjNTBlNGFkJywgJyM1YmU2OWYnLCAnIzY2ZTg5MCcsICcjNzFlYTgyJywgJyM3YmViNzQnLCAnIzg2ZWQ2NScsICcjOTFlZjU3JywgJyM5Y2YxNDknLCAnI2E3ZjMzYScsICcjYjJmNTJjJ10sXG4gICAgWycjNDYyZTc1JywgJyM1MjNkNzMnLCAnIzVkNGQ3MCcsICcjNjk1YzZlJywgJyM3NDZiNmMnLCAnIzgwN2I2OScsICcjOGI4YTY3JywgJyM5Nzk5NjUnLCAnI2EzYTk2MicsICcjYWViODYwJywgJyNiYWM3NWUnLCAnI2M1ZDc1YicsICcjZDFlNjU5J10sXG4gICAgWycjNWRkYWMzJywgJyM2OWQzYTcnLCAnIzc2Y2M5YScsICcjODJjNDhlJywgJyM4ZmJkODEnLCAnIzliYjY3NCcsICcjYTdhZjY4JywgJyNiNGE4NWInLCAnI2MwYTE0ZicsICcjY2Q5YTQyJywgJyNkOTkyMzYnLCAnI2M2OGIyYScsICcjZjI4NDFkJ10sXG4gICAgWycjMDUyZTNkJywgJyMxMjNjNGMnLCAnIzIwNDk1YycsICcjMmQ1NzZiJywgJyMzYjY0N2EnLCAnIzQ4NzI4YScsICcjNTU4MDk5JywgJyM2MzhkYTgnLCAnIzcwOWJiOCcsICcjN2VhOGM3JywgJyM4YmI2ZDYnLCAnIzk5YzNlNicsICcjYTZkMWY1J10sXG4gICAgWycjMmMwOGJhJywgJyMzODBiYWYnLCAnIzQ0MGVhMycsICcjNTAxMjk4JywgJyM1YzE1OGQnLCAnIzY2MTg4MScsICcjNzQxYjc2JywgJyM4MDFlNmInLCAnIzhjMjE1ZicsICcjOTgyNTU0JywgJyNhNDI4NDknLCAnI2IwMmIzZCcsICcjYmMyZTMyJ10sXG4gICAgWycjMDZiZjc5JywgJyMxMmIzN2QnLCAnIzFmYTg4MCcsICcjMmI5Yzg0JywgJyMzODkxODcnLCAnIzQ0ODU4YicsICcjNTE3YThlJywgJyM1ZDZlOTEnLCAnIzY5NjI5NScsICcjNzY1Nzk4JywgJyM4MjRiOWMnLCAnIzhmNDBhMCcsICcjOWIzNGEzJ10sXG4gICAgWycjM2Q3NzBlJywgJyM0YTgyMTQnLCAnIzU3OGUxYicsICcjNjQ5OTIxJywgJyM3MmE0MjcnLCAnIzdmYjAyZCcsICcjOGNiYjM0JywgJyM5OWM2M2EnLCAnI2E2ZDI0MCcsICcjYjRkZDQ2JywgJyNjMWU4NGQnLCAnI2NlZjQzNScsICcjZGJmZjU5J10sXG4gICAgWycjNWNhMTBlJywgJyM2NzliMTYnLCAnIzcyOTQxZCcsICcjN2Q4ZTI1JywgJyM4ODg3MmMnLCAnIzkzODEzNCcsICcjOWU3YTNiJywgJyNhODc0NDMnLCAnI2IzNmQ0YicsICcjYmU2NzUyJywgJyNjOTYwNWEnLCAnI2Q0NWE2MScsICcjZGY1MzY5J10sXG4gICAgWycjN2JjOWU1JywgJyM4MmM1ZDUnLCAnIzhhYzJjNicsICcjOTFiZWI3JywgJyM5OGJiYTcnLCAnIzlmYjc5NycsICcjYTdiNDg4JywgJyNhZWIwNzgnLCAnI2I1YWM2OScsICcjYmNhOTVhJywgJyNjNGE1NGEnLCAnI2NiYTMyYicsICcjZDI5ZTJiJ10sXG4gICAgWycjNzFkNzJmJywgJyM3YmM4MmUnLCAnIzg1YjkyYycsICcjOGZhYTJiJywgJyM5OTliMmEnLCAnI2EzOGMyOCcsICcjYWQ3ZDI3JywgJyNiNjZkMjYnLCAnI2MwNWUyNCcsICcjY2E0ZjIzJywgJyNkNDQwMjInLCAnI2RlMzEyMCcsICcjZTgyMjFmJ10sXG4gICAgWycjZDU4NzBiJywgJyNjNTg1MTQnLCAnI2I1ODIxZCcsICcjYTU4MDI2JywgJyM5NTdlMmYnLCAnIzg1N2IzOCcsICcjNzQ3OTQxJywgJyM2NDc3NDknLCAnIzU0NzQ1MicsICcjNDQ3MjViJywgJyMzNDcwNjQnLCAnIzI0NmQ2ZCcsICcjMTQ2Yjc2J10sXG4gICAgWycjZjIzZjhlJywgJyNlNDQwOGQnLCAnI2Q2NDE4YicsICcjYzg0MzhhJywgJyNiYTQ0ODknLCAnI2FjNDU4OCcsICcjOWU0Nzg3JywgJyM4ZjQ4ODUnLCAnIzgxNDk4NCcsICcjNzM0YTgzJywgJyM2NTRiODEnLCAnIzU3NGQ4MCcsICcjNDk0ZTdmJ10sXG4gICAgWycjZGFiMmY2JywgJyNjZmFhZTInLCAnI2M0YTJjZScsICcjYjk5YmI5JywgJyNhZTkzYTUnLCAnI2EzOGI5MScsICcjOTg4MzdkJywgJyM4ZTdiNjgnLCAnIzgzNzM1NCcsICcjNzg2YjQwJywgJyM2ZDY0MmInLCAnIzYyNWMxNycsICcjNTc1NDAzJ10sXG4gICAgWycjZGE4N2NlJywgJyNkMjhkYzAnLCAnI2NhOTNiMicsICcjYzI5OWE0JywgJyNiYTlmOTYnLCAnI2IyOTU4OCcsICcjYWJhYjdhJywgJyM5M2IyNmInLCAnIzliYjg1ZCcsICcjOTNiZTRmJywgJyM4YmM0NDEnLCAnIzgzY2EzMycsICcjN2JkMDI1J10sXG4gICAgWycjZjg5OTUxJywgJyNlZDkxNWInLCAnI2UyOGE2NicsICcjZDc4MjcwJywgJyNjYzdhN2EnLCAnI2MxNzI4NScsICcjYjY2YjhmJywgJyNhYjYzOTknLCAnI2EwNWJhNCcsICcjOTU1M2FlJywgJyM4YTRiYjgnLCAnIzdmNDRjMycsICcjNzQzY2NkJ10sXG4gICAgWycjZjVkMmJmJywgJyNlNmMzYzEnLCAnI2Q3YjNjNCcsICcjYzhhNGM3JywgJyNiYTk0YzknLCAnI2FiODRjYicsICcjOWM3NWNlJywgJyM4ZDY1ZDEnLCAnIzdlNTZkMycsICcjNmY0N2Q1JywgJyM2MTM3ZDgnLCAnIzUyMjhkYScsICcjNDMxOGRkJ10sXG4gICAgWycjOGFiYzE4JywgJyM4MWIzMmEnLCAnIzc5YWIzYicsICcjNzBhMjRiJywgJyM2Nzk5NWYnLCAnIzVmOTE3MScsICcjNTY4ODgyJywgJyM0ZDdmOTQnLCAnIzQ1NzdhNicsICcjM2M2ZWI4JywgJyMzMzY1Y2EnLCAnIzJiNWRkYicsICcjMjI1NGVkJ10sXG4gICAgWycjYjZjNTA2JywgJyNhYmI5MTUnLCAnI2ExYWUyNCcsICcjOTZhMjMzJywgJyM4Yjk2NDInLCAnIzgxOGE1MScsICcjNzY3ZTYxJywgJyM2YjczNzAnLCAnIzYxNjc3ZicsICcjNTY1YjhlJywgJyM0YjRmOWQnLCAnIzQxNDRhYycsICcjMzYzOGJiJ11cbiAgXTtcblxuICBjb25zdCBlbGVtZW50U2VsZWN0b3IgPSBbXG4gICAgWzAsIDMsIDYsIDksIDEyXSxcbiAgICBbMCwgMywgNSwgNywgOSwgMTJdLFxuICAgIFswLCAxLCAzLCA2LCA5LCAxMSwgMTJdLFxuICAgIFswLCAxLCAzLCA1LCA3LCA5LCAxMSwgMTJdLFxuICAgIFswLCAxLCAzLCA0LCA2LCA4LCA5LCAxMSwgMTJdLFxuICAgIFswLCAxLCAyLCA0LCA1LCA3LCA4LCAxMCwgMTEsIDEyXSxcbiAgICBbMCwgMSwgMiwgMywgNSwgNiwgNywgOSwgMTAsIDExLCAxMl0sXG4gICAgWzAsIDEsIDIsIDMsIDQsIDUsIDcsIDgsIDksIDEwLCAxMSwgMTJdLFxuICAgIFswLCAxLCAyLCAzLCA0LCA1LCA2LCA3LCA4LCA5LCAxMCwgMTEsIDEyXVxuICBdO1xuXG4gIGxldCByb3VuZENvdW50ZXIgPSAxO1xuICBsZXQgcm91bmROdW1iZXIgPSAxO1xuICBsZXQgJHJvdW5kID0gJCgnLnJvdW5kJyk7XG4gIGxldCAkZ2FtZVNxdWFyZXMgPSAkKCcuc3F1YXJlJyk7XG4gIGxldCBxdWlja2VzdFRpbWUgPSBudWxsO1xuICBsZXQgcm91bmRBcnJheSA9IG51bGw7XG4gIGxldCBzaHVmZmxlZEFycmF5ID0gW107XG4gIGxldCBwcmV2LCBwcmV2Y29sb3IgPSBudWxsO1xuICBsZXQgY291bnQgPSAwO1xuXG5cbiAgJHJlc2V0QnV0dG9uLmhpZGUoKTtcbiAgJG5leHRCdXR0b24uaGlkZSgpO1xuICAkZ2FtZVNxdWFyZXMuaGlkZSgpO1xuICAkd2hpY2hSb3VuZC5oaWRlKCk7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCA2OyBpKyspIHtcblxuICB9XG5cblxuICBmdW5jdGlvbiBnYW1lU3RhcnQgKCkge1xuICAgICRlYXN5QnV0dG9uLmhpZGUoKTtcbiAgICAkaGFyZEJ1dHRvbi5oaWRlKCk7XG4gICAgJHJlc2V0QnV0dG9uLnNob3coKTtcbiAgICAkZ2FtZVNxdWFyZXMuc2hvdygpO1xuICAgICR3aGljaFJvdW5kLnNob3coKTtcbiAgfVxuXG4gICRkaWZmaWN1bHR5Lm9uKCdjbGljaycsIChlKSA9PiB7XG4gICAgY29uc29sZS5sb2coJ2NsaWNrZWQnKTtcblxuICAgIGlmICgkKGUudGFyZ2V0KS5oYXNDbGFzcygnZWFzeUJ1dHRvbicpKSB7XG4gICAgICBcbiAgICAgIGdhbWVTdGFydCgpO1xuICAgICAgcGxheVJvdW5kKCk7XG5cbiAgICB9IGVsc2UgaWYgKCQoZS50YXJnZXQpLmhhc0NsYXNzKCdoYXJkQnV0dG9uJykpe1xuICAgICAgLy8gJGdhbWVCb2FyZC5hcHBlbmQoJzxkaXY+PC9kaXY+JykuYWRkQ2xhc3MoJ3NxdWFyZScpO1xuICAgICAgLy8gJGdhbWVCb2FyZC5hcHBlbmQoJzxkaXY+PC9kaXY+JykuYWRkQ2xhc3MoJ3NxdWFyZScpO1xuICAgICAgLy8gJGdhbWVCb2FyZC5hcHBlbmQoJzxkaXY+PC9kaXY+JykuYWRkQ2xhc3MoJ3NxdWFyZScpO1xuICAgICAgLy8gJGdhbWVCb2FyZC5hcHBlbmQoJzxkaXY+PC9kaXY+JykuYWRkQ2xhc3MoJ3NxdWFyZScpO1xuICAgICAgcm91bmROdW1iZXIgPSByb3VuZE51bWJlciArIDQ7XG4gICAgICBnYW1lU3RhcnQoKTtcbiAgICAgIC8vIHBsYXlSb3VuZCgpO1xuICAgIH1cbiAgfSk7XG5cblxuICBmdW5jdGlvbiBjb2xvcnMoKSB7XG4gICAgcmV0dXJuIGNvbG9yUGFsZXR0ZVtNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkqY29sb3JQYWxldHRlLmxlbmd0aCldO1xuICB9XG5cbiAgbGV0IHJhbmRvbUNvbG9yc0FyciA9IGNvbG9ycygpO1xuICBjb25zb2xlLmxvZyhyYW5kb21Db2xvcnNBcnIpO1xuXG5cbiAgZnVuY3Rpb24gc2VxdWVuY2VNYXRjaGVyKCkge1xuICAgIGNvbnN0IHNlcXVlbmNlQXJyYXkgPSBlbGVtZW50U2VsZWN0b3Jbcm91bmROdW1iZXItMV07XG4gICAgcmV0dXJuIHJvdW5kQXJyYXkgPSBzZXF1ZW5jZUFycmF5Lm1hcChmdW5jdGlvbihpdGVtKSB7XG4gICAgICByZXR1cm4gcmFuZG9tQ29sb3JzQXJyW2l0ZW1dO1xuICAgIH0pO1xuICB9XG5cblxuICBBcnJheS5wcm90b3R5cGUuc2h1ZmZsZSA9IGZ1bmN0aW9uKCkge1xuICAgIGZvcihsZXQgaT0xOyBpPHRoaXMubGVuZ3RoLTE7IGkrKykge1xuICAgICAgc2h1ZmZsZWRBcnJheS5wdXNoKHRoaXNbaV0pO1xuICAgIH1cbiAgICBzaHVmZmxlZEFycmF5LnNvcnQoZnVuY3Rpb24oKSB7XG4gICAgICByZXR1cm4gMC41IC0gTWF0aC5yYW5kb20oKTtcbiAgICB9KTtcbiAgICBzaHVmZmxlZEFycmF5LnB1c2godGhpc1t0aGlzLmxlbmd0aC0xXSk7XG4gICAgc2h1ZmZsZWRBcnJheS51bnNoaWZ0KHRoaXNbMF0pO1xuICAgIHJldHVybiBzaHVmZmxlZEFycmF5O1xuICB9O1xuXG5cbiAgZnVuY3Rpb24gcmdiVG9IZXggKHVzZXJSZ2IpIHtcbiAgICB2YXIgcmdiID0gdXNlclJnYi5yZXBsYWNlKC9cXHMvZywnJykubWF0Y2goL15yZ2JhP1xcKChcXGQrKSwoXFxkKyksKFxcZCspL2kpO1xuICAgIHJldHVybiAocmdiICYmIHJnYi5sZW5ndGggPT09IDQpID8gJyMnICtcbiAgICAoJzAnICsgcGFyc2VJbnQocmdiWzFdLDEwKS50b1N0cmluZygxNikpLnNsaWNlKC0yKSArXG4gICAgKCcwJyArIHBhcnNlSW50KHJnYlsyXSwxMCkudG9TdHJpbmcoMTYpKS5zbGljZSgtMikgK1xuICAgICgnMCcgKyBwYXJzZUludChyZ2JbM10sMTApLnRvU3RyaW5nKDE2KSkuc2xpY2UoLTIpIDogdXNlclJnYjtcbiAgfVxuXG5cbiAgZnVuY3Rpb24gcGxheVJvdW5kKCkge1xuICAgIHJvdW5kTnVtYmVyO1xuICAgIGNvbnNvbGUubG9nKCdJbiBwbGF5IHJvdW5kJywgcm91bmROdW1iZXIpO1xuICAgIGNvbnN0IHJhbmRvbUNvbG9yc0FyciA9IGNvbG9ycygpO1xuICAgIHNlcXVlbmNlTWF0Y2hlcigpO1xuICAgIGNvbnNvbGUubG9nKCdyb3VuZEFycmF5Jywgcm91bmRBcnJheSk7XG4gICAgcm91bmRBcnJheS5zaHVmZmxlKCk7XG4gICAgY29uc29sZS5sb2coJ3NodWZmbGVkQXJyYXknLCBzaHVmZmxlZEFycmF5KTtcbiAgICAkZ2FtZVNxdWFyZXMuZWFjaChmdW5jdGlvbihpZHgsIGVsKSB7XG4gICAgICAkKGVsKS5jc3MoJ2JhY2tncm91bmRDb2xvcicsIHNodWZmbGVkQXJyYXlbaWR4XSk7XG4gICAgfSk7XG4gIH1cblxuXG4gIGZ1bmN0aW9uIGNoYW5nZUNvbG9yKGUpe1xuICAgIGNvbnN0IGluZGV4ID0gJChlLnRhcmdldCkuaW5kZXgoJy5zcXVhcmUnKTtcbiAgICBjb25zdCBsZW5ndGggPSAkKCcuc3F1YXJlJykubGVuZ3RoO1xuICAgIGlmKGluZGV4ICE9PSAwICYmIGluZGV4ICE9PSAobGVuZ3RoIC0gMSkpIHtcbiAgICAgIGlmKGNvdW50ID09PSAwKXtcbiAgICAgICAgcHJldiA9ICQodGhpcyk7XG4gICAgICAgIHByZXZjb2xvciA9IHByZXYuY3NzKCdiYWNrZ3JvdW5kLWNvbG9yJyk7XG4gICAgICB9ZWxzZSBpZihjb3VudCA9PT0gMSl7XG4gICAgICAgIHByZXYuY3NzKCdiYWNrZ3JvdW5kLWNvbG9yJywgJCh0aGlzKS5jc3MoJ2JhY2tncm91bmQtY29sb3InKSk7XG4gICAgICAgICQodGhpcykuY3NzKCdiYWNrZ3JvdW5kLWNvbG9yJywgcHJldmNvbG9yKTtcbiAgICAgICAgY291bnQgPSAtMTtcbiAgICAgICAgY2hlY2tDb21wbGV0ZSgpO1xuICAgICAgfVxuICAgICAgY291bnQrPTE7XG4gICAgfVxuICB9XG5cbiAgJGdhbWVTcXVhcmVzLm9uKCdjbGljaycsIGNoYW5nZUNvbG9yKTtcblxuICBmdW5jdGlvbiBjaGVja0NvbXBsZXRlICgpIHtcbiAgICBsZXQgdXNlclJnYiA9IFtdO1xuICAgICRnYW1lU3F1YXJlcy5lYWNoKGZ1bmN0aW9uKGluZGV4LCBlbGVtZW50KSB7XG4gICAgICAvLyBjb25zb2xlLmxvZygnZWxlbWVudCcsIGVsZW1lbnQsIGluZGV4KTtcbiAgICAgIC8vIGNvbnNvbGUubG9nKHVzZXJSZ2JbaW5kZXhdKTtcbiAgICAgIC8vICQoZWxlbWVudCkuY3NzKCdiYWNrZ3JvdW5kQ29sb3InLCB1c2VyUmdiW2luZGV4XSk7XG4gICAgICBjb25zdCBiYWNrZ3JvdW5kQ29sb3VyID0gJChlbGVtZW50KS5jc3MoJ2JhY2tncm91bmRDb2xvcicpO1xuICAgICAgLy8gY29uc29sZS5sb2coYmFja2dyb3VuZENvbG91cik7XG4gICAgICB1c2VyUmdiLnB1c2goYmFja2dyb3VuZENvbG91cik7XG4gICAgICAvLyBjb25zb2xlLmxvZyh1c2VyUmdiKTtcbiAgICAgIC8vIGNvbnNvbGUubG9nKHJvdW5kQXJyYXkpO1xuICAgICAgLy8gcmV0dXJuIHVzZXJSZ2I7XG4gICAgfSk7XG4gICAgY29uc29sZS5sb2coJ3VzZXJSZ2InLCB1c2VyUmdiKTtcblxuICAgIGxldCB1c2VyU29ydGVkQXJyYXkgPSB1c2VyUmdiLm1hcChyZ2JUb0hleCk7XG4gICAgY29uc29sZS5sb2coJ3VzZXJTb3J0ZWRBcnJheScsIHVzZXJTb3J0ZWRBcnJheSk7XG4gICAgY29uc29sZS5sb2coJ3JvdW5kQXJyYXknLCByb3VuZEFycmF5KTtcblxuICAgIGlmICh1c2VyU29ydGVkQXJyYXkubGVuZ3RoID09PSByb3VuZEFycmF5Lmxlbmd0aCAmJiB1c2VyU29ydGVkQXJyYXkuZXZlcnkoKHYsaSk9PiB2ID09PSByb3VuZEFycmF5W2ldKSkge1xuICAgICAgY29uc29sZS5sb2coJ0l0XFwncyBhIG1hdGNoLCB3ZWxsIGRvbmUnKTtcbiAgICAgICRuZXh0QnV0dG9uLnNob3coKTtcbiAgICAgIGFsZXJ0KCdSb3VuZCBDb21wbGV0ZSwgcHJlc3MgTmV4dCBSb3VuZCB0byBjb250aW51ZScpO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zb2xlLmxvZygnTm90IHF1aXRlLCBoYXZlIGFub3RoZXIgZ28nKTtcbiAgICB9XG4gIH1cblxuXG5cbiAgLy8gZnVuY3Rpb24gbmV4dFJvdW5kICgpIHtcbiAgLy8gICByb3VuZENvdW50ZXIgKz0gMTtcbiAgLy8gICByb3VuZE51bWJlciArPSAxO1xuICAvLyAgICRnYW1lQm9hcmQuYXBwZW5kKCc8ZGl2PjwvZGl2PicpLmFkZENsYXNzKCdzcXVhcmUnKTtcbiAgLy8gICAkbmV4dEJ1dHRvbi5oaWRlKCk7XG4gIC8vIH1cbiAgLy9cbiAgLy8gJG5leHRCdXR0b24ub24oJ2NsaWNrJywgKCkgPT4ge1xuICAvLyAgIG5leHRSb3VuZCgpO1xuICAvLyB9XG5cblxuXG59KTtcblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuLy8gTkVYVCBST1VORFxuLy8gJGdhbWVCb2FyZC5hcHBlbmQoXCI8ZGl2PjwvZGl2PlwiKS5hZGRDbGFzcygnc3F1YXJlJyk7XG4vLyByb3VuZCBudW1iZXIgKz0xXG5cblxuLy8gUkVTRVRcbi8vIHRpbWVyIHJlc2V0XG4vLyAkcmVzZXRCdXR0b24uaGlkZSgpO1xuLy8gJG5leHRCdXR0b24uaGlkZSgpO1xuLy8gJGdhbWVTcXVhcmVzLmhpZGUoKTtcbi8vICR3aGljaFJvdW5kLmhpZGUoKTtcbi8vIFRpbWVyIHJlc2V0XG4vLyBEaXYncyBjbGVhclxuXG5cbi8vIFNPVU5EXG4vLyAkc291bmQub24oJ2NsaWNrJywgKCkgPT4ge1xuLy8gICBhdWRpby5zcmMgPSAnLi9hc3NldHMvaHVlX2h1bnRlcl9iYWNrZ3JvdW5kLm1wMyc7XG4vLyAgIGF1ZGlvLnBsYXkoKTtcbi8vIH1cblxuXG5cbi8vIGZ1bmN0aW9uIHN0YXJ0VGltZSgpIHtcbi8vICAgdmFyIHRpbWUxID0gbmV3IERhdGUoKTtcbi8vICAgcmV0dXJuIHRpbWUxO1xuLy8gfVxuLy9cbi8vIGZ1bmN0aW9uIGVuZFRpbWUoKSB7XG4vLyAgIHZhciB0aW1lMiA9IG5ldyBEYXRlKCk7XG4vLyAgIHJldHVybiB0aW1lMjtcbi8vIH1cbi8vXG4vLyBmdW5jdGlvbiBjaGVja1RpbWUoKSB7XG4vLyAgIHZhciB0aW1lRGlmZiA9ICh0aW1lMiAtIHRpbWUxKS8xMDAwO1xuLy8gICByZXR1cm4gdGltZURpZmY7XG4vLyAgIHF1aWNrVGltZSA9IHRpbWVEaWZmIDwgcXVpY2tUaW1lID8gdGltZURpZmYgOiBxdWlja1RpbWU7XG4vLyB9XG4iXX0=
