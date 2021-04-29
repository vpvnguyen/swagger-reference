import { Router } from "express";
import books from "./books.model";

const router: Router = Router();

/**
 *  @swagger
 *    components:
 *    schemas:
 *      Book:
 *        type: object
 *        required:
 *          - title
 *          - author
 *          - finished
 *        properties:
 *          id:
 *            type: integer
 *            description: The auto-generated id of the book.
 *          title:
 *             type: string
 *             description: The title of your book.
 *          author:
 *            type: string
 *            description: Who wrote the book?
 *          finished:
 *            type: boolean
 *            description: Have you finished reading it?
 *          createdAt:
 *            type: string
 *            format: date
 *            description: The date of the record creation.
 *          example:
 *            title: The Pragmatic Programmer
 *            author: Andy Hunt / Dave Thomas
 *            finished: true
 */

/**
 * @swagger
 * /books:
 *   get:
 *     summary: Retrieve a list of books.
 *     description: Retrieve a list of books from ./models/books. Can be used to populate a list of fake books when prototyping or testing an API.
 *     responses:
 *       200:
 *         description: A list of books.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 data:
 *                   type: array
 *                   items:
 *                      $ref: '#/components/schemas/Book'
 */
router
  .route("/")
  .get((req, res) => {
    res.status(200).json(books);
  })
  .post((req, res) => {
    const { title, author, finished } = req.body;

    let book = {
      id: books.length + 1,
      title: title,
      author: author,
      finished: finished !== undefined ? finished : false,
      createdAt: new Date(),
    };

    books.push(book);

    res.status(201).json(book);
  });

router
  .route("/:id")
  .get((req, res) => {
    let book = books.find(function (item) {
      return item.id === Number(req.params.id);
    });

    book ? res.status(200).json(book) : res.sendStatus(404);
  })
  .put((req, res) => {
    let book = books.find(function (item) {
      return item.id == Number(req.params.id);
    });

    if (book) {
      const { title, author, finished } = req.body;

      let updated = {
        id: book.id,
        title: title !== undefined ? title : book.title,
        author: author !== undefined ? author : book.author,
        finished: finished !== undefined ? finished : book.finished,
        createdAt: book.createdAt,
      };

      books.splice(books.indexOf(book), 1, updated);

      res.sendStatus(204);
    } else {
      res.sendStatus(404);
    }
  })
  .delete((req, res) => {
    let book = books.find(function (item) {
      return item.id == Number(req.params.id);
    });

    if (book) {
      books.splice(books.indexOf(book), 1);
    } else {
      return res.sendStatus(404);
    }

    res.sendStatus(204);
  });

export default router;
