var express=require('express');
var static_pages_controller = require('./../app/controllers/pages_controller');
var users_controller = require('./../app/controllers/users_controller');
var blogs_controller = require('./../app/controllers/blogs_controller');

var router=express.Router();
router.route('/').get(static_pages_controller.home);
router.route('/register').post(users_controller.createUser);
router.route('/sign_in').post(users_controller.sign_in);

var authenticated_router=express.Router();
authenticated_router.route('/users').get(users_controller.allUsers);
authenticated_router.route('/users/:id').get(users_controller.showUser);
authenticated_router.route('/users/:id').put(users_controller.updateUser);
authenticated_router.route('/users/:id').delete(users_controller.deleteUser);
authenticated_router.route('/sign_out').delete(users_controller.sign_out);

authenticated_router.route('/blogs').get(blogs_controller.list);
authenticated_router.route('/blogs/all').get(blogs_controller.allBlogs);
authenticated_router.route('/blogs/count').get(blogs_controller.countBlogs);
authenticated_router.route('/blogs/search').get(blogs_controller.searchBlogs);
authenticated_router.route('/blogs').post(blogs_controller.createBlog);
authenticated_router.route('/blogs/:id').get(blogs_controller.showBlog);
authenticated_router.route('/blogs/:id').put(blogs_controller.updateBlog);
authenticated_router.route('/blogs/:id').delete(blogs_controller.deleteBlog);

exports.router=router
exports.authenticated_router=authenticated_router