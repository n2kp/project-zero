"use strict";$(function(){function a(){u.hide(),l.hide(),i.show(),g.show()}function e(){return y[Math.floor(Math.random()*y.length)]}function c(){var a=m[k-1];return C=a.map(function(a){return I[a]})}function d(){console.log("In play round",k),I=e(),c(),console.log("roundArray",C),C.shuffle(),console.log("shuffledArray",x),$(".square").each(function(a,e){$(e).css("backgroundColor",x[a])})}function b(a){var e=a.replace(/\s/g,"").match(/^rgba?\((\d+),(\d+),(\d+)/i);return e&&4===e.length?"#"+("0"+parseInt(e[1],10).toString(16)).slice(-2)+("0"+parseInt(e[2],10).toString(16)).slice(-2)+("0"+parseInt(e[3],10).toString(16)).slice(-2):a}function t(){var a=[];$(".square").each(function(e,c){var d=$(c).css("backgroundColor");a.push(d)}),console.log("userRgb",a);var e=a.map(b);console.log("userSortedArray",e),console.log("roundArray",C),e.length===C.length&&e.every(function(a,e){return a===C[e]})?(console.log("It's a match, well done"),p.play(),alert("Round Complete, press Next Round to continue"),h.show()):console.log("Not quite, have another go")}function o(a){var e=$(a.target).index(".square"),c=$(".square").length;0!==e&&e!==c-1&&(0===B?(S=$(this),A=S.css("backgroundColor")):1===B&&(S.css("backgroundColor",$(this).css("backgroundColor")),$(this).css("backgroundColor",A),B=-1,t()),B+=1)}function n(){v+=1,k+=1,r.append('<div class="square"></div>'),h.hide()}function f(){i.hide(),h.hide(),q.hide(),g.hide(),u.show(),l.show()}console.log("Igor, JavaScript' alive!");var r=$(".gameBoard"),s=$(".difficulty"),u=$(".easyButton"),l=$(".hardButton"),i=$(".resetButton"),h=$(".nextButton"),g=($(".quickTime"),$(".roundDisplay")),p=($(".soundOnOff"),$("audio")[0]),y=($("audio")[1],[["#3db5f9","#48a8e8","#539ad7","#5e8dc6","#697fb5","#7472a4","#7e6493","#895782","#944a71","#9f3c60","#aa2f4f","#b5213e","#c0142d"],["#44f267","#4bdf68","#51cd69","#58ba6a","#5ea76b","#65956c","#6b826d","#726f6e","#795d6f","#7f4a70","#863771","#8c2572","#931273"],["#553e13","#5a3c1c","#5f3a25","#65382f","#6a3638","#6f3441","#74324b","#7a3054","#7f2e5d","#842c66","#8a2a6f","#8f2879","#942682"],["#148ea9","#278faa","#3a90ab","#4d90ab","#6091ac","#7392ad","#8692ae","#9993ae","#ac94af","#bf95b0","#d295b1","#e596b1","#f897b2"],["#493582","#524586","#5b568b","#63668f","#6c7693","#758798","#7e979c","#86a7a0","#8fb8a5","#98c8a9","#a1d8ad","#a9e9b2","#b2f9b6"],["#6746f2","#7241e3","#7d3bd4","#8735c5","#9230b6","#9d2ba7","#a72597","#b21f88","#bd1a79","#c8156a","#d30f5b","#dd094c","#e8043d"],["#23184c","#321e4c","#40244d","#4f2a4d","#5e2f4d","#6c354d","#7b3b4e","#8a414e","#98474e","#a74d4e","#b6524e","#c4584f","#d35e4f"],["#78a0d8","#7ca1cd","#80a2c2","#84a4b7","#89a5ad","#8da6a2","#91a797","#95a98c","#99aa81","#9cab77","#a2ad6c","#a6ae61","#aaaf56"],["#1fe876","#29e268","#34dc60","#3ed658","#49d051","#53ca49","#5ec441","#68bd39","#72b731","#7db12a","#87ab22","#92a51a","#9c9f12"],["#3f4887","#4c4885","#5a4884","#674982","#754981","#82497f","#904a7e","#9d4a7c","#aa4a7a","#b84a79","#c54b77","#d34b76","#e04b74"],["#1a57e8","#255dd6","#3062c4","#3b68b3","#456da1","#50738f","#5b787d","#667e6b","#718459","#7b8948","#868f36","#919424","#929a12"],["#05a83e","#18ad4e","#2bb35e","#3fb86e","#52bd7e","#65c28e","#78c79e","#8ccdaf","#9fd2bf","#b2d7cf","#c5dddf","#d9e2ef","#ece7ff"],["#2fded8","#3ae0ca","#45e2bb","#50e4ad","#5be69f","#66e890","#71ea82","#7beb74","#86ed65","#91ef57","#9cf149","#a7f33a","#b2f52c"],["#462e75","#523d73","#5d4d70","#695c6e","#746b6c","#807b69","#8b8a67","#979965","#a3a962","#aeb860","#bac75e","#c5d75b","#d1e659"],["#5ddac3","#69d3a7","#76cc9a","#82c48e","#8fbd81","#9bb674","#a7af68","#b4a85b","#c0a14f","#cd9a42","#d99236","#c68b2a","#f2841d"],["#052e3d","#123c4c","#20495c","#2d576b","#3b647a","#48728a","#558099","#638da8","#709bb8","#7ea8c7","#8bb6d6","#99c3e6","#a6d1f5"],["#2c08ba","#380baf","#440ea3","#501298","#5c158d","#661881","#741b76","#801e6b","#8c215f","#982554","#a42849","#b02b3d","#bc2e32"],["#06bf79","#12b37d","#1fa880","#2b9c84","#389187","#44858b","#517a8e","#5d6e91","#696295","#765798","#824b9c","#8f40a0","#9b34a3"],["#3d770e","#4a8214","#578e1b","#649921","#72a427","#7fb02d","#8cbb34","#99c63a","#a6d240","#b4dd46","#c1e84d","#cef435","#dbff59"],["#5ca10e","#679b16","#72941d","#7d8e25","#88872c","#938134","#9e7a3b","#a87443","#b36d4b","#be6752","#c9605a","#d45a61","#df5369"],["#7bc9e5","#82c5d5","#8ac2c6","#91beb7","#98bba7","#9fb797","#a7b488","#aeb078","#b5ac69","#bca95a","#c4a54a","#cba32b","#d29e2b"],["#71d72f","#7bc82e","#85b92c","#8faa2b","#999b2a","#a38c28","#ad7d27","#b66d26","#c05e24","#ca4f23","#d44022","#de3120","#e8221f"],["#d5870b","#c58514","#b5821d","#a58026","#957e2f","#857b38","#747941","#647749","#547452","#44725b","#347064","#246d6d","#146b76"],["#f23f8e","#e4408d","#d6418b","#c8438a","#ba4489","#ac4588","#9e4787","#8f4885","#814984","#734a83","#654b81","#574d80","#494e7f"],["#dab2f6","#cfaae2","#c4a2ce","#b99bb9","#ae93a5","#a38b91","#98837d","#8e7b68","#837354","#786b40","#6d642b","#625c17","#575403"],["#da87ce","#d28dc0","#ca93b2","#c299a4","#ba9f96","#b29588","#abab7a","#93b26b","#9bb85d","#93be4f","#8bc441","#83ca33","#7bd025"],["#f89951","#ed915b","#e28a66","#d78270","#cc7a7a","#c17285","#b66b8f","#ab6399","#a05ba4","#9553ae","#8a4bb8","#7f44c3","#743ccd"],["#f5d2bf","#e6c3c1","#d7b3c4","#c8a4c7","#ba94c9","#ab84cb","#9c75ce","#8d65d1","#7e56d3","#6f47d5","#6137d8","#5228da","#4318dd"],["#8abc18","#81b32a","#79ab3b","#70a24b","#67995f","#5f9171","#568882","#4d7f94","#4577a6","#3c6eb8","#3365ca","#2b5ddb","#2254ed"],["#b6c506","#abb915","#a1ae24","#96a233","#8b9642","#818a51","#767e61","#6b7370","#61677f","#565b8e","#4b4f9d","#4144ac","#3638bb"]]),m=[[0,3,6,9,12],[0,3,5,7,9,12],[0,1,3,6,9,11,12],[0,1,3,5,7,9,11,12],[0,1,3,4,6,8,9,11,12],[0,1,2,4,5,7,8,10,11,12],[0,1,2,3,5,6,7,9,10,11,12],[0,1,2,3,4,5,7,8,9,10,11,12],[0,1,2,3,4,5,6,7,8,9,10,11,12]],v=0,k=null,w=$(".round"),q=$(".square"),C=null,I=null,x=[],S=void 0,A=null,B=0;localStorage.getItem("quickestTime");r.on("click",".square",o),h.on("click",function(){x=[],n(),w.text(v+1),d()}),i.on("click",function(){f()}),s.on("click",function(e){if(console.log("clicked"),$(e.target).hasClass("easyButton"))alert("You're about to start easy mode. Instructions: Simply move the blocks in the middle of the palette so that they create the correct gradient between the two end colours. After you complete each round, press the Next Round button to continue to the following round. Hardly rocket science!"),w.text(v+1),k=1,a(),d();else if($(e.target).hasClass("hardButton")){alert("You're about to start hard mode. Instructions: Simply move the blocks in the middle of the palette so that they create the correct gradient between the two end colours. After you complete each round, press the Next Round button to continue to the following round.  Hardly rocket science!"),w.text(v+1),k=5;for(var c=0;c<4;c++)r.append('<div class="square"></div>');a(),d()}}),Array.prototype.shuffle=function(){for(var a=1;a<this.length-1;a++)x.push(this[a]);if(x.sort(function(){return.5-Math.random()}),x.push(this[this.length-1]),x.unshift(this[0]),x.length!==C.length||!x.every(function(a,e){return a===C[e]}))return x;x=[],C.shuffle()}});
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5qcyJdLCJuYW1lcyI6WyIkIiwiZ2FtZVN0YXJ0IiwiJGVhc3lCdXR0b24iLCJoaWRlIiwiJGhhcmRCdXR0b24iLCJwbGF5Um91bmQiLCJyb3VuZE51bWJlciIsImNvbnNvbGUiLCJzaG93Iiwicm91bmRBcnJheSIsIk1hdGgiLCJmbG9vciIsInNodWZmbGVkQXJyYXkiLCJjb2xvclBhbGV0dGUiLCJsZW5ndGgiLCJzZXF1ZW5jZU1hdGNoZXIiLCJzZXF1ZW5jZUFycmF5IiwiZWxlbWVudFNlbGVjdG9yIiwibWFwIiwiaXRlbSIsInJhbmRvbUNvbG9yc0FyciIsImFsZXJ0IiwibG9nIiwiY29sb3JzIiwic2h1ZmZsZSIsInRhcmdldCIsImluZGV4IiwiZWwiLCJpZHgiLCJyZ2JUb0hleCIsImNvdW50IiwicHJldiIsImNzcyIsInJlcGxhY2UiLCJtYXRjaCIsInJnYiIsInByZXZjb2xvciIsInRvU3RyaW5nIiwic2xpY2UiLCJjaGVja0NvbXBsZXRlIiwicGFyc2VJbnQiLCJ1c2VyUmdiIiwibmV4dFJvdW5kIiwiZWxlbWVudCIsInJvdW5kQ291bnRlciIsImJhY2tncm91bmRDb2xvdXIiLCIkbmV4dEJ1dHRvbiIsInVzZXJTb3J0ZWRBcnJheSIsInJlc2V0R2FtZSIsImV2ZXJ5IiwidiIsImkiLCIkcmVzZXRCdXR0b24iLCIkZ2FtZVNxdWFyZXMiLCIkd2hpY2hSb3VuZCIsImUiLCJ0aGlzIiwiJGdhbWVCb2FyZCIsImFwcGVuZCIsIiRkaWZmaWN1bHR5IiwiJHF1aWNrVGltZSIsIiRiYWNrZ3JvdW5kU291bmQiLCJxdWlja2VzdFRpbWUiLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwiY2hhbmdlQ29sb3IiLCIkcm91bmQiLCJvbiIsImhhc0NsYXNzIiwidGV4dCIsIkFycmF5IiwicHVzaCIsInVuc2hpZnQiLCJwcm90b3R5cGUiLCJlYWNoIl0sIm1hcHBpbmdzIjoiWUFBQUEsR0FBRSxXQTJKQSxRQUFBQyxLQXJDRUMsRUFBWUMsT0F1Q2RDLEVB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LEVBQU92QyxHQUFBQSxRQUFhSCxXQUNyQnNDLE1BSUNXLEVBQU0zQyxHQUFBQSxRQUFnQkMsU0FBQUEsR0FHckIsR0FGRFYsUUFBT0UsSUFBQUEsV0FBUFQsRUFBQXVELEVBQUE5QixRQUFBMkMsU0FBQSxjQUdEL0MsTUFBQSxrU0FDRDZDLEVBQUFHLEtBQUF6QixFQUFBLEdBdkNJdEMsRUFBYyxFQXlDbEJnRSxJQUNFakUsUUFFQyxJQUFBTCxFQUFBdUQsRUFBQTlCLFFBQUEyQyxTQUFBLGNBQUEsQ0FDRHhELE1BQUFBLG1TQUNFc0QsRUFBT0csS0FBQXpCLEVBQVAsR0FERnRDLEVBQUEsQ0FHQU0sS0FBQUEsR0FBQUEsR0FBYzJELEVBQWRwQixFQUFtQixFQUFLQSxJQUN4QnZDLEVBQWM0RCxPQUFRLDZCQUV0QnZFLEtBQXNFSSxPQStCeEVpRSxNQUFBRyxVQUFBakQsUUFBQSxXQXhDRSxJQUFJLEdBQUkyQixHQUFFLEVBQUdBLEVBQUVLLEtBQUsxQyxPQUFPLEVBQUdxQyxJQTBDaEN2QyxFQUFTMkIsS0FBVGlCLEtBQTBCTCxHQVF4QixJQU5BbkQsRUFBYTBFLEtBQUssV0FDaEIsTUFBTTdCLEdBQUFBLEtBQUFBLFdBRVBqQyxFQUhEMkQsS0FBQWYsS0FBQUEsS0FBQTFDLE9BQUEsSUFJQVAsRUFBWWlFLFFBQVpoQixLQUF1QmYsSUFFakJNLEVBQUFBLFNBQWtCTixFQUFZWixTQUFwQ2pCLEVBQUFxQyxNQUFBLFNBQUFDLEVBQUFDLEdBQUEsTUFBQUQsS0FBQXpDLEVBQUEwQyxLQUlBLE1BQUlKLEVBSEp4QyxNQUNBQSxFQUFZaUIiLCJmaWxlIjoiYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJCgoKSA9PiB7XG5cbiAgY29uc29sZS5sb2coJ0lnb3IsIEphdmFTY3JpcHRcXCcgYWxpdmUhJyk7XG5cbiAgY29uc3QgJGdhbWVCb2FyZCA9ICQoJy5nYW1lQm9hcmQnKTtcbiAgY29uc3QgJGRpZmZpY3VsdHkgPSAkKCcuZGlmZmljdWx0eScpO1xuICBjb25zdCAkZWFzeUJ1dHRvbiA9ICQoJy5lYXN5QnV0dG9uJyk7XG4gIGNvbnN0ICRoYXJkQnV0dG9uID0gJCgnLmhhcmRCdXR0b24nKTtcbiAgY29uc3QgJHJlc2V0QnV0dG9uID0gJCgnLnJlc2V0QnV0dG9uJyk7XG4gIGNvbnN0ICRuZXh0QnV0dG9uID0gJCgnLm5leHRCdXR0b24nKTtcbiAgY29uc3QgJHF1aWNrVGltZSA9ICQoJy5xdWlja1RpbWUnKTtcbiAgY29uc3QgJHdoaWNoUm91bmQgPSAkKCcucm91bmREaXNwbGF5Jyk7XG4gIGNvbnN0ICRzb3VuZCA9ICQoJy5zb3VuZE9uT2ZmJyk7XG4gIGNvbnN0ICRwaW5nU291bmQgPSAkKCdhdWRpbycpWzBdO1xuICBjb25zdCAkYmFja2dyb3VuZFNvdW5kID0gJCgnYXVkaW8nKVsxXTtcblxuICBjb25zdCBjb2xvclBhbGV0dGUgPSBbXG4gICAgWycjM2RiNWY5JywgJyM0OGE4ZTgnLCAnIzUzOWFkNycsICcjNWU4ZGM2JywgJyM2OTdmYjUnLCAnIzc0NzJhNCcsICcjN2U2NDkzJywgJyM4OTU3ODInLCAnIzk0NGE3MScsICcjOWYzYzYwJywgJyNhYTJmNGYnLCAnI2I1MjEzZScsICcjYzAxNDJkJ10sXG4gICAgWycjNDRmMjY3JywgJyM0YmRmNjgnLCAnIzUxY2Q2OScsICcjNThiYTZhJywgJyM1ZWE3NmInLCAnIzY1OTU2YycsICcjNmI4MjZkJywgJyM3MjZmNmUnLCAnIzc5NWQ2ZicsICcjN2Y0YTcwJywgJyM4NjM3NzEnLCAnIzhjMjU3MicsICcjOTMxMjczJ10sXG4gICAgWycjNTUzZTEzJywgJyM1YTNjMWMnLCAnIzVmM2EyNScsICcjNjUzODJmJywgJyM2YTM2MzgnLCAnIzZmMzQ0MScsICcjNzQzMjRiJywgJyM3YTMwNTQnLCAnIzdmMmU1ZCcsICcjODQyYzY2JywgJyM4YTJhNmYnLCAnIzhmMjg3OScsICcjOTQyNjgyJ10sXG4gICAgWycjMTQ4ZWE5JywgJyMyNzhmYWEnLCAnIzNhOTBhYicsICcjNGQ5MGFiJywgJyM2MDkxYWMnLCAnIzczOTJhZCcsICcjODY5MmFlJywgJyM5OTkzYWUnLCAnI2FjOTRhZicsICcjYmY5NWIwJywgJyNkMjk1YjEnLCAnI2U1OTZiMScsICcjZjg5N2IyJ10sXG4gICAgWycjNDkzNTgyJywgJyM1MjQ1ODYnLCAnIzViNTY4YicsICcjNjM2NjhmJywgJyM2Yzc2OTMnLCAnIzc1ODc5OCcsICcjN2U5NzljJywgJyM4NmE3YTAnLCAnIzhmYjhhNScsICcjOThjOGE5JywgJyNhMWQ4YWQnLCAnI2E5ZTliMicsICcjYjJmOWI2J10sXG4gICAgWycjNjc0NmYyJywgJyM3MjQxZTMnLCAnIzdkM2JkNCcsICcjODczNWM1JywgJyM5MjMwYjYnLCAnIzlkMmJhNycsICcjYTcyNTk3JywgJyNiMjFmODgnLCAnI2JkMWE3OScsICcjYzgxNTZhJywgJyNkMzBmNWInLCAnI2RkMDk0YycsICcjZTgwNDNkJ10sXG4gICAgWycjMjMxODRjJywgJyMzMjFlNGMnLCAnIzQwMjQ0ZCcsICcjNGYyYTRkJywgJyM1ZTJmNGQnLCAnIzZjMzU0ZCcsICcjN2IzYjRlJywgJyM4YTQxNGUnLCAnIzk4NDc0ZScsICcjYTc0ZDRlJywgJyNiNjUyNGUnLCAnI2M0NTg0ZicsICcjZDM1ZTRmJ10sXG4gICAgWycjNzhhMGQ4JywgJyM3Y2ExY2QnLCAnIzgwYTJjMicsICcjODRhNGI3JywgJyM4OWE1YWQnLCAnIzhkYTZhMicsICcjOTFhNzk3JywgJyM5NWE5OGMnLCAnIzk5YWE4MScsICcjOWNhYjc3JywgJyNhMmFkNmMnLCAnI2E2YWU2MScsICcjYWFhZjU2J10sXG4gICAgWycjMWZlODc2JywgJyMyOWUyNjgnLCAnIzM0ZGM2MCcsICcjM2VkNjU4JywgJyM0OWQwNTEnLCAnIzUzY2E0OScsICcjNWVjNDQxJywgJyM2OGJkMzknLCAnIzcyYjczMScsICcjN2RiMTJhJywgJyM4N2FiMjInLCAnIzkyYTUxYScsICcjOWM5ZjEyJ10sXG4gICAgWycjM2Y0ODg3JywgJyM0YzQ4ODUnLCAnIzVhNDg4NCcsICcjNjc0OTgyJywgJyM3NTQ5ODEnLCAnIzgyNDk3ZicsICcjOTA0YTdlJywgJyM5ZDRhN2MnLCAnI2FhNGE3YScsICcjYjg0YTc5JywgJyNjNTRiNzcnLCAnI2QzNGI3NicsICcjZTA0Yjc0J10sXG4gICAgWycjMWE1N2U4JywgJyMyNTVkZDYnLCAnIzMwNjJjNCcsICcjM2I2OGIzJywgJyM0NTZkYTEnLCAnIzUwNzM4ZicsICcjNWI3ODdkJywgJyM2NjdlNmInLCAnIzcxODQ1OScsICcjN2I4OTQ4JywgJyM4NjhmMzYnLCAnIzkxOTQyNCcsICcjOTI5YTEyJ10sXG4gICAgWycjMDVhODNlJywgJyMxOGFkNGUnLCAnIzJiYjM1ZScsICcjM2ZiODZlJywgJyM1MmJkN2UnLCAnIzY1YzI4ZScsICcjNzhjNzllJywgJyM4Y2NkYWYnLCAnIzlmZDJiZicsICcjYjJkN2NmJywgJyNjNWRkZGYnLCAnI2Q5ZTJlZicsICcjZWNlN2ZmJ10sXG4gICAgWycjMmZkZWQ4JywgJyMzYWUwY2EnLCAnIzQ1ZTJiYicsICcjNTBlNGFkJywgJyM1YmU2OWYnLCAnIzY2ZTg5MCcsICcjNzFlYTgyJywgJyM3YmViNzQnLCAnIzg2ZWQ2NScsICcjOTFlZjU3JywgJyM5Y2YxNDknLCAnI2E3ZjMzYScsICcjYjJmNTJjJ10sXG4gICAgWycjNDYyZTc1JywgJyM1MjNkNzMnLCAnIzVkNGQ3MCcsICcjNjk1YzZlJywgJyM3NDZiNmMnLCAnIzgwN2I2OScsICcjOGI4YTY3JywgJyM5Nzk5NjUnLCAnI2EzYTk2MicsICcjYWViODYwJywgJyNiYWM3NWUnLCAnI2M1ZDc1YicsICcjZDFlNjU5J10sXG4gICAgWycjNWRkYWMzJywgJyM2OWQzYTcnLCAnIzc2Y2M5YScsICcjODJjNDhlJywgJyM4ZmJkODEnLCAnIzliYjY3NCcsICcjYTdhZjY4JywgJyNiNGE4NWInLCAnI2MwYTE0ZicsICcjY2Q5YTQyJywgJyNkOTkyMzYnLCAnI2M2OGIyYScsICcjZjI4NDFkJ10sXG4gICAgWycjMDUyZTNkJywgJyMxMjNjNGMnLCAnIzIwNDk1YycsICcjMmQ1NzZiJywgJyMzYjY0N2EnLCAnIzQ4NzI4YScsICcjNTU4MDk5JywgJyM2MzhkYTgnLCAnIzcwOWJiOCcsICcjN2VhOGM3JywgJyM4YmI2ZDYnLCAnIzk5YzNlNicsICcjYTZkMWY1J10sXG4gICAgWycjMmMwOGJhJywgJyMzODBiYWYnLCAnIzQ0MGVhMycsICcjNTAxMjk4JywgJyM1YzE1OGQnLCAnIzY2MTg4MScsICcjNzQxYjc2JywgJyM4MDFlNmInLCAnIzhjMjE1ZicsICcjOTgyNTU0JywgJyNhNDI4NDknLCAnI2IwMmIzZCcsICcjYmMyZTMyJ10sXG4gICAgWycjMDZiZjc5JywgJyMxMmIzN2QnLCAnIzFmYTg4MCcsICcjMmI5Yzg0JywgJyMzODkxODcnLCAnIzQ0ODU4YicsICcjNTE3YThlJywgJyM1ZDZlOTEnLCAnIzY5NjI5NScsICcjNzY1Nzk4JywgJyM4MjRiOWMnLCAnIzhmNDBhMCcsICcjOWIzNGEzJ10sXG4gICAgWycjM2Q3NzBlJywgJyM0YTgyMTQnLCAnIzU3OGUxYicsICcjNjQ5OTIxJywgJyM3MmE0MjcnLCAnIzdmYjAyZCcsICcjOGNiYjM0JywgJyM5OWM2M2EnLCAnI2E2ZDI0MCcsICcjYjRkZDQ2JywgJyNjMWU4NGQnLCAnI2NlZjQzNScsICcjZGJmZjU5J10sXG4gICAgWycjNWNhMTBlJywgJyM2NzliMTYnLCAnIzcyOTQxZCcsICcjN2Q4ZTI1JywgJyM4ODg3MmMnLCAnIzkzODEzNCcsICcjOWU3YTNiJywgJyNhODc0NDMnLCAnI2IzNmQ0YicsICcjYmU2NzUyJywgJyNjOTYwNWEnLCAnI2Q0NWE2MScsICcjZGY1MzY5J10sXG4gICAgWycjN2JjOWU1JywgJyM4MmM1ZDUnLCAnIzhhYzJjNicsICcjOTFiZWI3JywgJyM5OGJiYTcnLCAnIzlmYjc5NycsICcjYTdiNDg4JywgJyNhZWIwNzgnLCAnI2I1YWM2OScsICcjYmNhOTVhJywgJyNjNGE1NGEnLCAnI2NiYTMyYicsICcjZDI5ZTJiJ10sXG4gICAgWycjNzFkNzJmJywgJyM3YmM4MmUnLCAnIzg1YjkyYycsICcjOGZhYTJiJywgJyM5OTliMmEnLCAnI2EzOGMyOCcsICcjYWQ3ZDI3JywgJyNiNjZkMjYnLCAnI2MwNWUyNCcsICcjY2E0ZjIzJywgJyNkNDQwMjInLCAnI2RlMzEyMCcsICcjZTgyMjFmJ10sXG4gICAgWycjZDU4NzBiJywgJyNjNTg1MTQnLCAnI2I1ODIxZCcsICcjYTU4MDI2JywgJyM5NTdlMmYnLCAnIzg1N2IzOCcsICcjNzQ3OTQxJywgJyM2NDc3NDknLCAnIzU0NzQ1MicsICcjNDQ3MjViJywgJyMzNDcwNjQnLCAnIzI0NmQ2ZCcsICcjMTQ2Yjc2J10sXG4gICAgWycjZjIzZjhlJywgJyNlNDQwOGQnLCAnI2Q2NDE4YicsICcjYzg0MzhhJywgJyNiYTQ0ODknLCAnI2FjNDU4OCcsICcjOWU0Nzg3JywgJyM4ZjQ4ODUnLCAnIzgxNDk4NCcsICcjNzM0YTgzJywgJyM2NTRiODEnLCAnIzU3NGQ4MCcsICcjNDk0ZTdmJ10sXG4gICAgWycjZGFiMmY2JywgJyNjZmFhZTInLCAnI2M0YTJjZScsICcjYjk5YmI5JywgJyNhZTkzYTUnLCAnI2EzOGI5MScsICcjOTg4MzdkJywgJyM4ZTdiNjgnLCAnIzgzNzM1NCcsICcjNzg2YjQwJywgJyM2ZDY0MmInLCAnIzYyNWMxNycsICcjNTc1NDAzJ10sXG4gICAgWycjZGE4N2NlJywgJyNkMjhkYzAnLCAnI2NhOTNiMicsICcjYzI5OWE0JywgJyNiYTlmOTYnLCAnI2IyOTU4OCcsICcjYWJhYjdhJywgJyM5M2IyNmInLCAnIzliYjg1ZCcsICcjOTNiZTRmJywgJyM4YmM0NDEnLCAnIzgzY2EzMycsICcjN2JkMDI1J10sXG4gICAgWycjZjg5OTUxJywgJyNlZDkxNWInLCAnI2UyOGE2NicsICcjZDc4MjcwJywgJyNjYzdhN2EnLCAnI2MxNzI4NScsICcjYjY2YjhmJywgJyNhYjYzOTknLCAnI2EwNWJhNCcsICcjOTU1M2FlJywgJyM4YTRiYjgnLCAnIzdmNDRjMycsICcjNzQzY2NkJ10sXG4gICAgWycjZjVkMmJmJywgJyNlNmMzYzEnLCAnI2Q3YjNjNCcsICcjYzhhNGM3JywgJyNiYTk0YzknLCAnI2FiODRjYicsICcjOWM3NWNlJywgJyM4ZDY1ZDEnLCAnIzdlNTZkMycsICcjNmY0N2Q1JywgJyM2MTM3ZDgnLCAnIzUyMjhkYScsICcjNDMxOGRkJ10sXG4gICAgWycjOGFiYzE4JywgJyM4MWIzMmEnLCAnIzc5YWIzYicsICcjNzBhMjRiJywgJyM2Nzk5NWYnLCAnIzVmOTE3MScsICcjNTY4ODgyJywgJyM0ZDdmOTQnLCAnIzQ1NzdhNicsICcjM2M2ZWI4JywgJyMzMzY1Y2EnLCAnIzJiNWRkYicsICcjMjI1NGVkJ10sXG4gICAgWycjYjZjNTA2JywgJyNhYmI5MTUnLCAnI2ExYWUyNCcsICcjOTZhMjMzJywgJyM4Yjk2NDInLCAnIzgxOGE1MScsICcjNzY3ZTYxJywgJyM2YjczNzAnLCAnIzYxNjc3ZicsICcjNTY1YjhlJywgJyM0YjRmOWQnLCAnIzQxNDRhYycsICcjMzYzOGJiJ11cbiAgXTtcbiAgLy8gQ29udGFpbnMgMzAgYXJyYXlzLCBlYWNoIHdpdGggMTMgaXRlbXMgaW4gZWFjaC4gVXNlZCBpbiBlYWNoIHJvdW5kIHRvIHBpY2sgYSByYW5kb20gYXJyYXkgdG8gcHJvZHVjZSB0aGUgcm91bmRBcnJheSBhbmQgc2h1ZmZsZWRBcnJheS5cblxuICBjb25zdCBlbGVtZW50U2VsZWN0b3IgPSBbXG4gICAgWzAsIDMsIDYsIDksIDEyXSxcbiAgICBbMCwgMywgNSwgNywgOSwgMTJdLFxuICAgIFswLCAxLCAzLCA2LCA5LCAxMSwgMTJdLFxuICAgIFswLCAxLCAzLCA1LCA3LCA5LCAxMSwgMTJdLFxuICAgIFswLCAxLCAzLCA0LCA2LCA4LCA5LCAxMSwgMTJdLFxuICAgIFswLCAxLCAyLCA0LCA1LCA3LCA4LCAxMCwgMTEsIDEyXSxcbiAgICBbMCwgMSwgMiwgMywgNSwgNiwgNywgOSwgMTAsIDExLCAxMl0sXG4gICAgWzAsIDEsIDIsIDMsIDQsIDUsIDcsIDgsIDksIDEwLCAxMSwgMTJdLFxuICAgIFswLCAxLCAyLCAzLCA0LCA1LCA2LCA3LCA4LCA5LCAxMCwgMTEsIDEyXVxuICBdO1xuICAvLyBDb250YWlucyA5IGFycmF5cyB3aXRoIHZhcnlpbmcgaW5kaWNlcywgdXNlZCB0byBkZXRlcm1pbmUgaG93IG1hbnkgaW5kaWNlcyB0byBkZXBsb3kgZGVwZW5kaW5nIHVwb24gd2hpY2ggcm91bmQgYW5kIHdoYXQgZ2FtZSBtb2RlLlxuXG4gIGxldCByb3VuZENvdW50ZXIgPSAwO1xuICBsZXQgcm91bmROdW1iZXIgPSBudWxsO1xuICBsZXQgJHJvdW5kID0gJCgnLnJvdW5kJyk7XG4gIGxldCAkZ2FtZVNxdWFyZXMgPSAkKCcuc3F1YXJlJyk7XG4gIGxldCByb3VuZEFycmF5ID0gbnVsbDtcbiAgbGV0IHJhbmRvbUNvbG9yc0FyciA9IG51bGw7XG4gIGxldCBzaHVmZmxlZEFycmF5ID0gW107XG4gIGxldCBwcmV2LCBwcmV2Y29sb3IgPSBudWxsO1xuICBsZXQgY291bnQgPSAwO1xuICBsZXQgcXVpY2tlc3RUaW1lID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3F1aWNrZXN0VGltZScpIHx8IDA7XG5cblxuICAkZ2FtZUJvYXJkLm9uKCdjbGljaycsICcuc3F1YXJlJywgY2hhbmdlQ29sb3IpO1xuICAvLyBFdmVudCBMaXN0ZW5lciB1c2VkIHdpdGggdGhlIGNoYW5nZUNvbG9yIGZ1bmN0aW9uIHRvIGFsbG93IEpTIHRvIGxpc3RlbiBmb3IgY2xpY2tzIG9uIHRoZSBzcXVhcmVzIGFuZCBjaGFuZ2UgdGhlIGNvbG91cnMgb25jZSB0d28gY2xpY2tzIGhhdmUgYmVlbiBwcmVzc2VkLlxuXG4gICRuZXh0QnV0dG9uLm9uKCdjbGljaycsICgpID0+IHtcbiAgICBzaHVmZmxlZEFycmF5ID0gW107XG4gICAgbmV4dFJvdW5kKCk7XG4gICAgJHJvdW5kLnRleHQocm91bmRDb3VudGVyICsgMSk7XG4gICAgcGxheVJvdW5kKCk7XG4gIH0pO1xuICAvLyBFdmVudCBMaXN0ZW5lciB1c2VkIHRvIGluaXRpYXRlIHRoZSBuZXh0IHJvdW5kIG9mIHRoZSBnYW1lLiBFbXB0aWVzIHRoZSBzaHVmZmxlZEFycmF5LCBydW5zIHRoZSBmdW5jdGlvbiBuZXh0Um91bmQsIGluY3JlYXNlIHRoZSByb3VuZCBjb3VudGVyIGFuZCByZXBvcHVsYXRlcyB0aGUgbmV4dCByb3VuZCB3aXRoIGFuIGFycmF5LlxuXG4gICRyZXNldEJ1dHRvbi5vbignY2xpY2snLCAoKSA9PiB7XG4gICAgcmVzZXRHYW1lKCk7XG4gIH0pO1xuICAvLyBFdmVudCBMaXN0ZW5lciB1c2VkIHRvIHJlc2V0IHRoZSBnYW1lLiBCcmluZ3MgdGhlIGdhbWUgYmFjayB0byB0aGUgaW5pdGlhbCBzdGF0ZSB3aGVuIGxvYWRlZC4gRG9lcyB0aGlzIGJ5IHJ1bm5pbmcgdGhlIHJlc2V0R2FtZSBmdW5jdGlvbi5cblxuICAkZGlmZmljdWx0eS5vbignY2xpY2snLCAoZSkgPT4ge1xuICAgIGNvbnNvbGUubG9nKCdjbGlja2VkJyk7XG5cbiAgICBpZiAoJChlLnRhcmdldCkuaGFzQ2xhc3MoJ2Vhc3lCdXR0b24nKSkge1xuICAgICAgYWxlcnQoJ1lvdVxcJ3JlIGFib3V0IHRvIHN0YXJ0IGVhc3kgbW9kZS4gSW5zdHJ1Y3Rpb25zOiBTaW1wbHkgbW92ZSB0aGUgYmxvY2tzIGluIHRoZSBtaWRkbGUgb2YgdGhlIHBhbGV0dGUgc28gdGhhdCB0aGV5IGNyZWF0ZSB0aGUgY29ycmVjdCBncmFkaWVudCBiZXR3ZWVuIHRoZSB0d28gZW5kIGNvbG91cnMuIEFmdGVyIHlvdSBjb21wbGV0ZSBlYWNoIHJvdW5kLCBwcmVzcyB0aGUgTmV4dCBSb3VuZCBidXR0b24gdG8gY29udGludWUgdG8gdGhlIGZvbGxvd2luZyByb3VuZC4gSGFyZGx5IHJvY2tldCBzY2llbmNlIScpO1xuICAgICAgJHJvdW5kLnRleHQocm91bmRDb3VudGVyICsgMSk7XG4gICAgICByb3VuZE51bWJlciA9IDE7XG4gICAgICBnYW1lU3RhcnQoKTtcbiAgICAgIHBsYXlSb3VuZCgpO1xuXG4gICAgfSBlbHNlIGlmICgkKGUudGFyZ2V0KS5oYXNDbGFzcygnaGFyZEJ1dHRvbicpKSB7XG4gICAgICBhbGVydCgnWW91XFwncmUgYWJvdXQgdG8gc3RhcnQgaGFyZCBtb2RlLiBJbnN0cnVjdGlvbnM6IFNpbXBseSBtb3ZlIHRoZSBibG9ja3MgaW4gdGhlIG1pZGRsZSBvZiB0aGUgcGFsZXR0ZSBzbyB0aGF0IHRoZXkgY3JlYXRlIHRoZSBjb3JyZWN0IGdyYWRpZW50IGJldHdlZW4gdGhlIHR3byBlbmQgY29sb3Vycy4gQWZ0ZXIgeW91IGNvbXBsZXRlIGVhY2ggcm91bmQsIHByZXNzIHRoZSBOZXh0IFJvdW5kIGJ1dHRvbiB0byBjb250aW51ZSB0byB0aGUgZm9sbG93aW5nIHJvdW5kLiAgSGFyZGx5IHJvY2tldCBzY2llbmNlIScpO1xuICAgICAgJHJvdW5kLnRleHQocm91bmRDb3VudGVyICsgMSk7XG4gICAgICByb3VuZE51bWJlciA9IDU7XG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IDQ7IGkrKykge1xuICAgICAgICAkZ2FtZUJvYXJkLmFwcGVuZCgnPGRpdiBjbGFzcz1cInNxdWFyZVwiPjwvZGl2PicpO1xuICAgICAgfVxuICAgICAgZ2FtZVN0YXJ0KCk7XG4gICAgICBwbGF5Um91bmQoKTtcbiAgICB9XG4gIH0pO1xuICAvLyBFdmVudCBMaXN0ZW5lciB1c2VkIHRvIHN0YXJ0IHRoZSBnYW1lLiBEZXBlbmRpbmcgb24gd2hpY2ggZ2FtZSBtb2RlIGlzIGNsaWNrZWQsIGl0IHJ1bnMgdGhlIHNjcmlwdCBmb3IgZWl0aGVyIGVhc3kgb3IgaGFyZC5cblxuICAvLyBmb3IgKHZhciBpID0gMDsgaSA8IDY7IGkrKykge1xuICAvLyB9XG5cbiAgZnVuY3Rpb24gZ2FtZVN0YXJ0ICgpIHtcbiAgICAkZWFzeUJ1dHRvbi5oaWRlKCk7XG4gICAgJGhhcmRCdXR0b24uaGlkZSgpO1xuICAgICRyZXNldEJ1dHRvbi5zaG93KCk7XG4gICAgJHdoaWNoUm91bmQuc2hvdygpO1xuICB9XG4gIC8vIFRoaXMgZnVuY3Rpb24gaXMgdXNlZCB0byBzdGFydCB0aGUgZ2FtZS4gSXQgaGlkZXMgdGhlIGRpZmZpY3VsdHkgYnV0dG9ucyBhbmQgc2hvd3MgdGhlIGdhbWUgc3F1YXJlcyBhbmQgcmVzZXQgYnV0dG9uLlxuXG4gIGZ1bmN0aW9uIGNvbG9ycygpIHtcbiAgICByZXR1cm4gY29sb3JQYWxldHRlW01hdGguZmxvb3IoTWF0aC5yYW5kb20oKSpjb2xvclBhbGV0dGUubGVuZ3RoKV07XG4gIH1cbiAgLy8gVGhpcyBmdW5jdGlvbiByYW5kb21hbHkgY2hvb3NlcyBvbmUgb2YgdGhlIDMwIGNvbG9yIHBhbGV0dGVzIGZvciB1c2UgaW4gZWFjaCByb3VuZC5cblxuICBmdW5jdGlvbiBzZXF1ZW5jZU1hdGNoZXIoKSB7XG4gICAgY29uc3Qgc2VxdWVuY2VBcnJheSA9IGVsZW1lbnRTZWxlY3Rvcltyb3VuZE51bWJlci0xXTtcbiAgICByZXR1cm4gcm91bmRBcnJheSA9IHNlcXVlbmNlQXJyYXkubWFwKGZ1bmN0aW9uKGl0ZW0pIHtcbiAgICAgIHJldHVybiByYW5kb21Db2xvcnNBcnJbaXRlbV07XG4gICAgfSk7XG4gIH1cbiAgLy8gVGhpcyBmdW5jdGlvbiB1c2VzIHRoZSByb3VuZE51bWJlciwgbWludXMgb25lLCB0byBmaW5kIHRoZSBhcnJheSBpbiB0aGUgZWxlbWVudFNlbGVjdG9yIGFuZCBtYXBzIGp1c3QgdGhlIGluZGljZXMgZnJvbSB0aGF0IGFycmF5IG9udG8gdGhlIHJhbmRvbSBhcnJheSBjaG9zZW4gZnJvbSB0aGUgY29sb3JzIGZ1bmN0aW9uIGFuZCBjYWxscyBpdCByb3VuZEFycmF5IGFzIGl0IHdpbGwgYmUgdGhlIGFycmF5IHRoYXQgdGhlIHVzZXIgbmVlZHMgdG8gbWF0Y2guXG5cbiAgQXJyYXkucHJvdG90eXBlLnNodWZmbGUgPSBmdW5jdGlvbigpIHtcbiAgICBmb3IobGV0IGk9MTsgaTx0aGlzLmxlbmd0aC0xOyBpKyspIHtcbiAgICAgIHNodWZmbGVkQXJyYXkucHVzaCh0aGlzW2ldKTtcbiAgICB9XG4gICAgc2h1ZmZsZWRBcnJheS5zb3J0KGZ1bmN0aW9uKCkge1xuICAgICAgcmV0dXJuIDAuNSAtIE1hdGgucmFuZG9tKCk7XG4gICAgfSk7XG4gICAgc2h1ZmZsZWRBcnJheS5wdXNoKHRoaXNbdGhpcy5sZW5ndGgtMV0pO1xuICAgIHNodWZmbGVkQXJyYXkudW5zaGlmdCh0aGlzWzBdKTtcblxuICAgIGlmIChzaHVmZmxlZEFycmF5Lmxlbmd0aCA9PT0gcm91bmRBcnJheS5sZW5ndGggJiYgc2h1ZmZsZWRBcnJheS5ldmVyeSgodixpKT0+IHYgPT09IHJvdW5kQXJyYXlbaV0pKSB7XG4gICAgICBzaHVmZmxlZEFycmF5ID0gW107XG4gICAgICByb3VuZEFycmF5LnNodWZmbGUoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIHNodWZmbGVkQXJyYXk7XG4gICAgfVxuICB9O1xuICAvLyBUaGlzIHRha2VzIHRoZSByb3VuZEFycmF5LCByZW1vdmVzIHRoZSBmaXJzdCBhbmQgbGFzdCBpbmRpY2VzLCBhbmQgdGhlbiBzaHVmZmxlcyB0aGUgbWlkZGxlIGluZGljZXMsIGJlZm9yZSByZWF0dGFjaGluZyB0aGUgZmlyc3QgYW5kIGxhc3QgaW5kaWNlcy4gSXQgYWxzbyBoYXZlIGEgZG91YmxlIHNodWZmbGUgZnVuY3Rpb24gaW4gY2FzZSB0aGUgZmlyc3QgZnVuY3Rpb24gcmV0dXJucyB0aGUgc2FtZSBhcnJheSBhcyB0aGUgcm91bmRBcnJheS4gU3RvcmVzIHRoZSBhcnJheSBpbnRvIGEgdmFyaWFibGUgY2FsbGVkIHNodWZmbGVkQXJyYXkuXG5cbiAgZnVuY3Rpb24gcGxheVJvdW5kKCkge1xuICAgIHJvdW5kTnVtYmVyO1xuICAgIGNvbnNvbGUubG9nKCdJbiBwbGF5IHJvdW5kJywgcm91bmROdW1iZXIpO1xuICAgIHJhbmRvbUNvbG9yc0FyciA9IGNvbG9ycygpO1xuICAgIHNlcXVlbmNlTWF0Y2hlcigpO1xuICAgIGNvbnNvbGUubG9nKCdyb3VuZEFycmF5Jywgcm91bmRBcnJheSk7XG4gICAgcm91bmRBcnJheS5zaHVmZmxlKCk7XG4gICAgY29uc29sZS5sb2coJ3NodWZmbGVkQXJyYXknLCBzaHVmZmxlZEFycmF5KTtcblxuICAgICQoJy5zcXVhcmUnKS5lYWNoKGZ1bmN0aW9uKGlkeCwgZWwpIHtcbiAgICAgICQoZWwpLmNzcygnYmFja2dyb3VuZENvbG9yJywgc2h1ZmZsZWRBcnJheVtpZHhdKTtcbiAgICB9KTtcbiAgfVxuICAvLyBUaGlzIGZ1bmN0aW9uIGNvbWJpbmVzIHRoZSBmdW5jdGlvbnMgY29sb3JzLCBzZXF1ZW5jZU1hdGNoZXIgYW5kIHNodWZmbGUuIEl0IGlzIHJ1biBpbiBlYWNoIHJvdW5kLiBPdmVyYWxsLCBpdCBwaWNrcyBhIHJhbmRvbSBhcnJheSBmcm9tIHRoZSBjb2xvclBhbGV0dGUsIG1hcHMgaXQgYWdhaW5zdCB0aGUgc2VxdWVuY2VNYXRjaGVyIHRvIHByb2R1Y2UgdGhlIHJvdW5kQXJyYXksIHdoaWNoIGlzIHRoZW4gc2h1ZmZsZWQgdG8gcHJvZHVjZSB0aGUgc2h1ZmZsZWRBcnJheS4gSXQgdGhlbiBwdXNoZXMgdGhlIEhFWCBjb2xvcnMgZnJvbSB0aGUgc2h1ZmZsZWRBcnJheSBpbnRvIHRoZSBlbXB0eSBkaXZzIGluIHRoZSBIVE1MLlxuXG4gIGZ1bmN0aW9uIHJnYlRvSGV4ICh1c2VyUmdiKSB7XG4gICAgdmFyIHJnYiA9IHVzZXJSZ2IucmVwbGFjZSgvXFxzL2csJycpLm1hdGNoKC9ecmdiYT9cXCgoXFxkKyksKFxcZCspLChcXGQrKS9pKTtcbiAgICByZXR1cm4gKHJnYiAmJiByZ2IubGVuZ3RoID09PSA0KSA/ICcjJyArXG4gICAgKCcwJyArIHBhcnNlSW50KHJnYlsxXSwxMCkudG9TdHJpbmcoMTYpKS5zbGljZSgtMikgK1xuICAgICgnMCcgKyBwYXJzZUludChyZ2JbMl0sMTApLnRvU3RyaW5nKDE2KSkuc2xpY2UoLTIpICtcbiAgICAoJzAnICsgcGFyc2VJbnQocmdiWzNdLDEwKS50b1N0cmluZygxNikpLnNsaWNlKC0yKSA6IHVzZXJSZ2I7XG4gIH1cbiAgLy8gVGhpcyBmdW5jdGlvbiBpcyB1c2VkIHRvIGNvbnZlcnQgdGhlIHVzZXJSZ2IgYXJyYXkgd2hpY2ggaXMgcmV0dXJuZWQgYWZ0ZXIgdHdvIGNsaWNrcyBpbnRvIGFuIGFycmF5IG9mIEhFWCBjb2RlcyB0byBiZSBjb21wYXJlZCBhZ2FpbnQgdGhlIHJvdW5kQXJyYXkuIFRoZSBpbnB1dCBmb3JtYXQgaXMgXCJyZ2IociwgZywgYiwpXCIgYW5kIG91dHB1dHMgXCIjSEVYQ09ERVwiLlxuXG4gIGZ1bmN0aW9uIGNoZWNrQ29tcGxldGUgKCkge1xuICAgIGNvbnN0IHVzZXJSZ2IgPSBbXTtcbiAgICAkKCcuc3F1YXJlJykuZWFjaChmdW5jdGlvbihpbmRleCwgZWxlbWVudCkge1xuICAgICAgY29uc3QgYmFja2dyb3VuZENvbG91ciA9ICQoZWxlbWVudCkuY3NzKCdiYWNrZ3JvdW5kQ29sb3InKTtcbiAgICAgIHVzZXJSZ2IucHVzaChiYWNrZ3JvdW5kQ29sb3VyKTtcbiAgICB9KTtcbiAgICBjb25zb2xlLmxvZygndXNlclJnYicsIHVzZXJSZ2IpO1xuXG4gICAgY29uc3QgdXNlclNvcnRlZEFycmF5ID0gdXNlclJnYi5tYXAocmdiVG9IZXgpO1xuICAgIGNvbnNvbGUubG9nKCd1c2VyU29ydGVkQXJyYXknLCB1c2VyU29ydGVkQXJyYXkpO1xuICAgIGNvbnNvbGUubG9nKCdyb3VuZEFycmF5Jywgcm91bmRBcnJheSk7XG5cbiAgICBpZiAodXNlclNvcnRlZEFycmF5Lmxlbmd0aCA9PT0gcm91bmRBcnJheS5sZW5ndGggJiYgdXNlclNvcnRlZEFycmF5LmV2ZXJ5KCh2LGkpPT4gdiA9PT0gcm91bmRBcnJheVtpXSkpIHtcbiAgICAgIGNvbnNvbGUubG9nKCdJdFxcJ3MgYSBtYXRjaCwgd2VsbCBkb25lJyk7XG4gICAgICAkcGluZ1NvdW5kLnBsYXkoKTtcbiAgICAgIGFsZXJ0KCdSb3VuZCBDb21wbGV0ZSwgcHJlc3MgTmV4dCBSb3VuZCB0byBjb250aW51ZScpO1xuICAgICAgJG5leHRCdXR0b24uc2hvdygpO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zb2xlLmxvZygnTm90IHF1aXRlLCBoYXZlIGFub3RoZXIgZ28nKTtcbiAgICB9XG4gIH1cbiAgLy8gVGhpcyBmdW5jdGlvbiBjaGVja3MgdG8gc2VlIGlmIHRoZSB1c2VyIGhhcyBzb3J0ZWQgdGhlIGFycmF5IHRoYXQgd2FzIHB1c2hlZCBpbnRvIHRoZSBkaXZzLiBJdCBiZWdpbnMgd2l0aCBhbiBlbXB0eSBhcnJheSwgdXNlclJnYiwgd2hpY2ggaXMgcG9wdWxhdGVkIHdpdGggdGhlIHJnYiBjb2RlcyBmcm9tIHRoZSBjb2xvcnMgdGhhdCBhcmUgY3VycmVudGx5IG9uIHZpZXcsIGluIHRoZSBvcmRlciB0aGV5IGFyZSBpbi4gSXQgdGhlbiBjb252ZXJ0cyB0aGUgcmdiIGNvbG9ycyBpbnRvIGhleCBjb2xvcnMgYW5kIHB1dHMgdGhlbSBpbnRvIGEgbmV3IGFycmF5IGNhbGxlZCB1c2VyU29ydGVkQXJyYXkuIEZpbmFsbHkgaXQgY29tcGFyZXMgdGhlIHVzZXJTb3J0ZWRBcnJheSB0byB0aGUgcm91bmRBcnJheSB0byBkZXRlcm1pbmUgaWYgdGhleSBhcmUgaWRlbnRpY2FsLiBJZiB0aGV5IGFyZSwgaXQgYWxlcnRzIHRoZSB1c2VyIHRoYXQgdGhlIG5leHQgcm91bmQgaXMgYXZhaWxhYmxlLiBPdGhlcndpc2UsIHRoZSB1c2VyIGNvbnRpbnVlcyB0byBzb3J0IHRoZSBhcnJheS5cblxuICBmdW5jdGlvbiBjaGFuZ2VDb2xvcihlKXtcbiAgICBjb25zdCBpbmRleCA9ICQoZS50YXJnZXQpLmluZGV4KCcuc3F1YXJlJyk7XG4gICAgY29uc3QgbGVuZ3RoID0gJCgnLnNxdWFyZScpLmxlbmd0aDtcbiAgICBpZihpbmRleCAhPT0gMCAmJiBpbmRleCAhPT0gKGxlbmd0aCAtIDEpKSB7XG4gICAgICBpZihjb3VudCA9PT0gMCl7XG4gICAgICAgIHByZXYgPSAkKHRoaXMpO1xuICAgICAgICBwcmV2Y29sb3IgPSBwcmV2LmNzcygnYmFja2dyb3VuZENvbG9yJyk7XG4gICAgICB9ZWxzZSBpZihjb3VudCA9PT0gMSl7XG4gICAgICAgIHByZXYuY3NzKCdiYWNrZ3JvdW5kQ29sb3InLCAkKHRoaXMpLmNzcygnYmFja2dyb3VuZENvbG9yJykpO1xuICAgICAgICAkKHRoaXMpLmNzcygnYmFja2dyb3VuZENvbG9yJywgcHJldmNvbG9yKTtcbiAgICAgICAgY291bnQgPSAtMTtcbiAgICAgICAgY2hlY2tDb21wbGV0ZSgpO1xuICAgICAgfVxuICAgICAgY291bnQrPTE7XG4gICAgfVxuICB9XG4gIC8vIFRoaXMgZnVuY3Rpb24gaXMgdXNlZCB0byBzd2l0Y2ggdGhlIGNvbG9ycyB3aXRoaW4gZGl2LiBPbmx5IG9uY2UgdGhlIHVzZXIgaGFzIGNsaWNrZWQgb24gdHdvIHNlcGVyYXRlIGRpdnMgd2lsbCB0aGUgYmFja2dyb3VuZCBjb2xvcnMgY2hhbmdlLiBJdCBhbHNvIGluY2x1ZGVzIHRoZSBjaGVja0NvbXBsZXRlIGZ1bmN0aW9uIHNvIHRoYXQgb25jZSB0aGUgY2hhbmdlIGhhcyBiZWVuIG1hZGUsIGl0IGNhbiBjaGVjayB3aGV0aGVyIGl0IGlzIGNvcnJlY3Qgb3Igbm90LlxuXG4gIGZ1bmN0aW9uIG5leHRSb3VuZCAoKSB7XG4gICAgcm91bmRDb3VudGVyICs9IDE7XG4gICAgcm91bmROdW1iZXIgKz0xO1xuICAgICRnYW1lQm9hcmQuYXBwZW5kKCc8ZGl2IGNsYXNzPVwic3F1YXJlXCI+PC9kaXY+Jyk7XG4gICAgJG5leHRCdXR0b24uaGlkZSgpO1xuICB9XG4gIC8vIFRoaXMgZnVuY3Rpb24gaXMgdXNlZCB3aGVuIHRoZSBuZXh0QnV0dG9uIGlzIGNsaWNrZWQuIFRoZSBuZXh0QnV0dG9uIG9ubHkgYXBwZWFycyBhZnRlciB0aGUgdXNlciBoYXMgY29ycmVjdGx5IHNvcnRlZCB0aGUgYXJyYXksIGFuZCBpcyB1c2VkIHRvIG1vdmUgdG8gdGhlIG5leHQgcm91bmQuIEl0IGhpZGVzIG9uY2UgaXQgaXMgcHJlc3NlZCBzbyB0aGUgdXNlciBjYW5ub3Qgc2tpcCByb3VuZHMuXG5cbiAgZnVuY3Rpb24gcmVzZXRHYW1lKCkge1xuICAgIHJvdW5kQ291bnRlciA9IDE7XG4gICAgcm91bmROdW1iZXIgPSAxO1xuICAgICRyZXNldEJ1dHRvbi5oaWRlKCk7XG4gICAgJG5leHRCdXR0b24uaGlkZSgpO1xuICAgICRnYW1lU3F1YXJlcy5oaWRlKCk7XG4gICAgJHdoaWNoUm91bmQuaGlkZSgpO1xuICAgICRlYXN5QnV0dG9uLnNob3coKTtcbiAgICAkaGFyZEJ1dHRvbi5zaG93KCk7XG4gICAgbGV0IHJvdW5kQXJyYXkgPSBudWxsO1xuICAgIGxldCByYW5kb21Db2xvcnNBcnIgPSBudWxsO1xuICAgIGxldCBzaHVmZmxlZEFycmF5ID0gW107XG4gICAgbGV0IHJvdW5kQ291bnRlciA9IDA7XG4gICAgbGV0IHJvdW5kTnVtYmVyID0gbnVsbDtcbiAgfVxuICAvLyBUaGlzIGZ1bmN0aW9uIGlzIHVzZWQgdG8gcmVzZXQgdGhlIGdhbWUuIEl0IGJyaW5ncyB0aGUgZ2FtZSBiYWNrIHRvIHRoZSBvcmlnaW5hbCBzdGF0ZSBhbmQgc3RvcHMgYW55IHRpbWVycyB0aGF0IG1pZ2h0IGhhdmUgYmVlbiBydW5uaW5nLlxuXG5cblxufSk7XG5cblxuXG5cblxuXG5cblxuXG5cbi8vIGZ1bmN0aW9uIHN0YXJ0VGltZSgpIHtcbi8vICAgdmFyIHRpbWUxID0gbmV3IERhdGUoKTtcbi8vICAgcmV0dXJuIHRpbWUxO1xuLy8gfVxuLy9cbi8vIGZ1bmN0aW9uIGVuZFRpbWUoKSB7XG4vLyAgIHZhciB0aW1lMiA9IG5ldyBEYXRlKCk7XG4vLyAgIHJldHVybiB0aW1lMjtcbi8vIH1cbi8vXG4vLyBmdW5jdGlvbiBjaGVja1RpbWUoKSB7XG4vLyAgIHZhciB1c2VyVGltZSA9ICh0aW1lMiAtIHRpbWUxKS8xMDAwO1xuLy8gICByZXR1cm4gdXNlclRpbWU7XG5cbi8vIHF1aWNrZXN0VGltZSA9ICh1c2VyVGltZSA8IHF1aWNrZXN0VGltZSkgPyB1c2VyVGltZSA6IHF1aWNrZXN0VGltZTtcblxuLy8gbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3F1aWNrZXN0VGltZScsIHF1aWNrZXN0VGltZSk7XG5cblxuLy8gZnVuY3Rpb24gZ2FtZVRpbWUgKCkge1xuLy8gICBpZiAodXNlclRpbWUgPCBxdWlja2VzdFRpbWUpIHtcbi8vICAgICBxdWlja2VzdFRpbWUgPSB1c2VyVGltZVxuLy8gICAgIGFsZXJ0KCdDb25ncmF0dWxhdGlvbnMsIHlvdVxcJ3ZlIHNldCB0aGUgbmV3IHF1aWNrZXN0IHRpbWUhJylcbi8vICAgfSBlbHNlICh1c2VyVGltZSA+IHF1aWNrZXN0VGltZSkge1xuLy8gICAgIGFsZXJ0KCdVbmx1Y2t5LCB5b3Ugd2VyZVxcJ250IHF1aXRlIGZhc3QgZW5vdWdoIHRvIHNldCBhIG5ldyBxdWljayB0aW1lLicpXG4vLyAgIH1cbi8vIH1cbiJdfQ==
