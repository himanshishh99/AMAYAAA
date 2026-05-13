
import AdherenceCard from '../components/AdherenceCard';

export default function Dashboard() {
  return (
    <div className="dashboard">
      <h1>AMAYA HEALTH DASHBOARD</h1>

      <div className="stats-grid">
        <AdherenceCard title="Patients Monitored" value="128" />
        <AdherenceCard title="Adherence Rate" value="94%" />
        <AdherenceCard title="Pending Alerts" value="6" />
      </div>
    </div>
  );
}
