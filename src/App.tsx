import Header from "./components/Header/Header"
import Sidebar from "./components/Sidebar/Sidebar"
import Post from "./components/Post/Post"

import styles from './App.module.css'

import './global.css'

const posts = [
  {
    id: 1,
    author: {
      avatarUrl: "https://github.com/timoteostifft.png",
      name: "Timóteo Stifft",
      role: "Developer @DeliverIT"
    },
    content: [
      { type: "paragraph", content: 'Fala galera 👋' },
      { type: "paragraph", content: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eligendi ipsa fugiat commodi quaerat itaque officiis corrupti pariatur numquam non tempore, rerum nisi dolor repudianda ipsum dolor sit amet consectetur' },
      { type: "link", content: "timoteo.stifft/doaBook" }
    ],
    publishedAt: new Date('2022-05-03 20:00:00')
  },
  {
    id: 2,
    author: {
      avatarUrl: "https://github.com/timoteostifft.png",
      name: "Mayk Brito",
      role: "Educator @Rocketseat"
    },
    content: [
      { type: "paragraph", content: 'Fala galera 👋' },
      { type: "paragraph", content: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eligendi ipsa fugiat commodi quaerat itaque officiis corrupti pariatur numquam non tempore, rerum nisi dolor repudianda ipsum dolor sit amet consectetur' },
      { type: "link", content: "timoteo.stifft/doaBook" }
    ],
    publishedAt: new Date('2022-05-03 22:32:00')
  }
]

export function App() {
  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {posts.map(
            post =>
              <Post
                key={post.id}
                author={post.author}
                content={post.content}
                publishedAt={post.publishedAt}
              />
          )}
        </main>
      </div>
    </div>
  )
}

