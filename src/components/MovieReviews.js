import React from 'react'

export default function MovieReviews(props) {

  const showReviews = (reviews) => {
    return reviews.map(({
      headline,
      byline,
      link,
      summary_short
    }) => {
      return (
        <div key={headline} className="review">
        <header>
          <a className="review-link" href={link.url}>
            {headline}
          </a>
          <br/>
          <span className="author">{byline}</span>
        </header>
        <blockquote>{summary_short}</blockquote>
      </div>
      )
    })
  }

  return (
    <div className="review-list">
      {showReviews(props.reviews)}
    </div>
  )
}