# JavaScript Revise

```plaintext
JavaScript Data Types
    ├── Primitive Data Types       # Basic types, not objects
    │       ├── String             # Represents textual data
    │       ├── Number             # Represents numeric values (integers & floats)
    │       ├── BigInt             # For very large integers
    │       ├── Boolean            # Represents true or false values
    │       ├── Undefined          # Value of a variable that is not assigned
    │       ├── Null               # Explicitly empty or non-existent value
    │       └── Symbol             # Unique and immutable data type, often used for unique keys
    └── Non-Primitive Data Types   # More complex types that are objects
            └── Object             # A collection of key-value pairs (used for structured data)
                ├── Array          # Special type of object for ordered lists
                ├── Function       # A block of code that can be invoked (object type)
                │       └── class  # A template for creating objects, special type of function
                └── Date           # Represents date and time
--------------------------------------------------------------------------------------------------
JavaScript Control Statements
    ├── Conditional Statements   // Used for decision-making
    │       ├── if               // Executes code if condition is true
    │       ├── if-else          // Executes one block if true, another if false
    │       ├── if-else if-else  // Multiple conditions
    │       └── switch           // Multiple conditions based on value
    ├── Looping Statements       // Used to repeat code
    │       ├── for              // Loops for a specific number of times
    │       ├── while            // Loops while condition is true
    │       ├── do-while         // Loops at least once, checks condition after
    │       ├── for-in           // Loops through object properties
    │       └── for-of           // Loops through iterable objects like arrays
    └── Jumping Statements       // Used to alter the flow of loops
            ├── break           // Exits from the current loop
            ├── continue        // Skips to the next iteration of the loop
            └── return          // Exits from the current function
--------------------------------------------------------------------------------------------------
DOM Manipulation
    ├── Selecting Elements        // Accessing elements in the DOM
    │       ├── getElementById()  // Selects an element by its unique ID
    │       ├── getElementsByClassName() // Selects elements by their class name
    │       ├── getElementsByTagName()  // Selects elements by their tag name
    │       ├── querySelector()   // Selects the first element that matches a CSS selector
    │       └── querySelectorAll() // Selects all elements matching a CSS selector
    ├── Modifying Content         // Changing the content or properties of selected elements
    │       ├── innerHTML         // Modifies the HTML content inside an element
    │       ├── textContent       // Modifies the text content inside an element
    │       ├── value             // Modifies the value of form elements like input fields
    │       └── setAttribute()    // Sets an attribute (e.g., src, href) of an element
    ├── Styling Elements          // Changing the appearance of elements
    │       ├── style             // Access and modify inline styles of an element
    │       └── classList         // Adds, removes, or toggles CSS classes
    ├── Creating Elements         // Adding new elements to the DOM
    │       ├── createElement()   // Creates a new element node
    │       ├── createTextNode()  // Creates a new text node
    │       └── appendChild()     // Adds a new child element to a parent element
    ├── Event Handling            // Adding interactivity to elements
    │       ├── addEventListener()// Attaches an event listener to an element
    │       └── removeEventListener() // Removes an event listener
    ├── Traversing the DOM        // Navigating through elements in the DOM tree
    │       ├── parentNode        // Selects the parent element of a node
    │       ├── childNodes        // Selects all child elements of a node
    │       ├── firstChild        // Selects the first child element of a node
    │       └── nextSibling      // Selects the next sibling element of a node
    └── Removing Elements         // Deleting elements from the DOM
            └── remove()         // Removes an element from the DOM
--------------------------------------------------------------------------------------------------
Promises
    ├── Creating a Promise         // Creating a new promise
    │       ├── new Promise()      // Syntax to create a promise
    │       │       └── executor   // Executor function with resolve and reject
    │       ├── resolve()          // Fulfills the promise successfully
    │       └── reject()           // Rejects the promise with an error
    ├── Consuming a Promise        // Handling the result of a promise
    │       ├── then()             // Executes after the promise resolves
    │       │       ├── successCallback // Executes on successful promise resolution
    │       │       └── returnValue     // Returns the value passed to resolve()
    │       ├── catch()            // Handles errors in case of rejection
    │       │       └── errorCallback  // Executes on promise rejection
    │       └── finally()          // Executes regardless of whether the promise is resolved or rejected
    ├── Chaining Promises          // Linking multiple promises together
    │       └── then()             // Returning a new promise inside `then()` creates chaining
    ├── Promise.all()              // Resolves all promises or rejects if one fails
    │       └── arrayOfPromises    // Accepts an array of promises
    ├── Promise.race()             // Resolves with the first promise that resolves or rejects
    │       └── arrayOfPromises    // Accepts an array of promises
    ├── Promise.allSettled()       // Resolves once all promises have settled (either resolved or rejected)
    │       └── arrayOfPromises    // Accepts an array of promises
    └── Promise.any()              // Resolves with the first fulfilled promise or rejects if all promises fail
            └── arrayOfPromises    // Accepts an array of promises
--------------------------------------------------------------------------------------------------
String Methods
    ├── Accessing String Elements     // Accessing individual characters in a string
    │       ├── charAt()              // Returns the character at a specified index
    │       └── charCodeAt()          // Returns the Unicode of the character at a specified index
    ├── Modifying Strings             // Modifying the content of strings
    │       ├── concat()              // Joins two or more strings
    │       ├── slice()               // Extracts a section of a string
    │       ├── substring()           // Similar to slice(), but can't accept negative indices
    │       └── replace()             // Replaces a part of the string with another string
    ├── Searching in Strings          // Searching for specific text in a string
    │       ├── indexOf()             // Returns the first index of the specified value
    │       ├── lastIndexOf()         // Returns the last index of the specified value
    │       ├── search()              // Executes a search for a match using a regular expression
    │       ├── match()               // Returns an array of matches (or null if no matches)
    │       └── includes()            // Checks if a substring exists in the string
    ├── Extracting Part of String     // Extracting specific parts from a string
    │       ├── substring()           // Extracts part of a string between two indices
    │       ├── slice()               // Extracts part of a string between two indices
    │       └── substr()              // Returns a part of the string starting from a given index
    ├── Case Manipulation             // Changing the case of characters in a string
    │       ├── toLowerCase()         // Converts the string to lowercase
    │       ├── toUpperCase()         // Converts the string to uppercase
    │       └── toLocaleLowerCase()   // Converts the string to lowercase according to the locale
    │       └── toLocaleUpperCase()   // Converts the string to uppercase according to the locale
    ├── Trimming Strings              // Removing whitespace from the string
    │       ├── trim()                // Removes whitespace from both ends
    │       ├── trimStart()           // Removes whitespace from the beginning
    │       └── trimEnd()             // Removes whitespace from the end
    ├── Splitting and Joining Strings // Dividing and combining strings
    │       ├── split()               // Divides a string into an array based on a separator
    │       └── join()                // Combines elements of an array into a single string
    ├── String Templates              // Working with template literals
    │       └── template literals     // Allows embedded expressions inside backticks (`)
    ├── Padding Strings               // Adding padding to strings
    │       ├── padStart()            // Pads the string to the left with a specified length
    │       └── padEnd()              // Pads the string to the right with a specified length
    └── Escaping Characters           // Escaping special characters in a string
            └── escape()             // Escapes special characters in a string for use in HTML

