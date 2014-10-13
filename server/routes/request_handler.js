var express=require('express');
var static_pages_controller = require('./../app/controllers/pages_controller');
var users_controller = require('./../app/controllers/pages_controller');
var router=express.Router();
router.route('/').get(static_pages_controller.home);

var api_v1_router=express.Router();
api_v1_router.route('/register').post(user_routes.createUser);
api_v1_router.route('/sign_in').post(user_routes.sign_in);

api_v1_router.route('/users').get(user_routes.allUsers);
api_v1_router.route('/users/:id').get(user_routes.showUser);
api_v1_router.route('/users/:id').put(user_routes.updateUser);
api_v1_router.route('/users/:id').delete(user_routes.deleteUser);
api_v1_router.route('/user/sign_out').delete(user_routes.sign_out);

api_v1_router.route('/blogs').get(blog_routes.allBlogs);
api_v1_router.route('/blogs/count').get(blog_routes.countBlogs);
api_v1_router.route('/blogs/search').get(blog_routes.searchBlogs);
api_v1_router.route('/blogs').post(blog_routes.createBlog);
api_v1_router.route('/blogs/:id').get(blog_routes.showBlog);
api_v1_router.route('/blogs/:id').put(blog_routes.updateBlog);
api_v1_router.route('/blogs/:id').delete(blog_routes.deleteBlog);

exports.router=router
exports.api_router=api_v1_router