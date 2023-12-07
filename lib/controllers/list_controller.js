import { Controller } from "stimulus";

export default class extends Controller {

  connect() {
    console.log("Connected to the controller");
  }

  // We need to listen to the form
  addItem(event){
    event.preventDefault();
    console.log("Add item triggered");
    //
  }
}
