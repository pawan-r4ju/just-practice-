# Node js interview questions

## File **System Operations**
### **Read a File and Count Word Occurrences**

**Write a function to read a text file and count the frequency of each word.**

Answer:

```bash
const fs = require("fs");

function count_words_in_file(file) {
  fs.readFile(file, "utf-8", (err, data) => {
    if (err) {
      return err;
    }
    const words = data.split(" ");
    let word_counts = {};
    for (let word of words) {
      if (word in word_counts) {
        word_counts[word]++;
      } else {
        word_counts[word] = 1;
      }
    }
    console.log(word_counts);
  });
}
count_words_in_file("sample.txt");

```

### **Copy a File**

**Implement a script that copies a file from one location to another.**

Answer:

```bash
const fs = require("fs");

function copy_file(source, destination) {
  fs.copyFile(source, destination, (err) => {
    if (err) {
      console.log(err);
    }
    console.log("file coppied");
  });
}

copy_file('./sample.txt','./copy_sample.txt')
```

### ** REST API**

**most used are get post delete**

Answer:

```bash
const express = require('express');
const app = express();
app.use(express.json());

let todos = [];

app.get('/todos', (req, res) => {
    res.json(todos);
});

app.post('/todos', (req, res) => {
    const todo = req.body;
    todos.push(todo);
    res.status(201).json(todo);
});

app.delete('/todos/:id', (req, res) => {
    const id = parseInt(req.params.id, 10);
    todos = todos.filter(todo => todo.id !== id);
    res.status(204).send();
});

app.listen(3000, () => {
    console.log('Server running on http://localhost:3000');
});

```


### ****

****

Example:

```bash 
```

Answer:

```bash

```


### ****

****

Example:

```bash 
```

Answer:

```bash

```


### ****

****

Example:

```bash 
```

Answer:

```bash

```