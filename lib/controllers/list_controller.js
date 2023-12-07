import { Controller } from "stimulus";

export default class extends Controller {
  static targets = ["input", "itemsList"];

  connect() {
    console.log("Connected to the controller");
  }

  // We need to listen to the form
  addItem(event){
    event.preventDefault();
    // We read the input value
    console.log(this.inputTarget.value);
    this.itemsListTarget.insertAdjacentHTML(
      "beforeend",
      `
        <li class="list-group-item">
          ${this.inputTarget.value}
        </li>
      `
    );
    this.inputTarget.value = "";
  }
}
