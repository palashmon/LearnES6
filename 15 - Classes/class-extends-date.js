/**
    Topic   :   Subclassing built-in classes
    Purpose :   Extend Date built-in
    Link    :   https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Classes
*/

class MyDate extends Date {

    // If there is a constructor present in sub-class, 
    // it needs to first call super() before using "this".
    // Otherwise, we get an "ReferenceError" like:
    // Must call super constructor in derived class before accessing 'this' or returning from derived constructor
    constructor() {
        super();
    }

    getNewFormatDate() {
        const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
        return `${months[this.getMonth()]}-${this.getDate()}-${this.getFullYear()}`;
    }
}

var myDate = new MyDate();
console.log(myDate.getTime());
console.log(myDate.getNewFormatDate());
