"use strict";$(function(){function a(){d.hide(),e.hide(),c.show(),n.show(),t.show()}console.log("Igor, it's alive!");var b=($(".gameBoard"),$(".difficulty")),d=$(".easyButton"),e=$(".hardButton"),c=($(".inplay"),$(".resetButton")),f=$(".nextButton"),t=($(".quickTime"),$(".roundDisplay")),o=($(".soundOnOff"),[["#3db5f9","#48a8e8","#539ad7","#5e8dc6","#697fb5","#7472a4","#7e6493","#895782","#944a71","#9f3c60","#aa2f4f","#b5213e","#c0142d"],["#44f267","#4bdf68","#51cd69","#58ba6a","#5ea76b","#65956c","#6b826d","#726f6e","#795d6f","#7f4a70","#863771","#8c2572","#931273"],["#553e13","#5a3c1c","#5f3a25","#65382f","#6a3638","#6f3441","#74324b","#7a3054","#7f2e5d","#842c66","#8a2a6f","#8f2879","#942682"],["#5c2c2d","#623a35","#68483d","#6d5745","#73654e","#797356","#7e815e","#849066","#8a9e6e","#90ac77","#95ba7f","#9bc987","#a1d78f"],["#148ea9","#278faa","#3a90ab","#4d90ab","#6091ac","#7392ad","#8692ae","#9993ae","#ac94af","#bf95b0","#d295b1","#e596b1","#f897b2"],["#493582","#524586","#5b568b","#63668f","#6c7693","#758798","#7e979c","#86a7a0","#8fb8a5","#98c8a9","#a1d8ad","#a9e9b2","#b2f9b6"],["#6746f2","#7241e3","#7d3bd4","#8735c5","#9230b6","#9d2ba7","#a72597","#b21f88","#bd1a79","#c8156a","#d30f5b","#dd094c","#e8043d"],["#23184c","#321e4c","#40244d","#4f2a4d","#5e2f4d","#6c354d","#7b3b4e","#8a414e","#98474e","#a74d4e","#b6524e","#c4584f","#d35e4f"],["#78a0d8","#7ca1cd","#80a2c2","#84a4b7","#89a5ad","#8da6a2","#91a797","#95a98c","#99aa81","#9cab77","#a2ad6c","#a6ae61","#aaaf56"],["#1fe876","#29e268","#34dc60","#3ed658","#49d051","#53ca49","#5ec441","#68bd39","#72b731","#7db12a","#87ab22","#92a51a","#9c9f12"],["#3f4887","#4c4885","#5a4884","#674982","#754981","#82497f","#904a7e","#9d4a7c","#aa4a7a","#b84a79","#c54b77","#d34b76","#e04b74"],["#1a57e8","#255dd6","#3062c4","#3b68b3","#456da1","#50738f","#5b787d","#667e6b","#718459","#7b8948","#868f36","#919424","#929a12"],["#05a83e","#18ad4e","#2bb35e","#3fb86e","#52bd7e","#65c28e","#78c79e","#8ccdaf","#9fd2bf","#b2d7cf","#c5dddf","#d9e2ef","#ece7ff"],["#2fded8","#3ae0ca","#45e2bb","#50e4ad","#5be69f","#66e890","#71ea82","#7beb74","#86ed65","#91ef57","#9cf149","#a7f33a","#b2f52c"],["#462e75","#523d73","#5d4d70","#695c6e","#746b6c","#807b69","#8b8a67","#979965","#a3a962","#aeb860","#bac75e","#c5d75b","#d1e659"],["#5ddac3","#69d3a7","#76cc9a","#82c48e","#8fbd81","#9bb674","#a7af68","#b4a85b","#c0a14f","#cd9a42","#d99236","#c68b2a","#f2841d"],["#052e3d","#123c4c","#20495c","#2d576b","#3b647a","#48728a","#558099","#638da8","#709bb8","#7ea8c7","#8bb6d6","#99c3e6","#a6d1f5"],["#2c08ba","#380baf","#440ea3","#501298","#5c158d","#661881","#741b76","#801e6b","#8c215f","#982554","#a42849","#b02b3d","#bc2e32"],["#06bf79","#12b37d","#1fa880","#2b9c84","#389187","#44858b","#517a8e","#5d6e91","#696295","#765798","#824b9c","#8f40a0","#9b34a3"],["#3d770e","#4a8214","#578e1b","#649921","#72a427","#7fb02d","#8cbb34","#99c63a","#a6d240","#b4dd46","#c1e84d","#cef435","#dbff59"],["#5ca10e","#679b16","#72941d","#7d8e25","#88872c","#938134","#9e7a3b","#a87443","#b36d4b","#be6752","#c9605a","#d45a61","#df5369"],["#7bc9e5","#82c5d5","#8ac2c6","#91beb7","#98bba7","#9fb797","#a7b488","#aeb078","#b5ac69","#bca95a","#c4a54a","#cba32b","#d29e2b"],["#71d72f","#7bc82e","#85b92c","#8faa2b","#999b2a","#a38c28","#ad7d27","#b66d26","#c05e24","#ca4f23","#d44022","#de3120","#e8221f"],["#d5870b","#c58514","#b5821d","#a58026","#957e2f","#857b38","#747941","#647749","#547452","#44725b","#347064","#246d6d","#146b76"],["#f23f8e","#e4408d","#d6418b","#c8438a","#ba4489","#ac4588","#9e4787","#8f4885","#814984","#734a83","#654b81","#574d80","#494e7f"],["#dab2f6","#cfaae2","#c4a2ce","#b99bb9","#ae93a5","#a38b91","#98837d","#8e7b68","#837354","#786b40","#6d642b","#625c17","#575403"],["#da87ce","#d28dc0","#ca93b2","#c299a4","#ba9f96","#b29588","#abab7a","#93b26b","#9bb85d","#93be4f","#8bc441","#83ca33","#7bd025"],["#f89951","#ed915b","#e28a66","#d78270","#cc7a7a","#c17285","#b66b8f","#ab6399","#a05ba4","#9553ae","#8a4bb8","#7f44c3","#743ccd"],["#f5d2bf","#e6c3c1","#d7b3c4","#c8a4c7","#ba94c9","#ab84cb","#9c75ce","#8d65d1","#7e56d3","#6f47d5","#6137d8","#5228da","#4318dd"],["#8abc18","#81b32a","#79ab3b","#70a24b","#67995f","#5f9171","#568882","#4d7f94","#4577a6","#3c6eb8","#3365ca","#2b5ddb","#2254ed"],["#b6c506","#abb915","#a1ae24","#96a233","#8b9642","#818a51","#767e61","#6b7370","#61677f","#565b8e","#4b4f9d","#4144ac","#3638bb"]]),n=$(".square");c.hide(),f.hide(),n.hide(),t.hide();var s=function(){return o[Math.floor(Math.random()*o.length)]}(),r=[s[0],s[3],s[6],s[9],s[12]];console.log(r),Array.prototype.shuffleLeaveFL=function(){for(var a=[],b=1;b<this.length-1;b++)a.push(this[b]);return a.sort(function(){return.5-Math.random()}),a.push(this[this.length-1]),a.unshift(this[0]),a},console.log(r.shuffleLeaveFL()),n.each(function(a,b){$(b).css("backgroundColor",r[a])}),b.on("click",function(b){console.log("clicked"),$(b.target).hasClass("easyButton")?(a(),alert("About to play easy")):$(b.target).hasClass("hardButton")&&(a(),alert("About to play hard"))})});
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5qcyJdLCJuYW1lcyI6WyIkIiwiJGdhbWVTcXVhcmVzIiwiaGlkZSIsIiRoYXJkQnV0dG9uIiwiJHJlc2V0QnV0dG9uIiwic2hvdyIsIiRkaWZmaWN1bHR5IiwiY29uc29sZSIsImxvZyIsIiRnYW1lYm9hcmQiLCIkZWFzeUJ1dHRvbiIsIiRpbnBsYXkiLCIkbmV4dEJ1dHRvbiIsIiRzb3VuZCIsIiRxdWlja1RpbWUiLCJjb2xvclBhbGV0dGUiLCJyYW5kb20iLCJsZW5ndGgiLCJyYW5kb21Db2xvcnNBcnIiLCJzaHVmZmxlTGVhdmVGTCIsImkiLCJNYXRoIiwiYXJyIiwiJHdoaWNoUm91bmQiLCJhbGVydCIsInRhcmdldCIsImhhc0NsYXNzIiwiZWFzeVIxIiwiQXJyYXkiLCJwcm90b3R5cGUiLCJ0aGlzIiwicHVzaCIsInNvcnQiLCJ1bnNoaWZ0IiwiZWFjaCIsImlkeCIsImVsIiwiY3NzIiwib24iLCJlIiwiZ2FtZVN0YXJ0Il0sIm1hcHBpbmdzIjoiWUFBQUEsR0FBRSxXQThGQUMsUUFBQUEsS0FDRUQsRUFBVUUsT0FEWkMsRUFBQUQsT0FoQ0VFLEVBQWFDLE9BcUNmQyxFQUFlRCxPQUNiRSxFQUFZRixPQXBHZEUsUUFBQUMsSUFBTSxvQkFFTkQsSUFHTUQsSUFITU4sRUFBQSxjQUdRQSxFQUFFLGdCQURoQlMsRUFBZVQsRUFBQSxlQUNmTSxFQUFnQk4sRUFBQSxlQUVoQkcsR0FEQU8sRUFBY1YsV0FDRUEsRUFBQSxpQkFDaEJXLEVBQVlYLEVBQUEsZUFFWlksR0FEZVosRUFBRSxjQUNEQSxFQUFBLGtCQUdoQmEsR0FGQUMsRUFBYWQsaUJBS0UsVUFBVyxVQUFXLFVBQVcsVUFBVyxVQUFXLFVBQVcsVUFBVyxVQUFXLFVBQVcsVUFBVyxVQUFXLFVBQVcsWUFBcEksVUFBVyxVQUFXLFVBQVcsVUFBVyxVQUFXLFVBQVcsVUFBVyxVQUFXLFVBQVcsVUFBVyxVQUFXLFVBQVcsWUFFcEksVUFBVyxVQUFXLFVBQVcsVUFBVyxVQUFXLFVBQVcsVUFBVyxVQUFXLFVBQVcsVUFBVyxVQUFXLFVBQVcsWUErQnpKLFVBQUEsVUFBQSxVQUFBLFVBQUEsVUFBQSxVQUFBLFVBQUEsVUFBQSxVQUFBLFVBQUEsVUFBQSxVQUFBLFlBQ3FCLFVBQXJCLFVBQUEsVUFBQSxVQUFBLFVBQUEsVUFBQSxVQUFBLFVBQUEsVUFBQSxVQUFBLFVBQUEsVUFBQSxZQTdCcUIsVUFBVyxVQUFXLFVBQVcsVUFBVyxVQUFXLFVBQVcsVUFBVyxVQUFXLFVBQVcsVUFBVyxVQUFXLFVBQVcsWUFnQ3pKLFVBQUEsVUFBQSxVQUFBLFVBQUEsVUFBQSxVQUFBLFVBQUEsVUFBQSxVQUFBLFVBQUEsVUFBQSxVQUFBLFlBQ0EsVUFBQSxVQUFBLFVBQUEsVUFBQSxVQUFBLFVBQUEsVUFBQSxVQUFBLFVBQUEsVUFBQSxVQUFBLFVBQUEsWUFDQSxVQUFBLFVBQUEsVUFBQSxVQUFBLFVBQUEsVUFBQSxVQUFBLFVBQUEsVUFBQSxVQUFBLFVBQUEsVUFBQSxZQUNBLFVBQUEsVUFBQSxVQUFBLFVBQUEsVUFBQSxVQUFBLFVBQUEsVUFBQSxVQUFBLFVBQUEsVUFBQSxVQUFBLFlBOUJxQixVQUFXLFVBQVcsVUFBVyxVQUFXLFVBQVcsVUFBVyxVQUFXLFVBQVcsVUFBVyxVQUFXLFVBQVcsVUFBVyxZQWlDbkksVUFBQSxVQUFBLFVBQUEsVUFBQSxVQUFBLFVBQUEsVUFBQSxVQUFBLFVBQUEsVUFBQSxVQUFBLFVBQUEsWUFDcEIsVUFBQSxVQUFBLFVBQUEsVUFBQSxVQUFBLFVBQUEsVUFBQSxVQUFBLFVBQUEsVUFBQSxVQUFBLFVBQUEsWUFDQSxVQUFBLFVBQUEsVUFBQSxVQUFBLFVBQUEsVUFBQSxVQUFBLFVBQUEsVUFBQSxVQUFBLFVBQUEsVUFBQSxZQUNBLFVBQUEsVUFBQSxVQUFBLFVBQUEsVUFBQSxVQUFBLFVBQUEsVUFBQSxVQUFBLFVBQUEsVUFBQSxVQUFBLFlBQ0EsVUFBQSxVQUFBLFVBQUEsVUFBQSxVQUFBLFVBQUEsVUFBQSxVQUFBLFVBQUEsVUFBQSxVQUFBLFVBQUEsWUFDQSxVQUFBLFVBQUEsVUFBQSxVQUFBLFVBQUEsVUFBQSxVQUFBLFVBQUEsVUFBQSxVQUFBLFVBQUEsVUFBQSxZQUNELFVBQUEsVUFBQSxVQUFBLFVBQUEsVUFBQSxVQUFBLFVBQUEsVUFBQSxVQUFBLFVBQUEsVUFBQSxVQUFBLFlBL0JvQixVQUFXLFVBQVcsVUFBVyxVQUFXLFVBQVcsVUFBVyxVQUFXLFVBQVcsVUFBVyxVQUFXLFVBQVcsVUFBVyxZQWtDdkksVUFBQSxVQUFBLFVBQUEsVUFBQSxVQUFBLFVBQUEsVUFBQSxVQUFBLFVBQUEsVUFBQSxVQUFBLFVBQUEsWUFDVGUsVUFBYSxVQUFnQkMsVUFBU0QsVUFBYUUsVUFBMUQsVUFBQSxVQUFBLFVBQUEsVUFBQSxVQUFBLFVBQUEsVUFBQSxZQUNELFVBQUEsVUFBQSxVQUFBLFVBQUEsVUFBQSxVQUFBLFVBQUEsVUFBQSxVQUFBLFVBQUEsVUFBQSxVQUFBLFlBaENvQixVQUFXLFVBQVcsVUFBVyxVQUFXLFVBQVcsVUFBVyxVQUFXLFVBQVcsVUFBVyxVQUFXLFVBQVcsVUFBVyxZQWtDckpDLFVBQUosVUFBQSxVQUFBLFVBQUEsVUFBQSxVQUFBLFVBQUEsVUFBQSxVQUFBLFVBQUEsVUFBQSxVQUFBLFlBaENxQixVQUFXLFVBQVcsVUFBVyxVQUFXLFVBQVcsVUFBVyxVQUFXLFVBQVcsVUFBVyxVQUFXLFVBQVcsVUFBVyxZQWtDeklBLFVBQUQsVUFBcUJBLFVBQW9CQSxVQUFBQSxVQUFvQkEsVUFBQUEsVUFBb0JBLFVBQUFBLFVBQWhHLFVBQUEsVUFBQSxVQUFBLFlBQ0EsVUFBQSxVQUFBLFVBQUEsVUFBQSxVQUFBLFVBQUEsVUFBQSxVQUFBLFVBQUEsVUFBQSxVQUFBLFVBQUEsWUFoQ3FCLFVBQVcsVUFBVyxVQUFXLFVBQVcsVUFBVyxVQUFXLFVBQVcsVUFBVyxVQUFXLFVBQVcsVUFBVyxVQUFXLFlBa0N6SUMsVUFBaEIsVUFBaUMsVUFBVyxVQUFBLFVBQUEsVUFBQSxVQUFBLFVBQUEsVUFBQSxVQUFBLFVBQUEsVUFBQSxZQUMxQyxVQUFBLFVBQUEsVUFBQSxVQUFBLFVBQUEsVUFBQSxVQUFBLFVBQUEsVUFBQSxVQUFBLFVBQUEsVUFBQSxZQUNhQyxVQUFPSCxVQUFwQixVQUFtQyxVQUFBLFVBQUEsVUFBQSxVQUFBLFVBQUEsVUFBQSxVQUFBLFVBQUEsVUFBQSxhQUlqQ2hCLEVBQWFvQixFQUFBQSxVQUdmQyxHQUFBcEIsT0FDQVUsRUFBQVYsT0FDREQsRUFYREMsT0FyQkFxQixFQUFZckIsTUFxRFQsSUFBQWdCLEdBTENNLFdBRUQsTUFBTVQsR0FBUVUsS0FBUUMsTUFBWkwsS0FBcUJMLFNBQXpCRCxFQUF1Q0UsWUExR2xEVSxHQUFBVCxFQUFBLEdBQUFBLEVBQUEsR0FBQUEsRUFBQSxHQUFBQSxFQUFBLEdBQUFBLEVBQUEsSUEyRUVYLFNBQVFDLElBQUltQixHQXlDZEMsTUFBQUMsVUFBQVYsZUFBQSxXQXJDSSxJQUFJLEdBREFHLE1BQ0lGLEVBQUUsRUFBR0EsRUFBRVUsS0FBS2IsT0FBTyxFQUFHRyxJQXdDbENFLEVBQUFTLEtBQUFELEtBQUFWLEdBT0EsT0FMQUUsR0FBQVUsS0FBQSxXQUNBLE1BQUEsR0FBQVgsS0FBQUwsV0FFQU0sRUFBQVMsS0FBQUQsS0FBQUEsS0FBQWIsT0FBQSxJQUNBSyxFQUFBVyxRQUFBSCxLQUFBLElBQ0FSLEdBR0FmLFFBQUFDLElBQUFtQixFQUFBUixrQkFJQWxCLEVBQUFpQyxLQUFBLFNBQUFDLEVBQUFDLEdBQ0FwQyxFQUFBb0MsR0FBQUMsSUFBQSxrQkFBQVYsRUFBQVEsTUFJQTdCLEVBQUFnQyxHQUFBLFFBQUEsU0FBQUMsR0FDQWhDLFFBQUFDLElBQUEsV0FFQVIsRUFBQXVDLEVBQUFkLFFBQUFDLFNBQUEsZUFDQWMsSUFDQWhCLE1BQUEsdUJBRUF4QixFQUFBdUMsRUFBQWQsUUFBQUMsU0FBQSxnQkFDQWMsSUFDQWhCLE1BQUEiLCJmaWxlIjoiYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJCgoKSA9PiB7XG5cbiAgY29uc29sZS5sb2coJ0lnb3IsIGl0XFwncyBhbGl2ZSEnKTtcblxuICBjb25zdCAkZ2FtZWJvYXJkID0gJCgnLmdhbWVCb2FyZCcpO1xuICBjb25zdCAkZGlmZmljdWx0eSA9ICQoJy5kaWZmaWN1bHR5Jyk7XG4gIGNvbnN0ICRlYXN5QnV0dG9uID0gJCgnLmVhc3lCdXR0b24nKTtcbiAgY29uc3QgJGhhcmRCdXR0b24gPSAkKCcuaGFyZEJ1dHRvbicpO1xuICBjb25zdCAkaW5wbGF5ID0gJCgnLmlucGxheScpO1xuICBjb25zdCAkcmVzZXRCdXR0b24gPSAkKCcucmVzZXRCdXR0b24nKTtcbiAgY29uc3QgJG5leHRCdXR0b24gPSAkKCcubmV4dEJ1dHRvbicpO1xuICBjb25zdCAkcXVpY2tUaW1lID0gJCgnLnF1aWNrVGltZScpO1xuICBjb25zdCAkd2hpY2hSb3VuZCA9ICQoJy5yb3VuZERpc3BsYXknKTtcbiAgY29uc3QgJHNvdW5kID0gJCgnLnNvdW5kT25PZmYnKTtcblxuICBjb25zdCBjb2xvclBhbGV0dGUgPSBbXG4gICAgICAgICAgICAgICAgICAgICAgWycjM2RiNWY5JywgJyM0OGE4ZTgnLCAnIzUzOWFkNycsICcjNWU4ZGM2JywgJyM2OTdmYjUnLCAnIzc0NzJhNCcsICcjN2U2NDkzJywgJyM4OTU3ODInLCAnIzk0NGE3MScsICcjOWYzYzYwJywgJyNhYTJmNGYnLCAnI2I1MjEzZScsICcjYzAxNDJkJ10sXG4gICAgICAgICAgICAgICAgICAgICAgWycjNDRmMjY3JywgJyM0YmRmNjgnLCAnIzUxY2Q2OScsICcjNThiYTZhJywgJyM1ZWE3NmInLCAnIzY1OTU2YycsICcjNmI4MjZkJywgJyM3MjZmNmUnLCAnIzc5NWQ2ZicsICcjN2Y0YTcwJywgJyM4NjM3NzEnLCAnIzhjMjU3MicsICcjOTMxMjczJ10sXG4gICAgICAgICAgICAgICAgICAgICAgWycjNTUzZTEzJywgJyM1YTNjMWMnLCAnIzVmM2EyNScsICcjNjUzODJmJywgJyM2YTM2MzgnLCAnIzZmMzQ0MScsICcjNzQzMjRiJywgJyM3YTMwNTQnLCAnIzdmMmU1ZCcsICcjODQyYzY2JywgJyM4YTJhNmYnLCAnIzhmMjg3OScsICcjOTQyNjgyJ10sXG4gICAgICAgICAgICAgICAgICAgICAgWycjNWMyYzJkJywgJyM2MjNhMzUnLCAnIzY4NDgzZCcsICcjNmQ1NzQ1JywgJyM3MzY1NGUnLCAnIzc5NzM1NicsICcjN2U4MTVlJywgJyM4NDkwNjYnLCAnIzhhOWU2ZScsICcjOTBhYzc3JywgJyM5NWJhN2YnLCAnIzliYzk4NycsICcjYTFkNzhmJ10sXG4gICAgICAgICAgICAgICAgICAgICAgWycjMTQ4ZWE5JywgJyMyNzhmYWEnLCAnIzNhOTBhYicsICcjNGQ5MGFiJywgJyM2MDkxYWMnLCAnIzczOTJhZCcsICcjODY5MmFlJywgJyM5OTkzYWUnLCAnI2FjOTRhZicsICcjYmY5NWIwJywgJyNkMjk1YjEnLCAnI2U1OTZiMScsICcjZjg5N2IyJ10sXG4gICAgICAgICAgICAgICAgICAgICAgWycjNDkzNTgyJywgJyM1MjQ1ODYnLCAnIzViNTY4YicsICcjNjM2NjhmJywgJyM2Yzc2OTMnLCAnIzc1ODc5OCcsICcjN2U5NzljJywgJyM4NmE3YTAnLCAnIzhmYjhhNScsICcjOThjOGE5JywgJyNhMWQ4YWQnLCAnI2E5ZTliMicsICcjYjJmOWI2J10sXG4gICAgICAgICAgICAgICAgICAgICAgWycjNjc0NmYyJywgJyM3MjQxZTMnLCAnIzdkM2JkNCcsICcjODczNWM1JywgJyM5MjMwYjYnLCAnIzlkMmJhNycsICcjYTcyNTk3JywgJyNiMjFmODgnLCAnI2JkMWE3OScsICcjYzgxNTZhJywgJyNkMzBmNWInLCAnI2RkMDk0YycsICcjZTgwNDNkJ10sXG4gICAgICAgICAgICAgICAgICAgICAgWycjMjMxODRjJywgJyMzMjFlNGMnLCAnIzQwMjQ0ZCcsICcjNGYyYTRkJywgJyM1ZTJmNGQnLCAnIzZjMzU0ZCcsICcjN2IzYjRlJywgJyM4YTQxNGUnLCAnIzk4NDc0ZScsICcjYTc0ZDRlJywgJyNiNjUyNGUnLCAnI2M0NTg0ZicsICcjZDM1ZTRmJ10sXG4gICAgICAgICAgICAgICAgICAgICAgWycjNzhhMGQ4JywgJyM3Y2ExY2QnLCAnIzgwYTJjMicsICcjODRhNGI3JywgJyM4OWE1YWQnLCAnIzhkYTZhMicsICcjOTFhNzk3JywgJyM5NWE5OGMnLCAnIzk5YWE4MScsICcjOWNhYjc3JywgJyNhMmFkNmMnLCAnI2E2YWU2MScsICcjYWFhZjU2J10sXG4gICAgICAgICAgICAgICAgICAgICAgWycjMWZlODc2JywgJyMyOWUyNjgnLCAnIzM0ZGM2MCcsICcjM2VkNjU4JywgJyM0OWQwNTEnLCAnIzUzY2E0OScsICcjNWVjNDQxJywgJyM2OGJkMzknLCAnIzcyYjczMScsICcjN2RiMTJhJywgJyM4N2FiMjInLCAnIzkyYTUxYScsICcjOWM5ZjEyJ10sXG4gICAgICAgICAgICAgICAgICAgICAgWycjM2Y0ODg3JywgJyM0YzQ4ODUnLCAnIzVhNDg4NCcsICcjNjc0OTgyJywgJyM3NTQ5ODEnLCAnIzgyNDk3ZicsICcjOTA0YTdlJywgJyM5ZDRhN2MnLCAnI2FhNGE3YScsICcjYjg0YTc5JywgJyNjNTRiNzcnLCAnI2QzNGI3NicsICcjZTA0Yjc0J10sXG4gICAgICAgICAgICAgICAgICAgICAgWycjMWE1N2U4JywgJyMyNTVkZDYnLCAnIzMwNjJjNCcsICcjM2I2OGIzJywgJyM0NTZkYTEnLCAnIzUwNzM4ZicsICcjNWI3ODdkJywgJyM2NjdlNmInLCAnIzcxODQ1OScsICcjN2I4OTQ4JywgJyM4NjhmMzYnLCAnIzkxOTQyNCcsICcjOTI5YTEyJ10sXG4gICAgICAgICAgICAgICAgICAgICAgWycjMDVhODNlJywgJyMxOGFkNGUnLCAnIzJiYjM1ZScsICcjM2ZiODZlJywgJyM1MmJkN2UnLCAnIzY1YzI4ZScsICcjNzhjNzllJywgJyM4Y2NkYWYnLCAnIzlmZDJiZicsICcjYjJkN2NmJywgJyNjNWRkZGYnLCAnI2Q5ZTJlZicsICcjZWNlN2ZmJ10sXG4gICAgICAgICAgICAgICAgICAgICAgWycjMmZkZWQ4JywgJyMzYWUwY2EnLCAnIzQ1ZTJiYicsICcjNTBlNGFkJywgJyM1YmU2OWYnLCAnIzY2ZTg5MCcsICcjNzFlYTgyJywgJyM3YmViNzQnLCAnIzg2ZWQ2NScsICcjOTFlZjU3JywgJyM5Y2YxNDknLCAnI2E3ZjMzYScsICcjYjJmNTJjJ10sXG4gICAgICAgICAgICAgICAgICAgICAgWycjNDYyZTc1JywgJyM1MjNkNzMnLCAnIzVkNGQ3MCcsICcjNjk1YzZlJywgJyM3NDZiNmMnLCAnIzgwN2I2OScsICcjOGI4YTY3JywgJyM5Nzk5NjUnLCAnI2EzYTk2MicsICcjYWViODYwJywgJyNiYWM3NWUnLCAnI2M1ZDc1YicsICcjZDFlNjU5J10sXG4gICAgICAgICAgICAgICAgICAgICAgWycjNWRkYWMzJywgJyM2OWQzYTcnLCAnIzc2Y2M5YScsICcjODJjNDhlJywgJyM4ZmJkODEnLCAnIzliYjY3NCcsICcjYTdhZjY4JywgJyNiNGE4NWInLCAnI2MwYTE0ZicsICcjY2Q5YTQyJywgJyNkOTkyMzYnLCAnI2M2OGIyYScsICcjZjI4NDFkJ10sXG4gICAgICAgICAgICAgICAgICAgICAgWycjMDUyZTNkJywgJyMxMjNjNGMnLCAnIzIwNDk1YycsICcjMmQ1NzZiJywgJyMzYjY0N2EnLCAnIzQ4NzI4YScsICcjNTU4MDk5JywgJyM2MzhkYTgnLCAnIzcwOWJiOCcsICcjN2VhOGM3JywgJyM4YmI2ZDYnLCAnIzk5YzNlNicsICcjYTZkMWY1J10sXG4gICAgICAgICAgICAgICAgICAgICAgWycjMmMwOGJhJywgJyMzODBiYWYnLCAnIzQ0MGVhMycsICcjNTAxMjk4JywgJyM1YzE1OGQnLCAnIzY2MTg4MScsICcjNzQxYjc2JywgJyM4MDFlNmInLCAnIzhjMjE1ZicsICcjOTgyNTU0JywgJyNhNDI4NDknLCAnI2IwMmIzZCcsICcjYmMyZTMyJ10sXG4gICAgICAgICAgICAgICAgICAgICAgWycjMDZiZjc5JywgJyMxMmIzN2QnLCAnIzFmYTg4MCcsICcjMmI5Yzg0JywgJyMzODkxODcnLCAnIzQ0ODU4YicsICcjNTE3YThlJywgJyM1ZDZlOTEnLCAnIzY5NjI5NScsICcjNzY1Nzk4JywgJyM4MjRiOWMnLCAnIzhmNDBhMCcsICcjOWIzNGEzJ10sXG4gICAgICAgICAgICAgICAgICAgICAgWycjM2Q3NzBlJywgJyM0YTgyMTQnLCAnIzU3OGUxYicsICcjNjQ5OTIxJywgJyM3MmE0MjcnLCAnIzdmYjAyZCcsICcjOGNiYjM0JywgJyM5OWM2M2EnLCAnI2E2ZDI0MCcsICcjYjRkZDQ2JywgJyNjMWU4NGQnLCAnI2NlZjQzNScsICcjZGJmZjU5J10sXG4gICAgICAgICAgICAgICAgICAgICAgWycjNWNhMTBlJywgJyM2NzliMTYnLCAnIzcyOTQxZCcsICcjN2Q4ZTI1JywgJyM4ODg3MmMnLCAnIzkzODEzNCcsICcjOWU3YTNiJywgJyNhODc0NDMnLCAnI2IzNmQ0YicsICcjYmU2NzUyJywgJyNjOTYwNWEnLCAnI2Q0NWE2MScsICcjZGY1MzY5J10sXG4gICAgICAgICAgICAgICAgICAgICAgWycjN2JjOWU1JywgJyM4MmM1ZDUnLCAnIzhhYzJjNicsICcjOTFiZWI3JywgJyM5OGJiYTcnLCAnIzlmYjc5NycsICcjYTdiNDg4JywgJyNhZWIwNzgnLCAnI2I1YWM2OScsICcjYmNhOTVhJywgJyNjNGE1NGEnLCAnI2NiYTMyYicsICcjZDI5ZTJiJ10sXG4gICAgICAgICAgICAgICAgICAgICAgWycjNzFkNzJmJywgJyM3YmM4MmUnLCAnIzg1YjkyYycsICcjOGZhYTJiJywgJyM5OTliMmEnLCAnI2EzOGMyOCcsICcjYWQ3ZDI3JywgJyNiNjZkMjYnLCAnI2MwNWUyNCcsICcjY2E0ZjIzJywgJyNkNDQwMjInLCAnI2RlMzEyMCcsICcjZTgyMjFmJ10sXG4gICAgICAgICAgICAgICAgICAgICAgWycjZDU4NzBiJywgJyNjNTg1MTQnLCAnI2I1ODIxZCcsICcjYTU4MDI2JywgJyM5NTdlMmYnLCAnIzg1N2IzOCcsICcjNzQ3OTQxJywgJyM2NDc3NDknLCAnIzU0NzQ1MicsICcjNDQ3MjViJywgJyMzNDcwNjQnLCAnIzI0NmQ2ZCcsICcjMTQ2Yjc2J10sXG4gICAgICAgICAgICAgICAgICAgICAgWycjZjIzZjhlJywgJyNlNDQwOGQnLCAnI2Q2NDE4YicsICcjYzg0MzhhJywgJyNiYTQ0ODknLCAnI2FjNDU4OCcsICcjOWU0Nzg3JywgJyM4ZjQ4ODUnLCAnIzgxNDk4NCcsICcjNzM0YTgzJywgJyM2NTRiODEnLCAnIzU3NGQ4MCcsICcjNDk0ZTdmJ10sXG4gICAgICAgICAgICAgICAgICAgICAgWycjZGFiMmY2JywgJyNjZmFhZTInLCAnI2M0YTJjZScsICcjYjk5YmI5JywgJyNhZTkzYTUnLCAnI2EzOGI5MScsICcjOTg4MzdkJywgJyM4ZTdiNjgnLCAnIzgzNzM1NCcsICcjNzg2YjQwJywgJyM2ZDY0MmInLCAnIzYyNWMxNycsICcjNTc1NDAzJ10sXG4gICAgICAgICAgICAgICAgICAgICAgWycjZGE4N2NlJywgJyNkMjhkYzAnLCAnI2NhOTNiMicsICcjYzI5OWE0JywgJyNiYTlmOTYnLCAnI2IyOTU4OCcsICcjYWJhYjdhJywgJyM5M2IyNmInLCAnIzliYjg1ZCcsICcjOTNiZTRmJywgJyM4YmM0NDEnLCAnIzgzY2EzMycsICcjN2JkMDI1J10sXG4gICAgICAgICAgICAgICAgICAgICAgWycjZjg5OTUxJywgJyNlZDkxNWInLCAnI2UyOGE2NicsICcjZDc4MjcwJywgJyNjYzdhN2EnLCAnI2MxNzI4NScsICcjYjY2YjhmJywgJyNhYjYzOTknLCAnI2EwNWJhNCcsICcjOTU1M2FlJywgJyM4YTRiYjgnLCAnIzdmNDRjMycsICcjNzQzY2NkJ10sXG4gICAgICAgICAgICAgICAgICAgICAgWycjZjVkMmJmJywgJyNlNmMzYzEnLCAnI2Q3YjNjNCcsICcjYzhhNGM3JywgJyNiYTk0YzknLCAnI2FiODRjYicsICcjOWM3NWNlJywgJyM4ZDY1ZDEnLCAnIzdlNTZkMycsICcjNmY0N2Q1JywgJyM2MTM3ZDgnLCAnIzUyMjhkYScsICcjNDMxOGRkJ10sXG4gICAgICAgICAgICAgICAgICAgICAgWycjOGFiYzE4JywgJyM4MWIzMmEnLCAnIzc5YWIzYicsICcjNzBhMjRiJywgJyM2Nzk5NWYnLCAnIzVmOTE3MScsICcjNTY4ODgyJywgJyM0ZDdmOTQnLCAnIzQ1NzdhNicsICcjM2M2ZWI4JywgJyMzMzY1Y2EnLCAnIzJiNWRkYicsICcjMjI1NGVkJ10sXG4gICAgICAgICAgICAgICAgICAgICAgWycjYjZjNTA2JywgJyNhYmI5MTUnLCAnI2ExYWUyNCcsICcjOTZhMjMzJywgJyM4Yjk2NDInLCAnIzgxOGE1MScsICcjNzY3ZTYxJywgJyM2YjczNzAnLCAnIzYxNjc3ZicsICcjNTY1YjhlJywgJyM0YjRmOWQnLCAnIzQxNDRhYycsICcjMzYzOGJiJ10sXG4gIF07XG5cbiAgbGV0IHJvdW5kTnVtYmVyID0gMTtcbiAgbGV0ICRnYW1lU3F1YXJlcyA9ICQoJy5zcXVhcmUnKTtcblxuXG4gICRyZXNldEJ1dHRvbi5oaWRlKCk7XG4gICRuZXh0QnV0dG9uLmhpZGUoKTtcbiAgJGdhbWVTcXVhcmVzLmhpZGUoKTtcbiAgJHdoaWNoUm91bmQuaGlkZSgpO1xuXG5cbiAgZnVuY3Rpb24gZ2FtZVN0YXJ0ICgpIHtcbiAgICAkZWFzeUJ1dHRvbi5oaWRlKCk7XG4gICAgJGhhcmRCdXR0b24uaGlkZSgpO1xuICAgICRyZXNldEJ1dHRvbi5zaG93KCk7XG4gICAgJGdhbWVTcXVhcmVzLnNob3coKTtcbiAgICAkd2hpY2hSb3VuZC5zaG93KCk7XG4gIH1cblxuXG4gIGZ1bmN0aW9uIGNvbG9ycygpIHtcbiAgICByZXR1cm4gY29sb3JQYWxldHRlW01hdGguZmxvb3IoTWF0aC5yYW5kb20oKSpjb2xvclBhbGV0dGUubGVuZ3RoKV07XG4gIH1cblxuICBsZXQgcmFuZG9tQ29sb3JzQXJyID0gY29sb3JzKCk7XG5cbiAgY29uc3QgZWFzeVIxID0gW3JhbmRvbUNvbG9yc0FyclswXSwgcmFuZG9tQ29sb3JzQXJyWzNdLCByYW5kb21Db2xvcnNBcnJbNl0sIHJhbmRvbUNvbG9yc0Fycls5XSwgcmFuZG9tQ29sb3JzQXJyWzEyXV07XG4gIGNvbnNvbGUubG9nKGVhc3lSMSk7XG5cbiAgQXJyYXkucHJvdG90eXBlLnNodWZmbGVMZWF2ZUZMID0gZnVuY3Rpb24oKSB7XG4gICAgdmFyIGFyciA9IFtdO1xuICAgIGZvcihsZXQgaT0xOyBpPHRoaXMubGVuZ3RoLTE7IGkrKykge1xuICAgICAgYXJyLnB1c2godGhpc1tpXSk7XG4gICAgfVxuICAgIGFyci5zb3J0KGZ1bmN0aW9uKCkge1xuICAgICAgcmV0dXJuIDAuNSAtIE1hdGgucmFuZG9tKCk7XG4gICAgfSk7IC8vIHNodWZmbGUgYXJyYXlcbiAgICBhcnIucHVzaCh0aGlzW3RoaXMubGVuZ3RoLTFdKTsgLy8gYWRkIG9sZCBsYXN0IGVsZW1lbnQgdG8gYXJyXG4gICAgYXJyLnVuc2hpZnQodGhpc1swXSk7IC8vIGFkZCBvbGQgZmlyc3QgZWxlbWVudCB0byBmcm9udCBvZiBhcnJcbiAgICByZXR1cm4gYXJyO1xuICB9O1xuXG4gIGNvbnNvbGUubG9nKGVhc3lSMS5zaHVmZmxlTGVhdmVGTCgpKTtcblxuXG5cbiAgJGdhbWVTcXVhcmVzLmVhY2goZnVuY3Rpb24oaWR4LCBlbCkge1xuICAgICQoZWwpLmNzcygnYmFja2dyb3VuZENvbG9yJywgZWFzeVIxW2lkeF0pO1xuICB9KTtcblxuXG4gICRkaWZmaWN1bHR5Lm9uKCdjbGljaycsIChlKSA9PiB7XG4gICAgY29uc29sZS5sb2coJ2NsaWNrZWQnKTtcblxuICAgIGlmICgkKGUudGFyZ2V0KS5oYXNDbGFzcygnZWFzeUJ1dHRvbicpKSB7XG4gICAgICBnYW1lU3RhcnQoKTtcbiAgICAgIGFsZXJ0KCdBYm91dCB0byBwbGF5IGVhc3knKTtcblxuICAgIH0gZWxzZSBpZiAoJChlLnRhcmdldCkuaGFzQ2xhc3MoJ2hhcmRCdXR0b24nKSl7XG4gICAgICBnYW1lU3RhcnQoKTtcbiAgICAgIGFsZXJ0KCdBYm91dCB0byBwbGF5IGhhcmQnKTtcbiAgICB9XG4gIH0pO1xuXG59KTtcblxuXG4vLyBORVhUIExFVkVMXG4vLyAgICRnYW1lQm9hcmQuYXBwZW5kKFwiPGRpdj48L2Rpdj5cIikuYWRkQ2xhc3MoJ3NxdWFyZScpO1xuXG5cbi8vIFNPVU5EXG4vLyAkc291bmQub24oJ2NsaWNrJywgKCkgPT4ge1xuLy8gICAkc291bmQuc3JjID0gJy4vYXNzZXRzL2h1ZV9odW50ZXJfYmFja2dyb3VuZC5tcDMnO1xuLy8gICBpZiAoJHNvdW5kLnBhdXNlZCA9PT0gZmFsc2UpIHtcbi8vICAgICAkc291bmQucGF1c2UoKTtcbi8vICAgfSBlbHNlIHtcbi8vICAgICAkc291bmQucGxheSgpO1xuLy8gICB9XG4vLyB9KTtcblxuLy8gRUFTWSBNT0RFOlxuLy8gICBSb3VuZDFcbi8vICAgICBbMF0sIFszXSwgWzZdLCBbOV0sIFsxMl1cbi8vICAgUm91bmQgMlxuLy8gICAgIFswXSwgWzNdLCBbNV0sIFs3XSwgWzldLCBbMTJdXG4vLyAgIFJvdW5kIDNcbi8vICAgICBbMF0sIFsxXSwgWzNdLCBbNl0sIFs5XSwgWzExXSwgWzEyXVxuLy8gICBSb3VuZCA0XG4vLyAgICAgWzBdLCBbMV0sIFszXSwgWzVdLCBbN10sIFs5XSwgWzExXSwgWzEyXVxuLy8gICBSb3VuZCA1XG4vLyAgICAgWzBdLCBbMV0sIFszXSwgWzRdLCBbNl0sIFs4XSwgWzldLCBbMTFdLCBbMTJdXG4vL1xuLy8gSEFSRCBNT0RFOlxuLy8gICBSb3VuZDFcbi8vICAgICBbMF0sIFsxXSwgWzNdLCBbNF0sIFs2XSwgWzhdLCBbOV0sIFsxMV0sIFsxMl1cbi8vICAgUm91bmQgMlxuLy8gICAgIFswXSwgWzFdLCBbMl0sIFs0XSwgWzVdLCBbN10sIFs4XSwgWzEwXSwgWzExXSwgWzEyXVxuLy8gICBSb3VuZCAzXG4vLyAgICAgWzBdLCBbMV0sIFsyXSwgWzNdLCBbNV0sIFs2XSwgWzddLCBbOV0sIFsxMF0sIFsxMV0sIFsxMl1cbi8vICAgUm91bmQgNFxuLy8gICAgIFswXSwgWzFdLCBbMl0sIFszXSwgWzRdLCBbNV0sIFs3XSwgWzhdLCBbOV0sIFsxMF0sIFsxMV0sIFsxMl1cbi8vICAgUm91bmQgNVxuLy8gICAgIFswXSwgWzFdLCBbMl0sIFszXSwgWzRdLCBbNV0sIFs2XSwgWzddLCBbOF0sIFs5XSwgWzEwXSwgWzExXSwgWzEyXVxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuLy8gVXNlciBpbml0aWF0ZXMgZ2FtZSBieSBwcmVzc2luZyBlaXRoZXIgdGhlICdQbGF5IEVhc3knIG9yICdQbGF5IEhhcmQnIG9wdGlvblxuXG4vLyBJZiAnUGxheSBFYXN5J1xuLy8gJ1BsYXkgRWFzeScgYW5kICdQbGF5IEhhcmQnIGJ1dHRvbnMgZ28gdG8gaGlkZGVuXG4vLyAnUmVzZXQnIGJ1dHRvbiBhbmQgJ05leHQnIGJ1dHRvbiBiZWNvbWUgdW5oaWRkZW5cbiAgLy8gJ1Jlc2V0JyB3aWxsIHRha2UgeW91IGJhY2sgdG8gdGhlIGxvYWRpbmcgcGFnZVxuICAvLyAnTmV4dCcgYnV0dG9uIGlzIHVuYXZhaWxhYmxlIHRzIGNsaWNrIHVudGlsIHJvdW5kIGlzIGNvbXBsZXRlXG4vLyBSb3VuZCAxIGJlZ2luc1xuICAvLyBUaW1lciBiZWdpbnNcbiAgLy8gJ05leHQnIGJ1dHRvbiBiZWNvbWVzIHVuYXZhaWxhYmxlXG4gIC8vIFJhbmRvbSBhcnJheSBpcyBjaG9zZW4uIEluZGV4IFswXSBhbmQgWzEyXSBhcmUgdXNlZCB0byBwb3B1bGF0ZSBEaXY1IGFuZCBEaXY5XG4gIC8vIEluZGV4IFszLDYsOV0gcG9wdWxhdGUgRGl2J3MgNiw3LDhcbiAgLy8gRXZlbnQgTGlzdGVuZXIgYXJlIHVzZWQgdG8gc3dpdGNoIGF0dHJpYnV0ZXMgd2hlbiB0d28gRGl2J3MgYXJlIHByZXNzZWRcbiAgLy8gV2hlbiBhcnJheSBpcyBpbiBvcmRlciwgJ05leHQnIGJ1dHRvbiBiZWNvbWVzIGF2YWlsYWJsZVxuLy8gUm91bmQgMiBiZWdpbnNcbiAgLy8gJ05leHQnIGJ1dHRvbiBiZWNvbWVzIHVuYXZhaWxhYmxlXG4gIC8vIFJhbmRvbSBhcnJheSBpcyBjaG9zZW4uIEluZGV4IFswXSBhbmQgWzEyXSBhcmUgdXNlZCB0byBwb3B1bGF0ZSBEaXY0IGFuZCBEaXY5XG4gIC8vIEluZGV4IFszLDUsNyw5XSBwb3B1bGF0ZSBEaXYncyA1LDYsNyw4XG4gIC8vIEV2ZW50IExpc3RlbmVyIGFyZSB1c2VkIHRvIHN3aXRjaCBhdHRyaWJ1dGVzIHdoZW4gdHdvIERpdidzIGFyZSBwcmVzc2VkXG4gIC8vIFdoZW4gYXJyYXkgaXMgaW4gb3JkZXIsICdOZXh0JyBidXR0b24gYmVjb21lcyBhdmFpbGFibGVcbi8vIFJvdW5kIDMgYmVnaW5zXG4gIC8vICdOZXh0JyBidXR0b24gYmVjb21lcyB1bmF2YWlsYWJsZVxuICAvLyBSYW5kb20gYXJyYXkgaXMgY2hvc2VuLiBJbmRleCBbMF0gYW5kIFsxMl0gYXJlIHVzZWQgdG8gcG9wdWxhdGUgRGl2NCBhbmQgRGl2MTBcbiAgLy8gSW5kZXggWzEsMyw2LDksMTFdIHBvcHVsYXRlIERpdidzIDUsNiw3LDgsOVxuICAvLyBFdmVudCBMaXN0ZW5lciBhcmUgdXNlZCB0byBzd2l0Y2ggYXR0cmlidXRlcyB3aGVuIHR3byBEaXYncyBhcmUgcHJlc3NlZFxuICAvLyBXaGVuIGFycmF5IGlzIGluIG9yZGVyLCAnTmV4dCcgYnV0dG9uIGJlY29tZXMgYXZhaWxhYmxlXG4vLyBSb3VuZCA0IGJlZ2luc1xuICAvLyAnTmV4dCcgYnV0dG9uIGJlY29tZXMgdW5hdmFpbGFibGVcbiAgLy8gUmFuZG9tIGFycmF5IGlzIGNob3Nlbi4gSW5kZXggWzBdIGFuZCBbMTJdIGFyZSB1c2VkIHRvIHBvcHVsYXRlIERpdjMgYW5kIERpdjEwXG4gIC8vIEluZGV4IFsxLDMsNSw3LDksMTFdIHBvcHVsYXRlIERpdidzIDQsNSw2LDcsOCw5XG4gIC8vIEV2ZW50IExpc3RlbmVyIGFyZSB1c2VkIHRvIHN3aXRjaCBhdHRyaWJ1dGVzIHdoZW4gdHdvIERpdidzIGFyZSBwcmVzc2VkXG4gIC8vIFdoZW4gYXJyYXkgaXMgaW4gb3JkZXIsICdOZXh0JyBidXR0b24gYmVjb21lcyBhdmFpbGFibGVcbi8vIFJvdW5kIDUgYmVnaW5zXG4gIC8vICdOZXh0JyBidXR0b24gYmVjb21lcyB1bmF2YWlsYWJsZVxuICAvLyBSYW5kb20gYXJyYXkgaXMgY2hvc2VuLiBJbmRleCBbMF0gYW5kIFsxMl0gYXJlIHVzZWQgdG8gcG9wdWxhdGUgRGl2MyBhbmQgRGl2MTFcbiAgLy8gSW5kZXggWzEsMyw0LDYsOCw5LDExXSBwb3B1bGF0ZSBEaXYncyA0LDUsNiw3LDgsOSwxMFxuICAvLyBFdmVudCBMaXN0ZW5lciBhcmUgdXNlZCB0byBzd2l0Y2ggYXR0cmlidXRlcyB3aGVuIHR3byBEaXYncyBhcmUgcHJlc3NlZFxuICAvLyBXaGVuIGFycmF5IGlzIGluIG9yZGVyLCBzdG9wIHRpbWVyLlxuICAvLyBDb21wYXJlIHRpbWUgaW4gbWlsbGlzZWNvbmQgdG8gJ1F1aWNrZXN0IFRpbWUnXG4gICAgLy8gSWYgbmV3IHRpbWUgaXMgbG93ZXIgdGhlbiBjdXJyZW50ICdRdWlja2VzdCBUaW1lJ1xuICAgICAgLy8gQWxlcnQgdXNlciAnQ29tcGxldGVkISBZb3Ugc2V0IHRoZSBxdWlja2VzdCB0aW1lJ1xuICAgIC8vIElmIG5ldyB0aW1lIGlzIGdyZWF0ZXIgdGhhbiB0aGUgY3VycmVudCAnUXVpY2tlc3QgVGltZSdcbiAgICAgIC8vIEFsZXJ0IHVzZXIgJ0NvbXBsZXRlZCEgVW5mb3J0dW5hdGxleSB5b3VyIHRpbWUgd2Fzbid0IGZhc3RlciB0aGUgdGhlIHF1aWNrZXN0IHRpbWUnXG4vLyAnUmVzZXQnIGJ1dHRvbiB0byByZXNldCB0aGUgZ2FtZVxuXG4gIC8vIElmICdQbGF5IEhhcmQnXG4gICAgLy8gJ1BsYXkgRWFzeScgYW5kICdQbGF5IEhhcmQnIGJ1dHRvbnMgZ28gdG8gaGlkZGVuXG4gICAgLy8gJ1Jlc2V0JyBidXR0b24gYW5kICdOZXh0JyBidXR0b24gYmVjb21lIHVuaGlkZGVuXG4gICAgICAvLyAnUmVzZXQnIHdpbGwgdGFrZSB5b3UgYmFjayB0byB0aGUgbG9hZGluZyBwYWdlXG4gICAgICAvLyAnTmV4dCcgYnV0dG9uIGlzIHVuYXZhaWxhYmxlIHRvIGNsaWNrIHVudGlsIHJvdW5kIGlzIGNvbXBsZXRlXG4gICAgLy8gUm91bmQgMSBiZWdpbnNcbiAgICAgIC8vIFRpbWVyIGJlZ2luc1xuICAgICAgLy8gJ05leHQnIGJ1dHRvbiBiZWNvbWVzIHVuYXZhaWxhYmxlXG4gICAgICAvLyBSYW5kb20gYXJyYXkgaXMgY2hvc2VuLiBJbmRleCBbMF0gYW5kIFsxMl0gYXJlIHVzZWQgdG8gcG9wdWxhdGUgRGl2MyBhbmQgRGl2MTFcbiAgICAgIC8vIEluZGV4IFsxLDMsNCw2LDgsOSwxMV0gcG9wdWxhdGUgRGl2J3MgNCw1LDYsNyw4LDksMTBcbiAgICAgIC8vIEV2ZW50IExpc3RlbmVyIGFyZSB1c2VkIHRvIHN3aXRjaCBhdHRyaWJ1dGVzIHdoZW4gdHdvIERpdidzIGFyZSBwcmVzc2VkXG4gICAgICAvLyBXaGVuIGFycmF5IGlzIGluIG9yZGVyLCAnTmV4dCcgYnV0dG9uIGJlY29tZXMgYXZhaWxhYmxlXG4gICAgLy8gUm91bmQgMiBiZWdpbnNcbiAgICAgIC8vICdOZXh0JyBidXR0b24gYmVjb21lcyB1bmF2YWlsYWJsZVxuICAgICAgLy8gUmFuZG9tIGFycmF5IGlzIGNob3Nlbi4gSW5kZXggWzBdIGFuZCBbMTJdIGFyZSB1c2VkIHRvIHBvcHVsYXRlIERpdjIgYW5kIERpdjExXG4gICAgICAvLyBJbmRleCBbMSwyLDQsNSw3LDgsMTAsMTFdIHBvcHVsYXRlIERpdidzIDMsNCw1LDYsNyw4LDksMTBcbiAgICAgIC8vIEV2ZW50IExpc3RlbmVyIGFyZSB1c2VkIHRvIHN3aXRjaCBhdHRyaWJ1dGVzIHdoZW4gdHdvIERpdidzIGFyZSBwcmVzc2VkXG4gICAgICAvLyBXaGVuIGFycmF5IGlzIGluIG9yZGVyLCAnTmV4dCcgYnV0dG9uIGJlY29tZXMgYXZhaWxhYmxlXG4gICAgLy8gUm91bmQgMyBiZWdpbnNcbiAgICAgIC8vICdOZXh0JyBidXR0b24gYmVjb21lcyB1bmF2YWlsYWJsZVxuICAgICAgLy8gUmFuZG9tIGFycmF5IGlzIGNob3Nlbi4gSW5kZXggWzBdIGFuZCBbMTJdIGFyZSB1c2VkIHRvIHBvcHVsYXRlIERpdjIgYW5kIERpdjEyXG4gICAgICAvLyBJbmRleCBbMSwyLDMsNSw2LDcsOSwxMCwxMV0gcG9wdWxhdGUgRGl2J3MgMyw0LDUsNiw3LDgsOSwxMCwxMVxuICAgICAgLy8gRXZlbnQgTGlzdGVuZXIgYXJlIHVzZWQgdG8gc3dpdGNoIGF0dHJpYnV0ZXMgd2hlbiB0d28gRGl2J3MgYXJlIHByZXNzZWRcbiAgICAgIC8vIFdoZW4gYXJyYXkgaXMgaW4gb3JkZXIsICdOZXh0JyBidXR0b24gYmVjb21lcyBhdmFpbGFibGVcbiAgICAvLyBSb3VuZCA0IGJlZ2luc1xuICAgICAgLy8gJ05leHQnIGJ1dHRvbiBiZWNvbWVzIHVuYXZhaWxhYmxlXG4gICAgICAvLyBSYW5kb20gYXJyYXkgaXMgY2hvc2VuLiBJbmRleCBbMF0gYW5kIFsxMl0gYXJlIHVzZWQgdG8gcG9wdWxhdGUgRGl2MSBhbmQgRGl2MTJcbiAgICAgIC8vIEluZGV4IFsxLDIsMyw0LDUsNyw4LDksMTAsMTFdIHBvcHVsYXRlIERpdidzIDIsMyw0LDUsNiw3LDgsOSwxMCwxMVxuICAgICAgLy8gRXZlbnQgTGlzdGVuZXIgYXJlIHVzZWQgdG8gc3dpdGNoIGF0dHJpYnV0ZXMgd2hlbiB0d28gRGl2J3MgYXJlIHByZXNzZWRcbiAgICAgIC8vIFdoZW4gYXJyYXkgaXMgaW4gb3JkZXIsICdOZXh0JyBidXR0b24gYmVjb21lcyBhdmFpbGFibGVcbiAgICAvLyBSb3VuZCA1IGJlZ2luc1xuICAgICAgLy8gJ05leHQnIGJ1dHRvbiBiZWNvbWVzIHVuYXZhaWxhYmxlXG4gICAgICAvLyBSYW5kb20gYXJyYXkgaXMgY2hvc2VuLiBJbmRleCBbMF0gYW5kIFsxMl0gYXJlIHVzZWQgdG8gcG9wdWxhdGUgRGl2MSBhbmQgRGl2MTNcbiAgICAgIC8vIEluZGV4IFsxLDIsMyw0LDUsNiw3LDgsOSwxMCwxMV0gcG9wdWxhdGUgRGl2J3MgMiwzLDQsNSw2LDcsOCw5LDEwLDExLDEyXG4gICAgICAvLyBFdmVudCBMaXN0ZW5lciBhcmUgdXNlZCB0byBzd2l0Y2ggYXR0cmlidXRlcyB3aGVuIHR3byBEaXYncyBhcmUgcHJlc3NlZFxuICAgICAgLy8gV2hlbiBhcnJheSBpcyBpbiBvcmRlciwgc3RvcCB0aW1lci5cbiAgICAgIC8vIENvbXBhcmUgdGltZSBpbiBtaWxsaXNlY29uZCB0byAnUXVpY2tlc3QgVGltZSdcbiAgICAgICAgLy8gSWYgbmV3IHRpbWUgaXMgbG93ZXIgdGhlbiBjdXJyZW50ICdRdWlja2VzdCBUaW1lJ1xuICAgICAgICAgIC8vIEFsZXJ0IHVzZXIgJ0NvbXBsZXRlZCEgWW91IHNldCB0aGUgcXVpY2tlc3QgdGltZSdcbiAgICAgICAgLy8gSWYgbmV3IHRpbWUgaXMgZ3JlYXRlciB0aGFuIHRoZSBjdXJyZW50ICdRdWlja2VzdCBUaW1lJ1xuICAgICAgICAgIC8vIEFsZXJ0IHVzZXIgJ0NvbXBsZXRlZCEgVW5mb3J0dW5hdGxleSB5b3VyIHRpbWUgd2Fzbid0IGZhc3RlciB0aGUgdGhlIHF1aWNrZXN0IHRpbWUnXG4gICAgLy8gJ1Jlc2V0JyBidXR0b24gdG8gcmVzZXQgdGhlIGdhbWVcbiJdfQ==
