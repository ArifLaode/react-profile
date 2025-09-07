import React from "react";

type SectionContentProps = {
  children: React.ReactNode;
  col?: number; // span kolom
  row?: number; // baris opsional
  className?: string; // untuk Tailwind
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
  columns?: number;
  id?: string;
  children: React.ReactNode;
  className?: string;          
  titleClassName?: string;
  containerClassName?: string; 
};

const Section: React.FC<SectionProps> = ({
  title,
  columns = 12,
  id,
  children,
  className = "",
  titleClassName = "",
  containerClassName = "",
}) => {
  return (
    <section
      // taruh className paling depan biar bisa override default
      className={`section ${className} bg-white p-8 box-border`}
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
  );
};

export default Section;