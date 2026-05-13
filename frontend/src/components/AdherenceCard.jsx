
export default function AdherenceCard({ title, value }) {
  return (
    <div className="card">
      <h2>{value}</h2>
      <p>{title}</p>
    </div>
  );
}
