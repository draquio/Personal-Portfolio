import "./footer.scss";

export function Footer() {
  const actualDate = new Date();
  const year = actualDate.getFullYear();
  return (
    <div className="footer_section">
      <p>
        © Sergio Mercado (Draquio) | Fullstack Developer 2023 - {year}
      </p>
    </div>
  );
}
