export default function Card({ cardTitle, cardType, children }) {
  return (
    <div class={`card ${cardType}`}>
      <div class="card-header">
        <h3 class="card-title">{cardTitle}</h3>
      </div>
      <div class="card-body">{children}</div>
    </div>
  )
}