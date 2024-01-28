import { Template } from 'meteor/templating';
import './your-loan-app.html';
import './mainLayout.html';
import './signup.html';
import './signup.js';
import './login.html';
import './login.js';
import './dashboard.html';
import './dashboard.js';
import './admin.html';
import './admin.js';
import './methods.js';

Router.configure({
  layoutTemplate: 'mainLayout',
});

Router.route('/', function () {
  this.render('home');
});

Router.route('/signup');
Router.route('/login');
Router.route('/dashboard');
Router.route('/admin');
