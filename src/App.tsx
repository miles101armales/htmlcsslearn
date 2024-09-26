import './App.css'

function App() {

  return (
    <>
      <header>
          <h1>Блог о жизни и технологиях</h1>
          <p>Интересные статьи на каждый день</p>
      </header>

      <nav>
          <ul>
              <li><a href="#home">Главная</a></li>
              <li><a href="#about">О блоге</a></li>
              <li><a href="#contact">Контакты</a></li>
          </ul>
      </nav>

      <main>
          <article>
              <h2>Мое любимое хобби</h2>
              <section>
                  <h3>Введение</h3>
                  <p>Здесь рассказываю о своем хобби.</p>
              </section>
              <section>
                  <h3>Основная часть</h3>
                  <p>Подробности о том, почему мне это интересно.</p>
              </section>
              <figure>
                  <img src="hobby.jpg" alt="Мое хобби" />
                  <figcaption>Изображение моего хобби.</figcaption>
              </figure>
          </article>

          <article>
              <h2>Последние новости технологий</h2>
              <section>
                  <h3>Введение</h3>
                  <p>Краткий обзор новостей.</p>
              </section>
              <section>
                  <h3>Основная часть</h3>
                  <p>Детали последних событий в мире технологий.</p>
              </section>
              <figure>
                  <img src="tech-news.jpg" alt="Технологии" />
                  <figcaption>Изображение из мира технологий.</figcaption>
              </figure>
          </article>
      </main>

      <aside>
          <h3>Рекомендуемые блоги</h3>
          <ul>
              <li><a href="https://example.com">Полезный ресурс 1</a></li>
              <li><a href="https://example.com">Полезный ресурс 2</a></li>
          </ul>
      </aside>

      <footer>
          <p>© 2024 Блог о жизни и технологиях</p>
          <p>Контакты: email@example.com</p>
      </footer>     
    </>
  )
}

export default App
