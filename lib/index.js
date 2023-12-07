import { Application, Controller } from 'stimulus';
window.Stimulus = Application.start()

// Add an item to the list
// Create a list Stimulus Controller and register
import listController from "./controllers/list_controller.js";
Stimulus.register("list", listController);
