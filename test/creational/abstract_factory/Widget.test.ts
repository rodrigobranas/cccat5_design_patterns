import DarkWidgetFactory from "../../../src/creational/abstract_factory/DarkWidgetFactory";
import LightWidgetFactory from "../../../src/creational/abstract_factory/LightWidgetFactory";
import View from "../../../src/creational/abstract_factory/View";

test("Deve criar uma interface gráfica com tema light", function () {
	const view = new View(new LightWidgetFactory());
	expect(view.label.color).toBe("black");
	expect(view.button.color).toBe("white");
	expect(view.button.backgroundColor).toBe("blue");
});

test("Deve criar uma interface gráfica com tema dark", function () {
	const view = new View(new DarkWidgetFactory());
	expect(view.label.color).toBe("white");
	expect(view.button.color).toBe("white");
	expect(view.button.backgroundColor).toBe("black");
});
