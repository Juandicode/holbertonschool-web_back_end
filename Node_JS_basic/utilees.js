const fs = require('fs');

function countStudents(path) {
  return new Promise((resolve, reject) => {
    fs.readFile(path, 'utf8', (err, data) => {
      if (err) {
        reject(new Error('Cannot load the database'));
        return;
      }
      const lines = data.split('\n').filter((line) => line.trim() !== '');
      lines.shift(); // sacar header

      const fields = {};
      lines.forEach((line) => {
        const [firstname, lastname, age, field] = line.split(',');
        if (field) {
          if (!fields[field]) fields[field] = [];
          fields[field].push(firstname);
        }
      });

      let result = `Number of students: ${lines.length}\n`;
      for (const [field, students] of Object.entries(fields)) {
        result += `Number of students in ${field}: ${students.length}. List: ${students.join(', ')}\n`;
      }

      resolve(result.trim());
    });
  });
}

module.exports = countStudents;
