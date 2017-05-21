"use strict";var _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(o){return typeof o}:function(o){return o&&"function"==typeof Symbol&&o.constructor===Symbol&&o!==Symbol.prototype?"symbol":typeof o};$(function(){console.log("Igor, it's alive!");var o=($(".gameBoard"),$(".difficulty"),$(".easyButton"),$(".hardButton"),$(".inplay"),$(".resetButton")),t=$(".nextButton"),e=($(".quickTime"),$(".roundDisplay")),n=($(".soundOnOff"),[["#3db5f9","#48a8e8","#539ad7","#5e8dc6","#697fb5","#7472a4","#7e6493","#895782","#944a71","#9f3c60","#aa2f4f","#b5213e","#c0142d"],["#44f267","#4bdf68","#51cd69","#58ba6a","#5ea76b","#65956c","#6b826d","#726f6e","#795d6f","#7f4a70","#863771","#8c2572","#931273"]]),f=$(".square");o.hide(),t.hide(),f.hide(),e.hide();var a=function(){return n[Math.floor(Math.random()*n.length)]}(),r=[a[0],a[3],a[6],a[9],a[12]];console.log(r),console.log(r[0]);var l=r.pop();console.log(l);var c=r.splice(0,1);console.log(c),void 0===c||_typeof(c)});
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5qcyJdLCJuYW1lcyI6WyIkIiwiY29uc29sZSIsImxvZyIsIiRkaWZmaWN1bHR5IiwiJGdhbWVib2FyZCIsIiRlYXN5QnV0dG9uIiwiJGlucGxheSIsIiRxdWlja1RpbWUiLCIkcmVzZXRCdXR0b24iLCJyb3VuZE51bWJlciIsImhpZGUiLCIkbmV4dEJ1dHRvbiIsIiRnYW1lU3F1YXJlcyIsIiR3aGljaFJvdW5kIiwiZWFzeVIxIiwiY29sb3JQYWxldHRlIiwiTWF0aCIsImZsb29yIiwicmFuZG9tIiwibGVuZ3RoIiwicmFuZG9tQ29sb3JzQXJyIiwicG9wRVIxIiwic3BsaWNlRVIxIiwic3BsaWNlIiwiX3R5cGVvZiJdLCJtYXBwaW5ncyI6ImtPQUFBQSxHQUFFLFdBRUFDLFFBQVFDLElBQUksb0JBRlosSUFLTUMsSUFMQUgsRUFBQSxjQUtjQSxFQUFFLGVBSFZBLEVBQUEsZUFLUUEsRUFBRSxlQUhoQkksRUFBYUosV0FDR0EsRUFBQSxpQkFDaEJLLEVBQWdCTCxFQUFBLGVBRWhCTSxHQURjTixFQUFFLGNBQ0pBLEVBQUEsa0JBR1pPLEdBRkFDLEVBQUFBLGlCQUdnQixVQUFBLFVBQXRCLFVBQUEsVUFBQSxVQUFBLFVBQUEsVUFBQSxVQUFBLFVBQUEsVUFBQSxVQUFBLFVBQUEsWUFDaUIsVUFBakIsVUFBQSxVQUFBLFVBQUEsVUFBQSxVQUFBLFVBQUEsVUFBQSxVQUFBLFVBQUEsVUFBQSxVQUFBLGFBT0lDLEVBQUpULEVBQUEsVUFJQVEsR0FBYUUsT0FDYkMsRUFBWUQsT0FDWkUsRUFBYUYsT0FDYkcsRUFBWUgsTUFtQlosSUFBTUksR0FKTCxXQURDLE1BQU9DLEdBQWFDLEtBQUtDLE1BQU1ELEtBQUtFLFNBQVNILEVBQWFJLFlBTzVEbEIsR0FBWWEsRUFBWixHQUFBTSxFQUFBLEdBQUFBLEVBQUEsR0FBQUEsRUFBQSxHQUFBQSxFQUFBLElBREFuQixTQUFRQyxJQUFJWSxHQUdaYixRQUFJb0IsSUFBQUEsRUFBU1AsR0FFYixJQUFJUSxHQUFBQSxFQUFZUixLQUNoQmIsU0FBUUMsSUFBSW9CLEVBQ1osSUFBQUEsR0FBQVIsRUFBQVMsT0FBQSxFQUFBLEVBREF0QixTQUFRQyxJQUFJb0IsT0FPWixLQUFBQSxHQUFBRSxRQUFBRiIsImZpbGUiOiJhcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyIkKCgpID0+IHtcblxuICBjb25zb2xlLmxvZygnSWdvciwgaXRcXCdzIGFsaXZlIScpO1xuXG4gIGNvbnN0ICRnYW1lYm9hcmQgPSAkKCcuZ2FtZUJvYXJkJyk7XG4gIGNvbnN0ICRkaWZmaWN1bHR5ID0gJCgnLmRpZmZpY3VsdHknKTtcbiAgY29uc3QgJGVhc3lCdXR0b24gPSAkKCcuZWFzeUJ1dHRvbicpO1xuICBjb25zdCAkaGFyZEJ1dHRvbiA9ICQoJy5oYXJkQnV0dG9uJyk7XG4gIGNvbnN0ICRpbnBsYXkgPSAkKCcuaW5wbGF5Jyk7XG4gIGNvbnN0ICRyZXNldEJ1dHRvbiA9ICQoJy5yZXNldEJ1dHRvbicpO1xuICBjb25zdCAkbmV4dEJ1dHRvbiA9ICQoJy5uZXh0QnV0dG9uJyk7XG4gIGNvbnN0ICRxdWlja1RpbWUgPSAkKCcucXVpY2tUaW1lJyk7XG4gIGNvbnN0ICR3aGljaFJvdW5kID0gJCgnLnJvdW5kRGlzcGxheScpO1xuICBjb25zdCAkc291bmQgPSAkKCcuc291bmRPbk9mZicpO1xuXG4gIGNvbnN0IGNvbG9yUGFsZXR0ZSA9IFtcbiAgICAgICAgICAgICAgICAgICAgICBbJyMzZGI1ZjknLCAnIzQ4YThlOCcsICcjNTM5YWQ3JywgJyM1ZThkYzYnLCAnIzY5N2ZiNScsICcjNzQ3MmE0JywgJyM3ZTY0OTMnLCAnIzg5NTc4MicsICcjOTQ0YTcxJywgJyM5ZjNjNjAnLCAnI2FhMmY0ZicsICcjYjUyMTNlJywgJyNjMDE0MmQnXSxcbiAgICAgICAgICAgICAgICAgICAgICBbJyM0NGYyNjcnLCAnIzRiZGY2OCcsICcjNTFjZDY5JywgJyM1OGJhNmEnLCAnIzVlYTc2YicsICcjNjU5NTZjJywgJyM2YjgyNmQnLCAnIzcyNmY2ZScsICcjNzk1ZDZmJywgJyM3ZjRhNzAnLCAnIzg2Mzc3MScsICcjOGMyNTcyJywgJyM5MzEyNzMnXVxuICBdO1xuXG4gIGxldCByb3VuZE51bWJlciA9IDE7XG4gIGxldCAkZ2FtZVNxdWFyZXMgPSAkKCcuc3F1YXJlJyk7XG5cblxuICAkcmVzZXRCdXR0b24uaGlkZSgpO1xuICAkbmV4dEJ1dHRvbi5oaWRlKCk7XG4gICRnYW1lU3F1YXJlcy5oaWRlKCk7XG4gICR3aGljaFJvdW5kLmhpZGUoKTtcblxuXG4gIGZ1bmN0aW9uIGdhbWVTdGFydCAoKSB7XG4gICAgJGVhc3lCdXR0b24uaGlkZSgpO1xuICAgICRoYXJkQnV0dG9uLmhpZGUoKTtcbiAgICAkcmVzZXRCdXR0b24uc2hvdygpO1xuICAgICRuZXh0QnV0dG9uLnNob3coKTtcbiAgICAkZ2FtZVNxdWFyZXMuc2hvdygpO1xuICAgICR3aGljaFJvdW5kLnNob3coKTtcbiAgfVxuXG5cbiAgZnVuY3Rpb24gY29sb3JzKCkge1xuICAgIHJldHVybiBjb2xvclBhbGV0dGVbTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpKmNvbG9yUGFsZXR0ZS5sZW5ndGgpXTtcbiAgfVxuXG4gIGxldCByYW5kb21Db2xvcnNBcnIgPSBjb2xvcnMoKTtcblxuICBjb25zdCBlYXN5UjEgPSBbcmFuZG9tQ29sb3JzQXJyWzBdLCByYW5kb21Db2xvcnNBcnJbM10sIHJhbmRvbUNvbG9yc0Fycls2XSwgcmFuZG9tQ29sb3JzQXJyWzldLCByYW5kb21Db2xvcnNBcnJbMTJdXTtcbiAgY29uc29sZS5sb2coZWFzeVIxKTtcbiAgY29uc29sZS5sb2coZWFzeVIxWzBdKTtcblxuICBsZXQgcG9wRVIxID0gZWFzeVIxLnBvcCgpO1xuICBjb25zb2xlLmxvZyhwb3BFUjEpO1xuICBsZXQgc3BsaWNlRVIxID0gZWFzeVIxLnNwbGljZSgwLDEpO1xuICBjb25zb2xlLmxvZyhzcGxpY2VFUjEpO1xuICB0eXBlb2Yoc3BsaWNlRVIxKTtcblxuXG5cblxuXG4gIC8vICRkaWZmaWN1bHR5Lm9uKCdjbGljaycsIChlKSA9PiB7XG4gIC8vICAgY29uc29sZS5sb2coJ2NsaWNrZWQnKTtcbiAgLy9cbiAgLy8gICBpZiAoJChlLnRhcmdldCkuaGFzQ2xhc3MoJ2Vhc3lCdXR0b24nKSkge1xuICAvLyAgICAgZ2FtZVN0YXJ0KCk7XG4gIC8vICAgICBhbGVydCgnQWJvdXQgdG8gcGxheSBlYXN5Jyk7XG4gIC8vXG4gIC8vICAgfSBlbHNlIGlmICgkKGUudGFyZ2V0KS5oYXNDbGFzcygnaGFyZEJ1dHRvbicpKXtcbiAgLy8gICAgIGdhbWVTdGFydCgpO1xuICAvLyAgICAgYWxlcnQoJ0Fib3V0IHRvIHBsYXkgaGFyZCcpO1xuICAvLyAgIH1cbiAgLy8gfSk7XG5cbn0pO1xuXG5cbi8vIE5FWFQgTEVWRUxcbi8vICAgJGdhbWVCb2FyZC5hcHBlbmQoXCI8ZGl2PjwvZGl2PlwiKS5hZGRDbGFzcygnc3F1YXJlJyk7XG5cblxuLy8gU09VTkRcbi8vICRzb3VuZC5vbignY2xpY2snLCAoKSA9PiB7XG4vLyAgICRzb3VuZC5zcmMgPSAnLi9hc3NldHMvaHVlX2h1bnRlcl9iYWNrZ3JvdW5kLm1wMyc7XG4vLyAgIGlmICgkc291bmQucGF1c2VkID09PSBmYWxzZSkge1xuLy8gICAgICRzb3VuZC5wYXVzZSgpO1xuLy8gICB9IGVsc2Uge1xuLy8gICAgICRzb3VuZC5wbGF5KCk7XG4vLyAgIH1cbi8vIH0pO1xuXG4vLyBFQVNZIE1PREU6XG4vLyAgIFJvdW5kMVxuLy8gICAgIFswXSwgWzNdLCBbNl0sIFs5XSwgWzEyXVxuLy8gICBSb3VuZCAyXG4vLyAgICAgWzBdLCBbM10sIFs1XSwgWzddLCBbOV0sIFsxMl1cbi8vICAgUm91bmQgM1xuLy8gICAgIFswXSwgWzFdLCBbM10sIFs2XSwgWzldLCBbMTFdLCBbMTJdXG4vLyAgIFJvdW5kIDRcbi8vICAgICBbMF0sIFsxXSwgWzNdLCBbNV0sIFs3XSwgWzldLCBbMTFdLCBbMTJdXG4vLyAgIFJvdW5kIDVcbi8vICAgICBbMF0sIFsxXSwgWzNdLCBbNF0sIFs2XSwgWzhdLCBbOV0sIFsxMV0sIFsxMl1cbi8vXG4vLyBIQVJEIE1PREU6XG4vLyAgIFJvdW5kMVxuLy8gICAgIFswXSwgWzFdLCBbM10sIFs0XSwgWzZdLCBbOF0sIFs5XSwgWzExXSwgWzEyXVxuLy8gICBSb3VuZCAyXG4vLyAgICAgWzBdLCBbMV0sIFsyXSwgWzRdLCBbNV0sIFs3XSwgWzhdLCBbMTBdLCBbMTFdLCBbMTJdXG4vLyAgIFJvdW5kIDNcbi8vICAgICBbMF0sIFsxXSwgWzJdLCBbM10sIFs1XSwgWzZdLCBbN10sIFs5XSwgWzEwXSwgWzExXSwgWzEyXVxuLy8gICBSb3VuZCA0XG4vLyAgICAgWzBdLCBbMV0sIFsyXSwgWzNdLCBbNF0sIFs1XSwgWzddLCBbOF0sIFs5XSwgWzEwXSwgWzExXSwgWzEyXVxuLy8gICBSb3VuZCA1XG4vLyAgICAgWzBdLCBbMV0sIFsyXSwgWzNdLCBbNF0sIFs1XSwgWzZdLCBbN10sIFs4XSwgWzldLCBbMTBdLCBbMTFdLCBbMTJdXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG4vLyBVc2VyIGluaXRpYXRlcyBnYW1lIGJ5IHByZXNzaW5nIGVpdGhlciB0aGUgJ1BsYXkgRWFzeScgb3IgJ1BsYXkgSGFyZCcgb3B0aW9uXG5cbi8vIElmICdQbGF5IEVhc3knXG4vLyAnUGxheSBFYXN5JyBhbmQgJ1BsYXkgSGFyZCcgYnV0dG9ucyBnbyB0byBoaWRkZW5cbi8vICdSZXNldCcgYnV0dG9uIGFuZCAnTmV4dCcgYnV0dG9uIGJlY29tZSB1bmhpZGRlblxuICAvLyAnUmVzZXQnIHdpbGwgdGFrZSB5b3UgYmFjayB0byB0aGUgbG9hZGluZyBwYWdlXG4gIC8vICdOZXh0JyBidXR0b24gaXMgdW5hdmFpbGFibGUgdHMgY2xpY2sgdW50aWwgcm91bmQgaXMgY29tcGxldGVcbi8vIFJvdW5kIDEgYmVnaW5zXG4gIC8vIFRpbWVyIGJlZ2luc1xuICAvLyAnTmV4dCcgYnV0dG9uIGJlY29tZXMgdW5hdmFpbGFibGVcbiAgLy8gUmFuZG9tIGFycmF5IGlzIGNob3Nlbi4gSW5kZXggWzBdIGFuZCBbMTJdIGFyZSB1c2VkIHRvIHBvcHVsYXRlIERpdjUgYW5kIERpdjlcbiAgLy8gSW5kZXggWzMsNiw5XSBwb3B1bGF0ZSBEaXYncyA2LDcsOFxuICAvLyBFdmVudCBMaXN0ZW5lciBhcmUgdXNlZCB0byBzd2l0Y2ggYXR0cmlidXRlcyB3aGVuIHR3byBEaXYncyBhcmUgcHJlc3NlZFxuICAvLyBXaGVuIGFycmF5IGlzIGluIG9yZGVyLCAnTmV4dCcgYnV0dG9uIGJlY29tZXMgYXZhaWxhYmxlXG4vLyBSb3VuZCAyIGJlZ2luc1xuICAvLyAnTmV4dCcgYnV0dG9uIGJlY29tZXMgdW5hdmFpbGFibGVcbiAgLy8gUmFuZG9tIGFycmF5IGlzIGNob3Nlbi4gSW5kZXggWzBdIGFuZCBbMTJdIGFyZSB1c2VkIHRvIHBvcHVsYXRlIERpdjQgYW5kIERpdjlcbiAgLy8gSW5kZXggWzMsNSw3LDldIHBvcHVsYXRlIERpdidzIDUsNiw3LDhcbiAgLy8gRXZlbnQgTGlzdGVuZXIgYXJlIHVzZWQgdG8gc3dpdGNoIGF0dHJpYnV0ZXMgd2hlbiB0d28gRGl2J3MgYXJlIHByZXNzZWRcbiAgLy8gV2hlbiBhcnJheSBpcyBpbiBvcmRlciwgJ05leHQnIGJ1dHRvbiBiZWNvbWVzIGF2YWlsYWJsZVxuLy8gUm91bmQgMyBiZWdpbnNcbiAgLy8gJ05leHQnIGJ1dHRvbiBiZWNvbWVzIHVuYXZhaWxhYmxlXG4gIC8vIFJhbmRvbSBhcnJheSBpcyBjaG9zZW4uIEluZGV4IFswXSBhbmQgWzEyXSBhcmUgdXNlZCB0byBwb3B1bGF0ZSBEaXY0IGFuZCBEaXYxMFxuICAvLyBJbmRleCBbMSwzLDYsOSwxMV0gcG9wdWxhdGUgRGl2J3MgNSw2LDcsOCw5XG4gIC8vIEV2ZW50IExpc3RlbmVyIGFyZSB1c2VkIHRvIHN3aXRjaCBhdHRyaWJ1dGVzIHdoZW4gdHdvIERpdidzIGFyZSBwcmVzc2VkXG4gIC8vIFdoZW4gYXJyYXkgaXMgaW4gb3JkZXIsICdOZXh0JyBidXR0b24gYmVjb21lcyBhdmFpbGFibGVcbi8vIFJvdW5kIDQgYmVnaW5zXG4gIC8vICdOZXh0JyBidXR0b24gYmVjb21lcyB1bmF2YWlsYWJsZVxuICAvLyBSYW5kb20gYXJyYXkgaXMgY2hvc2VuLiBJbmRleCBbMF0gYW5kIFsxMl0gYXJlIHVzZWQgdG8gcG9wdWxhdGUgRGl2MyBhbmQgRGl2MTBcbiAgLy8gSW5kZXggWzEsMyw1LDcsOSwxMV0gcG9wdWxhdGUgRGl2J3MgNCw1LDYsNyw4LDlcbiAgLy8gRXZlbnQgTGlzdGVuZXIgYXJlIHVzZWQgdG8gc3dpdGNoIGF0dHJpYnV0ZXMgd2hlbiB0d28gRGl2J3MgYXJlIHByZXNzZWRcbiAgLy8gV2hlbiBhcnJheSBpcyBpbiBvcmRlciwgJ05leHQnIGJ1dHRvbiBiZWNvbWVzIGF2YWlsYWJsZVxuLy8gUm91bmQgNSBiZWdpbnNcbiAgLy8gJ05leHQnIGJ1dHRvbiBiZWNvbWVzIHVuYXZhaWxhYmxlXG4gIC8vIFJhbmRvbSBhcnJheSBpcyBjaG9zZW4uIEluZGV4IFswXSBhbmQgWzEyXSBhcmUgdXNlZCB0byBwb3B1bGF0ZSBEaXYzIGFuZCBEaXYxMVxuICAvLyBJbmRleCBbMSwzLDQsNiw4LDksMTFdIHBvcHVsYXRlIERpdidzIDQsNSw2LDcsOCw5LDEwXG4gIC8vIEV2ZW50IExpc3RlbmVyIGFyZSB1c2VkIHRvIHN3aXRjaCBhdHRyaWJ1dGVzIHdoZW4gdHdvIERpdidzIGFyZSBwcmVzc2VkXG4gIC8vIFdoZW4gYXJyYXkgaXMgaW4gb3JkZXIsIHN0b3AgdGltZXIuXG4gIC8vIENvbXBhcmUgdGltZSBpbiBtaWxsaXNlY29uZCB0byAnUXVpY2tlc3QgVGltZSdcbiAgICAvLyBJZiBuZXcgdGltZSBpcyBsb3dlciB0aGVuIGN1cnJlbnQgJ1F1aWNrZXN0IFRpbWUnXG4gICAgICAvLyBBbGVydCB1c2VyICdDb21wbGV0ZWQhIFlvdSBzZXQgdGhlIHF1aWNrZXN0IHRpbWUnXG4gICAgLy8gSWYgbmV3IHRpbWUgaXMgZ3JlYXRlciB0aGFuIHRoZSBjdXJyZW50ICdRdWlja2VzdCBUaW1lJ1xuICAgICAgLy8gQWxlcnQgdXNlciAnQ29tcGxldGVkISBVbmZvcnR1bmF0bGV5IHlvdXIgdGltZSB3YXNuJ3QgZmFzdGVyIHRoZSB0aGUgcXVpY2tlc3QgdGltZSdcbi8vICdSZXNldCcgYnV0dG9uIHRvIHJlc2V0IHRoZSBnYW1lXG5cbiAgLy8gSWYgJ1BsYXkgSGFyZCdcbiAgICAvLyAnUGxheSBFYXN5JyBhbmQgJ1BsYXkgSGFyZCcgYnV0dG9ucyBnbyB0byBoaWRkZW5cbiAgICAvLyAnUmVzZXQnIGJ1dHRvbiBhbmQgJ05leHQnIGJ1dHRvbiBiZWNvbWUgdW5oaWRkZW5cbiAgICAgIC8vICdSZXNldCcgd2lsbCB0YWtlIHlvdSBiYWNrIHRvIHRoZSBsb2FkaW5nIHBhZ2VcbiAgICAgIC8vICdOZXh0JyBidXR0b24gaXMgdW5hdmFpbGFibGUgdG8gY2xpY2sgdW50aWwgcm91bmQgaXMgY29tcGxldGVcbiAgICAvLyBSb3VuZCAxIGJlZ2luc1xuICAgICAgLy8gVGltZXIgYmVnaW5zXG4gICAgICAvLyAnTmV4dCcgYnV0dG9uIGJlY29tZXMgdW5hdmFpbGFibGVcbiAgICAgIC8vIFJhbmRvbSBhcnJheSBpcyBjaG9zZW4uIEluZGV4IFswXSBhbmQgWzEyXSBhcmUgdXNlZCB0byBwb3B1bGF0ZSBEaXYzIGFuZCBEaXYxMVxuICAgICAgLy8gSW5kZXggWzEsMyw0LDYsOCw5LDExXSBwb3B1bGF0ZSBEaXYncyA0LDUsNiw3LDgsOSwxMFxuICAgICAgLy8gRXZlbnQgTGlzdGVuZXIgYXJlIHVzZWQgdG8gc3dpdGNoIGF0dHJpYnV0ZXMgd2hlbiB0d28gRGl2J3MgYXJlIHByZXNzZWRcbiAgICAgIC8vIFdoZW4gYXJyYXkgaXMgaW4gb3JkZXIsICdOZXh0JyBidXR0b24gYmVjb21lcyBhdmFpbGFibGVcbiAgICAvLyBSb3VuZCAyIGJlZ2luc1xuICAgICAgLy8gJ05leHQnIGJ1dHRvbiBiZWNvbWVzIHVuYXZhaWxhYmxlXG4gICAgICAvLyBSYW5kb20gYXJyYXkgaXMgY2hvc2VuLiBJbmRleCBbMF0gYW5kIFsxMl0gYXJlIHVzZWQgdG8gcG9wdWxhdGUgRGl2MiBhbmQgRGl2MTFcbiAgICAgIC8vIEluZGV4IFsxLDIsNCw1LDcsOCwxMCwxMV0gcG9wdWxhdGUgRGl2J3MgMyw0LDUsNiw3LDgsOSwxMFxuICAgICAgLy8gRXZlbnQgTGlzdGVuZXIgYXJlIHVzZWQgdG8gc3dpdGNoIGF0dHJpYnV0ZXMgd2hlbiB0d28gRGl2J3MgYXJlIHByZXNzZWRcbiAgICAgIC8vIFdoZW4gYXJyYXkgaXMgaW4gb3JkZXIsICdOZXh0JyBidXR0b24gYmVjb21lcyBhdmFpbGFibGVcbiAgICAvLyBSb3VuZCAzIGJlZ2luc1xuICAgICAgLy8gJ05leHQnIGJ1dHRvbiBiZWNvbWVzIHVuYXZhaWxhYmxlXG4gICAgICAvLyBSYW5kb20gYXJyYXkgaXMgY2hvc2VuLiBJbmRleCBbMF0gYW5kIFsxMl0gYXJlIHVzZWQgdG8gcG9wdWxhdGUgRGl2MiBhbmQgRGl2MTJcbiAgICAgIC8vIEluZGV4IFsxLDIsMyw1LDYsNyw5LDEwLDExXSBwb3B1bGF0ZSBEaXYncyAzLDQsNSw2LDcsOCw5LDEwLDExXG4gICAgICAvLyBFdmVudCBMaXN0ZW5lciBhcmUgdXNlZCB0byBzd2l0Y2ggYXR0cmlidXRlcyB3aGVuIHR3byBEaXYncyBhcmUgcHJlc3NlZFxuICAgICAgLy8gV2hlbiBhcnJheSBpcyBpbiBvcmRlciwgJ05leHQnIGJ1dHRvbiBiZWNvbWVzIGF2YWlsYWJsZVxuICAgIC8vIFJvdW5kIDQgYmVnaW5zXG4gICAgICAvLyAnTmV4dCcgYnV0dG9uIGJlY29tZXMgdW5hdmFpbGFibGVcbiAgICAgIC8vIFJhbmRvbSBhcnJheSBpcyBjaG9zZW4uIEluZGV4IFswXSBhbmQgWzEyXSBhcmUgdXNlZCB0byBwb3B1bGF0ZSBEaXYxIGFuZCBEaXYxMlxuICAgICAgLy8gSW5kZXggWzEsMiwzLDQsNSw3LDgsOSwxMCwxMV0gcG9wdWxhdGUgRGl2J3MgMiwzLDQsNSw2LDcsOCw5LDEwLDExXG4gICAgICAvLyBFdmVudCBMaXN0ZW5lciBhcmUgdXNlZCB0byBzd2l0Y2ggYXR0cmlidXRlcyB3aGVuIHR3byBEaXYncyBhcmUgcHJlc3NlZFxuICAgICAgLy8gV2hlbiBhcnJheSBpcyBpbiBvcmRlciwgJ05leHQnIGJ1dHRvbiBiZWNvbWVzIGF2YWlsYWJsZVxuICAgIC8vIFJvdW5kIDUgYmVnaW5zXG4gICAgICAvLyAnTmV4dCcgYnV0dG9uIGJlY29tZXMgdW5hdmFpbGFibGVcbiAgICAgIC8vIFJhbmRvbSBhcnJheSBpcyBjaG9zZW4uIEluZGV4IFswXSBhbmQgWzEyXSBhcmUgdXNlZCB0byBwb3B1bGF0ZSBEaXYxIGFuZCBEaXYxM1xuICAgICAgLy8gSW5kZXggWzEsMiwzLDQsNSw2LDcsOCw5LDEwLDExXSBwb3B1bGF0ZSBEaXYncyAyLDMsNCw1LDYsNyw4LDksMTAsMTEsMTJcbiAgICAgIC8vIEV2ZW50IExpc3RlbmVyIGFyZSB1c2VkIHRvIHN3aXRjaCBhdHRyaWJ1dGVzIHdoZW4gdHdvIERpdidzIGFyZSBwcmVzc2VkXG4gICAgICAvLyBXaGVuIGFycmF5IGlzIGluIG9yZGVyLCBzdG9wIHRpbWVyLlxuICAgICAgLy8gQ29tcGFyZSB0aW1lIGluIG1pbGxpc2Vjb25kIHRvICdRdWlja2VzdCBUaW1lJ1xuICAgICAgICAvLyBJZiBuZXcgdGltZSBpcyBsb3dlciB0aGVuIGN1cnJlbnQgJ1F1aWNrZXN0IFRpbWUnXG4gICAgICAgICAgLy8gQWxlcnQgdXNlciAnQ29tcGxldGVkISBZb3Ugc2V0IHRoZSBxdWlja2VzdCB0aW1lJ1xuICAgICAgICAvLyBJZiBuZXcgdGltZSBpcyBncmVhdGVyIHRoYW4gdGhlIGN1cnJlbnQgJ1F1aWNrZXN0IFRpbWUnXG4gICAgICAgICAgLy8gQWxlcnQgdXNlciAnQ29tcGxldGVkISBVbmZvcnR1bmF0bGV5IHlvdXIgdGltZSB3YXNuJ3QgZmFzdGVyIHRoZSB0aGUgcXVpY2tlc3QgdGltZSdcbiAgICAvLyAnUmVzZXQnIGJ1dHRvbiB0byByZXNldCB0aGUgZ2FtZVxuIl19
