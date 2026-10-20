import "./before-after.css";

type ComparisonImage = {
  src: string;
  alt: string;
  width: number;
  height: number;
};

interface BeforeAfterComparisonProps {
  title?: string;
  before: ComparisonImage;
  after: ComparisonImage;
  caption: string;
  compact?: boolean;
}

/** Photographic service records remain visible together, without a slider or a crop. */
export default function BeforeAfterComparison({ title, before, after, caption, compact = false }: BeforeAfterComparisonProps) {
  return (
    <figure className={`wd-before-after${compact ? " wd-before-after-compact" : ""}`}>
      {title && <h3 className="wd-before-after-title">{title}</h3>}
      <div className="wd-before-after-pair">
        {[{ label: "Antes", image: before }, { label: "Depois", image: after }].map(({ label, image }) => (
          <div className="wd-before-after-record" key={label}>
            <p className="wd-before-after-label">{label}</p>
            <div className="wd-before-after-image">
              <img src={image.src} alt={image.alt} width={image.width} height={image.height} decoding="async" loading={compact ? "eager" : "lazy"} />
            </div>
          </div>
        ))}
      </div>
      <figcaption>{caption}</figcaption>
    </figure>
  );
}
