import Vue from 'vue'
import Router from 'vue-router'
import About from '@/components/About'
import Statement from '@/components/ArtistStatement'
import Galleries from '@/components/galleries/MainGallery'
import Categories from '@/components/galleries/Categories'

//Projects gallery
import Projects from '@/components/galleries/Projects'

//Drawings Gallery
import Drawings from '@/components/galleries/Drawings'

//Wall Paintings
import WallPaintings from '@/components/galleries/WallPaintings'

import Contact from '@/components/Contact'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'About',
      component: About
    },
    {
      path: '/artist-statement',
      name: 'Statement',
      component: Statement
    },
    {
      path: '/galleries',
      component: Galleries,
      children: [
        {
          path: '', 
          component: Categories
        },
        {
          path: 'projects',
          component: Projects
        },
        {
          path: 'drawings',
          component: Drawings
        },
        {
          path: 'wall-paintings',
          component: WallPaintings
        }
      ]
    },
    {
      path: '/contact',
      name: 'Contact',
      component: Contact
    }
  ],
  linkActiveClass: "currentnav", 
  linkExactActiveClass: "currentnav"
})
