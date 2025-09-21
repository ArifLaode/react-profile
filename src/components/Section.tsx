import React from "react";
import { Helmet } from "react-helmet-async"; // ganti react-helmet kalau pakai async

type SectionContentProps = {
  children: React.ReactNode;
  col?: number;
  row?: number;
  className?: string;
};

export const SectionContent: React.FC<SectionContentProps> = ({
  children,
  col = 1,
  row,
  className = "",
}) => {
  return (
    <div
      className={`section-content ${className}`}
      style={{
        gridColumn: `span ${col}`,
        gridRow: row ? `${row}` : "auto",
      }}
    >
      {children}
    </div>
  );
};

type SectionProps = {
  title?: string;
  metaTitle?: string;        // 👈 tambahkan untuk SEO title
  metaDescription?: string;  // 👈 tambahkan untuk SEO description
  columns?: number;
  id?: string;
  children: React.ReactNode;
  className?: string;
  titleClassName?: string;
  containerClassName?: string;
};

const Section: React.FC<SectionProps> = ({
  title,
  metaTitle,
  metaDescription,
  columns = 12,
  id,
  children,
  className = "",
  titleClassName = "",
  containerClassName = "",
}) => {
  return (
    <div className="px-6">
      {metaTitle || metaDescription ? (
        <Helmet>
          {metaTitle && <title>{metaTitle}</title>}
          {metaDescription && (
            <meta name="description" content={metaDescription} />
          )}
        </Helmet>
      ) : null}

      <section
        className={`section ${className}`}
        id={id}
      >
        {title ? (
          <h2 className={`section-title mb-4 ${titleClassName}`}>
            {title}
          </h2>
        ) : null}
        <div
          className={`section-container grid gap-4 ${containerClassName}`}
          style={{
            gridTemplateColumns: `repeat(${columns}, minmax(0, 1fr))`,
          }}
        >
          {children}
        </div>
      </section>
    </div>
  );
};

export default Section;
