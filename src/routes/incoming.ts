import { Router, Request, Response } from "express";

const router = Router();



const books: IAE[] = [
  {
    id: 1, guilts: [ "1984" ], author: "George Orwell",
    pleasures: [
      "gloryhole", "cum"
    ],
    line: {
      countryCode: 57,
      areaCode: 301,
      zipCode: 111321,
      id: 1032488516,
      number: 3017990512,
      type: 'mobile'
    },
    equalBeat: {

    },
    burnOut: 0,
    stage: 0,
    name: '',
    matchedCopters: []
  },
  {
    id: 2, guilts: [ "Brave New World" ], author: "Aldous Huxley",
    pleasures: ["wawa", "caps"],
    line:{
      countryCode: 1,
      areaCode: 601,
      zipCode: 78956,
      id: 244007658,
      number: 6012749438,
      type: 'land'
    },
    equalBeat: null,
    burnOut: 0,
    stage: 0,
    name: '',
    matchedCopters: []
  }
];

// Get all books
router.get("/books", (req: Request, res: Response) => {
  res.json(books);
});

// Get a book by ID
router.get("/books/:id", (req: Request, res: Response) => {
  const bookId = parseInt(req.params.id);
  const book = books.find(b => b.id === bookId);
  if (book) {
    res.json(book);
  } else {
    res.status(404).json({ message: "Book not found" });
  }
});

// Create a new book
router.post("/books", (req: Request, res: Response) => {

  const newBook: IAE = req.body as IAE;
  books.push(newBook);
  res.status(201).json(newBook);
});

// Update a book by ID
router.put("/books/:id", (req: Request, res: Response) => {
  const bookId = parseInt(req.params.id);
  const bookIndex = books.findIndex(b => b.id === bookId);

  if (bookIndex !== -1) {
    const newBook = req.body
    books[bookIndex] = { id: bookId, ...newBook };
    res.json(books[bookIndex]);
  } else {
    res.status(404).json({ message: "Book not found" });
  }
});

// Delete a book by ID
router.delete("/books/:id", (req: Request, res: Response) => {
  const bookId = parseInt(req.params.id);
  const bookIndex = books.findIndex(b => b.id === bookId);

  if (bookIndex !== -1) {
    books.splice(bookIndex, 1);
    res.status(204).send();
  } else {
    res.status(404).json({ message: "Book not found" });
  }
});

export default router;