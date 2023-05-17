import ALert from "./alert.js";
export default class AddTodo {
  constructor() {
    this.title = document.getElementById("title");
    this.description = document.getElementById("description");
    this.date = document.getElementById("date");
    this.btn = document.getElementById("add");

    this.alert = new ALert("alert");
  }

  onClick(callback) {
    this.btn.onclick = () => {
      if (title.value === "" || description.value === "" || date.value === "") {
        this.alert.show("Title, description and date are required");
      } else {
        this.alert.hide();
        callback(this.title.value, this.description.value, this.date.value);
      }
    };
  }
}
