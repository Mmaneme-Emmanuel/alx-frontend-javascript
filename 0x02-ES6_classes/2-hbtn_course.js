export default class HolbertonCourse {
    constructor(name, length, students) {
        // Store values using the underscore-prefixed attributes
        this._name = name;
        this._length = length;
        this._students = students;
    }

    // Getter for name
    get name() {
        return this._name;
    }

    // Setter for name with type checking
    set name(name) {
        if (typeof name !== 'string') {
            throw new Error('Name must be a string.');
        }
        this._name = name;
    }

    // Getter for length
    get length() {
        return this._length;
    }

    // Setter for length with type checking
    set length(length) {
        if (typeof length !== 'number') {
            throw new Error('Length must be a number.');
        }
        this._length = length;
    }

    // Getter for students
    get students() {
        return this._students;
    }

    // Setter for students with type checking
    set students(students) {
        if (!Array.isArray(students)) {
            throw new Error('Students must be an array.');
        }
        this._students = students;
    }
}
