function LinkButton({ label, description, href, accent = 'gold' }) {
  return (
    <a className={`link-button link-button--${accent}`} href={href}>
      <span className="link-button__content">
        <strong>{label}</strong>
        <span>{description}</span>
      </span>
      <span className="link-button__arrow" aria-hidden="true">
        ↗
      </span>
    </a>
  );
}

export default LinkButton;