import { Helmet } from 'react-helmet-async';
import HomePage from './pages/HomePage';

export default function App() {
  return (
    <>
      <Helmet>
        <title>
          Dev Patel and Associates | Chartered Accountant & Tax Consultant Mumbai
        </title>
        <meta
          name="description"
          content="Dev Patel and Associates is a 5.0 rated tax consultant in Kalina, Santacruz East, Mumbai, offering income tax, GST, audit, accounting, ROC and advisory services."
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Dev Patel and Associates | Chartered Accountant in Mumbai"
        />
        <meta
          property="og:description"
          content="Reliable tax, accounting and compliance support for individuals, entrepreneurs and businesses."
        />
      </Helmet>
      <HomePage />
    </>
  );
}
