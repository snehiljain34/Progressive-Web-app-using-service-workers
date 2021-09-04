const express = require('express')
const app = express()
var path = require('path');


// //NPM packages for authentication
// require('dotenv').config();
// const bcrypt = require('bcrypt')
// const passport = require('passport')
// const flash = require('express-flash')
// const session = require('express-session')
// const methodOverride = require('method-override')


// //authentication 
// const initializePassport = require('./passport-config')
// initializePassport(
//     passport,
//     email => users.find(user => user.email === email),
//     id => users.find(user => user.id === id)
// )
// const users = [];

// app.use(flash())
// app.use(session({
//     secret: process.env.SESSION_SECRET,
//     resave: false,
//     saveUninitialized: false
// }))
// app.use(passport.initialize())
// app.use(passport.session())
// app.use(methodOverride('_method'))

// app.get('/login', checkNotAuthenticated, (req, res) => {
//     res.render('BlogLogin.ejs');
// })

// app.post('/login', checkNotAuthenticated, passport.authenticate('local', {
//     successRedirect: '/index.html',
//     failureRedirect: '/login',
//     failureFlash: true
// }))

// app.get('/register', checkNotAuthenticated, (req, res) => {
//     res.render('BlogSignUp.ejs')
// })

// app.post('/register', checkNotAuthenticated, async(req, res) => {
//     try {

//         const hashedPassword = await bcrypt.hash(req.body.password, 10)
//         users.push({
//             id: Date.now().toString(),
//             username: req.body.username,
//             bio: req.body.bio,
//             email: req.body.email,
//             password: hashedPassword
//         });
//         console.log(users);
//         res.redirect('/login')
//     } catch (err) {
//         console.log(err);
//         res.redirect('/register')
//     }
// })

// app.delete('/logout', (req, res) => {
//     req.logOut()
//     res.redirect('/')
// })


// function checkAuthenticated(req, res, next) {
//     if (req.isAuthenticated()) {
//         return next()
//     }

//     res.redirect('/login')
// }

// function checkNotAuthenticated(req, res, next) {
//     if (req.isAuthenticated()) {
//         return res.redirect('/')
//     }
//     next()
// }


app.use(express.static(path.join(__dirname, 'public')));

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/index.html")
})


const PORT = process.env.PORT || 7000
app.listen(PORT, () => {
    console.log('Server is running on port', PORT)
})