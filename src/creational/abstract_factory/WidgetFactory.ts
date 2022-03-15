import Button from "./Button";
import Label from "./Label";

export default interface WidgetFactory {
	createLabel(): Label;
	createButton(): Button;
}
