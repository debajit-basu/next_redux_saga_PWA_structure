const routes = require('next-routes');
module.exports =
    routes()
        .add({name: 'home', pattern: '/', page: 'ImageLibModule/index'})
        .add({name: 'detailView', pattern: '/imgDetail',page: 'ImageLibModule/imgView' })
        .add({name: 'userView', pattern: '/userDetail',page: 'ImageLibModule/userDetails' })
