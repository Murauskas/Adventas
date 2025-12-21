class Book {
    constructor(id, title, author, totalCopies) {
        this.id = id;
        this.title = title;
        this.author = author;
        this.totalCopies = totalCopies;
        this.availableCopies = totalCopies;
    }
    isAvailable() {
        return this.availableCopies > 0;
    }
}

class Reader {
    constructor(id, name, borrowLimit) {
        this.id = id;
        this.name = name;
        this.borrowLimit = borrowLimit;
        this.borrowedBookIds = new Set();
    }
    canBorrow() {
        return this.borrowedBookIds.size < this.borrowLimit;
    }
}

class Loan {
    constructor(id, bookId, readerId) {
        this.id = id;
        this.bookId = bookId;
        this.readerId = readerId;
        this.status = "ACTIVE";
    }
}

class Library {
    constructor(printFn) {
        this.books = new Map();
        this.readers = new Map();
        this.loans = new Map();
        this.nextBookId = 1;
        this.nextReaderId = 1;
        this.nextLoanId = 1;
        this.print = printFn;
    }

    addBook(title, author, copies) {
        const book = new Book(this.nextBookId++, title, author, copies);
        this.books.set(book.id, book);
        this.print(`BOOK ADDED: ${book.id} ${book.title}`);
    }

    addReader(name, limit) {
        const reader = new Reader(this.nextReaderId++, name, limit);
        this.readers.set(reader.id, reader);
        this.print(`READER ADDED: ${reader.id} ${reader.name}`);
    }

    borrowBook(readerId, bookId) {
        const reader = this.readers.get(readerId);
        const book = this.books.get(bookId);

        if (!reader || !book) return;

        if (!book.isAvailable()) {
            this.print(`BORROW FAILED: no copies`);
            return;
        }
        if (!reader.canBorrow()) {
            this.print(`BORROW FAILED: limit reached`);
            return;
        }

        book.availableCopies--;
        reader.borrowedBookIds.add(bookId);

        const loan = new Loan(this.nextLoanId++, bookId, readerId);
        this.loans.set(loan.id, loan);

        this.print(`BORROW OK: loan ${loan.id}`);
    }

    returnBook(loanId) {
        const loan = this.loans.get(loanId);
        if (!loan || loan.status !== "ACTIVE") return;

        const book = this.books.get(loan.bookId);
        const reader = this.readers.get(loan.readerId);

        book.availableCopies++;
        reader.borrowedBookIds.delete(book.id);
        loan.status = "RETURNED";

        this.print(`RETURN OK: loan ${loan.id}`);
    }

    printReport() {
        this.print("\nCHRISTMAS LIBRARY REPORT");
        for (const book of this.books.values()) {
            this.print(`${book.id}. ${book.title}: ${book.availableCopies}/${book.totalCopies}`);
        }

        this.print("\nACTIVE LOANS");
        for (const loan of this.loans.values()) {
            if (loan.status === "ACTIVE") {
                const r = this.readers.get(loan.readerId);
                const b = this.books.get(loan.bookId);
                this.print(`${r.name} → ${b.title}`);
            }
        }
    }
}

const output = document.getElementById("output");
const print = (t) => output.textContent += t + "\n";
const library = new Library(print);

function addBook() {
    library.addBook(
        bookTitle.value,
        bookAuthor.value,
        Number(bookCopies.value)
    );
}

function addReader() {
    library.addReader(
        readerName.value,
        Number(readerLimit.value)
    );
}

function borrowBook() {
    library.borrowBook(
        Number(borrowReaderId.value),
        Number(borrowBookId.value)
    );
}

function returnBook() {
    library.returnBook(Number(returnLoanId.value));
}

function printReport() {
    library.printReport();
}
