function BenefitCard({ icon, title, description }) {
  return (
    <article className="benefit-card">
      <div className="benefit-card__icon" aria-hidden="true">
        {icon}
      </div>
      <h3>{title}</h3>
      <p>{description}</p>
    </article>
  );
}

export default BenefitCard;