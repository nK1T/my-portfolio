import styles from "./logo.module.scss";

function Logo() {
  return (
    <svg id={styles.logo} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
      <title>Logo</title>
      <g>
        <g id="AG" transform="translate(30, 35)">
          <text x="-3" y="26" fontSize="40" fill="#892CDC" >AG</text>
        </g>
        <path
          stroke="currentColor"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M 50, 5
            L 11, 27
            L 11, 72
            L 50, 95
            L 89, 73
            L 89, 28 z"
        />
      </g>
    </svg>
  );
}

export default Logo;
