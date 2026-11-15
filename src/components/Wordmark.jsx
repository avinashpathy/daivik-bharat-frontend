export default function Wordmark({ light = false }) {
  return (
    <span className={`wordmark ${light ? "wordmark--light" : ""}`}>
      <span className="wordmark__latin">Daivik Bharat</span>
      <span lang="hi" className="wordmark__deva">दैविक भारत</span>
    </span>
  );
}
