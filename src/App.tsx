import './App.css'

function App() {

  return (
    <>
      <a href="http://">Текст ссылки</a><br />
      <a href="http://wikipedia.org" target="_blank">Ссылка в новом окне</a><br />
      <a href="http://wikipedia.org" target="_parent">Ссылка в родительском фрейме</a><br />
      <a href="http://wikipedia.org" target="_top">Ссылка в полном окне</a><br />
      <a href="https://example.com" target="_blank" rel="noopener noreferrer">Открыть с защитой</a><br />
      <a href="example.pdf" download="Инструкция.pdf">Скачать инструкцию</a><br />
    </>
  )
}

export default App
