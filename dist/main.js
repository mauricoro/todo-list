(()=>{"use strict";class e{constructor(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"Project",n=arguments.length>2?arguments[2]:void 0;this.title=t,this.reference=e,this.titleReference=n,this.items=[]}getTitle(){return this.title}getItems(){return this.items}getReference(){return this.reference}setTitle(e){this.title=e,this.titleReference.textContent=e}setTitleReference(e){this.titleReference=e}addItem(e){this.items.push(e)}removeItem(e){this.items.splice(this.items.indexOf(e),1)}}class t{constructor(e,t,n,i,s){this.reference=e,this.title=t,this.description=n,this.dueDate=i,this.priority=s}getTitle(){return this.title}getDescription(){return this.description}getDueDate(){return this.dueDate}getPriority(){return this.priority}getReference(){return this.reference}setTitle(e){this.title=e}setDescription(e){this.description=e}setDueDate(e){this.dueDate=e}setPriority(e){this.priority=e}setReference(e){this.reference=e}}function n(e){document.querySelector(".menu").classList.add("hidden"),e.classList.remove("hidden"),e.classList.add("shown")}function i(i){const c=new e(function(){const e=document.createElement("div"),t=document.createElement("div"),n=Object.assign(document.createElement("input"),{type:"text",value:"New Project",placeholder:"Project Title"}),i=Object.assign(document.createElement("img"),{src:"img/back-arrow.svg",alt:"back-arrow"}),s=document.createElement("button"),r=document.createElement("div"),c=document.createElement("div");return r.classList.add("container"),e.classList.add("list"),t.classList.add("title"),c.classList.add("items"),s.appendChild(i),r.appendChild(s),t.appendChild(r),t.appendChild(n),e.appendChild(t),e.appendChild(c),s.addEventListener("click",(()=>{document.querySelector(".list.shown").className="list hidden",document.querySelector(".menu.hidden").className="menu"})),e}()),l=new t(s());c.addItem(l),i.addList(c),function(e){document.querySelector("div.lists").appendChild(e.getReference())}(c),function(e,t){e.getReference().querySelector(".items").appendChild(t.getReference())}(c,l),r(c,l),c.getReference().classList.add("shown");const d=function(e){let t=document.createElement("button");return t.textContent=e.getTitle(),t.addEventListener("click",(()=>{n(e.getReference())})),document.querySelector(".titles").appendChild(t),t}(c);return c.setTitleReference(d),c.getReference()}function s(){const e=document.createElement("div");e.classList.add("item");const t=Object.assign(document.createElement("input"),{type:"text",placeholder:"New Item"});return e.appendChild(t),console.log(e),e}function r(e,t){let n=e.getReference().querySelector("div.title input");n.addEventListener("change",(()=>{e.setTitle(n.value)}));let i=t.getReference().querySelector("input");i.addEventListener("change",(()=>{t.setTitle(i.value)})),i.addEventListener("keydown",(n=>{if("Enter"===n.key&&""!==i.value){console.log("create new item has fired");let t=c();e.addItem(t),e.getReference().querySelector(".items").appendChild(t.getReference()),t.getReference().querySelector("input").focus(),r(e,t)}"Backspace"===n.key&&""===i.value&&e.getItems().length>1&&(console.log("Delete this item"),t.getReference().remove(),e.removeItem(t),console.log(e.getItems()),n.preventDefault(),e.getItems().slice(-1)[0].getReference().querySelector("input").focus())}))}function c(){return new t(s())}const l=new class{constructor(){this.lists=[]}addList(e){this.lists.push(e)}getLists(){return this.lists}};var d;i(l),d=l,document.querySelector("#add").addEventListener("click",(()=>{n(i(d))}))})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QyxTQUFTQyxjQUFjLFFBQy9Cb0IsaUJBQWlCLFNBQVMsS0FDbEN2QixFQUFTTyxFQUFlQyxHQUFNLEciLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvbGlzdC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvaXRlbS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvZG9tLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvdXNlci5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgaXRlbSBmcm9tIFwiLi9pdGVtLmpzXCJcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgbGlzdCB7XHJcbiAgY29uc3RydWN0b3IocmVmZXJlbmNlLCB0aXRsZSA9IFwiUHJvamVjdFwiLCB0aXRsZVJlZmVyZW5jZSkge1xyXG4gICAgdGhpcy50aXRsZSA9IHRpdGxlXHJcbiAgICB0aGlzLnJlZmVyZW5jZSA9IHJlZmVyZW5jZVxyXG4gICAgdGhpcy50aXRsZVJlZmVyZW5jZSA9IHRpdGxlUmVmZXJlbmNlXHJcbiAgICB0aGlzLml0ZW1zID0gW11cclxuICB9XHJcblxyXG4gIGdldFRpdGxlKCkge1xyXG4gICAgcmV0dXJuIHRoaXMudGl0bGVcclxuICB9XHJcblxyXG4gIGdldEl0ZW1zKCkge1xyXG4gICAgcmV0dXJuIHRoaXMuaXRlbXNcclxuICB9XHJcblxyXG4gIGdldFJlZmVyZW5jZSgpIHtcclxuICAgIHJldHVybiB0aGlzLnJlZmVyZW5jZVxyXG4gIH1cclxuXHJcbiAgc2V0VGl0bGUobmV3VGl0bGUpIHtcclxuICAgIHRoaXMudGl0bGUgPSBuZXdUaXRsZVxyXG4gICAgdGhpcy50aXRsZVJlZmVyZW5jZS50ZXh0Q29udGVudCA9IG5ld1RpdGxlXHJcbiAgfVxyXG5cclxuICBzZXRUaXRsZVJlZmVyZW5jZShuZXdSZWZlcmVuY2UpIHtcclxuICAgIHRoaXMudGl0bGVSZWZlcmVuY2UgPSBuZXdSZWZlcmVuY2VcclxuICB9XHJcblxyXG4gIGFkZEl0ZW0obmV3SXRlbSkge1xyXG4gICAgdGhpcy5pdGVtcy5wdXNoKG5ld0l0ZW0pXHJcbiAgfVxyXG5cclxuICByZW1vdmVJdGVtKGl0ZW0pIHtcclxuICAgIHRoaXMuaXRlbXMuc3BsaWNlKHRoaXMuaXRlbXMuaW5kZXhPZihpdGVtKSwgMSlcclxuICB9XHJcbn1cclxuIiwiXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIGl0ZW17XHJcbiAgICBjb25zdHJ1Y3RvcihyZWZlcmVuY2UsIHRpdGxlLCAgZGVzY3JpcHRpb24sIGR1ZURhdGUsIHByaW9yaXR5KXtcclxuICAgICB0aGlzLnJlZmVyZW5jZSA9IHJlZmVyZW5jZVxyXG4gICAgIHRoaXMudGl0bGUgPSB0aXRsZVxyXG4gICAgIHRoaXMuZGVzY3JpcHRpb24gPSBkZXNjcmlwdGlvblxyXG4gICAgIHRoaXMuZHVlRGF0ZSA9IGR1ZURhdGVcclxuICAgICB0aGlzLnByaW9yaXR5ID0gcHJpb3JpdHlcclxuXHJcbiAgICB9XHJcblxyXG4gICAgZ2V0VGl0bGUoKXtcclxuICAgICAgICByZXR1cm4gdGhpcy50aXRsZTtcclxuICAgIH1cclxuICAgIGdldERlc2NyaXB0aW9uKCl7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuZGVzY3JpcHRpb247XHJcbiAgICB9XHJcbiAgICBnZXREdWVEYXRlKCl7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuZHVlRGF0ZTtcclxuICAgIH0gIFxyXG4gICAgZ2V0UHJpb3JpdHkoKXtcclxuICAgICAgICByZXR1cm4gdGhpcy5wcmlvcml0eTtcclxuICAgIH1cclxuICAgIGdldFJlZmVyZW5jZSgpe1xyXG4gICAgICAgIHJldHVybiB0aGlzLnJlZmVyZW5jZTtcclxuICAgIH0gICBcclxuXHJcbiAgICBzZXRUaXRsZShuZXdUaXRsZSl7XHJcbiAgICAgICAgdGhpcy50aXRsZSA9IG5ld1RpdGxlO1xyXG4gICAgfVxyXG4gICAgc2V0RGVzY3JpcHRpb24obmV3RGVzY3JpcHRpb24pe1xyXG4gICAgICAgIHRoaXMuZGVzY3JpcHRpb24gPSBuZXdEZXNjcmlwdGlvbjtcclxuICAgIH1cclxuICAgIHNldER1ZURhdGUobmV3RHVlRGF0ZSl7XHJcbiAgICAgICAgdGhpcy5kdWVEYXRlID0gbmV3RHVlRGF0ZTtcclxuICAgIH0gIFxyXG4gICAgc2V0UHJpb3JpdHkobmV3UHJpb3JpdHkpe1xyXG4gICAgICAgIHRoaXMucHJpb3JpdHkgPSBuZXdQcmlvcml0eTtcclxuICAgIH0gICAgXHJcbiAgICBzZXRSZWZlcmVuY2UobmV3UmVmZXJlbmNlKXtcclxuICAgICAgICB0aGlzLnJlZmVyZW5jZSA9IG5ld1JlZmVyZW5jZVxyXG4gICAgfVxyXG4gICAgXHJcbiAgICBcclxuIH1cclxuXHJcblxyXG5cclxuIiwiaW1wb3J0IGxpc3QgZnJvbSBcIi4vbGlzdFwiXHJcbmltcG9ydCBpdGVtIGZyb20gXCIuL2l0ZW1cIlxyXG5cclxuLy8gIHNob3VsZCBhZGQgZmVhdHVyZSB0byBhbGxvdyB0byBpbnNlcnQgaXRlbXMgYnkgZW50ZXJpbmcgYW5kIGl0ZW0gc2hvdWxkIGdvIGFmdGVyIGl0ZW0gdGhhdCBlbnRlciBwcmVzc2VkIG9uXHJcbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVNZW51RG9tKHVzZXIpIHtcclxuICBjb25zdCBhZGRCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2FkZFwiKVxyXG4gIGFkZEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xyXG4gICAgc2hvd0xpc3QoaW5pdGlhbGl6ZUxpc3QodXNlcikpXHJcbiAgfSlcclxufVxyXG5jb25zdCB0ZXN0ID0gXCJ0ZXN0XCJcclxuZnVuY3Rpb24gc2hvd0xpc3QobGlzdFJlZmVyZW5jZSkge1xyXG4gIGNvbnN0IG1lbnUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm1lbnVcIilcclxuICBtZW51LmNsYXNzTGlzdC5hZGQoXCJoaWRkZW5cIilcclxuICBsaXN0UmVmZXJlbmNlLmNsYXNzTGlzdC5yZW1vdmUoXCJoaWRkZW5cIilcclxuICBsaXN0UmVmZXJlbmNlLmNsYXNzTGlzdC5hZGQoXCJzaG93blwiKVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gaW5pdGlhbGl6ZUxpc3QodXNlcikge1xyXG4gIGNvbnN0IG5ld0xpc3QgPSBuZXcgbGlzdChjcmVhdGVMaXN0RG9tKCkpXHJcbiAgY29uc3QgbmV3SXRlbSA9IG5ldyBpdGVtKGNyZWF0ZUl0ZW1Eb20oKSlcclxuICBuZXdMaXN0LmFkZEl0ZW0obmV3SXRlbSlcclxuICB1c2VyLmFkZExpc3QobmV3TGlzdClcclxuICBhcHBlbmRMaXN0KG5ld0xpc3QpXHJcbiAgYXBwZW5kSXRlbShuZXdMaXN0LCBuZXdJdGVtKVxyXG4gIGl0ZW1MaXN0ZW5lcihuZXdMaXN0LCBuZXdJdGVtKVxyXG5cclxuICBjb25zdCBsaXN0UmVmZXJlbmNlID0gbmV3TGlzdC5nZXRSZWZlcmVuY2UoKVxyXG4gIGxpc3RSZWZlcmVuY2UuY2xhc3NMaXN0LmFkZChcInNob3duXCIpXHJcbiAgY29uc3QgdGl0bGVSZWZlcmVuY2UgPSBhZGRUaXRsZShuZXdMaXN0KVxyXG4gIG5ld0xpc3Quc2V0VGl0bGVSZWZlcmVuY2UodGl0bGVSZWZlcmVuY2UpXHJcbiAgcmV0dXJuIG5ld0xpc3QuZ2V0UmVmZXJlbmNlKClcclxufVxyXG5cclxuZnVuY3Rpb24gYWRkVGl0bGUobmV3TGlzdCkge1xyXG4gIGxldCBuZXdUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIilcclxuICBuZXdUaXRsZS50ZXh0Q29udGVudCA9IG5ld0xpc3QuZ2V0VGl0bGUoKVxyXG4gIG5ld1RpdGxlLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XHJcbiAgICBzaG93TGlzdChuZXdMaXN0LmdldFJlZmVyZW5jZSgpKVxyXG4gIH0pXHJcbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi50aXRsZXNcIikuYXBwZW5kQ2hpbGQobmV3VGl0bGUpXHJcbiAgcmV0dXJuIG5ld1RpdGxlXHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVJdGVtRG9tKCkge1xyXG4gIC8vcmV0dXJucyBkaXYuaXRlbSBpbnB1dFxyXG4gIGNvbnN0IG5ld0l0ZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpXHJcbiAgbmV3SXRlbS5jbGFzc0xpc3QuYWRkKFwiaXRlbVwiKVxyXG5cclxuICBjb25zdCBuZXdJbnB1dCA9IE9iamVjdC5hc3NpZ24oZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpLCB7XHJcbiAgICB0eXBlOiBcInRleHRcIixcclxuICAgIHBsYWNlaG9sZGVyOiBcIk5ldyBJdGVtXCIsXHJcbiAgfSlcclxuICBuZXdJdGVtLmFwcGVuZENoaWxkKG5ld0lucHV0KVxyXG4gIGNvbnNvbGUubG9nKG5ld0l0ZW0pXHJcbiAgcmV0dXJuIG5ld0l0ZW1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZUxpc3REb20oKSB7XHJcbiAgY29uc3QgbGlzdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIilcclxuICBjb25zdCB0aXRsZUNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIilcclxuICBjb25zdCB0aXRsZSA9IE9iamVjdC5hc3NpZ24oZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpLCB7XHJcbiAgICB0eXBlOiBcInRleHRcIixcclxuICAgIHZhbHVlOiBcIk5ldyBQcm9qZWN0XCIsXHJcbiAgICBwbGFjZWhvbGRlcjogXCJQcm9qZWN0IFRpdGxlXCIsXHJcbiAgfSlcclxuICBjb25zdCBiYWNrQXJyb3cgPSBPYmplY3QuYXNzaWduKGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIiksIHtcclxuICAgIHNyYzogXCJpbWcvYmFjay1hcnJvdy5zdmdcIixcclxuICAgIGFsdDogXCJiYWNrLWFycm93XCIsXHJcbiAgfSlcclxuICBjb25zdCBiYWNrQXJyb3dXcmFwcGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKVxyXG4gIGNvbnN0IGJhY2tBcnJvd0NvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIilcclxuICBjb25zdCBpdGVtcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIilcclxuXHJcbiAgYmFja0Fycm93Q29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJjb250YWluZXJcIilcclxuICBsaXN0LmNsYXNzTGlzdC5hZGQoXCJsaXN0XCIpXHJcbiAgdGl0bGVDb250YWluZXIuY2xhc3NMaXN0LmFkZChcInRpdGxlXCIpXHJcbiAgaXRlbXMuY2xhc3NMaXN0LmFkZChcIml0ZW1zXCIpXHJcblxyXG4gIGJhY2tBcnJvd1dyYXBwZXIuYXBwZW5kQ2hpbGQoYmFja0Fycm93KVxyXG4gIGJhY2tBcnJvd0NvbnRhaW5lci5hcHBlbmRDaGlsZChiYWNrQXJyb3dXcmFwcGVyKVxyXG4gIHRpdGxlQ29udGFpbmVyLmFwcGVuZENoaWxkKGJhY2tBcnJvd0NvbnRhaW5lcilcclxuICB0aXRsZUNvbnRhaW5lci5hcHBlbmRDaGlsZCh0aXRsZSlcclxuICBsaXN0LmFwcGVuZENoaWxkKHRpdGxlQ29udGFpbmVyKVxyXG4gIGxpc3QuYXBwZW5kQ2hpbGQoaXRlbXMpXHJcblxyXG4gIGJhY2tBcnJvd1dyYXBwZXIuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcclxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubGlzdC5zaG93blwiKS5jbGFzc05hbWUgPSBcImxpc3QgaGlkZGVuXCJcclxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubWVudS5oaWRkZW5cIikuY2xhc3NOYW1lID0gXCJtZW51XCJcclxuICB9KVxyXG5cclxuICByZXR1cm4gbGlzdFxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gaXRlbUxpc3RlbmVyKGxpc3QsIGl0ZW0pIHtcclxuICAvL3VwZGF0ZSBsaXN0IHRpdGxlXHJcbiAgbGV0IGxpc3RUaXRsZSA9IGxpc3QuZ2V0UmVmZXJlbmNlKCkucXVlcnlTZWxlY3RvcihcImRpdi50aXRsZSBpbnB1dFwiKVxyXG4gIGxpc3RUaXRsZS5hZGRFdmVudExpc3RlbmVyKFwiY2hhbmdlXCIsICgpID0+IHtcclxuICAgIGxpc3Quc2V0VGl0bGUobGlzdFRpdGxlLnZhbHVlKVxyXG4gIH0pXHJcblxyXG4gIGxldCBpbnB1dFJlZmVyZW5jZSA9IGl0ZW0uZ2V0UmVmZXJlbmNlKCkucXVlcnlTZWxlY3RvcihcImlucHV0XCIpXHJcbiAgaW5wdXRSZWZlcmVuY2UuYWRkRXZlbnRMaXN0ZW5lcihcImNoYW5nZVwiLCAoKSA9PiB7XHJcbiAgICBpdGVtLnNldFRpdGxlKGlucHV0UmVmZXJlbmNlLnZhbHVlKVxyXG4gIH0pXHJcblxyXG4gIGlucHV0UmVmZXJlbmNlLmFkZEV2ZW50TGlzdGVuZXIoXCJrZXlkb3duXCIsIChldmVudCkgPT4ge1xyXG4gICAgaWYgKGV2ZW50LmtleSA9PT0gXCJFbnRlclwiICYmIGlucHV0UmVmZXJlbmNlLnZhbHVlICE9PSBcIlwiKSB7XHJcbiAgICAgIGNvbnNvbGUubG9nKFwiY3JlYXRlIG5ldyBpdGVtIGhhcyBmaXJlZFwiKVxyXG4gICAgICBsZXQgbmV3SXRlbSA9IGNyZWF0ZUl0ZW0oKVxyXG4gICAgICBsaXN0LmFkZEl0ZW0obmV3SXRlbSlcclxuICAgICAgbGlzdFxyXG4gICAgICAgIC5nZXRSZWZlcmVuY2UoKVxyXG4gICAgICAgIC5xdWVyeVNlbGVjdG9yKFwiLml0ZW1zXCIpXHJcbiAgICAgICAgLmFwcGVuZENoaWxkKG5ld0l0ZW0uZ2V0UmVmZXJlbmNlKCkpXHJcbiAgICAgIG5ld0l0ZW0uZ2V0UmVmZXJlbmNlKCkucXVlcnlTZWxlY3RvcihcImlucHV0XCIpLmZvY3VzKClcclxuICAgICAgaXRlbUxpc3RlbmVyKGxpc3QsIG5ld0l0ZW0pXHJcbiAgICB9XHJcblxyXG4gICAgaWYgKFxyXG4gICAgICBldmVudC5rZXkgPT09IFwiQmFja3NwYWNlXCIgJiZcclxuICAgICAgaW5wdXRSZWZlcmVuY2UudmFsdWUgPT09IFwiXCIgJiZcclxuICAgICAgbGlzdC5nZXRJdGVtcygpLmxlbmd0aCA+IDFcclxuICAgICkge1xyXG4gICAgICBjb25zb2xlLmxvZyhcIkRlbGV0ZSB0aGlzIGl0ZW1cIilcclxuICAgICAgaXRlbS5nZXRSZWZlcmVuY2UoKS5yZW1vdmUoKVxyXG4gICAgICBsaXN0LnJlbW92ZUl0ZW0oaXRlbSlcclxuICAgICAgLy9yZW1vdmUgZnJvbSBsaXN0XHJcbiAgICAgIGNvbnNvbGUubG9nKGxpc3QuZ2V0SXRlbXMoKSlcclxuXHJcbiAgICAgIC8vRm9jdXMgbGFzdCBpdGVtIG9mIGFycmF5IGFrYSB0aGUgcHJldmlvdXMgaXRlbVxyXG4gICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpXHJcbiAgICAgIGxpc3QuZ2V0SXRlbXMoKS5zbGljZSgtMSlbMF0uZ2V0UmVmZXJlbmNlKCkucXVlcnlTZWxlY3RvcihcImlucHV0XCIpLmZvY3VzKClcclxuICAgIH1cclxuICB9KVxyXG59XHJcblxyXG5mdW5jdGlvbiBjcmVhdGVJdGVtKCkge1xyXG4gIHJldHVybiBuZXcgaXRlbShjcmVhdGVJdGVtRG9tKCkpXHJcbn1cclxuXHJcbmZ1bmN0aW9uIGFwcGVuZEl0ZW0obGlzdCwgaXRlbSkge1xyXG4gIGxpc3QuZ2V0UmVmZXJlbmNlKCkucXVlcnlTZWxlY3RvcihcIi5pdGVtc1wiKS5hcHBlbmRDaGlsZChpdGVtLmdldFJlZmVyZW5jZSgpKVxyXG59XHJcblxyXG5mdW5jdGlvbiBhcHBlbmRMaXN0KGxpc3QpIHtcclxuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiZGl2Lmxpc3RzXCIpLmFwcGVuZENoaWxkKGxpc3QuZ2V0UmVmZXJlbmNlKCkpXHJcbn1cclxuIiwiaW1wb3J0IHVzZXIgZnJvbSBcIi4vdXNlci5qc1wiXHJcbmltcG9ydCB7IGNyZWF0ZU1lbnVEb20sIGluaXRpYWxpemVMaXN0IH0gZnJvbSBcIi4vZG9tLmpzXCJcclxuXHJcbmNvbnN0IGRlZmF1bHRVc2VyID0gbmV3IHVzZXIoKVxyXG5cclxuaW5pdGlhbGl6ZUxpc3QoZGVmYXVsdFVzZXIpXHJcbmNyZWF0ZU1lbnVEb20oZGVmYXVsdFVzZXIpXHJcblxyXG5jb25zdCBmbiA9ICgpID0+IDFcclxuIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgdXNlciB7XHJcbiAgY29uc3RydWN0b3IoKSB7XHJcbiAgICB0aGlzLmxpc3RzID0gW11cclxuICB9XHJcblxyXG4gIGFkZExpc3QobmV3TGlzdCkge1xyXG4gICAgdGhpcy5saXN0cy5wdXNoKG5ld0xpc3QpXHJcbiAgfVxyXG5cclxuICBnZXRMaXN0cygpIHtcclxuICAgIHJldHVybiB0aGlzLmxpc3RzXHJcbiAgfVxyXG59XHJcbiJdLCJuYW1lcyI6WyJsaXN0IiwiY29uc3RydWN0b3IiLCJyZWZlcmVuY2UiLCJ0aXRsZSIsImFyZ3VtZW50cyIsImxlbmd0aCIsInVuZGVmaW5lZCIsInRpdGxlUmVmZXJlbmNlIiwidGhpcyIsIml0ZW1zIiwiZ2V0VGl0bGUiLCJnZXRJdGVtcyIsImdldFJlZmVyZW5jZSIsInNldFRpdGxlIiwibmV3VGl0bGUiLCJ0ZXh0Q29udGVudCIsInNldFRpdGxlUmVmZXJlbmNlIiwibmV3UmVmZXJlbmNlIiwiYWRkSXRlbSIsIm5ld0l0ZW0iLCJwdXNoIiwicmVtb3ZlSXRlbSIsIml0ZW0iLCJzcGxpY2UiLCJpbmRleE9mIiwiZGVzY3JpcHRpb24iLCJkdWVEYXRlIiwicHJpb3JpdHkiLCJnZXREZXNjcmlwdGlvbiIsImdldER1ZURhdGUiLCJnZXRQcmlvcml0eSIsInNldERlc2NyaXB0aW9uIiwibmV3RGVzY3JpcHRpb24iLCJzZXREdWVEYXRlIiwibmV3RHVlRGF0ZSIsInNldFByaW9yaXR5IiwibmV3UHJpb3JpdHkiLCJzZXRSZWZlcmVuY2UiLCJzaG93TGlzdCIsImxpc3RSZWZlcmVuY2UiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJjbGFzc0xpc3QiLCJhZGQiLCJyZW1vdmUiLCJpbml0aWFsaXplTGlzdCIsInVzZXIiLCJuZXdMaXN0IiwiY3JlYXRlRWxlbWVudCIsInRpdGxlQ29udGFpbmVyIiwiT2JqZWN0IiwiYXNzaWduIiwidHlwZSIsInZhbHVlIiwicGxhY2Vob2xkZXIiLCJiYWNrQXJyb3ciLCJzcmMiLCJhbHQiLCJiYWNrQXJyb3dXcmFwcGVyIiwiYmFja0Fycm93Q29udGFpbmVyIiwiYXBwZW5kQ2hpbGQiLCJhZGRFdmVudExpc3RlbmVyIiwiY2xhc3NOYW1lIiwiY3JlYXRlTGlzdERvbSIsImNyZWF0ZUl0ZW1Eb20iLCJhZGRMaXN0IiwiYXBwZW5kTGlzdCIsImFwcGVuZEl0ZW0iLCJpdGVtTGlzdGVuZXIiLCJhZGRUaXRsZSIsIm5ld0lucHV0IiwiY29uc29sZSIsImxvZyIsImxpc3RUaXRsZSIsImlucHV0UmVmZXJlbmNlIiwiZXZlbnQiLCJrZXkiLCJjcmVhdGVJdGVtIiwiZm9jdXMiLCJwcmV2ZW50RGVmYXVsdCIsInNsaWNlIiwiZGVmYXVsdFVzZXIiLCJsaXN0cyIsImdldExpc3RzIl0sInNvdXJjZVJvb3QiOiIifQ==