--------------------------------------------------------------------------------------------------
Array Methods
    ├── Accessing Array Elements   // Methods to access or extract array elements
    │       ├── at()               // Returns the element at a specified index (ES2022+)
    │       ├── indexOf()          // Returns the index of the first occurrence of an element
    │       ├── lastIndexOf()      // Returns the index of the last occurrence of an element
    │       └── find()             // Returns the first element that satisfies a testing function
    ├── Modifying Arrays           // Methods to modify or update the array
    │       ├── push()             // Adds one or more elements to the end of an array
    │       ├── pop()              // Removes the last element from an array
    │       ├── unshift()          // Adds one or more elements to the beginning of an array
    │       ├── shift()            // Removes the first element from an array
    │       ├── splice()           // Adds/removes elements from any position in the array
    │       └── fill()             // Fills a specified section of the array with a value
    ├── Iterating Arrays           // Methods to iterate over array elements
    │       ├── forEach()          // Executes a function for each element in the array
    │       ├── map()              // Creates a new array with the results of calling a function on every element
    │       ├── filter()           // Creates a new array with all elements that pass the test
    │       ├── reduce()           // Applies a function against an accumulator and each element in the array (left to right)
    │       ├── reduceRight()      // Applies a function against an accumulator and each element in the array (right to left)
    │       └── some()             // Checks if at least one element in the array passes the test
    ├── Sorting and Reversing      // Methods to sort or reverse the order of array elements
    │       ├── sort()             // Sorts the elements of the array in place
    │       ├── reverse()          // Reverses the order of the elements in the array
    ├── Searching Arrays           // Methods for searching elements within arrays
    │       ├── includes()         // Checks if a certain element is present in the array
    │       ├── findIndex()        // Returns the index of the first element that satisfies the testing function
    │       ├── indexOf()          // Returns the index of the first occurrence of an element
    │       └── lastIndexOf()      // Returns the index of the last occurrence of an element
    ├── Joining and Splitting      // Methods for splitting and joining arrays
    │       ├── join()             // Joins all elements of an array into a single string
    │       ├── slice()            // Returns a shallow copy of a portion of an array into a new array
    │       └── concat()           // Merges two or more arrays into a new array
    ├── Transforming Arrays        // Methods to transform arrays
    │       ├── flat()             // Flattens an array of arrays into a single array (ES2019+)
    │       ├── flatMap()          // Maps each element using a mapping function, then flattens the result
    │       └── from()             // Creates a new array from an array-like or iterable object
    ├── Array Properties           // Methods for working with array properties
    │       ├── length             // Returns the number of elements in the array
    │       └── isArray()          // Checks if the value is an array
    └── Array Destructuring        // Used to extract elements from arrays into variables
            └── destructuring     // Extracts elements from an array into separate variables (e.g., [a, b] = arr)

