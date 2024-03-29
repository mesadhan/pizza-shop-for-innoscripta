const app = require('./app');
const express = require('express');
const path = require('path');

// Serve static assets if in production
if (process.env.NODE_ENV === 'production') {
    // Set static folder
    app.use(express.static('client/build'));

    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
    });
}



const PORT = process.env.PORT || 8080;

app.listen(PORT, console.log(`Server is running at port ${PORT}`))
