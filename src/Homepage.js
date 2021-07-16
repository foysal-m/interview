import React, { useState, useEffect } from 'react'

export const Homepage = () => {
  const [titles, setTitles] = useState([])

  console.log(titles)

  useEffect(() => {
    fetch(
      'https://newsapi.org/v2/everything?apiKey=f369c719bbeb4606af1a397ae1c004ea&q=Apple&from=2021-07-16&sortBy=popularity&page=1&pageSize=10',
    )
      .then((res) => res.json())
      .then((data) => setTitles(data.articles))
      .catch((err) => {
        console.log(err)
      })
  }, [])

  return (
    <h1>
      {titles.map((title, index) => (
        <p key={index}>{title.title}</p>
      ))}
    </h1>
  )
}