--------------------------------------------------------------------------------------------------
Object Methods
    ├── Accessing Object Properties    // Methods to access or modify object properties
    │       ├── dot notation           // Accessing properties using dot notation (obj.property)
    │       ├── bracket notation       // Accessing properties using bracket notation (obj["property"])
    │       ├── hasOwnProperty()      // Checks if the object has a specified property
    │       └── propertyIsEnumerable()// Checks if a property is enumerable
    ├── Modifying Object Properties   // Methods to modify or add properties to an object
    │       ├── Object.defineProperty()// Defines a new property or modifies an existing one
    │       └── Object.assign()       // Copies values from one or more source objects to a target object
    ├── Object Manipulation           // Methods for object manipulation
    │       ├── Object.keys()         // Returns an array of an object's own property names
    │       ├── Object.values()       // Returns an array of an object's own property values
    │       ├── Object.entries()      // Returns an array of [key, value] pairs of an object's own properties
    │       ├── Object.freeze()       // Freezes an object, making it immutable
    │       ├── Object.seal()         // Seals an object, preventing new properties from being added or deleted
    │       └── Object.create()       // Creates a new object with a specified prototype object
    ├── Object Comparison             // Methods for comparing objects
    │       ├── Object.is()           // Compares two values for strict equality (handles edge cases like NaN)
    │       ├── Object.isExtensible() // Checks if a property can be added to an object
    │       └── Object.isFrozen()     // Checks if an object is frozen (immutable)
    ├── Object Conversion             // Methods for converting objects to other types
    │       ├── JSON.stringify()      // Converts an object to a JSON string
    │       └── JSON.parse()          // Converts a JSON string to an object
    ├── Prototypes and Inheritance    // Methods for dealing with object prototypes
    │       ├── Object.getPrototypeOf() // Returns the prototype (internal [[Prototype]]) of an object
    │       ├── Object.setPrototypeOf() // Sets the prototype of an object
    │       └── Object.prototype      // The prototype object for all JavaScript objects
    └── Miscellaneous Methods         // Miscellaneous methods for object manipulation
            ├── Object.preventExtensions() // Prevents new properties from being added to an object
            ├── Object.defineProperties() // Defines multiple properties on an object
            └── Object.getOwnPropertyNames() // Returns an array of an object's own property names

