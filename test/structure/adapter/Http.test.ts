import axios from "axios";

test.skip("Deve testar a API", async function () {
	const response = await axios({
		url: "http://localhost:3002/books",
		method: "get"
	});
	const books = response.data;
	expect(books).toHaveLength(3);
	const [book1, book2, book3] = books;
	expect(book1.title).toBe("Clean Code");
	expect(book2.title).toBe("Refactoring");
	expect(book3.title).toBe("Implementing Domain-Driven Design");
});
