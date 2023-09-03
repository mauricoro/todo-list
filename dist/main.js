;(() => {
  "use strict"
  class e {
    constructor(e, t = "Project", n) {
      ;(this.title = t),
        (this.reference = e),
        (this.titleReference = n),
        (this.items = [])
    }
    getTitle() {
      return this.title
    }
    getItems() {
      return this.items
    }
    getReference() {
      return this.reference
    }
    setTitle(e) {
      ;(this.title = e), (this.titleReference.textContent = e)
    }
    setTitleReference(e) {
      this.titleReference = e
    }
    addItem(e) {
      this.items.push(e)
    }
    removeItem(e) {
      this.items.splice(this.items.indexOf(e), 1)
    }
  }
  class t {
    constructor(e, t, n, i, s) {
      ;(this.reference = e),
        (this.title = t),
        (this.description = n),
        (this.dueDate = i),
        (this.priority = s)
    }
    getTitle() {
      return this.title
    }
    getDescription() {
      return this.description
    }
    getDueDate() {
      return this.dueDate
    }
    getPriority() {
      return this.priority
    }
    getReference() {
      return this.reference
    }
    setTitle(e) {
      this.title = e
    }
    setDescription(e) {
      this.description = e
    }
    setDueDate(e) {
      this.dueDate = e
    }
    setPriority(e) {
      this.priority = e
    }
    setReference(e) {
      this.reference = e
    }
  }
  function n(e) {
    document.querySelector(".menu").classList.add("hidden"),
      e.classList.remove("hidden"),
      e.classList.add("shown")
  }
  function i(i) {
    const c = new e(
        (function () {
          const e = document.createElement("div"),
            t = document.createElement("div"),
            n = Object.assign(document.createElement("input"), {
              type: "text",
              value: "New Project",
              placeholder: "Project Title",
            }),
            i = Object.assign(document.createElement("img"), {
              src: "img/back-arrow.svg",
              alt: "back-arrow",
            }),
            s = document.createElement("button"),
            r = document.createElement("div"),
            c = document.createElement("div")
          return (
            r.classList.add("container"),
            e.classList.add("list"),
            t.classList.add("title"),
            c.classList.add("items"),
            s.appendChild(i),
            r.appendChild(s),
            t.appendChild(r),
            t.appendChild(n),
            e.appendChild(t),
            e.appendChild(c),
            s.addEventListener("click", () => {
              ;(document.querySelector(".list.shown").className =
                "list hidden"),
                (document.querySelector(".menu.hidden").className = "menu")
            }),
            e
          )
        })()
      ),
      l = new t(s())
    c.addItem(l),
      i.addList(c),
      (function (e) {
        document.querySelector("div.lists").appendChild(e.getReference())
      })(c),
      (function (e, t) {
        e.getReference().querySelector(".items").appendChild(t.getReference())
      })(c, l),
      r(c, l),
      c.getReference().classList.add("shown")
    const d = (function (e) {
      let t = document.createElement("button")
      return (
        (t.textContent = e.getTitle()),
        t.addEventListener("click", () => {
          n(e.getReference())
        }),
        document.querySelector(".titles").appendChild(t),
        t
      )
    })(c)
    return c.setTitleReference(d), c.getReference()
  }
  function s() {
    const e = document.createElement("div")
    e.classList.add("item")
    const t = Object.assign(document.createElement("input"), {
      type: "text",
      placeholder: "New Item",
    })
    return e.appendChild(t), console.log(e), e
  }
  function r(e, t) {
    let n = e.getReference().querySelector("div.title input")
    n.addEventListener("change", () => {
      e.setTitle(n.value)
    })
    let i = t.getReference().querySelector("input")
    i.addEventListener("change", () => {
      t.setTitle(i.value)
    }),
      i.addEventListener("keydown", function (n) {
        if ("Enter" === n.key && "" !== i.value) {
          console.log("create new item has fired")
          let t = c()
          e.addItem(t),
            e
              .getReference()
              .querySelector(".items")
              .appendChild(t.getReference()),
            t.getReference().querySelector("input").focus(),
            r(e, t)
        }
        "Backspace" === n.key &&
          "" === i.value &&
          e.getItems().length > 1 &&
          (console.log("Delete this item"),
          t.getReference().remove(),
          e.removeItem(t),
          console.log(e.getItems()),
          n.preventDefault(),
          e
            .getItems()
            .slice(-1)[0]
            .getReference()
            .querySelector("input")
            .focus())
      })
  }
  function c() {
    return new t(s())
  }
  const l = new (class {
    constructor() {
      this.lists = []
    }
    addList(e) {
      this.lists.push(e)
    }
    getLists() {
      return this.lists
    }
  })()
  var d
  i(l),
    (d = l),
    document.querySelector("#add").addEventListener("click", () => {
      n(i(d))
    })
})()
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoibUJBQ2UsTUFBTUEsRUFDbEIsV0FBQUMsQ0FBWUMsRUFBV0MsRUFBUSxVQUFXQyxHQUN6Q0MsS0FBS0YsTUFBUUEsRUFDYkUsS0FBS0gsVUFBWUEsRUFDakJHLEtBQUtELGVBQWlCQSxFQUN0QkMsS0FBS0MsTUFBUSxFQUNkLENBRUEsUUFBQUMsR0FDRyxPQUFPRixLQUFLRixLQUNmLENBRUEsUUFBQUssR0FDRyxPQUFPSCxLQUFLQyxLQUNmLENBRUEsWUFBQUcsR0FDRyxPQUFPSixLQUFLSCxTQUNmLENBRUEsUUFBQVEsQ0FBU0MsR0FDTk4sS0FBS0YsTUFBUVEsRUFDYk4sS0FBS0QsZUFBZVEsWUFBY0QsQ0FDckMsQ0FFQSxpQkFBQUUsQ0FBa0JDLEdBQ2ZULEtBQUtELGVBQWlCVSxDQUN6QixDQUlBLE9BQUFDLENBQVFDLEdBQ0xYLEtBQUtDLE1BQU1XLEtBQUtELEVBQ25CLENBRUEsVUFBQUUsQ0FBV0MsR0FDUmQsS0FBS0MsTUFBTWMsT0FBT2YsS0FBS0MsTUFBTWUsUUFBUUYsR0FBTyxFQUMvQyxFQ3JDWSxNQUFNQSxFQUNqQixXQUFBbEIsQ0FBWUMsRUFBV0MsRUFBUW1CLEVBQWFDLEVBQVNDLEdBQ3BEbkIsS0FBS0gsVUFBWUEsRUFDakJHLEtBQUtGLE1BQVFBLEVBQ2JFLEtBQUtpQixZQUFjQSxFQUNuQmpCLEtBQUtrQixRQUFVQSxFQUNmbEIsS0FBS21CLFNBQVdBLENBRWpCLENBRUEsUUFBQWpCLEdBQ0ksT0FBT0YsS0FBS0YsS0FDaEIsQ0FDQSxjQUFBc0IsR0FDSSxPQUFPcEIsS0FBS2lCLFdBQ2hCLENBQ0EsVUFBQUksR0FDSSxPQUFPckIsS0FBS2tCLE9BQ2hCLENBQ0EsV0FBQUksR0FDSSxPQUFPdEIsS0FBS21CLFFBQ2hCLENBQ0EsWUFBQWYsR0FDSSxPQUFPSixLQUFLSCxTQUNoQixDQUVBLFFBQUFRLENBQVNDLEdBQ0xOLEtBQUtGLE1BQVFRLENBQ2pCLENBQ0EsY0FBQWlCLENBQWVDLEdBQ1h4QixLQUFLaUIsWUFBY08sQ0FDdkIsQ0FDQSxVQUFBQyxDQUFXQyxHQUNQMUIsS0FBS2tCLFFBQVVRLENBQ25CLENBQ0EsV0FBQUMsQ0FBWUMsR0FDUjVCLEtBQUttQixTQUFXUyxDQUNwQixDQUNBLFlBQUFDLENBQWFwQixHQUNUVCxLQUFLSCxVQUFZWSxDQUNyQixFQzVCSixTQUFTcUIsRUFBU0MsR0FDREMsU0FBU0MsY0FBYyxTQUMvQkMsVUFBVUMsSUFBSSxVQUNuQkosRUFBY0csVUFBVUUsT0FBTyxVQUMvQkwsRUFBY0csVUFBVUMsSUFBSSxRQUVoQyxDQUVPLFNBQVNFLEVBQWVDLEdBQ3ZCLE1BQU1DLEVBQVUsSUFBSTVDLEVBd0NyQixXQUVILE1BQU1BLEVBQU9xQyxTQUFTUSxjQUFjLE9BQzlCQyxFQUFpQlQsU0FBU1EsY0FBYyxPQUN4QzFDLEVBQVE0QyxPQUFPQyxPQUFPWCxTQUFTUSxjQUFjLFNBQVUsQ0FBRUksS0FBTSxPQUFRQyxNQUFPLGNBQWVDLFlBQWEsa0JBQzFHQyxFQUFZTCxPQUFPQyxPQUFPWCxTQUFTUSxjQUFjLE9BQVEsQ0FBRVEsSUFBSyxxQkFBc0JDLElBQUssZUFDM0ZDLEVBQW1CbEIsU0FBU1EsY0FBYyxVQUMxQ1csRUFBcUJuQixTQUFTUSxjQUFjLE9BQzVDdkMsRUFBUStCLFNBQVNRLGNBQWMsT0FvQnJDLE9BbEJBVyxFQUFtQmpCLFVBQVVDLElBQUksYUFDakN4QyxFQUFLdUMsVUFBVUMsSUFBSSxRQUNuQk0sRUFBZVAsVUFBVUMsSUFBSSxTQUM3QmxDLEVBQU1pQyxVQUFVQyxJQUFJLFNBRXBCZSxFQUFpQkUsWUFBWUwsR0FDN0JJLEVBQW1CQyxZQUFZRixHQUMvQlQsRUFBZVcsWUFBWUQsR0FDM0JWLEVBQWVXLFlBQVl0RCxHQUMzQkgsRUFBS3lELFlBQVlYLEdBQ2pCOUMsRUFBS3lELFlBQVluRCxHQUVqQmlELEVBQWlCRyxpQkFBaUIsU0FBUyxLQUN2Q3JCLFNBQVNDLGNBQWMsZUFBZXFCLFVBQVksY0FDbER0QixTQUFTQyxjQUFjLGdCQUFnQnFCLFVBQVksVUFJaEQzRCxDQUNYLENBckVpQzRELElBQ25CNUMsRUFBVSxJQUFJRyxFQUFLMEMsS0FDekJqQixFQUFRN0IsUUFBUUMsR0FDaEIyQixFQUFLbUIsUUFBUWxCLEdBd0hyQixTQUFvQjVDLEdBQ2hCcUMsU0FBU0MsY0FBYyxhQUFhbUIsWUFBWXpELEVBQUtTLGVBQ3pELENBekhRc0QsQ0FBV25CLEdBa0huQixTQUFvQjVDLEVBQU1tQixHQUN0Qm5CLEVBQUtTLGVBQWU2QixjQUFjLFVBQVVtQixZQUFZdEMsRUFBS1YsZUFFakUsQ0FwSFF1RCxDQUFXcEIsRUFBUzVCLEdBQ3BCaUQsRUFBYXJCLEVBQVE1QixHQUdDNEIsRUFBUW5DLGVBQ2hCOEIsVUFBVUMsSUFBSSxTQUM1QixNQUFNcEMsRUFNZCxTQUFrQndDLEdBQ2QsSUFBSWpDLEVBQVcwQixTQUFTUSxjQUFjLFVBTXRDLE9BTEFsQyxFQUFTQyxZQUFjZ0MsRUFBUXJDLFdBQy9CSSxFQUFTK0MsaUJBQWlCLFNBQVMsS0FDL0J2QixFQUFTUyxFQUFRbkMsZUFBYyxJQUVuQzRCLFNBQVNDLGNBQWMsV0FBV21CLFlBQVk5QyxHQUN2Q0EsQ0FDWCxDQWQrQnVELENBQVN0QixHQUVoQyxPQURBQSxFQUFRL0Isa0JBQWtCVCxHQUNuQndDLEVBQVFuQyxjQUV2QixDQWNPLFNBQVNvRCxJQUVaLE1BQU03QyxFQUFVcUIsU0FBU1EsY0FBYyxPQUN2QzdCLEVBQVF1QixVQUFVQyxJQUFJLFFBRXRCLE1BQU0yQixFQUFXcEIsT0FBT0MsT0FBT1gsU0FBU1EsY0FBYyxTQUFVLENBQUVJLEtBQU0sT0FBUUUsWUFBYSxhQUc3RixPQUZBbkMsRUFBUXlDLFlBQVlVLEdBQ3BCQyxRQUFRQyxJQUFJckQsR0FDTEEsQ0FDWCxDQW9DTyxTQUFTaUQsRUFBYWpFLEVBQU1tQixHQUUvQixJQUFJbUQsRUFBWXRFLEVBQUtTLGVBQWU2QixjQUFjLG1CQUNsRGdDLEVBQVVaLGlCQUFpQixVQUFVLEtBQ2pDMUQsRUFBS1UsU0FBUzRELEVBQVVwQixNQUFLLElBR2pDLElBQUlxQixFQUFpQnBELEVBQUtWLGVBQWU2QixjQUFjLFNBQ3ZEaUMsRUFBZWIsaUJBQWlCLFVBQVUsS0FDdEN2QyxFQUFLVCxTQUFTNkQsRUFBZXJCLE1BQUssSUFHdENxQixFQUFlYixpQkFBaUIsV0FBVyxTQUFTYyxHQUNoRCxHQUFpQixVQUFkQSxFQUFNQyxLQUE0QyxLQUF6QkYsRUFBZXJCLE1BQWEsQ0FDcERrQixRQUFRQyxJQUFJLDZCQUNaLElBQUlyRCxFQUFVMEQsSUFDZDFFLEVBQUtlLFFBQVFDLEdBQ2JoQixFQUFLUyxlQUFlNkIsY0FBYyxVQUFVbUIsWUFBWXpDLEVBQVFQLGdCQUNoRU8sRUFBUVAsZUFBZTZCLGNBQWMsU0FBU3FDLFFBQzlDVixFQUFhakUsRUFBTWdCLEVBRXZCLENBRWlCLGNBQWR3RCxFQUFNQyxLQUFnRCxLQUF6QkYsRUFBZXJCLE9BQWdCbEQsRUFBS1EsV0FBV29FLE9BQVMsSUFDcEZSLFFBQVFDLElBQUksb0JBQ1psRCxFQUFLVixlQUFlZ0MsU0FDcEJ6QyxFQUFLa0IsV0FBV0MsR0FFaEJpRCxRQUFRQyxJQUFJckUsRUFBS1EsWUFHakJnRSxFQUFNSyxpQkFDTjdFLEVBQUtRLFdBQVdzRSxPQUFPLEdBQUcsR0FBR3JFLGVBQWU2QixjQUFjLFNBQVNxQyxRQUczRSxHQUVKLENBR0EsU0FBU0QsSUFDTCxPQUFPLElBQUl2RCxFQUFLMEMsSUFDcEIsQ0N0SUEsTUFBTWtCLEVBQWMsSUNKTCxNQUNYLFdBQUE5RSxHQUNJSSxLQUFLMkUsTUFBUSxFQUVqQixDQUVBLE9BQUFsQixDQUFRbEIsR0FDSnZDLEtBQUsyRSxNQUFNL0QsS0FBSzJCLEVBQ3BCLENBRUEsUUFBQXFDLEdBQ0ksT0FBTzVFLEtBQUsyRSxLQUNoQixHRlJHLElBQXVCckMsRUNFOUJELEVBQWVxQyxHREZlcEMsRUNHaEJvQyxFRERRMUMsU0FBU0MsY0FBYyxRQUMvQm9CLGlCQUFpQixTQUFTLEtBQ2hDdkIsRUFBU08sRUFBZUMsR0FBSyxHIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2xpc3QuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2l0ZW0uanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2RvbS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3VzZXIuanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGl0ZW0gZnJvbSAnLi9pdGVtLmpzJ1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBsaXN0e1xyXG4gICBjb25zdHJ1Y3RvcihyZWZlcmVuY2UsIHRpdGxlID0gXCJQcm9qZWN0XCIsIHRpdGxlUmVmZXJlbmNlKXtcclxuICAgIHRoaXMudGl0bGUgPSB0aXRsZVxyXG4gICAgdGhpcy5yZWZlcmVuY2UgPSByZWZlcmVuY2VcclxuICAgIHRoaXMudGl0bGVSZWZlcmVuY2UgPSB0aXRsZVJlZmVyZW5jZVxyXG4gICAgdGhpcy5pdGVtcyA9IFtdXHJcbiAgIH1cclxuICAgXHJcbiAgIGdldFRpdGxlKCl7XHJcbiAgICAgIHJldHVybiB0aGlzLnRpdGxlXHJcbiAgIH1cclxuXHJcbiAgIGdldEl0ZW1zKCl7XHJcbiAgICAgIHJldHVybiB0aGlzLml0ZW1zO1xyXG4gICB9XHJcblxyXG4gICBnZXRSZWZlcmVuY2UoKXtcclxuICAgICAgcmV0dXJuIHRoaXMucmVmZXJlbmNlO1xyXG4gICB9XHJcblxyXG4gICBzZXRUaXRsZShuZXdUaXRsZSl7XHJcbiAgICAgIHRoaXMudGl0bGUgPSBuZXdUaXRsZVxyXG4gICAgICB0aGlzLnRpdGxlUmVmZXJlbmNlLnRleHRDb250ZW50ID0gbmV3VGl0bGVcclxuICAgfVxyXG5cclxuICAgc2V0VGl0bGVSZWZlcmVuY2UobmV3UmVmZXJlbmNlKXtcclxuICAgICAgdGhpcy50aXRsZVJlZmVyZW5jZSA9IG5ld1JlZmVyZW5jZVxyXG4gICB9XHJcblxyXG5cclxuXHJcbiAgIGFkZEl0ZW0obmV3SXRlbSl7XHJcbiAgICAgIHRoaXMuaXRlbXMucHVzaChuZXdJdGVtKVxyXG4gICB9XHJcblxyXG4gICByZW1vdmVJdGVtKGl0ZW0pe1xyXG4gICAgICB0aGlzLml0ZW1zLnNwbGljZSh0aGlzLml0ZW1zLmluZGV4T2YoaXRlbSksIDEpO1xyXG4gICB9XHJcblxyXG59XHJcbiIsIlxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBpdGVte1xyXG4gICAgY29uc3RydWN0b3IocmVmZXJlbmNlLCB0aXRsZSwgIGRlc2NyaXB0aW9uLCBkdWVEYXRlLCBwcmlvcml0eSl7XHJcbiAgICAgdGhpcy5yZWZlcmVuY2UgPSByZWZlcmVuY2VcclxuICAgICB0aGlzLnRpdGxlID0gdGl0bGVcclxuICAgICB0aGlzLmRlc2NyaXB0aW9uID0gZGVzY3JpcHRpb25cclxuICAgICB0aGlzLmR1ZURhdGUgPSBkdWVEYXRlXHJcbiAgICAgdGhpcy5wcmlvcml0eSA9IHByaW9yaXR5XHJcblxyXG4gICAgfVxyXG5cclxuICAgIGdldFRpdGxlKCl7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMudGl0bGU7XHJcbiAgICB9XHJcbiAgICBnZXREZXNjcmlwdGlvbigpe1xyXG4gICAgICAgIHJldHVybiB0aGlzLmRlc2NyaXB0aW9uO1xyXG4gICAgfVxyXG4gICAgZ2V0RHVlRGF0ZSgpe1xyXG4gICAgICAgIHJldHVybiB0aGlzLmR1ZURhdGU7XHJcbiAgICB9ICBcclxuICAgIGdldFByaW9yaXR5KCl7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMucHJpb3JpdHk7XHJcbiAgICB9XHJcbiAgICBnZXRSZWZlcmVuY2UoKXtcclxuICAgICAgICByZXR1cm4gdGhpcy5yZWZlcmVuY2U7XHJcbiAgICB9ICAgXHJcblxyXG4gICAgc2V0VGl0bGUobmV3VGl0bGUpe1xyXG4gICAgICAgIHRoaXMudGl0bGUgPSBuZXdUaXRsZTtcclxuICAgIH1cclxuICAgIHNldERlc2NyaXB0aW9uKG5ld0Rlc2NyaXB0aW9uKXtcclxuICAgICAgICB0aGlzLmRlc2NyaXB0aW9uID0gbmV3RGVzY3JpcHRpb247XHJcbiAgICB9XHJcbiAgICBzZXREdWVEYXRlKG5ld0R1ZURhdGUpe1xyXG4gICAgICAgIHRoaXMuZHVlRGF0ZSA9IG5ld0R1ZURhdGU7XHJcbiAgICB9ICBcclxuICAgIHNldFByaW9yaXR5KG5ld1ByaW9yaXR5KXtcclxuICAgICAgICB0aGlzLnByaW9yaXR5ID0gbmV3UHJpb3JpdHk7XHJcbiAgICB9ICAgIFxyXG4gICAgc2V0UmVmZXJlbmNlKG5ld1JlZmVyZW5jZSl7XHJcbiAgICAgICAgdGhpcy5yZWZlcmVuY2UgPSBuZXdSZWZlcmVuY2VcclxuICAgIH1cclxuICAgIFxyXG4gICAgXHJcbiB9XHJcblxyXG5cclxuXHJcbiIsImltcG9ydCBsaXN0IGZyb20gJy4vbGlzdC5qcydcclxuaW1wb3J0IGl0ZW0gZnJvbSAnLi9pdGVtLmpzJ1xyXG5cclxuLy9zaG91bGQgYWRkIGZlYXR1cmUgdG8gYWxsb3cgdG8gaW5zZXJ0IGl0ZW1zIGJ5IGVudGVyaW5nIGFuZCBpdGVtIHNob3VsZCBnbyBhZnRlciBpdGVtIHRoYXQgZW50ZXIgcHJlc3NlZCBvblxyXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlTWVudURvbSh1c2VyKXtcclxuICAgIFxyXG4gICAgY29uc3QgYWRkQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNhZGRcIilcclxuICAgIGFkZEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgICAgICBzaG93TGlzdChpbml0aWFsaXplTGlzdCh1c2VyKSlcclxuICAgIH0pXHJcblxyXG59XHJcblxyXG5mdW5jdGlvbiBzaG93TGlzdChsaXN0UmVmZXJlbmNlKXtcclxuICAgIGNvbnN0IG1lbnUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm1lbnVcIilcclxuICAgIG1lbnUuY2xhc3NMaXN0LmFkZChcImhpZGRlblwiKVxyXG4gICAgbGlzdFJlZmVyZW5jZS5jbGFzc0xpc3QucmVtb3ZlKFwiaGlkZGVuXCIpXHJcbiAgICBsaXN0UmVmZXJlbmNlLmNsYXNzTGlzdC5hZGQoXCJzaG93blwiKVxyXG5cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGluaXRpYWxpemVMaXN0KHVzZXIpe1xyXG4gICAgICAgIGNvbnN0IG5ld0xpc3QgPSBuZXcgbGlzdChjcmVhdGVMaXN0RG9tKCkpXHJcbiAgICAgICAgY29uc3QgbmV3SXRlbSA9IG5ldyBpdGVtKGNyZWF0ZUl0ZW1Eb20oKSlcclxuICAgICAgICBuZXdMaXN0LmFkZEl0ZW0obmV3SXRlbSlcclxuICAgICAgICB1c2VyLmFkZExpc3QobmV3TGlzdClcclxuICAgICAgICBhcHBlbmRMaXN0KG5ld0xpc3QpXHJcbiAgICAgICAgYXBwZW5kSXRlbShuZXdMaXN0LCBuZXdJdGVtKVxyXG4gICAgICAgIGl0ZW1MaXN0ZW5lcihuZXdMaXN0LG5ld0l0ZW0pXHJcblxyXG4gICAgICAgIFxyXG4gICAgICAgIGNvbnN0IGxpc3RSZWZlcmVuY2UgPSBuZXdMaXN0LmdldFJlZmVyZW5jZSgpXHJcbiAgICAgICAgbGlzdFJlZmVyZW5jZS5jbGFzc0xpc3QuYWRkKCdzaG93bicpXHJcbiAgICAgICAgY29uc3QgdGl0bGVSZWZlcmVuY2UgPSBhZGRUaXRsZShuZXdMaXN0KVxyXG4gICAgICAgIG5ld0xpc3Quc2V0VGl0bGVSZWZlcmVuY2UodGl0bGVSZWZlcmVuY2UpXHJcbiAgICAgICAgcmV0dXJuIG5ld0xpc3QuZ2V0UmVmZXJlbmNlKClcclxuICAgICAgICBcclxufVxyXG5cclxuZnVuY3Rpb24gYWRkVGl0bGUobmV3TGlzdCl7XHJcbiAgICBsZXQgbmV3VGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKVxyXG4gICAgbmV3VGl0bGUudGV4dENvbnRlbnQgPSBuZXdMaXN0LmdldFRpdGxlKClcclxuICAgIG5ld1RpdGxlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgICAgIHNob3dMaXN0KG5ld0xpc3QuZ2V0UmVmZXJlbmNlKCkpXHJcbiAgICB9KVxyXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi50aXRsZXNcIikuYXBwZW5kQ2hpbGQobmV3VGl0bGUpXHJcbiAgICByZXR1cm4gbmV3VGl0bGVcclxufVxyXG5cclxuXHJcblxyXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlSXRlbURvbSgpe1xyXG4gICAgLy9yZXR1cm5zIGRpdi5pdGVtIGlucHV0IFxyXG4gICAgY29uc3QgbmV3SXRlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXHJcbiAgICBuZXdJdGVtLmNsYXNzTGlzdC5hZGQoJ2l0ZW0nKVxyXG5cclxuICAgIGNvbnN0IG5ld0lucHV0ID0gT2JqZWN0LmFzc2lnbihkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpLCB7IHR5cGU6ICd0ZXh0JywgcGxhY2Vob2xkZXI6IFwiTmV3IEl0ZW1cIn0pXHJcbiAgICBuZXdJdGVtLmFwcGVuZENoaWxkKG5ld0lucHV0KVxyXG4gICAgY29uc29sZS5sb2cobmV3SXRlbSlcclxuICAgIHJldHVybiBuZXdJdGVtXHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVMaXN0RG9tKCl7XHJcbiAgXHJcbiAgICBjb25zdCBsaXN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcclxuICAgIGNvbnN0IHRpdGxlQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcclxuICAgIGNvbnN0IHRpdGxlID0gT2JqZWN0LmFzc2lnbihkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpLCB7IHR5cGU6ICd0ZXh0JywgdmFsdWU6IFwiTmV3IFByb2plY3RcIiwgcGxhY2Vob2xkZXI6IFwiUHJvamVjdCBUaXRsZVwifSlcclxuICAgIGNvbnN0IGJhY2tBcnJvdyA9IE9iamVjdC5hc3NpZ24oZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyksIHsgc3JjOiAnaW1nL2JhY2stYXJyb3cuc3ZnJywgYWx0OiAnYmFjay1hcnJvdyd9KVxyXG4gICAgY29uc3QgYmFja0Fycm93V3JhcHBlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpXHJcbiAgICBjb25zdCBiYWNrQXJyb3dDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxyXG4gICAgY29uc3QgaXRlbXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxyXG5cclxuICAgIGJhY2tBcnJvd0NvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdjb250YWluZXInKVxyXG4gICAgbGlzdC5jbGFzc0xpc3QuYWRkKCdsaXN0JylcclxuICAgIHRpdGxlQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ3RpdGxlJylcclxuICAgIGl0ZW1zLmNsYXNzTGlzdC5hZGQoJ2l0ZW1zJylcclxuXHJcbiAgICBiYWNrQXJyb3dXcmFwcGVyLmFwcGVuZENoaWxkKGJhY2tBcnJvdylcclxuICAgIGJhY2tBcnJvd0NvbnRhaW5lci5hcHBlbmRDaGlsZChiYWNrQXJyb3dXcmFwcGVyKVxyXG4gICAgdGl0bGVDb250YWluZXIuYXBwZW5kQ2hpbGQoYmFja0Fycm93Q29udGFpbmVyKVxyXG4gICAgdGl0bGVDb250YWluZXIuYXBwZW5kQ2hpbGQodGl0bGUpICAgXHJcbiAgICBsaXN0LmFwcGVuZENoaWxkKHRpdGxlQ29udGFpbmVyKVxyXG4gICAgbGlzdC5hcHBlbmRDaGlsZChpdGVtcylcclxuXHJcbiAgICBiYWNrQXJyb3dXcmFwcGVyLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5saXN0LnNob3duJykuY2xhc3NOYW1lID0gJ2xpc3QgaGlkZGVuJ1xyXG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tZW51LmhpZGRlbicpLmNsYXNzTmFtZSA9ICdtZW51J1xyXG4gICAgICAgIFxyXG4gICAgfSlcclxuXHJcbiAgICByZXR1cm4gbGlzdFxyXG59ICAgXHJcblxyXG5cclxuXHJcblxyXG5leHBvcnQgZnVuY3Rpb24gaXRlbUxpc3RlbmVyKGxpc3QsIGl0ZW0pe1xyXG4gICAgLy91cGRhdGUgbGlzdCB0aXRsZVxyXG4gICAgbGV0IGxpc3RUaXRsZSA9IGxpc3QuZ2V0UmVmZXJlbmNlKCkucXVlcnlTZWxlY3RvcihcImRpdi50aXRsZSBpbnB1dFwiKVxyXG4gICAgbGlzdFRpdGxlLmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsICgpID0+IHtcclxuICAgICAgICBsaXN0LnNldFRpdGxlKGxpc3RUaXRsZS52YWx1ZSlcclxuICAgIH0pXHJcblxyXG4gICAgbGV0IGlucHV0UmVmZXJlbmNlID0gaXRlbS5nZXRSZWZlcmVuY2UoKS5xdWVyeVNlbGVjdG9yKFwiaW5wdXRcIilcclxuICAgIGlucHV0UmVmZXJlbmNlLmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsICgpID0+IHtcclxuICAgICAgICBpdGVtLnNldFRpdGxlKGlucHV0UmVmZXJlbmNlLnZhbHVlKVxyXG4gICAgfSlcclxuXHJcbiAgICBpbnB1dFJlZmVyZW5jZS5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgZnVuY3Rpb24oZXZlbnQpIHtcclxuICAgICAgICBpZihldmVudC5rZXkgPT09IFwiRW50ZXJcIiAmJiBpbnB1dFJlZmVyZW5jZS52YWx1ZSAhPT0gXCJcIil7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiY3JlYXRlIG5ldyBpdGVtIGhhcyBmaXJlZFwiKVxyXG4gICAgICAgICAgICBsZXQgbmV3SXRlbSA9IGNyZWF0ZUl0ZW0oKVxyXG4gICAgICAgICAgICBsaXN0LmFkZEl0ZW0obmV3SXRlbSlcclxuICAgICAgICAgICAgbGlzdC5nZXRSZWZlcmVuY2UoKS5xdWVyeVNlbGVjdG9yKFwiLml0ZW1zXCIpLmFwcGVuZENoaWxkKG5ld0l0ZW0uZ2V0UmVmZXJlbmNlKCkpXHJcbiAgICAgICAgICAgIG5ld0l0ZW0uZ2V0UmVmZXJlbmNlKCkucXVlcnlTZWxlY3RvcihcImlucHV0XCIpLmZvY3VzKClcclxuICAgICAgICAgICAgaXRlbUxpc3RlbmVyKGxpc3QsIG5ld0l0ZW0pXHJcblxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYoZXZlbnQua2V5ID09PSBcIkJhY2tzcGFjZVwiICYmIGlucHV0UmVmZXJlbmNlLnZhbHVlID09PSBcIlwiICYmIGxpc3QuZ2V0SXRlbXMoKS5sZW5ndGggPiAxKXtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coXCJEZWxldGUgdGhpcyBpdGVtXCIpXHJcbiAgICAgICAgICAgIGl0ZW0uZ2V0UmVmZXJlbmNlKCkucmVtb3ZlKClcclxuICAgICAgICAgICAgbGlzdC5yZW1vdmVJdGVtKGl0ZW0pXHJcbiAgICAgICAgICAgIC8vcmVtb3ZlIGZyb20gbGlzdFxyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhsaXN0LmdldEl0ZW1zKCkpXHJcblxyXG4gICAgICAgICAgICAvL0ZvY3VzIGxhc3QgaXRlbSBvZiBhcnJheSBha2EgdGhlIHByZXZpb3VzIGl0ZW1cclxuICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKVxyXG4gICAgICAgICAgICBsaXN0LmdldEl0ZW1zKCkuc2xpY2UoLTEpWzBdLmdldFJlZmVyZW5jZSgpLnF1ZXJ5U2VsZWN0b3IoXCJpbnB1dFwiKS5mb2N1cygpXHJcblxyXG4gICAgICAgIH1cclxuICAgIH0pXHJcblxyXG59XHJcbiBcclxuXHJcbmZ1bmN0aW9uIGNyZWF0ZUl0ZW0oKXtcclxuICAgIHJldHVybiBuZXcgaXRlbShjcmVhdGVJdGVtRG9tKCkpXHJcbn1cclxuXHJcbmZ1bmN0aW9uIGFwcGVuZEl0ZW0obGlzdCwgaXRlbSl7XHJcbiAgICBsaXN0LmdldFJlZmVyZW5jZSgpLnF1ZXJ5U2VsZWN0b3IoXCIuaXRlbXNcIikuYXBwZW5kQ2hpbGQoaXRlbS5nZXRSZWZlcmVuY2UoKSlcclxuXHJcbn1cclxuXHJcbmZ1bmN0aW9uIGFwcGVuZExpc3QobGlzdCl7XHJcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiZGl2Lmxpc3RzXCIpLmFwcGVuZENoaWxkKGxpc3QuZ2V0UmVmZXJlbmNlKCkpXHJcbn1cclxuXHJcblxyXG4iLCJpbXBvcnQgdXNlciBmcm9tICcuL3VzZXIuanMnXHJcbmltcG9ydCB7Y3JlYXRlTWVudURvbSwgaW5pdGlhbGl6ZUxpc3R9IGZyb20gJy4vZG9tLmpzJ1xyXG5cclxuXHJcbmNvbnN0IGRlZmF1bHRVc2VyID0gbmV3IHVzZXIoKVxyXG5cclxuaW5pdGlhbGl6ZUxpc3QoZGVmYXVsdFVzZXIpXHJcbmNyZWF0ZU1lbnVEb20oZGVmYXVsdFVzZXIpXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG4iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyB1c2Vye1xyXG4gICAgY29uc3RydWN0b3IoKXtcclxuICAgICAgICB0aGlzLmxpc3RzID0gW11cclxuXHJcbiAgICB9XHJcblxyXG4gICAgYWRkTGlzdChuZXdMaXN0KXtcclxuICAgICAgICB0aGlzLmxpc3RzLnB1c2gobmV3TGlzdClcclxuICAgIH1cclxuXHJcbiAgICBnZXRMaXN0cygpe1xyXG4gICAgICAgIHJldHVybiB0aGlzLmxpc3RzXHJcbiAgICB9XHJcblxyXG4gICAgXHJcbn0iXSwibmFtZXMiOlsibGlzdCIsImNvbnN0cnVjdG9yIiwicmVmZXJlbmNlIiwidGl0bGUiLCJ0aXRsZVJlZmVyZW5jZSIsInRoaXMiLCJpdGVtcyIsImdldFRpdGxlIiwiZ2V0SXRlbXMiLCJnZXRSZWZlcmVuY2UiLCJzZXRUaXRsZSIsIm5ld1RpdGxlIiwidGV4dENvbnRlbnQiLCJzZXRUaXRsZVJlZmVyZW5jZSIsIm5ld1JlZmVyZW5jZSIsImFkZEl0ZW0iLCJuZXdJdGVtIiwicHVzaCIsInJlbW92ZUl0ZW0iLCJpdGVtIiwic3BsaWNlIiwiaW5kZXhPZiIsImRlc2NyaXB0aW9uIiwiZHVlRGF0ZSIsInByaW9yaXR5IiwiZ2V0RGVzY3JpcHRpb24iLCJnZXREdWVEYXRlIiwiZ2V0UHJpb3JpdHkiLCJzZXREZXNjcmlwdGlvbiIsIm5ld0Rlc2NyaXB0aW9uIiwic2V0RHVlRGF0ZSIsIm5ld0R1ZURhdGUiLCJzZXRQcmlvcml0eSIsIm5ld1ByaW9yaXR5Iiwic2V0UmVmZXJlbmNlIiwic2hvd0xpc3QiLCJsaXN0UmVmZXJlbmNlIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwiY2xhc3NMaXN0IiwiYWRkIiwicmVtb3ZlIiwiaW5pdGlhbGl6ZUxpc3QiLCJ1c2VyIiwibmV3TGlzdCIsImNyZWF0ZUVsZW1lbnQiLCJ0aXRsZUNvbnRhaW5lciIsIk9iamVjdCIsImFzc2lnbiIsInR5cGUiLCJ2YWx1ZSIsInBsYWNlaG9sZGVyIiwiYmFja0Fycm93Iiwic3JjIiwiYWx0IiwiYmFja0Fycm93V3JhcHBlciIsImJhY2tBcnJvd0NvbnRhaW5lciIsImFwcGVuZENoaWxkIiwiYWRkRXZlbnRMaXN0ZW5lciIsImNsYXNzTmFtZSIsImNyZWF0ZUxpc3REb20iLCJjcmVhdGVJdGVtRG9tIiwiYWRkTGlzdCIsImFwcGVuZExpc3QiLCJhcHBlbmRJdGVtIiwiaXRlbUxpc3RlbmVyIiwiYWRkVGl0bGUiLCJuZXdJbnB1dCIsImNvbnNvbGUiLCJsb2ciLCJsaXN0VGl0bGUiLCJpbnB1dFJlZmVyZW5jZSIsImV2ZW50Iiwia2V5IiwiY3JlYXRlSXRlbSIsImZvY3VzIiwibGVuZ3RoIiwicHJldmVudERlZmF1bHQiLCJzbGljZSIsImRlZmF1bHRVc2VyIiwibGlzdHMiLCJnZXRMaXN0cyJdLCJzb3VyY2VSb290IjoiIn0=