--------------------------------------------------------------------------------------------------
Functions
    ├── Function Declaration           // Standard way to declare a function
    │       └── function functionName() { // Declares a function with a name
    ├── Function Expression            // Functions that are created as expressions
    │       └── const functionName = function() {} // Anonymous function assigned to a variable
    ├── Arrow Functions               // Shorter syntax for writing functions
    │       ├── const functionName = () => {} // Arrow function with no parameters
    │       └── const functionName = (param) => {} // Arrow function with parameters
    ├── Parameters and Arguments       // Passing data into functions
    │       ├── Parameters             // Variables defined in the function declaration
    │       ├── Arguments              // Values passed to the function when called
    │       └── Default Parameters     // Default values for parameters (ES6+)
    ├── Return Statement               // Returning values from functions
    │       ├── return expression     // Returns a value to the caller
    │       └── return;                // Exits the function without returning any value
    ├── Function Scope                 // Understanding scope in functions
    │       ├── Local Scope            // Variables declared inside the function are local to it
    │       ├── Global Scope           // Variables declared outside the function are globally accessible
    │       └── Block Scope            // Variables declared with `let` or `const` are scoped to the block (ES6+)
    ├── Function Hoisting              // The function declaration is hoisted to the top of the scope
    │       └── Function expressions are not hoisted
    ├── Anonymous Functions            // Functions that do not have a name
    │       ├── Used as callback functions
    │       └── Can be assigned to variables or passed as arguments
    ├── IIFE (Immediately Invoked Function Expression)
    │       └── (function() { })();    // Function that is invoked immediately after being defined
    ├── Higher-Order Functions         // Functions that take other functions as arguments or return them
    │       └── map(), filter(), reduce() // Examples of higher-order functions
    ├── Closures                       // Functions that "remember" the variables from their enclosing scope
    │       └── Example: a function returning another function that references its outer scope
    ├── Recursion                      // Functions calling themselves
    │       ├── Base Case              // Condition to stop the recursion
    │       └── Recursive Case         // Function calls itself with modified arguments
    ├── Function Constructor           // Creating functions dynamically using the Function constructor
    │       └── const func = new Function('a', 'b', 'return a + b'); // Creates a function
    ├── Call, Apply, and Bind          // Methods to invoke functions with different contexts
    │       ├── call()                 // Calls a function with a specified `this` context and arguments
    │       ├── apply()                // Similar to call, but arguments are passed as an array
    │       └── bind()                 // Creates a new function with a specified `this` context and arguments
    └── Arrow Functions and `this`     // Arrow functions don't have their own `this` (lexical `this`)
            └── Example: `this` in arrow functions inherits the `this` value from its enclosing context

--------------------------------------------------------------------------------------------------
Regular Expressions (RegEx)
    ├── Creating Regular Expressions      // Methods for creating regex patterns
    │       ├── Literal Syntax           // /pattern/    // Directly using slashes to define a pattern
    │       └── Constructor Syntax       // new RegExp('pattern') // Using the RegExp constructor
    ├── Flags                              // Flags to modify regex behavior
    │       ├── g (global)               // Matches all occurrences in the string
    │       ├── i (ignoreCase)           // Makes the pattern case-insensitive
    │       ├── m (multi-line)           // Treats beginning and end characters (^ and $) as working across multiple lines
    │       ├── s (dotAll)               // Allows dot (.) to match newline characters (ES2018+)
    │       ├── y (sticky)               // Matches only from the last index of the last match
    │       └── u (unicode)              // Allows matching Unicode characters and code points (ES6+)
    ├── Special Characters                // Characters that have special meaning in regex
    │       ├── . (dot)                  // Matches any single character except line breaks
    │       ├── ^ (caret)                // Matches the beginning of a string
    │       ├── $ (dollar)               // Matches the end of a string
    │       ├── [] (brackets)            // Defines a character class (e.g., [a-z], [0-9])
    │       ├── | (pipe)                 // Acts as a logical OR
    │       ├── () (parentheses)         // Groups expressions or captures text
    │       ├── \ (backslash)            // Escapes special characters
    │       ├── \d (digit)               // Matches any digit (equivalent to [0-9])
    │       ├── \D (non-digit)           // Matches any non-digit (equivalent to [^0-9])
    │       ├── \w (word)                // Matches a word character (letters, digits, underscores)
    │       ├── \W (non-word)            // Matches any non-word character
    │       ├── \s (whitespace)          // Matches whitespace (spaces, tabs, newlines)
    │       └── \S (non-whitespace)      // Matches any non-whitespace character
    ├── Quantifiers                       // Controls how many times a pattern should occur
    │       ├── * (star)                 // Matches 0 or more occurrences of the preceding pattern
    │       ├── + (plus)                 // Matches 1 or more occurrences of the preceding pattern
    │       ├── ? (question mark)        // Matches 0 or 1 occurrence of the preceding pattern
    │       ├── {n}                      // Matches exactly 'n' occurrences of the preceding pattern
    │       ├── {n,}                     // Matches 'n' or more occurrences of the preceding pattern
    │       └── {n,m}                    // Matches between 'n' and 'm' occurrences of the preceding pattern
    ├── Assertions and Anchors            // Methods for asserting positions within a string
    │       ├── \b (word boundary)       // Matches a word boundary (e.g., space or punctuation)
    │       ├── \B (non-word boundary)   // Matches a non-word boundary
    │       ├── (?=...) (positive lookahead) // Asserts that what follows the current position matches a pattern
    │       ├── (?!...) (negative lookahead) // Asserts that what follows the current position doesn't match a pattern
    │       ├── (?<=...) (positive lookbehind) // Asserts that what precedes the current position matches a pattern
    │       └── (?<!...) (negative lookbehind) // Asserts that what precedes the current position doesn't match a pattern
    ├── Matching Methods                  // Methods for testing or manipulating strings with regex
    │       ├── test()                   // Tests if the pattern matches part of a string (returns true or false)
    │       ├── exec()                   // Executes a match and returns detailed information (array of matches)
    │       ├── match()                  // Matches the regex pattern to the string and returns matches (array or null)
    │       ├── replace()                // Replaces matched parts of the string with a specified string
    │       ├── search()                 // Finds the index of the first match (returns index or -1)
    │       ├── split()                  // Splits a string into an array based on a pattern
    │       └── matchAll()               // Returns all matches as an iterable object (ES2020+)
    ├── Common Use Cases                 // Common tasks solved with regular expressions
    │       ├── Validating email        // Matching valid email format
    │       ├── Phone number validation // Matching valid phone number formats
    │       ├── Extracting URLs         // Extracting URLs from text
    │       └── Replacing text patterns // Replacing certain words or patterns in a string
    └── Regular Expression Flags & Limitations
            └── Understanding limitations of regex in handling certain edge cases

--------------------------------------------------------------------------------------------------
Mongoose (MongoDB ODM)
    ├── Setup and Connection          // Setting up Mongoose and connecting to MongoDB
    │       ├── mongoose.connect()    // Connects to a MongoDB database
    │       ├── mongoose.connection   // Provides access to the current database connection
    │       └── mongoose.disconnect() // Disconnects from the MongoDB database
    ├── Schema Definition            // Defining a schema for MongoDB documents
    │       ├── const schema = new mongoose.Schema() // Defines the structure of a document
    │       ├── Schema Types          // Defining the types of fields in a schema (String, Number, Date, etc.)
    │       ├── Validation            // Adding custom validation for fields (e.g., required, min, max)
    │       ├── Default Values        // Setting default values for fields
    │       └── Indexes               // Defining indexes for efficient querying
    ├── Model Creation               // Creating a model from the schema
    │       ├── const Model = mongoose.model('ModelName', schema) // Defines the model based on the schema
    │       └── Model Methods         // Adding instance or static methods to a model
    ├── CRUD Operations              // Basic CRUD operations with Mongoose
    │       ├── Create                // Inserting a new document into a collection
    │       │       └── Model.create() // Adds new documents to the database
    │       ├── Read                  // Finding documents in the collection
    │       │       ├── Model.find()   // Finds multiple documents that match a query
    │       │       ├── Model.findOne() // Finds a single document matching a query
    │       │       ├── Model.findById() // Finds a document by its unique _id
    │       │       └── Model.countDocuments() // Counts the number of matching documents
    │       ├── Update                // Modifying existing documents
    │       │       ├── Model.updateOne()  // Updates a single document
    │       │       ├── Model.updateMany() // Updates multiple documents
    │       │       └── Model.findByIdAndUpdate() // Finds and updates a document by _id
    │       ├── Delete                // Removing documents from the database
    │       │       ├── Model.deleteOne()  // Deletes a single document
    │       │       ├── Model.deleteMany() // Deletes multiple documents
    │       │       └── Model.findByIdAndDelete() // Finds and deletes a document by _id
    ├── Querying and Filtering        // More advanced querying techniques
    │       ├── .where()              // Used to apply custom query conditions
    │       ├── .limit()              // Limits the number of results returned
    │       ├── .skip()               // Skips a specified number of documents
    │       ├── .sort()               // Sorts documents in a specified order
    │       ├── .select()             // Specifies which fields to include/exclude
    │       └── .populate()           // Populates fields with data from other collections (e.g., joins)
    ├── Middleware                   // Functions that run before/after certain Mongoose operations
    │       ├── Pre Middleware       // Runs before certain actions (e.g., before saving a document)
    │       ├── Post Middleware      // Runs after certain actions (e.g., after saving a document)
    │       └── Example: schema.pre('save', function(next) {...}) // Example of pre-save middleware
    ├── Validation                   // Built-in and custom validation rules
    │       ├── Built-in Validators   // Built-in validation like required, min, max, enum, etc.
    │       ├── Custom Validators     // Custom validation logic for fields
    │       └── Async Validation      // Validation that requires asynchronous operations (e.g., checking a database)
    ├── Population and References    // Populating data from other collections
    │       ├── .populate()           // Fills in references from other collections (e.g., user references in a post)
    │       ├── .populate('fieldName') // Populates the field with referenced documents
    │       └── Virtuals              // Creating virtual fields that are not stored in the database but are calculated
    ├── Virtuals                      // Defining virtual properties that are not stored in MongoDB
    │       ├── schema.virtual('fullName').get(function() {...}) // Example of a virtual property
    │       └── Can be used for calculated or derived fields
    ├── Aggregation                   // Performing advanced queries using aggregation
    │       ├── .aggregate()           // Runs an aggregation pipeline on the collection
    │       ├── Grouping               // Groups documents by a specified field (e.g., $group)
    │       ├── Filtering              // Filters documents in the aggregation pipeline (e.g., $match)
    │       └── Sorting                // Sorts documents in the aggregation pipeline (e.g., $sort)
    └── Schema Methods and Static Methods
            ├── Instance Methods      // Methods that can be called on individual documents
            └── Static Methods        // Methods that can be called on the model (e.g., Model.find())

--------------------------------------------------------------------------------------------------
HTTP Response Status Codes
    ├── 1xx (Informational)(CSP)              // Informational responses
    │       ├── 100 Continue            // Request received, continue with the process
    │       ├── 101 Switching Protocols // Server is switching protocols as requested
    │       └── 102 Processing          // Request is being processed, but no response yet
    ├── 2xx (Successful)(OCANR)                // Successful responses
    │       ├── 200 OK                  // The request was successful
    │       ├── 201 Created             // The request was successful, and a resource was created
    │       ├── 202 Accepted            // The request has been accepted for processing, but not yet completed
    │       ├── 204 No Content          // The request was successful, but there is no content to return
    │       └── 205 Reset Content       // The request was successful, and the client should reset the document view
    ├── 3xx (Redirection)(M2FSNT)                // Redirection responses
    │       ├── 300 Multiple Choices    // Multiple options for the resource, user must choose one
    │       ├── 301 Moved Permanently   // The resource has been permanently moved to a new URL
    │       ├── 302 Found               // The resource is temporarily moved to a different URL
    │       ├── 303 See Other           // The response can be found under a different URL using GET
    │       ├── 304 Not Modified        // The resource has not been modified since the last request
    │       └── 307 Temporary Redirect  // Temporary redirection to a different URL
    ├── 4xx (Client Error)(BUFNMRT)               // Client-side errors (user's fault)
    │       ├── 400 Bad Request         // The server cannot process the request due to client error
    │       ├── 401 Unauthorized        // The request requires authentication
    │       ├── 403 Forbidden           // The server understands the request, but refuses to authorize it
    │       ├── 404 Not Found           // The requested resource could not be found
    │       ├── 405 Method Not Allowed  // The HTTP method used is not allowed for the resource
    │       ├── 408 Request Timeout     // The server timed out waiting for the request
    │       └── 429 Too Many Requests   // The client has sent too many requests in a given amount of time
    ├── 5xx (Server Error)(INBSG)               // Server-side errors (server's fault)
    │       ├── 500 Internal Server Error // A generic error indicating server failure
    │       ├── 501 Not Implemented      // The server does not support the functionality required to fulfill the request
    │       ├── 502 Bad Gateway         // The server, while acting as a gateway, received an invalid response from the upstream server
    │       ├── 503 Service Unavailable // The server is temporarily unable to handle the request due to overload or maintenance
    │       └── 504 Gateway Timeout     // The server, acting as a gateway, did not receive a timely response from an upstream server

--------------------------------------------------------------------------------------------------
