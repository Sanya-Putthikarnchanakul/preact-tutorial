interface ResourceProps {
  href: string;
  title: string;
  description: string;
}

export const Resource = ({ href, title, description }: ResourceProps) => {
  return (
    <a href={href} target="_blank" class="resource">
      <h2>{title}</h2>
      <p>{description}</p>
    </a>
  );
};
